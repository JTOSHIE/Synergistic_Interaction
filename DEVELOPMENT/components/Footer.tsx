// Footer — V7 brief: four pages, language toggle, compliance disclaimer
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Services: [
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Why Compliance Matters', href: '/why-compliance-matters' },
    { label: 'Get Started', href: '/get-started' },
  ],
  Regulatory: [
    { label: 'ACCC', href: 'https://www.accc.gov.au', external: true },
    { label: 'Consumer Affairs Victoria', href: 'https://www.consumer.vic.gov.au', external: true },
    { label: 'Energy Safe Victoria', href: 'https://www.esv.vic.gov.au', external: true },
    { label: 'TGA', href: 'https://www.tga.gov.au', external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-si-bg-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="Synergistic Interaction — Home">
              <Image
                src="/logo.svg"
                alt="Synergistic Interaction"
                width={180}
                height={30}
                className="h-7 w-auto mb-4"
              />
            </Link>
            <p className="text-si-white-muted text-sm leading-relaxed max-w-xs mb-6">
              Compliance-first category management architecture for Australian retailers. ISO 37301:2021 aligned.
              Nine-component framework.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/zh"
                className="inline-flex items-center gap-1.5 text-xs text-si-white-dim hover:text-si-teal transition-colors border border-white/10 rounded px-2.5 py-1.5 hover:border-si-teal/30"
                lang="zh-Hans"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75"/>
                  <path d="M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5M1 6h10" stroke="currentColor" strokeWidth="0.75"/>
                </svg>
                中文版本
              </Link>
              <span className="text-si-white-dim text-xs px-2.5 py-1.5 border border-white/10 rounded">
                ISO 37301:2021
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-si-white text-xs font-semibold uppercase tracking-widest mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-si-white-muted text-sm hover:text-si-teal transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                          <path d="M1.5 7.5l6-6M3.5 1.5h4v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-si-white-muted text-sm hover:text-si-teal transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-si-white-dim text-xs">
              © {year} Synergistic Interaction. ABN: [pending registration].
              All rights reserved. synergisticinteraction.com.au
            </p>
            <p className="text-si-white-dim text-xs max-w-sm">
              This website contains general information only. It does not constitute legal, regulatory, or compliance
              advice. Engage Synergistic Interaction for advice specific to your circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
