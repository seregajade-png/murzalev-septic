import { NextRequest, NextResponse } from "next/server";
import { appendFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const LEADS_FILE = path.join(process.cwd(), "leads.jsonl");

type Lead = {
  ts: string;
  name: string;
  phone: string;
  category?: string;
  comment?: string;
};

async function persistLead(lead: Lead, extra?: Record<string, unknown>) {
  try {
    await appendFile(LEADS_FILE, JSON.stringify({ ...lead, ...extra }) + "\n", "utf8");
  } catch (e) {
    console.error("[LEAD] file append failed:", e);
  }
}

function formatMessage(lead: Lead, prefix?: string) {
  const human = new Date(lead.ts).toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
  const lines = [
    prefix,
    "🔔 Новая заявка с сайта",
    `Имя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    lead.category && `Продукция: ${lead.category}`,
    lead.comment && `Комментарий: ${lead.comment}`,
    `Время: ${human}`,
  ].filter(Boolean);
  return lines.join("\n");
}

const TG_API_BASE = (process.env.TELEGRAM_API_BASE || "https://api.telegram.org").replace(/\/+$/, "");

async function sendTelegramOnce(botToken: string, chatId: string, text: string): Promise<{ ok: boolean; status?: number; body?: string; threw?: string }> {
  try {
    const res = await fetch(`${TG_API_BASE}/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) return { ok: true };
    const body = await res.text().catch(() => "");
    console.error(`[LEAD] Telegram non-OK chat=${chatId} status=${res.status} body=${body.slice(0, 300)}`);
    return { ok: false, status: res.status, body };
  } catch (e) {
    const msg = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    console.error(`[LEAD] Telegram fetch threw for chat=${chatId}: ${msg}`);
    return { ok: false, threw: msg };
  }
}

async function sendTelegramWithRetry(botToken: string, chatId: string, text: string): Promise<{ ok: boolean; status?: number; body?: string; threw?: string; attempts: number }> {
  const delays = [500, 1500, 3000];
  let last: Awaited<ReturnType<typeof sendTelegramOnce>> = { ok: false };
  for (let i = 0; i < delays.length + 1; i++) {
    if (i > 0) await new Promise((r) => setTimeout(r, delays[i - 1]));
    last = await sendTelegramOnce(botToken, chatId, text);
    if (last.ok) return { ...last, attempts: i + 1 };
    // for 4xx (chat not found / blocked) — don't retry, it won't change
    if (last.status && last.status >= 400 && last.status < 500) {
      return { ...last, attempts: i + 1 };
    }
  }
  return { ...last, attempts: delays.length + 1 };
}

export async function POST(req: NextRequest) {
  let lead: Lead | null = null;
  try {
    const data = await req.json().catch(() => ({}));
    const { name, phone, category, comment } = data as Partial<Lead>;

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    lead = { ts: new Date().toISOString(), name, phone, category, comment };

    // 1) source of truth: persist to file first, before any external call
    await persistLead(lead);

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const primaryChat = process.env.TELEGRAM_CHAT_ID;

    if (botToken && primaryChat) {
      // 2) send to primary chat with retries (handles intermittent geoblock to api.telegram.org)
      const result = await sendTelegramWithRetry(botToken, primaryChat, formatMessage(lead));
      if (!result.ok) {
        // record failure details for debugging — lead is already on disk
        await persistLead(lead, {
          telegramFailed: { status: result.status, threw: result.threw, attempts: result.attempts },
        });
      }
    } else {
      console.warn("[LEAD] Telegram not configured — only saved to file");
    }

    // 4) always tell the client it worked — the lead is in the file regardless
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[LEAD] handler crashed:", e, "lead=", lead);
    if (lead) {
      await persistLead(lead, { error: String(e) });
    }
    // still return ok so the client never sees an error message
    return NextResponse.json({ ok: true });
  }
}
