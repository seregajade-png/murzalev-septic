"use client";

import { useState, useEffect } from "react";
import { company } from "@/lib/content";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex flex-col gap-2 transition-all duration-500 ease-smooth ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}>
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noopener"
        className="group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-graphite text-cream text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          WhatsApp
        </span>
      </a>
      <a
        href={company.telegram}
        target="_blank"
        rel="noopener"
        className="group w-14 h-14 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
        aria-label="Telegram"
        title="Telegram"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.036 16.57l-.396 3.958c.564 0 .81-.242 1.104-.532l2.648-2.525 5.487 4.017c1.006.554 1.715.263 1.987-.93l3.602-16.874.001-.001c.32-1.492-.54-2.075-1.52-1.71L1.11 9.38c-1.459.566-1.437 1.376-.248 1.742l5.124 1.596L17.794 5.24c.56-.37 1.07-.165.65.204L9.036 16.57z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-graphite text-cream text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Telegram
        </span>
      </a>
      <a
        href={company.max}
        target="_blank"
        rel="noopener"
        className="group w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform border border-gray-100"
        aria-label="MAX"
        title="MAX"
      >
        {/* MAX (VK) — официальная эмблема с wikimedia */}
        <svg width="32" height="32" viewBox="0 0 42 42" fill="#0077FF">
          <path fillRule="evenodd" d="M21.47 41.88c-4.11 0-6.02-.6-9.34-3-2.1 2.7-8.75 4.81-9.04 1.2 0-2.71-.6-5-1.28-7.5C1 29.5.08 26.07.08 21.1.08 9.23 9.82.3 21.36.3c11.55 0 20.6 9.37 20.6 20.91a20.6 20.6 0 0 1-20.49 20.67m.17-31.32c-5.62-.29-10 3.6-10.97 9.7-.8 5.05.62 11.2 1.83 11.52.58.14 2.04-1.04 2.95-1.95a10.4 10.4 0 0 0 5.08 1.81 10.7 10.7 0 0 0 11.19-9.97 10.7 10.7 0 0 0-10.08-11.1Z" clipRule="evenodd"/>
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-graphite text-cream text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          MAX
        </span>
      </a>
      <a
        href={company.avito}
        target="_blank"
        rel="noopener"
        className="group w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform border border-gray-100"
        aria-label="Авито"
        title="Авито"
      >
        {/* Авито — официальный знак (4 круга) с wikimedia */}
        <svg width="30" height="28" viewBox="0 0 420 380" fill="none">
          <circle cx="122.965" cy="256.711" r="122.559" fill="#04E061"/>
          <circle cx="335.574" cy="289.745" r="74.057" fill="#FF4053"/>
          <circle cx="146.404" cy="72.347" r="45.829" fill="#965EEB"/>
          <circle cx="306.803" cy="100.051" r="99.645" fill="#00AAFF"/>
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-graphite text-cream text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Авито
        </span>
      </a>
    </div>
  );
}
