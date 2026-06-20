// Target path in repo: app/approach/page.tsx
// Synergistic Interaction, Approach (AI-led repositioning)
// Server component. Uses the existing design tokens: si-bg, si-teal, si-teal-light, si-white, si-white-muted, si-gradient.
// Interactivity is isolated in the small client components under components/motion.

import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, PenLine, Hammer, Check, RefreshCw } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import FlowDiagram from '@/components/motion/FlowDiagram';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How we get AI working in your business, safely. A simple repeatable method, the right tools for your setup and budget, and a build-review-approve discipline that keeps your people and your judgement in charge.',
  alternates: { canonical: '/approach' },
};

const steps = [
  {
    number: '01',
    title: 'Discovery',
    body: 'We sit with your business and learn the actual work. Not the org chart, the real day to day. What your people do, what slows them down, and where the time goes.',
    Icon: Compass,
  },
  {
    number: '02',
    title: 'Specification',
    body: 'We write the brief that AI works from. Your language, your people and figures, your house style, your rules and your standards. You review it, and you own it.',
    Icon: PenLine,
  },
  {
    number: '03',
    title: 'Build',
    body: 'We build the workflows, templates and tools, and test them against your real work rather than a demo.',
    Icon: Hammer,
  },
  {
    number: '04',
    title: 'Build, review, approve',
    body: 'In daily use, AI produces and your expert reviews and approves. Only approved work goes out. AI accelerates, it does not replace.',
    Icon: Check,
  },
  {
    number: '05',
    title: 'Iterate',
    body: 'We tune the setup as the work shows us more. It improves with use, so you are never stuck with a one-off deployment.',
    Icon: RefreshCw,
  },
];

const platforms = [
  'Claude',
  'ChatGPT',
  'Microsoft Copilot',
  'Google Gemini',
  'Manus',
  'ElevenLabs',
];

const donts = [
  'We will not deploy AI to replace the judgement of your specialists.',
  'We will not run AI on work that matters without a human reviewing it.',
  'We will not build systems you cannot own and operate yourselves.',
  'We will not lock you into platforms you do not need.',
];

const faqs = [
  {
    q: 'What does it cost?',
    a: 'It starts with a fixed-price readiness assessment, so you know the cost of the first step up front. Beyond that, engagements are scoped to your business. Off-the-shelf tools are inexpensive, and Australian support such as the government AI Adoption Program and the instant asset write-off may apply to some of the spend. We will point you to what is relevant.',
  },
  {
    q: 'Is my data safe?',
    a: 'We configure tools to respect your privacy and confidentiality requirements and to keep your data where it is allowed to live. Where it is required, we work entirely inside your own environment.',
  },
  {
    q: 'Will this replace my staff?',
    a: 'No. The whole approach is built to keep your people in charge. AI takes the repetitive load so your team can spend more time on the work that needs a person.',
  },
  {
    q: 'How do you keep it accurate?',
    a: 'Nothing important goes out without a human review and sign-off, and we cross-check facts across more than one AI rather than trusting a single model.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ApproachPage() {
  return (
    <main>
      <JsonLd data={faqJsonLd} />
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
            Approach
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            How we get AI working in your business, safely
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            A simple, repeatable method. The right tools for your setup and
            budget. And a discipline that keeps your people, and your judgement,
            in charge of everything that matters.
          </p>
        </div>
      </section>

      {/* The method */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-12">The method</h2>
          </Reveal>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 70}>
                <div className="flex gap-5 sm:gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-si-teal/10 border border-si-teal/20 text-si-teal">
                      <s.Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="text-si-teal text-xs font-semibold tracking-widest mt-2">
                      {s.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-si-white font-semibold text-lg mb-1">{s.title}</h3>
                    <p className="text-si-white-muted text-sm sm:text-base leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Build review approve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="p-8 sm:p-10 rounded-2xl border border-si-teal/30 bg-si-teal/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
                The rule that keeps you safe: AI builds, your expert approves
              </h2>
              <p className="text-si-white-muted leading-relaxed">
                This is the discipline at the centre of everything we do. AI
                produces the work to the standard you would expect of the final
                product. The person accountable reviews it, corrects it, and signs
                it off, or rejects it. Only approved work goes downstream. Your
                specialists keep their time for judgement and advice instead of
                spending it on the volume of production. It is also what makes AI
                safe in a business where accuracy and accountability matter, and it
                matches the human oversight principle at the heart of the national
                AI ethics framework in Australia.
              </p>
            </div>
          </Reveal>
          <div className="mt-8">
            <Reveal>
              <FlowDiagram variant="full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bespoke vs generic */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              Bespoke, not bolted on
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              Generic AI tools out of the box produce generic output. The same
              model, configured to your business, your terminology, your standards
              and your workflows, produces something else entirely. That
              configuration is the work, and it is the difference between staff
              dabbling with AI and a business genuinely running on it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tools as judgement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              The right tool for you, not the one we happen to sell
            </h2>
            <p className="text-si-white-muted leading-relaxed max-w-2xl mb-8">
              We are platform-aware, not platform-loyal. We choose the model that
              fits your constraints, your budget, and where your data is allowed to
              live. If your business runs on Microsoft 365, that often means
              Copilot. If you are on Google Workspace, Gemini. For heavy document
              and reasoning work, Claude. Often it is a mix, with cheaper models for
              the routine work and the stronger ones kept for where they earn their
              cost.
            </p>
            <div className="flex flex-wrap gap-3">
              {platforms.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-si-white-muted text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-si-white-muted text-xs mt-4">Among the platforms we work across.</p>
          </Reveal>
        </div>
      </section>

      {/* Governance and data */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              Governance and your data
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              We work inside your data environment where that is required, and we
              configure tools to respect privacy, confidentiality, and where your
              data can live. You own the systems we build, and you are never locked
              into platforms you do not need. Under the updated Australian Privacy
              Act, businesses must be transparent about automated decision-making,
              and the national AI ethics framework sets human oversight, fairness,
              accountability and transparency as the standard. We build to that
              standard from the start, rather than bolting it on later.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we will not do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-8">
              What we will not do
            </h2>
            <ul className="space-y-4">
              {donts.map((d) => (
                <li key={d} className="flex gap-3 text-si-white-muted leading-relaxed">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-si-teal mt-2 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-10">Common questions</h2>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <div>
                  <h3 className="text-si-white font-semibold mb-2">{f.q}</h3>
                  <p className="text-si-white-muted text-sm sm:text-base leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-si-white mb-5">See where AI fits your business</h2>
            <p className="text-si-white-muted leading-relaxed mb-10">
              The readiness assessment is the place to start. Fixed price, plain
              English, no lock-in.
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
