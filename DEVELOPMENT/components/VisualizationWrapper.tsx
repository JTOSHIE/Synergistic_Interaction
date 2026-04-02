'use client';

import dynamic from 'next/dynamic';

const ComplianceVisualization = dynamic(
  () => import('@/components/ComplianceVisualization'),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full aspect-video rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="text-si-white-dim text-sm">Loading visualisation...</div>
      </div>
    ),
  }
);

export default function VisualizationWrapper() {
  return <ComplianceVisualization />;
}
