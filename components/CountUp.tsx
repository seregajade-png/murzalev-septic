"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

// Parses "200+", "12 мес.", "98%" etc. Extracts the first numeric part.
function parseValue(value: string) {
  const match = value.match(/^(\D*)([0-9]+(?:[.,][0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", num: null as number | null, suffix: value };
  return {
    prefix: match[1],
    num: parseFloat(match[2].replace(",", ".")),
    suffix: match[3],
  };
}

export function CountUp({ value, duration = 1600, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = parseValue(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || parsed.num == null) return;
    setDisplay(`${parsed.prefix}0${parsed.suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const target = parsed.num!;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = target * eased;
            const formatted = Number.isInteger(target)
              ? Math.round(current).toString()
              : current.toFixed(1).replace(".", ",");
            setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [duration, parsed.num, parsed.prefix, parsed.suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
