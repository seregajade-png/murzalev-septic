"use client";

import { useState } from "react";
import { categories } from "@/lib/products";
import { company } from "@/lib/content";

type Variant = "full" | "compact";

export function LeadForm({ variant = "full", category }: { variant?: Variant; category?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: category || "",
    comment: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", phone: "", category: category || "", comment: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-10 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 5 5 9-11" />
          </svg>
        </div>
        <div className="font-display text-2xl text-forest">Заявка принята!</div>
        <p className="text-graphite-400">Менеджер свяжется с вами в ближайшее время. Обычно отвечаем в течение 15 минут в рабочие часы.</p>
        <div className="text-sm text-graphite-300 pt-4">
          Можно написать нам прямо сейчас:
          <div className="flex gap-2 justify-center mt-3">
            <a href={company.whatsapp} target="_blank" rel="noopener" className="btn-secondary btn-sm">WhatsApp</a>
            <a href={company.telegram} target="_blank" rel="noopener" className="btn-secondary btn-sm">Telegram</a>
          </div>
        </div>
      </div>
    );
  }

  const inputCls = variant === "compact"
    ? "input"
    : "input";

  return (
    <form onSubmit={onSubmit} className={variant === "full" ? "space-y-4" : "space-y-3"}>
      <div className={variant === "full" ? "grid md:grid-cols-2 gap-4" : "grid grid-cols-1 gap-3"}>
        <input
          required
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputCls}
        />
        <input
          required
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputCls}
        />
      </div>
      {variant === "full" && (
        <>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className={inputCls}
          >
            <option value="">Какая продукция интересует?</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
          </select>
          <textarea
            placeholder="Комментарий (необязательно)"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className={`${inputCls} min-h-[100px]`}
          />
        </>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full"
      >
        {status === "sending" ? "Отправляем..." : "Получить консультацию"}
      </button>
      {status === "error" && (
        <div className="text-sm text-red-500 text-center">
          Не удалось отправить. Напишите нам в <a href={company.whatsapp} className="underline">WhatsApp</a> или <a href={company.telegram} className="underline">Telegram</a>.
        </div>
      )}
      <p className="text-xs text-graphite-300 text-center pt-1">
        Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="underline hover:text-forest">политикой конфиденциальности</a>
      </p>
    </form>
  );
}
