// V7 §11: Get Started page — contact form with category multi-select, phase overview, FAQ
// V7 §7.2: Approved copy integrated; form handled by /api/contact
import type { Metadata } from 'next';
import GetStartedForm from './GetStartedForm';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Get Started — Scoping Conversation | Synergistic Interaction',
  description:
    'Start with a structured scoping conversation. Identify your category compliance obligations, quantify penalty exposure, and receive a documented Phase 0 output.',
};

// V7 §3: Five-phase engagement overview — two days per week, thirteen weeks, 208 hours
const phases = [
  {
    n: '0',
    label: 'Scoping',
    duration: 'Free — structured conversation',
    description:
      'Website established and live. The professional foundation is in place for the engagement conversation to begin.',
    highlight: true,
  },
  {
    n: '1',
    label: 'Market & Supplier Intelligence',
    duration: 'Weeks 1–2',
    description:
      'Market research, competitive benchmarking, regulatory mapping, and supplier landscape assessment. The factual foundation every category decision is built on.',
  },
  {
    n: '2',
    label: 'Range Architecture',
    duration: 'Weeks 3–5',
    description:
      'SKU selection using sell-through data, margin analysis, and compliance scoring. Range structure, category map, and supplier shortlist produced.',
  },
  {
    n: '3',
    label: 'Commercial Negotiation & Compliance Verification',
    duration: 'Weeks 6–9',
    description:
      'Supplier negotiation, contract terms, compliance file initiation, and full nine-component verification for every ranged product.',
  },
  {
    n: '4',
    label: 'Planogram, Reporting & Merchandising',
    duration: 'Weeks 10–11',
    description:
      'Bay layout, product placement, planogram production, GMROI and OSA reporting infrastructure activated. Staff training materials prepared.',
  },
  {
    n: '5',
    label: 'Launch, Monitoring & Stabilisation',
    duration: 'Weeks 12–13',
    description:
      'Consultant on-site for launch day. Planogram installed correctly. Stock rotated. Weekly GMROI and OSA monitoring live from week one.',
  },
];

export default function GetStartedPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white tracking-tight">
            Start the Scoping Conversation
          </h1>
          <p className="mt-6 text-lg text-si-white-muted leading-relaxed max-w-2xl mx-auto">
            The engagement starts with Phase 0 — a structured scoping conversation at no cost.
            You receive a documented output. We identify whether the engagement is the right fit.
          </p>
        </div>
      </section>

      {/* Form + phase overview */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div>
            <GetStartedForm />
          </div>

          {/* Phase overview */}
          <div>
            <h2 className="text-xl font-bold text-si-white mb-2">The Five-Phase Engagement</h2>
            <p className="text-sm text-si-white-muted mb-6">Two days per week · Thirteen weeks · 208 hours total</p>
            <div className="space-y-4">
              {phases.map((phase) => (
                <div
                  key={phase.n}
                  className={`rounded-xl p-5 border transition-colors ${
                    phase.highlight
                      ? 'bg-si-teal/5 border-si-teal/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        phase.highlight
                          ? 'bg-si-teal/20 border border-si-teal/50 text-si-teal'
                          : 'bg-white/10 border border-white/20 text-si-white-muted'
                      }`}
                    >
                      {phase.n}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="font-semibold text-si-white">{phase.label}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border ${
                            phase.highlight
                              ? 'bg-si-teal/10 border-si-teal/30 text-si-teal'
                              : 'bg-white/5 border-white/10 text-si-white-dim'
                          }`}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-sm text-si-white-muted leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment + scale note */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-si-white mb-2">Investment and scale</h3>
              <p className="text-sm text-si-white-muted leading-relaxed mb-3">
                The investment is sized relative to the penalty exposure and margin opportunity in your category.
              </p>
              <p className="text-sm text-si-white-muted leading-relaxed">
                The nine-component architecture scales from a single store with 40–60 SKUs to a 330-store
                network. The methodology is identical. Each subsequent store implementation takes a fraction
                of the pilot investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-4 pb-20 bg-si-bg-secondary">
        <FAQ />
      </section>
    </>
  );
}
