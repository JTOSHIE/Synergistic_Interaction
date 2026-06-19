// Target path in repo: app/insights/page.tsx
// Synergistic Interaction — Insights index (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// Note: these are the planned pieces. The article bodies are a separate content task. Once written, each card
// becomes a link to app/insights/[slug]/page.tsx.

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Short, practical perspectives on using AI well in a real business, without the hype and without the jargon.',
};

const articles = [
  {
    topic: 'Method',
    title: 'Why the smartest AI rule is to keep a human in the loop',
    summary:
      'The single discipline that makes AI safe in a real business, and why it matters more, not less, as the tools get more capable.',
  },
  {
    topic: 'Tools',
    title: 'You do not need the best AI. You need the right one.',
    summary:
      'How to choose a model for your business based on your tools, your budget and where your data is allowed to live, instead of chasing the newest release.',
  },
  {
    topic: 'Adoption',
    title: 'AI fatigue is real, and here is how to fix it',
    summary:
      'Most businesses already have AI and it is not delivering. The problem is rarely the tools, and the fix is simpler than buying more of them.',
  },
  {
    topic: 'Governance',
    title: 'What AI governance actually means for a small business',
    summary:
      'Privacy, oversight and accountability in plain terms, and what Australia now expects of businesses using AI.',
  },
];

export default function InsightsPage() {
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
            Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Plain thinking on using AI well
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            Short, practical perspectives for business owners who want to use AI
            properly, without the hype and without the jargon.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          {articles.map((a) => (
            <article
              key={a.title}
              className="p-7 rounded-2xl border border-white/10 bg-white/5 flex flex-col"
            >
              <span className="text-si-teal text-xs font-semibold tracking-widest uppercase mb-3">
                {a.topic}
              </span>
              <h2 className="text-lg font-bold text-si-white mb-3 leading-snug">{a.title}</h2>
              <p className="text-si-white-muted text-sm leading-relaxed">{a.summary}</p>
            </article>
          ))}
        </div>
        <p className="max-w-4xl mx-auto text-si-white-muted text-xs mt-6">
          New pieces published regularly.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
            Prefer to talk it through?
          </h2>
          <p className="text-si-white-muted leading-relaxed mb-10">
            A fixed-price readiness assessment is the quickest way to see what AI
            can do for your business specifically.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
          >
            Book an AI Readiness Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
