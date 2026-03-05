// V7 §5: Client-side wrapper for WebGPU ComplianceVisualization
// Required because ssr:false with next/dynamic is only allowed in Client Components
'use client';

import dynamic from 'next/dynamic';

const ComplianceVisualization = dynamic(
  () => import('@/components/ComplianceVisualization'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-si-bg-secondary rounded-2xl animate-pulse" />
    ),
  }
);

export default function VisualizationWrapper() {
  return <ComplianceVisualization />;
}
