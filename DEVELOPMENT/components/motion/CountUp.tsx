// CountUp: shows the real target value in server-rendered HTML so crawlers and
// no-JS visitors always see the true figure, then animates from zero to the
// target on the client the first time it scrolls into view. Driven by
// requestAnimationFrame. Under prefers-reduced-motion it simply shows the
// final value with no animation. Numbers use Australian English grouping,
// for example 3,500.
'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface CountUpProps {
  value: number;
  durationMs?: number;
  // Appends a plus sign, for figures described as "more than".
  plus?: boolean;
  className?: string;
}

export default function CountUp({ value, durationMs = 1600, plus = false, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  // Initialise with the real value: this is what the server renders and what
  // hydration first paints, so the page never claims zero to anyone.
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const element = ref.current;
    if (!element) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-AU')}
      {plus ? '+' : ''}
    </span>
  );
}
