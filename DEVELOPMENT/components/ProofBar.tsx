// V7 §11: ProofBar — scroll-triggered GSAP stat counters
// Replace stat values with actual numbers from brief
'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// V7 §11: Replace with actual statistics from brief
const stats: Stat[] = [
  { value: 9, suffix: '', label: 'Compliance Components' },
  { value: 37301, suffix: '', label: 'ISO Standard' },
  // [REPLACE: Extract actual statistics from brief]
  { value: 14, suffix: ' days', label: 'Phase 0 Deployment' },
  { value: 60, suffix: 'fps', label: 'Mobile Performance Target' },
];

export default function ProofBar() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    // V7 §11: GSAP scroll-triggered counter animation
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        counterRefs.current.forEach((el, index) => {
          if (!el) return;
          const stat = stats[index];
          if (!stat) return;

          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: stat.value,
              duration: 2,
              ease: 'power2.out',
              snap: { innerText: 1 },
              onUpdate: function () {
                if (el) {
                  el.innerText = Math.round(parseFloat(el.innerText)).toLocaleString();
                }
              },
            }
          );
        });
      });
    });
  }, [inView]);

  return (
    <section
      ref={ref}
      id="proof-bar"
      className="bg-si-bg-secondary border-y border-white/5 py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <dt className="text-sm text-si-white-muted font-medium mt-1">{stat.label}</dt>
              <dd className="text-3xl sm:text-4xl font-bold text-si-teal">
                <span
                  ref={(el) => { counterRefs.current[index] = el; }}
                >
                  {stat.value.toLocaleString()}
                </span>
                {stat.suffix && (
                  <span className="text-2xl">{stat.suffix}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
