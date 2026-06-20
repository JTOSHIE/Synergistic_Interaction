// Target path in repo: app/readiness/page.tsx
// AI Readiness self-check page. Server component that renders the interactive
// client component. Uses the existing design tokens and the shared Reveal motion.

import type { Metadata } from 'next';
import Reveal from '@/components/motion/Reveal';
import ReadinessCheck from '@/components/ReadinessCheck';

export const metadata: Metadata = {
  title: 'AI Readiness Self-Check',
  description:
    'A two minute self-check to see where your business stands with AI. It runs entirely in your browser, nothing is sent or stored.',
};

export default function ReadinessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-si-gradient" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(0,201,167,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-si-teal" />
            Two minute self-check
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Where does your business stand with AI?
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            Six quick questions to see where you are and what a sensible next step
            looks like. It runs entirely in your browser. Nothing is sent or stored.
          </p>
        </div>
      </section>

      {/* Self-check */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <ReadinessCheck />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
