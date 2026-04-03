'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const stats = [
  {
    prefix: '',
    value: 330,
    suffix: '+',
    label: 'Stores managed simultaneously',
    sublabel: 'Australian retail network — Bunnings ANZ',
    decimals: 0,
    href: null,
  },
  {
    prefix: '',
    value: 4,
    suffix: '%',
    label: 'Cornell-validated ADV uplift',
    sublabel: 'Independent peer-reviewed validation — 61 stores',
    decimals: 0,
    href: null,
  },
  {
    prefix: '$',
    value: 100,
    suffix: 'M+',
    label: 'Annual portfolio value managed',
    sublabel: 'G-Force — peak Australia and New Zealand portfolio',
    decimals: 0,
    href: null,
  },
  {
    prefix: '',
    value: 13,
    suffix: 'yrs',
    label: 'First client retained',
    sublabel: 'G-Force founding client — full 13-year tenure',
    decimals: 0,
    href: null,
  },
];

function animateValue(
  el: HTMLElement,
  target: number,
  decimals: number,
  duration = 1800
) {
  const start = performance.now();
  function step(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent =
      decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toFixed(decimals);
  }
  requestAnimationFrame(step);
}

export default function ProofBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Set final values immediately for reduced motion
    if (prefersReduced) {
      const els = sectionRef.current?.querySelectorAll<HTMLElement>('[data-counter]');
      els?.forEach((el) => {
        const v = parseFloat(el.dataset.counter ?? '0');
        const d = parseInt(el.dataset.decimals ?? '0', 10);
        el.textContent = v.toFixed(d);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animated.current) {
          animated.current = true;
          const els = sectionRef.current?.querySelectorAll<HTMLElement>(
            '[data-counter]'
          );
          els?.forEach((el) => {
            const v = parseFloat(el.dataset.counter ?? '0');
            const d = parseInt(el.dataset.decimals ?? '0', 10);
            animateValue(el, v, d);
          });
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-si-bg-secondary"
      aria-label="Key performance metrics"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => {
            const inner = (
              <div key={i}>
                <div className="flex items-baseline gap-0.5 mb-2">
                  {stat.prefix && (
                    <span className="text-2xl font-bold text-si-teal">
                      {stat.prefix}
                    </span>
                  )}
                  <span
                    data-counter={stat.value}
                    data-decimals={stat.decimals}
                    className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums"
                  >
                    {stat.decimals > 0 ? stat.value.toFixed(stat.decimals) : stat.value}
                  </span>
                  <span className="text-2xl font-bold text-si-teal">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm font-medium text-si-white mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-si-white-dim leading-snug">
                  {stat.sublabel}
                </p>
              </div>
            );

            return stat.href ? (
              <Link
                key={i}
                href={stat.href}
                className="px-0 lg:px-8 first:pl-0 last:pr-0 group hover:opacity-80 transition-opacity"
              >
                {inner}
              </Link>
            ) : (
              <div key={i} className="px-0 lg:px-8 first:pl-0 last:pr-0">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
