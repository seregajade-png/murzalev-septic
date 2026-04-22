"use client";

import { useEffect, useRef, useState } from "react";

export function SplitText({
  text,
  as: Tag = "span",
  className,
  wordClassName,
  delay = 0,
  stagger = 60,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const lines = text.split("\n");
  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(" ").map((word, wordIndex) => {
            const idx = lineIndex * 100 + wordIndex;
            return (
              <span key={`${lineIndex}-${wordIndex}`} className={`inline-block overflow-hidden align-bottom ${wordClassName || ""}`}>
                <span
                  className="inline-block transition-transform duration-700 ease-smooth"
                  style={{
                    transform: visible ? "translateY(0)" : "translateY(110%)",
                    transitionDelay: visible ? `${idx * stagger}ms` : "0ms",
                  }}
                >
                  {word}
                </span>
                {wordIndex < line.split(" ").length - 1 && <span>&nbsp;</span>}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}
