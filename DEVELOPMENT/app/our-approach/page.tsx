// V7 §7 + §8: Our Approach page — nine-component architecture + competitive differentiation
// §7.2 approved copy integrated verbatim
import type { Metadata } from 'next';
import Link from 'next/link';
import ComponentAccordion from '@/components/ComponentAccordion';
import { complianceComponents } from '@/lib/compliance-data';

export const metadata: Metadata = {
  title: 'Our Approach — The Architecture, Not the Audit | Synergistic Interaction',
  description:
    'The nine-component compliance architecture that turns regulatory obligation into category advantage. ISO 37301:2021 aligned. Built for Australian retail.',
  keywords: [
    'compliance architecture',
    'category management compliance',
    'ISO 37301',
    'nine-component framework',
    'Australian retail compliance',
  ],
};

// V7 §8.4: Three competitive differentiation signals — no named competitors
const differentiators = [
  {
    n: '1',
    title: 'Architectural, Not Operational',
    body: 'We design and implement the compliance framework — then train your team to operate it. The engagement ends when the architecture is embedded and your team can run it without us. A compliance operator running a poorly designed system produces compliance theatre. We build the system that makes the operator effective.',
  },
  {
    n: '2',
    title: 'ISO 37301:2021 Mapped — Not Aspirationally Aligned',
    body: 'Every component maps to a specific ISO 37301:2021 clause. This creates a documented, auditable compliance management system — not a collection of good practices with an ISO label attached. The distinction matters when a regulatory body asks for your compliance framework documentation.',
  },
  {
    n: '3',
    title: 'Compliance-by-Exception — Not Inspection Theatre',
    body: 'Nine structural barriers prevent non-compliant products from reaching the shelf. Products that pass all nine components are compliant by design — not by inspection after the fact. The compliance-by-exception model means exceptions are visible, documented, and resolved before commercial commitment is made.',
  },
];

// V7 §7.1: Five growth enablement arguments
const growthArguments = [
  {
    n: '01',
    title: 'Faster Range Decision-Making',
    body: 'When compliance verification runs in parallel with commercial negotiations — not after — purchase orders are issued without compliance delays. Pre-cleared categories move at commercial speed.',
  },
  {
    n: '02',
    title: 'Stronger Supplier Negotiation',
    body: 'A documented compliance architecture changes the negotiation dynamic. Suppliers who cannot meet the compliance requirements are identified before a commercial relationship begins — not after a product is on the shelf.',
  },
  {
    n: '03',
    title: 'Zero Enforcement Interruptions',
    body: 'Retailers with audit-ready compliance documentation face materially different regulatory outcomes. The compliance file is the defence. We build the file before enforcement makes the question urgent.',
  },
  {
    n: '04',
    title: 'Premium Buyer Positioning',
    body: 'ISO 37301:2021 compliance management alignment is a demonstrable capability signal. Retailers with documented compliance architecture negotiate from a structurally different position than those who cannot describe their compliance framework.',
  },
  {
    n: '05',
    title: 'Scalable Growth Architecture',
    body: 'The nine-component framework scales from a single store with 40–60 SKUs to a 330-store network. The methodology is identical. The compliance architecture you build for one category becomes the template for every category you add.',
  },
];

export default function OurApproachPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white tracking-tight">
            The Architecture, Not the Audit
          </h1>
          {/* V7 §7.2: Approved website copy — verbatim */}
          <p className="mt-6 text-lg text-si-white-muted leading-relaxed max-w-3xl mx-auto">
            Synergistic Interaction&apos;s compliance architecture is not designed to slow retailers down.
            It is designed to remove the compliance-related obstacles that slow them down — while competitors
            without compliance infrastructure reach the same obstacles unprepared.
          </p>
        </div>
      </section>

      {/* ISO 37301 alignment callout */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            id="iso-37301"
            className="bg-si-gold/5 border border-si-gold/20 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-si-gold/10 border border-si-gold/30 text-si-gold text-xs font-semibold uppercase tracking-wider">
                ISO 37301:2021
              </span>
            </div>
            <div>
              <p className="text-si-white font-medium mb-1">
                The international compliance management standard — mapped across all nine components.
              </p>
              <p className="text-si-white-muted text-sm leading-relaxed">
                Every component in the nine-component framework maps to a specific clause of ISO 37301:2021.
                This is not aspirational alignment. It is structural alignment — each clause is indicated on
                every component below.
              </p>
              <Link
                href="/why-compliance-matters#iso-37301"
                className="inline-flex items-center gap-1 mt-3 text-sm text-si-gold hover:text-si-gold-light transition-colors font-medium"
              >
                Why ISO 37301 matters for Australian retailers
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nine-component full accordion */}
      <section id="nine-components" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-2">The Nine-Component Framework</h2>
          <p className="text-si-white-muted mb-8">
            Each component addresses a specific compliance failure vector. All nine are required for a complete
            compliance architecture.
          </p>
          <ComponentAccordion components={complianceComponents} expandFirst />
        </div>
      </section>

      {/* Competitive differentiation — V7 §8.4 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-2">Why This Approach Is Different</h2>
          <p className="text-si-white-muted mb-10">
            Three structural distinctions that separate compliance architecture from compliance theatre.
          </p>
          <div className="space-y-6">
            {differentiators.map(({ n, title, body }) => (
              <div
                key={n}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-si-teal/10 border border-si-teal/30 flex items-center justify-center text-si-teal font-bold text-sm">
                    {n}
                  </span>
                  <div>
                    <h3 className="text-si-white font-semibold mb-2">{title}</h3>
                    <p className="text-si-white-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth enablement arguments — V7 §7.1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-2">Compliance as Growth Infrastructure</h2>
          <p className="text-si-white-muted mb-10">
            Five ways the nine-component framework enables category performance rather than constraining it.
          </p>
          <div className="space-y-6">
            {growthArguments.map(({ n, title, body }) => (
              <div key={n} className="flex gap-6 items-start">
                <span className="flex-shrink-0 text-3xl font-bold text-si-teal/30 w-12 text-right leading-tight pt-0.5">
                  {n}
                </span>
                <div className="border-l border-white/10 pl-6">
                  <h3 className="text-si-white font-semibold mb-1">{title}</h3>
                  <p className="text-si-white-muted leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4">Ready to Build the Architecture?</h2>
          <p className="text-si-white-muted mb-8 leading-relaxed">
            The engagement starts with a scoping conversation. No obligation. No compliance theatre.
            A structured discussion about your category portfolio and the specific compliance gaps it carries.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg-primary
                       font-semibold rounded-lg hover:bg-si-teal-light transition-colors
                       focus:outline-none focus:ring-2 focus:ring-si-teal focus:ring-offset-2 focus:ring-offset-si-bg-secondary"
          >
            Start the Scoping Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
