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

async function sendTelegram(botToken: string, chatId: string, text: string): Promise<{ ok: boolean; status?: number; body?: string }> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (res.ok) return { ok: true };
    const body = await res.text().catch(() => "");
    console.error(`[LEAD] Telegram non-OK chat=${chatId} status=${res.status} body=${body.slice(0, 300)}`);
    return { ok: false, status: res.status, body };
  } catch (e) {
    console.error(`[LEAD] Telegram fetch threw for chat=${chatId}:`, e);
    return { ok: false };
  }
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
    const fallbackChat = process.env.TELEGRAM_FALLBACK_CHAT_ID;

    if (botToken && primaryChat) {
      // 2) send to primary (group)
      const primaryResult = await sendTelegram(botToken, primaryChat, formatMessage(lead));

      // 3) if primary failed, fall back to owner's personal chat with a warning prefix
      if (!primaryResult.ok && fallbackChat) {
        const warn = `⚠️ Основной канал не отвечает (status=${primaryResult.status ?? "network"}). Заявка ниже:`;
        const fallbackResult = await sendTelegram(botToken, fallbackChat, formatMessage(lead, warn));
        await persistLead(lead, {
          telegramPrimary: { ok: false, status: primaryResult.status },
          telegramFallback: { ok: fallbackResult.ok, status: fallbackResult.status },
        });
      } else if (!primaryResult.ok) {
        // primary failed, no fallback configured — file is the only record
        await persistLead(lead, {
          telegramPrimary: { ok: false, status: primaryResult.status },
          telegramFallback: { ok: false, reason: "not-configured" },
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
