import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach — Nine-Component Compliance Architecture',
  description: 'The nine-component compliance-by-exception architecture. ISO 37301:2021 aligned. Built for Australian retail category management at every scale.',
  openGraph: {
    title: 'Our Approach — Synergistic Interaction',
    description: 'Nine-component compliance architecture. ISO 37301 aligned. Implementation, not advice.',
  },
};

export default function OurApproachLayout({ children }: { children: React.ReactNode }) {
  return children;
}
