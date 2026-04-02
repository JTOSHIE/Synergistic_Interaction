// V7 §11.2: Component accordion with progressive disclosure + ISO 37301 badges
// Clicking ISO badge navigates to /why-compliance-matters#iso-37301
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ComplianceComponentData } from '@/lib/compliance-data';

interface ComponentAccordionProps {
  components: ComplianceComponentData[];
  expandFirst?: boolean;
  showViewAll?: boolean;
}

const RISK_TIER_COLOURS: Record<ComplianceComponentData['riskTier'], string> = {
  'Hard Gate': 'bg-red-500/15 text-red-400 border-red-500/20',
  'Preventative': 'bg-orange-500/15 text-orange-400 border-orange-500/20',
  'Monitoring': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  'Cultural': 'bg-purple-500/15 text-purple-400 border-purple-500/20',
};

export default function ComponentAccordion({ components, expandFirst = false, showViewAll = false }: ComponentAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(
    expandFirst && components[0] ? components[0].id : null
  );

  return (
    <>
    <div className="space-y-3" role="list">
      {components.map((component) => {
        const isOpen = openId === component.id;
        const componentNumber = String(component.id).padStart(2, '0');

        return (
          <div
            key={component.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-si-teal/30 bg-white/[0.06]'
                : 'border-white/10 bg-white/[0.03] hover:border-white/20'
            }`}
            role="listitem"
          >
            {/* Accordion trigger */}
            <button
              className="w-full flex items-start gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-inset"
              onClick={() => setOpenId(isOpen ? null : component.id)}
              aria-expanded={isOpen}
              aria-controls={`component-panel-${component.id}`}
            >
              {/* Number */}
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-si-teal/10 border border-si-teal/20 flex items-center justify-center text-si-teal text-xs font-mono font-bold">
                {componentNumber}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-si-white font-semibold">{component.name}</span>
                  {/* Risk tier badge */}
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded border ${RISK_TIER_COLOURS[component.riskTier]}`}
                  >
                    {component.riskTier}
                  </span>
                  {/* Draft indicator */}
                  {!component.approvedCopy && (
                    <span className="text-[10px] text-si-white-dim border border-white/10 rounded px-1.5 py-0.5">
                      Copy pending sign-off
                    </span>
                  )}
                </div>
                <p className="text-si-white-muted text-sm">{component.tagline}</p>
              </div>

              {/* ISO badge + chevron */}
              <div className="flex-shrink-0 flex items-center gap-2 ml-2">
                <Link
                  href="/why-compliance-matters#iso-37301"
                  onClick={(e) => e.stopPropagation()}
                  className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-si-teal/10 text-si-teal border border-si-teal/15 hover:bg-si-teal/20 transition-colors"
                  title={`ISO 37301 ${component.isoClause}: ${component.isoTitle}`}
                >
                  {component.isoClause}
                </Link>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={`text-si-white-dim transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            {/* Accordion panel */}
            <div
              id={`component-panel-${component.id}`}
              role="region"
              hidden={!isOpen}
              aria-labelledby={`component-trigger-${component.id}`}
            >
              <div className="px-6 pb-6 border-t border-white/5 pt-5">
                {/* Website copy */}
                <p className="text-si-white-muted leading-relaxed mb-6">{component.websiteCopy}</p>

                {/* Sub-components */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {component.subComponents.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <p className="text-si-white text-sm font-medium mb-1">{sub.title}</p>
                      <p className="text-si-white-dim text-xs leading-relaxed">{sub.description}</p>
                    </div>
                  ))}
                </div>

                {/* Prevention example */}
                {component.preventionExample && (
                  <div className="p-4 rounded-xl bg-si-teal/5 border border-si-teal/10">
                    <p className="text-si-teal text-xs font-semibold uppercase tracking-wide mb-2">
                      Prevention architecture
                    </p>
                    <p className="text-si-white-muted text-sm leading-relaxed italic">
                      {component.preventionExample}
                    </p>
                  </div>
                )}

                {/* ISO alignment footer */}
                <div className="mt-4 flex items-center gap-2 text-xs text-si-white-dim">
                  <span className="font-mono text-si-teal">{component.isoClause}</span>
                  <span>—</span>
                  <span>{component.isoTitle}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    {showViewAll && (
      <div className="text-center mt-6">
        <Link
          href="/our-approach"
          className="inline-flex items-center gap-2 text-si-teal hover:text-si-teal-light transition-colors text-sm font-medium"
        >
          View all nine components
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    )}
    </>
  );
}
