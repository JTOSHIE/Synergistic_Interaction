// Footer — compliance disclaimer
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Services: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Category Expertise', href: '/category-expertise' },
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
            <span className="text-si-white-dim text-xs px-2.5 py-1.5 border border-white/10 rounded">
              ISO 37301:2021
            </span>
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
              © 2025 Synergistic Interaction Pty Ltd — ABN 33 686 618 397. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <a
                href="https://www.abr.business.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-si-white-dim hover:text-si-teal transition-colors"
              >
                ABN: 33 686 618 397
              </a>
            </div>
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
