import React, { useState } from 'react';
import image from '../assets/images/Rectangle 59385.jpg';

// ── Colour tokens ──────────────────────────────────────────────────────────────
const GOLD = '#C8922A';
const DARK = '#1C1C2E';
const MUTED = '#4A4A5A';

// ── Core values data — each item has its own middle-panel quote ───────────────
const VALUES = [
  {
    label: 'Clarity',
    quote:
      'We simplify complexity. Legal processes should be understood, not feared.',
    pillColor: '#E8D5A3',
  },
  {
    label: 'Structure',
    quote:
      'We bring order to legal access. Every interaction on LYNC is designed to be intentional and organized.',
    pillColor: '#DFC98A',
  },
  {
    label: 'Trust',
    quote:
      'We prioritize reliability and transparency. Users should feel confident in every connection they make.',
    pillColor: '#D4BC72',
  },
  {
    label: 'Accessibility',
    quote:
      'Legal support should be within reach . We design for real people and real businesses.',
    pillColor: '#CEAD5A',
  },
  {
    label: 'Integrity',
    quote:
      'We  operate with honesty and responsiibility. We respect the importance of legal systems and the people who rely on them.',
    pillColor: '#C8A045',
  },
  {
    label: 'Progress',
    quote:
      'We build for a better legal experience. We continously improve how legal services are accesed and delivered',
    pillColor: '#BD9030',
  },
];

const BADGES = [
  'Verified lawyer profiles',
  'Clear, structured user experience',
  'Built with the Nigerian legal landscape',
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function CoreValuesSection() {
  // null = no selection, shows placeholder middle panel
  const [active, setActive] = useState(null);

  const activeValue = VALUES.find((v) => v.label === active) || null;

  return (
    <section className="w-full py-2 pb-12">
      <div className="max-w-[1180px] mx-auto px-10">
        {/* MOBILE LAYOUT */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Title + Core value buttons with background wrapper */}
          <div className="bg-[#221e57]/14 rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-3xl text-accent font-bold text-center mb-3">
              Our Core Values
            </h2>

            {/* Core value buttons — stacked */}
            {VALUES.map((v) => {
              const isActive = active === v.label;
              return (
                <button
                  key={v.label}
                  onClick={() => setActive(isActive ? null : v.label)}
                  className="w-full rounded-lg bg-[#f5a210]/14 text-left px-4 py-3 text-primary font-bold text-sm transition-all duration-200"
                >
                  {v.label}
                </button>
              );
            })}
          </div>

          {/* Quote area */}
          <div className="min-h-[10rem] max-h-[14rem] flex items-center px-4 rounded-2xl bg-[#f5a210]/14 justify-center transition-all duration-300">
            {activeValue ? (
              <p className="text-center text-primary font-bold leading-snug">
                {activeValue.quote}
              </p>
            ) : (
              <p className="text-center text-primary font-bold leading-snug text-sm">
                Hover over or click a core value to see what it means to us
              </p>
            )}
          </div>

          {/* Built for trust section */}
          <div className="mt-4">
            <h3 className="text-xl text-primary font-bold text-center mb-2">
              Built for trust and simplicity
            </h3>
            <p className="text-sm text-center text-lightBlue mb-5">
              LYNC is designed to make legal access more transparent, more
              structured, and easier to navigate
            </p>

            {/* Badges and Image side by side - pills centered, image on side */}
            <div className="flex gap-4 items-center justify-center">
              {/* Badges stacked in center */}
              <div className="flex flex-col justify-center items-center gap-3">
                {BADGES.map((badge, idx) => {
                  const widths = ['w-[180px]', 'w-[220px]', 'w-[240px]'];
                  return (
                    <span
                      key={`side-${badge}`}
                      className={`${widths[idx]} px-3 py-2 text-[#515151] border-accent bg-white text-xs font-semibold border text-center`}
                      style={{ borderRadius: '8px' }}
                    >
                      {badge}
                    </span>
                  );
                })}
              </div>

              {/* Image on the side */}
              <div className="rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                <img
                  src={image}
                  alt="Legal professional"
                  className="w-[100px] h-auto object-cover object-top"
                  style={{ minHeight: '240px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex lg:flex-row gap-6 items-stretch">
          {/* ── LEFT — Core Values card ─────────────────────────────────── */}
          <div className="flex-shrink-0 lg:w-[314px] bg-[#221e57]/14 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
            <h2 className="text-2rem text-accent font-bold text-center mb-2">
              Our Core Values
            </h2>

            {VALUES.map((v) => {
              const isActive = active === v.label;
              return (
                <button
                  key={v.label}
                  onClick={() => setActive(isActive ? null : v.label)}
                  onMouseEnter={() => setActive(v.label)}
                  className="w-full rounded-lg bg-[#f5a210]/14 text-left px-4 py-3 text-primary rounded-l font-bold text-sm transition-all duration-200"
                >
                  {v.label}
                </button>
              );
            })}
          </div>

          {/* ── MIDDLE — Dynamic content panel ─────────────────────────── */}
          <div className="flex-1 flex flex-col justify-start gap-10">
            {/* Quote area — appears when a value is active */}
            <div className="min-h-[10rem] max-h-[14rem] flex items-center px-4 rounded-2xl bg-[#f5a210]/14 justify-center transition-all duration-300">
              {activeValue ? (
                <p className="text-center text-primary font-bold leading-snug">
                  {activeValue.quote}
                </p>
              ) : (
                <p className="text-center text-40px text-primary font-bold leading-snug">
                  Hover over or click a core value to see what it means to us
                </p>
              )}
            </div>

            {/* Always-visible bottom block */}
            <div className="mt-8 pt-6">
              <h3 className="text-xl text-primary font-bold text-center mb-2">
                Built for trust and simplicity
              </h3>
              <p className="text-sm text-center lg:mx-auto lg:w-[350px] text-lightBlue mb-5">
                LYNC is designed to make legal access more transparent, more
                structured, and easier to navigate
              </p>

              {/* Badge pills */}
              <div className="flex lg:flex-nowrap flex-wrap justify-center gap-3">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 text-[#515151] border-accent bg-white text-xs lg:text-[10px] font-semibold border text-center"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Persistent image ────────────────────────────────── */}
          <div className="flex-shrink-0 lg:w-[120px] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={image}
              alt="Legal professional"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '420px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
