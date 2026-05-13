import { Link, useLocation } from 'react-router-dom';

const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Lawyers', to: '/lawyers' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
  {
    icon: <InstagramIcon />,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  const { pathname } = useLocation();
  const visibleNavLinks = navLinks.filter((link) => link.to !== pathname);

  return (
    <footer className="w-full mt-8 lg:px-12 border-[#2c244a]/10">
      {/* ── MOBILE / TABLET layout (hidden on lg+) ── */}
      <div className="lg:hidden flex flex-col w-full">
        {/* Top divider line */}
        <div className="w-full h-px bg-[#2c244a]/20" />

        {/* Tagline */}
        <div className="flex justify-center py-4">
          <p className="text-[#2c244a] text-sm font-semibold tracking-wide">
            Legal access, simplified.
          </p>
        </div>

        {/* Nav links row */}
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 pb-4 px-4">
          {visibleNavLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-[#2c244a] text-xs font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Divider line above social icons */}
        <div className="w-full h-px bg-[#2c244a]/20" />

        {/* Social icons */}
        <div className="flex justify-center items-center gap-6 py-5">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c244a] opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── DESKTOP layout (hidden below lg) ── */}
      <div className="hidden lg:flex items-end justify-between max-w-7xl mx-auto px-12 pt-7 pb-5 gap-6">
        {/* Left — tagline */}
        <div className="flex-1 flex items-end">
          <p className="text-[#2c244a] text-sm font-semibold tracking-wide whitespace-nowrap">
            Legal access, simplified.
          </p>
        </div>

        {/* Center — social icons */}
        <div className="flex-1 flex justify-center self-center -translate-y-1.5">
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c244a] opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — nav links */}
        <div className="flex-1 flex justify-end items-end">
          <nav
            aria-label="Footer navigation"
            className="flex items-center gap-6 flex-wrap justify-end"
          >
            {visibleNavLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-[#2c244a] text-xs font-medium tracking-wide whitespace-nowrap transition-opacity duration-200 opacity-80 hover:opacity-100"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Dark bottom bar (both layouts) ── */}
      <div className="w-full h-2 bg-[#1a1625]" />
    </footer>
  );
}
