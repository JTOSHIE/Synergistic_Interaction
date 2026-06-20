// Header with logo, desktop nav, mobile hamburger
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/approach', label: 'Approach' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
        <Link href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal rounded" aria-label="Synergistic Interaction, Home">
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
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal ${
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

        {/* Right side: CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-si-teal text-si-bg text-sm font-semibold rounded-lg hover:bg-si-teal-light transition-colors"
          >
            Book an Assessment
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-si-white-muted hover:text-si-white hover:bg-white/5 transition-colors"
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
        <div className="lg:hidden border-t border-white/10 bg-si-bg/98 backdrop-blur-md" role="dialog" aria-label="Mobile navigation">
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
                href="/contact"
                className="flex-1 flex items-center justify-center py-2.5 bg-si-teal text-si-bg text-sm font-semibold rounded-xl"
              >
                Book an Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
