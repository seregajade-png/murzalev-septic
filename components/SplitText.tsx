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

  const linesOfWords = text.split("\n").map((line) => line.split(" "));
  let runningIdx = 0;
  const lines = linesOfWords.map((words) => {
    const startIdx = runningIdx;
    runningIdx += words.length;
    return { words, startIdx };
  });
  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className}>
      {lines.map(({ words, startIdx }, lineIndex) => (
        <span key={lineIndex} className="block">
          {words.map((word, wordIndex) => {
            const idx = startIdx + wordIndex;
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
                {wordIndex < words.length - 1 && <span>&nbsp;</span>}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}
