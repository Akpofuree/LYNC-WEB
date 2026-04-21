const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Select your legal issue in plain language',
  },
  {
    number: '02',
    title: 'Find the right lawyer',
    description: 'Browse verified profiles tailored to your needs',
  },
  {
    number: '03',
    title: 'Connect and resolve',
    description: 'Request a consultation and move forward with clarity',
  },
];

// ─── CONTROLS ────────────────────────────────────────────────────────────────
// 1. NUMBER vertical position on the line — increase to push down, decrease to push up
const NUMBER_TOP_OFFSET = '6px';

// 2. SPACE BETWEEN LINE+NUMBER and the title text — change "gap-10" on the
//    step row div. Scale: gap-4 (tight) → gap-6 → gap-8 → gap-10 → gap-16 (wide)

// 3. SPACE BETWEEN LINE and NUMBER — change the gap "6px" on the line+number wrapper
// ─────────────────────────────────────────────────────────────────────────────

export default function FindingLawyer() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-10 py-20"
      style={{
        background:
          'linear-gradient(110deg, #FEF3CC 0%, #F5E8C0 20%, #D8D0F0 60%, #C4BCE8 100%)',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Header above both columns */}
      <div className="flex flex-col items-center gap-1 mb-14 w-full">
        <h1
          className="text-5xl font-bold text-center"
          style={{ color: '#1E1654' }}
        >
          How LYNC works
        </h1>
        <p
          className="text-sm tracking-widest text-center"
          style={{ color: '#9692B4' }}
        >
          LYNC.
        </p>
      </div>

      {/* Two columns side by side */}
      <div className="flex flex-row items-start gap-16 w-full max-w-7xl">
        {/* LEFT — Steps */}
        <div className="flex flex-col gap-10 flex-1">
          {steps.map((step) => (
            // ↓ CORRECTION — "gap-10" controls space between line+number and the text
            <div key={step.number} className="flex flex-row items-start gap-2">
              {/* ↓ CORRECTION — line and number now in normal flow (no absolute positioning)
                  gap: "6px" = space between the line bar and the number
                  Change to "10px", "14px" etc to widen that gap */}
              <div
                className="flex flex-row items-start shrink-0"
                style={{ gap: '6px' }}
              >
                {/* Vertical amber line */}
                <div
                  style={{
                    width: '2px',
                    height: '72px',
                    backgroundColor: '#F5A210',
                    marginTop: '2px',
                  }}
                />

                {/* Number beside the line
                    ↓ marginTop = NUMBER_TOP_OFFSET controls vertical position */}
                <span
                  className="text-sm font-bold tracking-wider"
                  style={{
                    color: '#F5A210',
                    lineHeight: 1,
                    marginTop: NUMBER_TOP_OFFSET,
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step text — now properly spaced by gap-10 above */}
              <div className="flex flex-col gap-1 pt-0.5">
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: '#1E1654' }}
                >
                  {step.title}
                </h3>
                <p className="text-base" style={{ color: '#5651A0' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Comparison card */}
        <div
          className="flex flex-col shrink-0"
          style={{
            width: '352px',
            height: '217px',
            border: '1px solid #F5A210',
            borderRadius: '4px',
            paddingTop: '36px',
            paddingRight: '28px',
            paddingBottom: '36px',
            paddingLeft: '28px',
            gap: '20px',
            backgroundColor: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            boxSizing: 'border-box',
          }}
        >
          <div className="flex flex-col gap-0.5">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#F5A210' }}
            >
              Traditional Approach
            </span>
            <span className="text-3xl font-light" style={{ color: '#1E1654' }}>
              Weeks → Months
            </span>
          </div>

          <div style={{ borderTop: '1px solid #F5A210', opacity: 0.4 }} />

          <div className="flex flex-col gap-0.5">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#F5A210' }}
            >
              With LYNC
            </span>
            <span className="text-3xl font-light" style={{ color: '#1E1654' }}>
              Seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
