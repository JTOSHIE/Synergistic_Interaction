// Reveal: fades and gently rises its children into view as they scroll in.
// Uses Intersection Observer plus a CSS transition, triggers once, supports an
// optional stagger delay for groups of cards. Under prefers-reduced-motion it
// renders a calm static state with the content already visible, no movement.
'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  // Stagger delay in milliseconds, useful when mapping over a group of cards.
  delay?: number;
  // Distance in pixels the content rises from as it appears.
  y?: number;
}

export default function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);

  const style: CSSProperties = reduced
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition:
          'opacity 0.6s cubic-bezier(0.22, 0.61, 0.36, 1), transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
