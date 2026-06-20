// Target path in repo: app/page.tsx
// Synergistic Interaction, Home (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// Interactivity is isolated in the small client components under components/motion.

import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import HeroNetwork from '@/components/motion/HeroNetwork';
import FlowDiagram from '@/components/motion/FlowDiagram';

export const metadata: Metadata = {
  title: { absolute: 'Synergistic Interaction: Practical AI Adoption for Australian Business' },
  description:
    'We help established Australian businesses and practices adopt AI the practical way. A fixed-price readiness assessment, the right tools and workflows, staff training, and a human always in the loop. Weeks, not years.',
};

const cardClass =
  'h-full p-6 rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-si-teal/40 hover:shadow-[0_14px_40px_-18px_rgba(0,201,167,0.45)] motion-safe:hover:-translate-y-1';

const pains = [
  {
    title: 'Licences nobody uses',
    body: 'You are paying for Copilot or a similar tool, and real adoption never happened.',
  },
  {
    title: 'Tools that do not talk to each other',
    body: 'A patchwork of apps that takes more work to manage than it saves.',
  },
  {
    title: 'Staff left guessing',
    body: 'Your people want to use AI well, but they have had no guidance and worry about getting it wrong.',
  },
];

const capabilities = [
  {
    title: 'Bespoke AI knowledge systems',
    body: 'Your house style, language and rules captured once, so AI stays consistent across your team and over time.',
  },
  {
    title: 'Document production at scale',
    body: 'Reports, proposals, board papers and templates produced to your standard, with the quality checks built in.',
  },
  {
    title: 'Review and investigation at scale',
    body: 'Large volumes of email, documents and records read, indexed and made searchable.',
  },
  {
    title: 'Research, analysis and verification',
    body: 'Deep research cross-checked across more than one AI, with sources you can trust.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Assess',
    body: 'A fixed-price AI Readiness Assessment. We map how you work, what you already have, and where the quick wins are, then hand back a plain roadmap.',
  },
  {
    number: '02',
    title: 'Integrate and train',
    body: 'We set up the right tools and workflows for your business and budget, and train your people to use them with confidence.',
  },
  {
    number: '03',
    title: 'Support',
    body: 'Light-touch support as the tools change, so you stay current without hiring anyone.',
  },
];

const industries = [
  'Retail, wholesale and category management',
  'Accounting and bookkeeping',
  'Builders and trades',
  'Manufacturing and supply chain',
  'Government and not-for-profit',
  'Medical and allied health',
  'Law firms and practices',
];

const outcomes = [
  { title: 'Capability', body: 'Higher-quality output at greater volume than before.' },
  { title: 'Consistency', body: 'Your standard, held across every person and every document.' },
  { title: 'Speed', body: 'Work that took days delivered in hours.' },
  { title: 'Resilience', body: 'Knowledge captured in the system, not stuck in one person.' },
  { title: 'Cost discipline', body: 'Your experts spend their time where it actually counts.' },
];

const stats = [
  { value: 25, plus: false, label: 'Years of experience' },
  { value: 3500, plus: true, label: 'Stores reached' },
  { value: 330, plus: true, label: 'Stores in the national network' },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-si-gradient" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 60% 30%, rgba(0,201,167,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <HeroNetwork className="absolute inset-0 h-full w-full pointer-events-none opacity-70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-si-teal" />
            Practical AI adoption for Australian business
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-si-white mb-6 leading-tight">
            Get your business genuinely using AI.{' '}
            <span className="text-si-teal">In weeks, not years.</span>
          </h1>
          <p className="text-lg sm:text-xl text-si-white-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Most businesses your size are too busy to ignore AI and too small to
            have anyone to lead it. We work out how you actually run, give your
            people the right tools and training, and keep a human in the loop the
            whole way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
            >
              Book an AI Readiness Assessment
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-5 max-w-2xl">
              You do not need more AI. You need it working.
            </h2>
            <p className="text-si-white-muted leading-relaxed max-w-2xl mb-12">
              Chances are you already have AI in the building. A licence nobody
              uses. A few staff quietly pasting work into a chatbot. Tools that
              promised a lot and delivered a mess. The problem is rarely the
              technology. It is that nothing has been set up around how your
              business actually runs, and no one has shown your people how to use it
              well. The risk is not missing out. It is using AI badly, paying for
              tools that sit idle, and falling behind the businesses that got it
              right.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {pains.map((p, i) => (
              <Reveal key={p.title} className="h-full" delay={i * 80}>
                <div className={cardClass}>
                  <h3 className="text-si-white font-semibold mb-2">{p.title}</h3>
                  <p className="text-si-white-muted text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-3">What we build</h2>
            <p className="text-si-white-muted leading-relaxed max-w-2xl mb-12">
              Bespoke AI built around the work you actually do, not generic tools bolted on.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} className="h-full" delay={i * 80}>
                <div className={cardClass}>
                  <h3 className="text-si-white font-semibold mb-2">{c.title}</h3>
                  <p className="text-si-white-muted text-sm leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/capabilities"
              className="text-si-teal hover:text-si-teal-light font-medium transition-colors"
            >
              Explore our capabilities &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-12">How we work</h2>
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
          <div className="mt-10">
            <Link
              href="/approach"
              className="text-si-teal hover:text-si-teal-light font-medium transition-colors"
            >
              See our approach &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Human in the loop */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-5">
              AI does the work. Your people stay in charge.
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              Every output that matters is built by AI and then reviewed and
              approved by the person accountable for it. AI carries the volume, your
              expert keeps the judgement, and only approved work goes out the door.
              It is also the direction Australia is setting. Human oversight is a
              core principle of the national AI ethics framework, and it is built
              into everything we set up.
            </p>
          </Reveal>
        </div>
        <div className="max-w-3xl mx-auto mt-10">
          <Reveal>
            <FlowDiagram variant="compact" />
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-3">
              Industries we work across
            </h2>
            <p className="text-si-white-muted leading-relaxed max-w-2xl mb-10">
              The same discipline, shaped to your sector.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {industries.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-si-white-muted text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="mt-10">
            <Link
              href="/industries"
              className="text-si-teal hover:text-si-teal-light font-medium transition-colors"
            >
              See your industry &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-5 max-w-2xl">
              Experience that earns its keep
            </h2>
            <p className="text-si-white-muted leading-relaxed max-w-2xl mb-12">
              This is not a new venture chasing a trend. Behind Synergistic
              Interaction is 25 years of turning new technology into real business
              change, including building one of the first web-based category
              management systems in the world, independently validated by Cornell
              University, and running category management across one of the largest
              retail networks in Australia and New Zealand. AI is simply the current
              chapter.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-si-teal tabular-nums">
                    <CountUp value={stat.value} plus={stat.plus} />
                  </div>
                  <p className="text-si-white-muted text-xs sm:text-sm mt-2 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} className="h-full" delay={i * 60}>
                <div className="h-full p-5 rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-si-teal/40 hover:shadow-[0_14px_40px_-18px_rgba(0,201,167,0.45)] motion-safe:hover:-translate-y-1">
                  <h3 className="text-si-white font-semibold text-sm mb-2">{o.title}</h3>
                  <p className="text-si-white-muted text-xs leading-relaxed">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-5">
              Start with a clear, honest look at where you are.
            </h2>
            <p className="text-si-white-muted leading-relaxed mb-10">
              The AI Readiness Assessment is a fixed-price first step. No jargon, no
              lock-in, no pressure. You come away knowing exactly where AI can help
              your business and what it will take.
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
