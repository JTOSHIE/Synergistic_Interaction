// Target path in repo: app/category-management/page.tsx
// Synergistic Interaction, Category Management practice page.
// Server component. Positions category management as a specialist practice
// alongside the AI adoption work, restrained and credible, no client names.
// Uses the existing design tokens and the shared Reveal motion component.

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LayoutGrid,
  Ruler,
  Handshake,
  TrendingUp,
  FlaskConical,
  BarChart3,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import JsonLd from '@/components/JsonLd';
import { BASE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Category Management',
  description:
    'Specialist category management for retailers and suppliers. Range, space, price and negotiation, backed by 25 years across four countries and delivered with AI carrying the analysis.',
  alternates: { canonical: '/category-management' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Category Management',
  serviceType: 'Category management consulting',
  url: `${BASE_URL}/category-management`,
  areaServed: 'Australia',
  provider: {
    '@type': 'Organization',
    name: 'Synergistic Interaction Pty Ltd',
    url: BASE_URL,
  },
  description:
    'Category strategy, range architecture, planogram and space planning, pricing and margin design, supplier and retailer negotiation support, pilot programs and performance review for retailers and suppliers.',
};

const practiceAreas = [
  {
    title: 'Category strategy and range architecture',
    body: 'What the category is for, which segments and price tiers earn their space, and which lines carry the weight. Fewer lines working hard beats many lines working poorly.',
    Icon: LayoutGrid,
  },
  {
    title: 'Planogram and space planning',
    body: 'Layouts built to real fixture dimensions, facings weighted to velocity, and stock weight where it sells. Delivered ready for store teams to execute, not as theory.',
    Icon: Ruler,
  },
  {
    title: 'Supplier and retailer partnership',
    body: 'Preparation and negotiation support on either side of the table. Terms, pricing structures, joint plans and the numbers to back every position.',
    Icon: Handshake,
  },
  {
    title: 'Pricing and margin architecture',
    body: 'Entry price logic, competitor benchmarking and margin floors that hold under pressure. Price positions designed on purpose, not inherited by accident.',
    Icon: TrendingUp,
  },
  {
    title: 'Pilot programs and rollout',
    body: 'Prove the category in one store with clear success measures, then replicate what works across the network. Small bets first, scale second.',
    Icon: FlaskConical,
  },
  {
    title: 'Performance review cadence',
    body: 'Weekly and monthly review packs covering sell-through, stock weight and margin. Built to produce decisions, not just data.',
    Icon: BarChart3,
  },
];

const stats = [
  { value: 25, plus: false, label: 'Years of category management' },
  { value: 3500, plus: true, label: 'Stores reached by our first platform' },
  { value: 330, plus: true, label: 'Stores in the national network' },
];

export default function CategoryManagementPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd} />

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
            Specialist practice
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Category management for retailers and suppliers
          </h1>
          <p className="text-lg text-si-white-muted leading-relaxed">
            Twenty-five years of range, space, price and negotiation across
            Australia, New Zealand, the USA and the UK. Now delivered with AI
            carrying the analysis and a category veteran making the calls.
          </p>
        </div>
      </section>

      {/* Who it serves */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                For retailers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-si-white mt-2 mb-3">
                Make the shelf pay its way
              </h2>
              <p className="text-si-white-muted leading-relaxed">
                From independent stores to national networks. We build the
                category plan, the range, the layout and the price architecture,
                then prove it on the shelf before it scales.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-si-teal text-xs font-semibold tracking-widest uppercase">
                For suppliers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-si-white mt-2 mb-3">
                Win the range review
              </h2>
              <p className="text-si-white-muted leading-relaxed">
                Getting ranged, growing distribution and executing at shelf. We
                prepare the numbers, the story and the terms, and sit on your
                side of the table.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-12">
              What the practice covers
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 60} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-si-teal/10 border border-si-teal/20 text-si-teal mb-4">
                    <area.Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-si-white font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-si-white-muted text-sm leading-relaxed">{area.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-6">
              A track record, not a pitch
            </h2>
            <p className="text-si-white-muted leading-relaxed mb-12">
              The practice began with building one of the world&apos;s first
              real-time, web-based category management platforms, deployed
              across more than 3,500 stores in the USA with results
              independently validated by Cornell University, which measured a
              sustained lift in daily sales across the stores that adopted it.
              It grew into running category management across a national
              network of more than 330 stores, spanning more than 2,000
              products and 20 global suppliers. That experience now runs
              through every engagement.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-si-teal mb-2">
                    <CountUp value={stat.value} plus={stat.plus} />
                  </div>
                  <p className="text-si-white-muted text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How AI fits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              The analysis is faster. The accountability has not moved.
            </h2>
            <p className="text-si-white-muted leading-relaxed">
              The practice runs on the same build, review, approve discipline as
              the rest of our work. AI-assisted range analysis, planogram
              tooling and weekly review packs carry the volume. Twenty-five
              years of category judgement decides what goes on the shelf, at
              what price, and why.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-si-white mb-5">
              Talk to us about your category
            </h2>
            <p className="text-si-white-muted leading-relaxed mb-10">
              Whether you are a retailer with space to make work harder, or a
              supplier with a range to land, the first conversation costs you
              nothing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
