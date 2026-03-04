// V7 §6 + §12: Header with language toggle
// NON-NEGOTIABLE: "Change Language 中文" must be visible at all times in English mode
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/why-compliance-matters', label: 'Why Compliance Matters' },
  { href: '/get-started', label: 'Get Started' },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // V7 §6: Language toggle handler
  const handleLanguageToggle = () => {
    // TODO: Implement next-i18next locale switching
    // router.push(pathname, pathname, { locale: currentLocale === 'en' ? 'zh' : 'en' });
    console.log('Language toggle — implement with next-i18next');
  };

  return (
    <header className="sticky top-0 z-50 bg-si-bg-primary/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-si-white hover:text-si-teal transition-colors flex-shrink-0"
            aria-label="Synergistic Interaction — Home"
          >
            Synergistic Interaction
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-si-teal'
                    : 'text-si-white-muted hover:text-si-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* V7 §6 + §12: Language toggle — ALWAYS VISIBLE in English mode */}
            <button
              onClick={handleLanguageToggle}
              className="text-sm font-medium text-si-teal hover:text-si-teal-light transition-colors"
              aria-label="Switch to Chinese language"
            >
              Change Language 中文
            </button>
            <Link
              href="/get-started"
              className="px-4 py-2 bg-si-teal text-si-bg-primary text-sm font-semibold
                         rounded-lg hover:bg-si-teal-light transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile: Language Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            {/* V7 §12: Language toggle visible on mobile too */}
            <button
              onClick={handleLanguageToggle}
              className="text-xs font-medium text-si-teal hover:text-si-teal-light transition-colors"
              aria-label="Switch to Chinese language"
            >
              中文
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-si-white-muted hover:text-si-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-si-bg-primary border-t border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-si-teal bg-si-teal/10'
                    : 'text-si-white-muted hover:text-si-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/5">
              <button
                onClick={handleLanguageToggle}
                className="w-full py-3 px-4 rounded-lg text-sm font-medium text-si-teal
                           hover:bg-si-teal/10 transition-colors text-left"
              >
                Change Language 中文
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
