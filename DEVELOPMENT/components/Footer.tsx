// Footer — AI-led repositioning
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Approach', href: '/approach' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Insights', href: '/insights' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-si-bg-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
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
            <p className="text-si-white-muted text-sm leading-relaxed max-w-md">
              Synergistic Interaction helps established Australian businesses and
              practices adopt AI the practical way. Bespoke systems, the right
              tools, staff trained, and a human always in the loop.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-si-white text-xs font-semibold uppercase tracking-widest mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-si-white-muted text-sm hover:text-si-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-si-white-dim text-xs">
              © 2026 Synergistic Interaction Pty Ltd, ABN 33 686 618 397. All rights reserved.
            </p>
            <p className="text-si-white-dim text-xs max-w-md">
              Synergistic Interaction Pty Ltd provides AI adoption advisory and
              implementation services. Information on this site is general in
              nature and is not legal, financial or other professional advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
