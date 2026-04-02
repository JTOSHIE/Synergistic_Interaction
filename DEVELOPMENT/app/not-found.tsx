import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — Synergistic Interaction',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl font-bold text-si-teal/20 mb-4 font-mono">404</div>
        <h1 className="text-2xl font-bold text-si-white mb-4">Page Not Found</h1>
        <p className="text-si-white-muted mb-8 leading-relaxed">
          This page doesn&apos;t exist or has been moved. The compliance architecture, however, is exactly where you left it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors">
            Return Home
          </Link>
          <Link href="/get-started" className="px-6 py-3 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
