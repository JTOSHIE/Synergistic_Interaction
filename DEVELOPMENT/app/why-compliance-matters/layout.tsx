import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Compliance Matters — The $50M Equation',
  description: 'The case for compliance-first retail growth. 1,736× minimum ROI. ISO 37301 aligned. Live regulatory intelligence from ACCC, CAV, TGA, ESV.',
  openGraph: {
    title: 'Why Compliance Matters — Synergistic Interaction',
    description: 'The $50M equation. 1,736× ROI. Compliance is the licence to go faster.',
  },
};

export default function WhyComplianceMattersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
