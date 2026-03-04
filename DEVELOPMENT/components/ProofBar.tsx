// V7 §11.1: ProofBar — scroll-triggered GSAP stat counters
// V7 §11.2: "Scroll-Triggered Stat Counters" design pattern
// V7 §11.1 proof bar update: "330+" | "4.4%" | "$100M+" | "ISO 37301 Aligned"
'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface StatItem {
  display: string;    // Final display value
  countTo?: number;   // Numeric value to count to (omit for non-numeric)
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  isLink?: boolean;
  href?: string;
}

// V7 §11.1: Actual proof bar statistics from brief
const stats: StatItem[] = [
  {
    display: '330+',
    countTo: 330,
    suffix: '+',
    label: 'Store Network Compliance Architecture',
    sublabel: 'Multi-location retail category management',
  },
  {
    display: '4.4%',
    countTo: 44, // Animated as 4.4 by dividing by 10
    suffix: '%',
    label: 'Avg. ADV Uplift',
    sublabel: 'Cornell University category management benchmark',
  },
  {
    display: '$100M+',
    prefix: '$',
    countTo: 100,
    suffix: 'M+',
    label: 'Penalty Exposure Mitigated',
    sublabel: 'ACL s.224 — maximum per contravention',
  },
  {
    display: 'ISO 37301',
    label: 'International Alignment',
    sublabel: 'Compliance Management Systems Standard',
    isLink: true,
    href: '/why-compliance-matters#iso-37301',
  },
];

export default function ProofBar() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    // V7 §11.2: GSAP scroll-triggered counter animation — 1.5s ease-out
    import('gsap').then(({ gsap }) => {
      counterRefs.current.forEach((el, index) => {
        if (!el) return;
        const stat = stats[index];
        if (!stat?.countTo) return; // Skip non-numeric stats (ISO 37301 badge)

        const isDecimal = stat.suffix === '%' && stat.countTo === 44;
        const divisor = isDecimal ? 10 : 1;
        const targetDisplay = stat.countTo;

        gsap.fromTo(
          el,
          { innerText: '0' },
          {
            innerText: targetDisplay,
            duration: 1.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate: function () {
              if (!el) return;
              const val = parseFloat(el.innerText);
              const displayVal = isDecimal
                ? (val / divisor).toFixed(1)
                : Math.round(val).toLocaleString();
              el.innerText = `${stat.prefix ?? ''}${displayVal}${stat.suffix ?? ''}`;
            },
          }
        );
      });
    });
  }, [inView]);

  return (
    <section
      ref={ref}
      id="proof-bar"
      className="bg-si-bg-secondary border-y border-white/5 py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Key performance statistics"
    >
      <div className="max-w-7xl mx-auto">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <dd className="text-3xl sm:text-4xl font-bold text-si-teal">
                {stat.isLink ? (
                  <Link
                    href={stat.href ?? '#'}
                    className="hover:text-si-teal-light transition-colors"
                  >
                    {stat.display}
                  </Link>
                ) : (
                  <span ref={(el) => { counterRefs.current[index] = el; }}>
                    {stat.display}
                  </span>
                )}
              </dd>
              <dt className="text-sm text-si-white font-medium mt-1">{stat.label}</dt>
              {stat.sublabel && (
                <p className="text-xs text-si-white-dim mt-0.5">{stat.sublabel}</p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
