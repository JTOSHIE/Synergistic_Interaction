// FlowDiagram: the build, review, approve idea as a clean on-brand visual.
// Three stages, AI produces the work, the accountable person reviews and
// approves, only approved work goes out. Horizontal flow on desktop, vertical
// flow on mobile, with a gentle dot flowing along the connectors. Under
// prefers-reduced-motion the connectors render as plain static lines with no
// movement. Reveal on scroll is handled by wrapping this component in Reveal
// at the call site.
'use client';

import { Fragment } from 'react';
import { useReducedMotion } from './useReducedMotion';

type Variant = 'full' | 'compact';

function IconProduce() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function IconReview() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconRelease() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stages = [
  { title: 'AI produces', body: 'Drafts the work to your standard.', icon: <IconProduce /> },
  { title: 'Human reviews', body: 'The accountable person checks and approves.', icon: <IconReview /> },
  { title: 'Work goes out', body: 'Only approved work is released.', icon: <IconRelease /> },
];

function Connector({ animated }: { animated: boolean }) {
  return (
    <>
      {/* Horizontal connector, desktop */}
      <div className="relative hidden md:flex items-center w-10 shrink-0 self-center" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-si-teal/20 via-si-teal/50 to-si-teal/20" />
        {animated && (
          <span className="si-flow-dot-x absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-si-teal shadow-[0_0_8px_rgba(0,201,167,0.85)]" />
        )}
      </div>
      {/* Vertical connector, mobile */}
      <div className="relative flex md:hidden self-center h-7 w-px my-1" aria-hidden="true">
        <div className="h-full w-px bg-gradient-to-b from-si-teal/20 via-si-teal/50 to-si-teal/20" />
        {animated && (
          <span className="si-flow-dot-y absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-si-teal shadow-[0_0_8px_rgba(0,201,167,0.85)]" />
        )}
      </div>
    </>
  );
}

export default function FlowDiagram({ variant = 'full' }: { variant?: Variant }) {
  const reduced = useReducedMotion();
  const animated = !reduced;
  const compact = variant === 'compact';

  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      {stages.map((stage, index) => (
        <Fragment key={stage.title}>
          <div
            className={`flex-1 rounded-2xl border border-si-teal/15 bg-white/5 text-center ${
              compact ? 'p-4 sm:p-5' : 'p-6'
            }`}
          >
            <div
              className={`mx-auto mb-3 flex items-center justify-center rounded-xl bg-si-teal/10 border border-si-teal/20 text-si-teal ${
                compact ? 'h-9 w-9' : 'h-11 w-11'
              }`}
            >
              {stage.icon}
            </div>
            <h3 className={`text-si-white font-semibold ${compact ? 'text-sm mb-1' : 'mb-1'}`}>
              {stage.title}
            </h3>
            <p className={`text-si-white-muted leading-relaxed ${compact ? 'text-xs' : 'text-sm'}`}>
              {stage.body}
            </p>
          </div>
          {index < stages.length - 1 && <Connector animated={animated} />}
        </Fragment>
      ))}
    </div>
  );
}
