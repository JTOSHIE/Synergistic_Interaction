// V7 §2 + §3: ComponentAccordion — nine-component compliance framework display
// V7 §11: Progressive disclosure pattern with glassmorphism accents
'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ComplianceComponentData } from '@/lib/compliance-data';

interface ComponentAccordionProps {
  components: ComplianceComponentData[];
  showViewAll?: boolean;
  defaultOpen?: number | null;
}

export default function ComponentAccordion({
  components,
  showViewAll = false,
  defaultOpen = null,
}: ComponentAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {components.map((component, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={component.id}
            // V7 §11: Glassmorphism card design
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden
                       transition-colors hover:border-white/20"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`component-${component.id}-content`}
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Component number */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-si-teal/10 border border-si-teal/30
                                 flex items-center justify-center text-si-teal text-sm font-bold">
                  {component.id}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-si-white truncate">{component.name}</h3>
                  {!isOpen && (
                    <p className="text-sm text-si-white-muted mt-0.5 truncate">{component.tagline}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                {/* V7 §11: ISO 37301 badge — links to /why-compliance-matters */}
                <Link
                  href="/why-compliance-matters#iso-37301"
                  onClick={(e) => e.stopPropagation()}
                  className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                             bg-si-gold/10 border border-si-gold/30 text-si-gold
                             text-xs font-semibold uppercase tracking-wider
                             hover:bg-si-gold/20 transition-colors"
                  aria-label={`ISO 37301 Clause ${component.isoClause} — ${component.isoDescription}`}
                >
                  ISO §{component.isoClause}
                </Link>
                {/* Chevron */}
                <svg
                  className={`w-5 h-5 text-si-white-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Expandable content */}
            {isOpen && (
              <div
                id={`component-${component.id}-content`}
                className="px-5 pb-5 border-t border-white/5"
              >
                {/* ISO 37301 alignment callout */}
                <div className="mt-4 flex items-center gap-2">
                  <Link
                    href="/why-compliance-matters#iso-37301"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                               bg-si-gold/10 border border-si-gold/30 text-si-gold
                               text-xs font-semibold uppercase tracking-wider
                               hover:bg-si-gold/20 transition-colors"
                  >
                    ISO 37301:{component.isoClause} — {component.isoDescription}
                  </Link>
                </div>

                {/* V7 §3.3: Website copy — replace placeholder with actual brief copy */}
                <p className="mt-4 text-si-white-muted leading-relaxed">
                  {component.websiteCopy}
                </p>

                {/* Sub-components */}
                <div className="mt-4">
                  <h4 className="text-xs font-semibold text-si-white uppercase tracking-wider mb-2">
                    Framework Elements
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {component.subComponents.map((sub) => (
                      <li key={sub} className="flex items-center gap-2 text-sm text-si-white-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-si-teal flex-shrink-0" aria-hidden="true" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {showViewAll && (
        <div className="text-center pt-4">
          <Link
            href="/our-approach#nine-components"
            className="inline-flex items-center gap-2 text-si-teal hover:text-si-teal-light
                       transition-colors font-medium"
          >
            Explore All Nine Components
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
