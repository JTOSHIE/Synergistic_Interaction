// Target path in repo: app/industries/page.tsx
// Synergistic Interaction, Industries (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// Interactivity is isolated in the small client components under components/motion.

import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Practical AI adoption across retail and wholesale, accounting, trades, manufacturing, government and not-for-profit, health, and law. The same discipline, shaped to your sector.',
};

const sectors = [
  {
    name: 'Retail, wholesale and category management',
    flagship: true,
    body: 'Where it began. Twenty-five years of category management across some of the largest retail networks in Australia, New Zealand, the USA and the UK is the origin of the discipline we now bring to AI. For retailers and wholesalers that means faster range planning, supplier negotiation preparation, performance and variance analysis, and marketing and brief development, all done in a fraction of the time and to a consistent standard.',
  },
  {
    name: 'Accounting and bookkeeping',
    body: 'Document-heavy, deadline-driven work where AI earns its place quickly. Drafting and formatting client deliverables, extracting and reconciling figures from statements, summarising legislation in plain English, and handling routine client correspondence, with a qualified person reviewing and signing off everything that goes out.',
  },
  {
    name: 'Builders and trades',
    body: 'The paperwork that eats into billable time. Tender and quote drafting, contract and project documentation, variation and claims paperwork, and site reporting, produced quickly and consistently so the team can stay on the tools.',
  },
  {
    name: 'Manufacturing and supply chain',
    body: 'Supplier and quality documentation, regulatory and compliance reporting, technical writing, and performance analysis, brought together and produced to a consistent standard. A natural neighbour to the retail and wholesale work we know well.',
  },
  {
    name: 'Government and not-for-profit',
    body: 'Submission and grant writing, stakeholder communication, report production and policy synthesis, with the transparency and oversight these organisations are held to built in from the start.',
  },
  {
    name: 'Medical and allied health',
    body: 'Patient communication, multilingual support for diverse communities, documentation discipline and research synthesis, always with appropriate clinical oversight and strict privacy controls.',
  },
  {
    name: 'Law firms and practices',
    body: 'A great deal of legal work is back-end production, and that is where AI helps. Document creation and drafting support, research and verification, and evidence and document review and cataloguing, all under the build, review and approve discipline, where AI produces and the qualified practitioner edits, corrects and signs off. The judgement, and the accountability, stay with the practitioner.',
  },
];

const hoverClass =
  'transition duration-300 hover:border-si-teal/40 hover:shadow-[0_14px_40px_-18px_rgba(0,201,167,0.45)] motion-safe:hover:-translate-y-1';

export default function IndustriesPage() {
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
            Industries
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            The same discipline, shaped to your sector
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            We have worked across the economy, from the retail floor to the back
            office of a professional practice. The capabilities are the same
            machine everywhere. What changes is your world, and that is what we
            build around.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-5">
          {sectors.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div
                className={
                  s.flagship
                    ? `p-7 sm:p-8 rounded-2xl border border-si-teal/30 bg-si-teal/5 ${hoverClass}`
                    : `p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/5 ${hoverClass}`
                }
              >
                {s.flagship && (
                  <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                    Where it began
                  </span>
                )}
                <h2
                  className={
                    s.flagship
                      ? 'text-xl sm:text-2xl font-bold text-si-white mt-2 mb-3'
                      : 'text-xl sm:text-2xl font-bold text-si-white mb-3'
                  }
                >
                  {s.name}
                </h2>
                <p className="text-si-white-muted leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cross alignment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              One method, every sector
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              The four capabilities, knowledge systems, document production, review
              and investigation, and research and verification, are the same in
              every industry. Only the domain changes. The discipline behind them
              was built at retail scale, across hundreds of stores and thousands of
              products, and it transfers cleanly to a practice, a workshop or a back
              office. Your sector is the shape. The method is the constant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-si-white mb-5">
              Not sure where AI fits your sector?
            </h2>
            <p className="text-si-white-muted leading-relaxed mb-10">
              The readiness assessment is built to answer exactly that, for your
              business specifically.
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
