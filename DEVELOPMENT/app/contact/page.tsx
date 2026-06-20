// Target path in repo: app/contact/page.tsx
// Synergistic Interaction, Contact (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// This page uses working email and phone links, so it functions immediately with no backend.
// Interactivity is isolated in the small client components under components/motion.

import type { Metadata } from 'next';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start with a fixed-price AI Readiness Assessment. A quick chat to see whether we are a fit costs you nothing. No jargon, no pressure, no lock-in.',
  alternates: { canonical: '/contact' },
};

const steps = [
  {
    number: '01',
    title: 'A short call',
    body: 'We learn a little about your business and what is slowing you down, and you decide whether to go further.',
  },
  {
    number: '02',
    title: 'The assessment',
    body: 'A fixed-price review of how you work and where AI can genuinely help, with a plain roadmap at the end.',
  },
  {
    number: '03',
    title: 'The work',
    body: 'We set up the right tools, train your people, and stay close as you find your feet.',
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-si-gradient" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(0,201,167,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-si-teal" />
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Start with a conversation, not a commitment
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            The first step is a fixed-price AI Readiness Assessment. Before that, a
            quick chat to see whether we are a fit costs you nothing. No jargon, no
            pressure, no lock-in.
          </p>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-si-white-muted leading-relaxed">
            We work with established Australian businesses and professional
            practices, the ones too busy to ignore AI and too small to have anyone
            to lead it. If that sounds like you, we should talk.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-12">What happens next</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 80}>
                <div>
                  <div className="text-si-teal text-sm font-semibold tracking-widest mb-3">
                    {s.number}
                  </div>
                  <h3 className="text-si-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-si-white-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-8">Get in touch</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="mailto:jt@synergisticinteraction.com.au?subject=AI%20Readiness%20Assessment"
                className="block p-6 rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-si-teal/40 hover:shadow-[0_14px_40px_-18px_rgba(0,201,167,0.45)] motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
              >
                <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                  Email
                </span>
                <p className="text-si-white font-medium mt-2 break-words">
                  jt@synergisticinteraction.com.au
                </p>
              </a>
              <a
                href="tel:+61417673828"
                className="block p-6 rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-si-teal/40 hover:shadow-[0_14px_40px_-18px_rgba(0,201,167,0.45)] motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
              >
                <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                  Phone
                </span>
                <p className="text-si-white font-medium mt-2">0417 673 828</p>
              </a>
            </div>
          </Reveal>

          <div className="mt-10 text-center">
            <a
              href="mailto:jt@synergisticinteraction.com.au?subject=AI%20Readiness%20Assessment"
              className="inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
            >
              Email us to book your assessment
            </a>
          </div>

          <p className="text-si-white-muted text-xs text-center mt-12">
            Synergistic Interaction Pty Ltd &middot; ABN 33 686 618 397
          </p>
        </div>
      </section>
    </main>
  );
}
