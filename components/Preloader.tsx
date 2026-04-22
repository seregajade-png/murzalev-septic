"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("murzalev-loaded")) {
      setHidden(true);
      return;
    }
    const timer = setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem("murzalev-loaded", "1");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-cream flex items-center justify-center transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-pulse-soft">
          <Image src="/images/logo.svg" alt="Мурзалёв" width={180} height={52} priority className="h-14 w-auto" />
        </div>
        <div className="w-32 h-0.5 bg-graphite-200 rounded-full overflow-hidden">
          <div className="h-full bg-forest animate-loading" />
        </div>
      </div>
    </div>
  );
}
