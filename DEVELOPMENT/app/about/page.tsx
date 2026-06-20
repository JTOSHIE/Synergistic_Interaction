// Target path in repo: app/about/page.tsx
// Synergistic Interaction, About (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// Note: retailers are described by scale, not named, consistent with the rest of the site. Cornell is named as the validator.
// Interactivity is isolated in the small client components under components/motion.

import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Twenty-five years of turning new technology into business change, across Australia, New Zealand, the USA and the UK. AI is simply the current chapter.',
};

const acts = [
  {
    era: '1997 to 2006',
    title: 'The first web-based transformation',
    body: 'Long before anyone used the word, this was already the kind of change AI demands today: getting an entire industry to work differently using a new technology. We built one of the first web-based category management systems in the world and rolled it out to more than 3,500 retail stores. The results were independently validated by Cornell University, which measured a sustained lift in daily sales across the stores that adopted it.',
  },
  {
    era: '2007 to 2019',
    title: 'Transformation at national scale',
    body: 'Back home, we co-founded a category management business that grew to more than 300 people and managed category for every store of one of the largest hardware retailers in Australia and New Zealand. More than 330 stores, thousands of products, and global suppliers. It was transformation at national scale, done in the field rather than in a presentation.',
  },
  {
    era: 'Today',
    title: 'The current chapter',
    body: 'The thread through all of it is the same. New technology creates value only when it is built around how a business actually works, when its people are brought along, and when quality and judgement stay in human hands. That is exactly what AI adoption needs now, and it is what Synergistic Interaction does today.',
  },
];

const stats = [
  { value: 25, plus: false, label: 'Years of experience' },
  { value: 3500, plus: true, label: 'Stores reached' },
  { value: 330, plus: true, label: 'Stores in the national network' },
  { value: 300, plus: true, label: 'People in the business built' },
];

export default function AboutPage() {
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
            About
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Twenty-five years of turning new technology into business change
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            AI is not a new direction for Synergistic Interaction. It is the
            latest chapter in a long career spent helping businesses adopt new
            technology and actually get value from it.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums">
                    <CountUp value={stat.value} plus={stat.plus} />
                  </div>
                  <p className="text-si-white-muted text-xs sm:text-sm mt-2 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {acts.map((a, i) => (
            <Reveal key={a.era} delay={i * 80}>
              <div className="border-l-2 border-si-teal/40 pl-6 sm:pl-8">
                <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                  {a.era}
                </span>
                <h2 className="text-2xl font-bold text-si-white mt-2 mb-3">{a.title}</h2>
                <p className="text-si-white-muted leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hands on */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              We build, we do not just advise
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              There is no shortage of consultants who will hand you a strategy and
              leave. This is different. The work described across this site, the
              document systems, the review and investigation, the research, the
              trained teams, is work we have built and run hands-on, daily, across
              legal, retail, wholesale and more. We know what it takes to make AI
              work in a real business because we do it, not because we read about
              it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-xl font-bold text-si-white mb-2">Joshua Thompson</h2>
              <p className="text-si-teal text-sm font-medium mb-4">
                Principal and Director, Synergistic Interaction
              </p>
              <p className="text-si-white-muted leading-relaxed">
                Synergistic Interaction is led by Joshua Thompson, who has built and
                delivered category and technology transformation across Australia,
                New Zealand, the USA and the United Kingdom for more than 25 years.
                The focus now is helping established businesses and practices adopt
                AI the practical way, with their people trained and their judgement
                kept firmly in charge.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-si-white mb-5">Let us talk about your business</h2>
            <p className="text-si-white-muted leading-relaxed mb-10">
              The best first step is a fixed-price readiness assessment. We will
              look at how you work and where AI can genuinely help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
            >
              Book an AI Readiness Assessment
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
