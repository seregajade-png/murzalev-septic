import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, category, comment } = data;

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = [
      "🔔 Новая заявка с сайта",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      category && `Продукция: ${category}`,
      comment && `Комментарий: ${comment}`,
      `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
    ].filter(Boolean).join("\n");

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });
    } else {
      console.log("[LEAD]", message);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
