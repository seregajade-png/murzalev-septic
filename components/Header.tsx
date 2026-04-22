"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";
import { IconPhone } from "./Icons";

const nav = [
  { href: "/catalog", label: "Каталог" },
  { href: "/#works", label: "Наши работы" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
  { href: "/#faq", label: "Вопросы" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled ? "bg-cream/95 backdrop-blur-lg shadow-soft" : "bg-cream/80 backdrop-blur"
      }`}
    >
      <div className="container-site h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/images/logo.svg" alt={company.name} width={140} height={40} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-graphite-400">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-forest transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${company.phoneRaw}`} className="hidden md:flex items-center gap-2 text-sm font-medium text-graphite hover:text-forest transition">
            <IconPhone className="w-4 h-4" />
            {company.phone}
          </a>
          <a href="#lead-form" className="btn-primary btn-sm hidden sm:inline-flex">
            Консультация
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-forest"
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-graphite-200/60 bg-cream">
          <nav className="container-site py-6 flex flex-col gap-4 text-graphite">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="py-2 hover:text-forest">
                {item.label}
              </Link>
            ))}
            <a href={`tel:${company.phoneRaw}`} className="py-2 text-forest font-medium flex items-center gap-2">
              <IconPhone className="w-4 h-4" /> {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
