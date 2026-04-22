"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/Icons";

type Item = { q: string; a: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="card divide-y divide-graphite-200/60">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full text-left p-6 flex items-start gap-4 hover:bg-forest/5 transition-colors"
        >
          <IconChevronDown className={`w-5 h-5 text-forest flex-shrink-0 mt-1 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
          <div className="flex-1">
            <div className="font-display text-base md:text-lg text-graphite">{item.q}</div>
            <div
              className={`grid transition-all duration-500 ease-smooth ${
                open === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-graphite-400 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
