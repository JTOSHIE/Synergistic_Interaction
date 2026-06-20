// CountUp: animates a number from zero to its target when it scrolls into view,
// driven by requestAnimationFrame. Under prefers-reduced-motion it shows the
// final value immediately with no animation. Numbers are formatted with
// Australian English grouping, for example 3,500.
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
  const [display, setDisplay] = useState(0);
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
