"use client";

import { useEffect, useRef } from "react";

export function ParallaxHero({ children, strength = 0.15 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY * strength;
          el.style.transform = `translate3d(0, ${y}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
