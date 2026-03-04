// V7 §11: Footer component
import Link from 'next/link';

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/our-approach', label: 'Our Approach' },
    { href: '/why-compliance-matters', label: 'Why Compliance Matters' },
    { href: '/get-started', label: 'Get Started' },
  ],
  Framework: [
    { href: '/our-approach#nine-components', label: 'Nine-Component Framework' },
    { href: '/why-compliance-matters#iso-37301', label: 'ISO 37301 Alignment' },
    { href: '/why-compliance-matters#regulatory-feed', label: 'Regulatory Intelligence' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-si-bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-bold text-si-white hover:text-si-teal transition-colors"
            >
              Synergistic Interaction
            </Link>
            <p className="mt-3 text-sm text-si-white-muted leading-relaxed">
              Compliance-first category management consultancy.
              ISO 37301:2021 aligned. Australian retail specialists.
            </p>
            {/* ISO 37301 badge */}
            <Link
              href="/why-compliance-matters#iso-37301"
              className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                         bg-si-gold/10 border border-si-gold/30 text-si-gold
                         text-xs font-semibold uppercase tracking-wider
                         hover:bg-si-gold/20 transition-colors"
            >
              ISO 37301 Aligned
            </Link>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-si-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-si-white-muted hover:text-si-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row
                        justify-between items-center gap-4">
          <p className="text-xs text-si-white-dim">
            © {new Date().getFullYear()} Synergistic Interaction. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* V7 §6: Language toggle in footer */}
            <button className="text-xs text-si-teal hover:text-si-teal-light transition-colors">
              Change Language 中文
            </button>
            <Link
              href="/get-started"
              className="text-xs text-si-white-muted hover:text-si-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
