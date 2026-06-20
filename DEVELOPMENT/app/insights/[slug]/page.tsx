// Target path in repo: app/insights/[slug]/page.tsx
// Insights article page. Server component. Uses the existing design tokens and the
// shared Reveal motion component. Content comes from app/insights/articles.ts.

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/motion/Reveal';
import { articles, getArticle } from '../articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      {/* Header */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-si-gradient" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(0,201,167,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-si-white-muted text-sm hover:text-si-teal transition-colors mb-6"
          >
            &larr; All insights
          </Link>
          <p className="text-si-teal text-xs font-semibold tracking-widest uppercase mb-4">
            {article.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-si-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-2xl mx-auto">
          {article.blocks.map((block, i) =>
            block.type === 'h2' ? (
              <Reveal key={i}>
                <h2 className="text-xl sm:text-2xl font-bold text-si-white mt-10 mb-4">
                  {block.text}
                </h2>
              </Reveal>
            ) : (
              <Reveal key={i}>
                <p className="text-si-white-muted leading-relaxed mb-5 text-base sm:text-lg">
                  {block.text}
                </p>
              </Reveal>
            ),
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">
              See where AI fits your business
            </h2>
            <p className="text-si-white-muted leading-relaxed mb-8">
              The AI Readiness Assessment is a fixed-price first step. Plain English,
              no lock-in, no pressure.
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
