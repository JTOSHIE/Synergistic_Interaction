// Target path in repo: app/capabilities/page.tsx
// Synergistic Interaction, Capabilities (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// Interactivity is isolated in the small client components under components/motion.

import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Bespoke AI built around the work you actually do. Knowledge systems, document production, large-scale review and investigation, research and verification, and governed automation, with a human always in the loop.',
};

const capabilities = [
  {
    title: 'Bespoke AI knowledge systems',
    body: 'The difference between using AI and using it well is configuration. We build instruction sets that capture your domain language, your people and accounts, your fixed figures, your house style and your rules. AI then works to your standard, consistently, across every member of your team and over time, instead of starting from scratch and drifting every session.',
    where:
      'Any business where consistency of language, figures and standards is the value. Long-running projects, multi-person teams, and regulated work.',
  },
  {
    title: 'Document production at scale',
    body: 'Reports, proposals, board papers, templates and customer-facing documents produced to your standard, with the quality checks built in. Custom dictionaries, brand terminology and formatting applied automatically. One source of content, output as Word, PDF, spreadsheet or plain text, and ready for audio review or translation where you need it.',
    where:
      'Professional services, board and regulatory documents, technical documentation, branded reports and contract templates.',
  },
  {
    title: 'Review and investigation at scale',
    body: 'Large volumes of email, documents and records read, indexed and made searchable. Every item catalogued with its date, type, the people involved, a key extract and its source, with related items cross-referenced. An unmanageable pile becomes a working record you can actually use.',
    where:
      'Due diligence, audits and reviews, investigations, archive and knowledge migration, and account and contract verification.',
  },
  {
    title: 'Research, analysis and verification',
    body: 'Deep research and analysis across many sources, synthesised into clear, citation-backed deliverables. Claims and figures cross-checked across more than one AI, so you are not relying on a single model, and primary sources verified rather than assumed.',
    where:
      'Market and competitor research, regulatory mapping, opportunity assessment, technical due diligence and scenario planning.',
  },
  {
    title: 'Governed automation and AI agents',
    body: 'Where it makes sense, we automate the repetitive work and connect AI into your existing systems. The difference is governance. Nothing important runs unsupervised. High-stakes actions pause for a person to approve, which is exactly the pattern now expected of responsible AI in business. You get the speed of automation without handing over the steering wheel.',
    where:
      'High-volume processing, repetitive admin, and multi-step workflows that span several systems.',
  },
];

export default function CapabilitiesPage() {
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
            Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Bespoke AI, built around the work you actually do
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            Not generic training. Not off-the-shelf automation bolted on.
            Purpose-built AI capability configured to your business, your
            standards and your people, with a human always in the loop.
          </p>
        </div>
      </section>

      {/* Capability sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-si-teal/40 hover:shadow-[0_14px_40px_-18px_rgba(0,201,167,0.45)] motion-safe:hover:-translate-y-1">
                <h2 className="text-xl sm:text-2xl font-bold text-si-white mb-3">{c.title}</h2>
                <p className="text-si-white-muted leading-relaxed mb-5">{c.body}</p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                    Where it helps
                  </span>
                  <p className="text-si-white-muted text-sm leading-relaxed mt-2">{c.where}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bespoke vs generic */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              The same model. A completely different result.
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              Out of the box, AI produces ordinary output. Configured to your
              business, it produces remarkable output. That configuration is the
              work. It is what turns AI from a novelty your staff dabble with into a
              capability your business runs on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-si-white mb-5">
              Not sure which of these your business needs?
            </h2>
            <p className="text-si-white-muted leading-relaxed mb-10">
              That is exactly what the assessment is for. We work out where AI will
              help you most, then build only what earns its place.
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
