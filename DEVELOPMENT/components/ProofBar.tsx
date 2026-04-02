// V7 §11.2: Proof bar with GSAP scroll-triggered stat counters
// Stats: 330+ stores, 4.4% ADV uplift, $100M+ penalty mitigated, ISO 37301
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface StatItem {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  href?: string;
  decimals?: number;
}

// V7 §11.1: Corrected proof bar stats
const stats: StatItem[] = [
  {
    prefix: '',
    value: 330,
    suffix: '+',
    label: 'Stores managed simultaneously',
    sublabel: 'Australian retail network — Bunnings ANZ',
    decimals: 0,
  },
  {
    prefix: '',
    value: 4.4,
    suffix: '%',
    label: 'Average ADV uplift',
    sublabel: 'Cornell University category management benchmark',
    decimals: 1,
  },
  {
    prefix: '$',
    value: 100,
    suffix: 'M+',
    label: 'Penalty exposure mitigated',
    sublabel: 'ACL s.224 — across client category portfolios',
    decimals: 0,
  },
  {
    prefix: '',
    value: 1736,
    suffix: '×',
    label: 'Minimum compliance ROI',
    sublabel: '$50M ACL exposure ÷ consulting investment',
    href: '/why-compliance-matters',
    decimals: 0,
  },
];

export default function ProofBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    const elements = containerRef.current?.querySelectorAll<HTMLElement>('[data-counter]');
    if (!elements) return;

    elements.forEach((el) => {
      const target = parseFloat(el.dataset.counter ?? '0');
      const decimals = parseInt(el.dataset.decimals ?? '0', 10);
      const duration = 1500;
      const start = performance.now();

      function step(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        el.textContent = decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals);
      }

      requestAnimationFrame(step);
    });
  }

  return (
    <section
      ref={containerRef}
      className="py-8 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-si-bg-secondary"
      aria-label="Key metrics"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => {
            return stat.href ? (
              <Link key={i} href={stat.href} className="px-0 lg:px-8 first:pl-0 last:pr-0 group">
                <div>
                  <div className="flex items-baseline gap-0.5 mb-1">
                    {stat.prefix && <span className="text-2xl font-bold text-si-teal">{stat.prefix}</span>}
                    <span data-counter={stat.value} data-decimals={stat.decimals ?? 0} className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums">0</span>
                    <span className="text-2xl font-bold text-si-teal">{stat.suffix}</span>
                  </div>
                  <p className="text-sm font-medium mb-0.5 text-si-white group-hover:text-si-teal transition-colors">{stat.label}</p>
                  <p className="text-xs text-si-white-dim leading-snug">{stat.sublabel}</p>
                </div>
              </Link>
            ) : (
              <div key={i} className="px-0 lg:px-8 first:pl-0 last:pr-0">
                <div className="flex items-baseline gap-0.5 mb-1">
                  {stat.prefix && <span className="text-2xl font-bold text-si-teal">{stat.prefix}</span>}
                  <span data-counter={stat.value} data-decimals={stat.decimals ?? 0} className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums">0</span>
                  <span className="text-2xl font-bold text-si-teal">{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium mb-0.5 text-si-white">{stat.label}</p>
                <p className="text-xs text-si-white-dim leading-snug">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
