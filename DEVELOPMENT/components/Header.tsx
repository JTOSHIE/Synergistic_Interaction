// Header with logo, desktop nav, mobile hamburger, language toggle
// V7 Non-Negotiable Absolute #2: "Change Language 中文" always visible in English header
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/why-compliance-matters', label: 'Why Compliance Matters' },
  { href: '/get-started', label: 'Get Started' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isZh = pathname?.startsWith('/zh');

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-si-bg/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal rounded" aria-label="Synergistic Interaction — Home">
          <Image
            src="/logo.svg"
            alt="Synergistic Interaction"
            width={200}
            height={33}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal ${
                  isActive
                    ? 'text-si-teal bg-si-teal/10'
                    : 'text-si-white-muted hover:text-si-white hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: language toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* V7 Non-Negotiable Absolute #2 — ALWAYS visible */}
          <Link
            href={isZh ? '/' : '/zh'}
            className="hidden sm:flex items-center gap-1.5 text-xs text-si-white-muted hover:text-si-teal transition-colors border border-white/10 rounded px-2.5 py-1.5 hover:border-si-teal/30"
            lang={isZh ? 'en' : 'zh-Hans'}
            aria-label={isZh ? 'Switch to English' : 'Switch to Mandarin Chinese'}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75"/>
              <path d="M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5M1 6h10" stroke="currentColor" strokeWidth="0.75"/>
            </svg>
            {isZh ? 'English' : '中文'}
          </Link>

          <Link
            href="/get-started"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-si-teal text-si-bg text-sm font-semibold rounded-lg hover:bg-si-teal-light transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-si-white-muted hover:text-si-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-si-bg/98 backdrop-blur-md" role="dialog" aria-label="Mobile navigation">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive ? 'text-si-teal bg-si-teal/10' : 'text-si-white-muted hover:text-si-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 flex items-center gap-3 border-t border-white/5 mt-3">
              <Link
                href={isZh ? '/' : '/zh'}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-si-white-muted border border-white/10 rounded-xl"
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75"/>
                  <path d="M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5M1 6h10" stroke="currentColor" strokeWidth="0.75"/>
                </svg>
                {isZh ? 'English' : '中文'}
              </Link>
              <Link
                href="/get-started"
                className="flex-1 flex items-center justify-center py-2.5 bg-si-teal text-si-bg text-sm font-semibold rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
