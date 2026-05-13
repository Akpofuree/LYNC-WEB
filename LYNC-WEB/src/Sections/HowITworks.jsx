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

export default function FindingLawyer() {
  return (
    <section className="w-full px-4 lg:w-[75%] pt-[98px] lg:px-0 mx-auto py-[70px] lg:min-h-screen flex flex-col items-center justify-center lg:py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-1 mb-4 lg:mb-14 w-full">
        <h1
          className="text-[14px] lg:text-5xl font-bold text-center"
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

      {/* Two columns */}
      <div className="flex lg:flex-row flex-col  gap-8 lg:gap-16 w-full">
        {/* LEFT — Steps */}
        <div className="flex flex-col gap-6 lg:gap-10 flex-1 w-fit mx-auto lg:mx-0 lg:items-start">
          {' '}
          {steps.map((step) => (
            <div key={step.number} className="flex flex-row items-start gap-6">
              {/* Line + Number wrapper
                  small: items-center so number is vertically centred on the short line
                  large: items-start so number sits at the top of the tall line */}
              <div className="flex flex-row items-center lg:items-start shrink-0 gap-[6px]">
                {/* Vertical amber line
                    small: h-[18px] — just tall enough to match the title beside it
                    large: h-[72px] — original full height
                    mt only on large (items-center on small makes mt unnecessary) */}
                <div
                  className="w-[2px] h-[18px] lg:h-[72px] lg:mt-[2px]"
                  style={{ backgroundColor: '#F5A210' }}
                />

                {/* Number
                    small: 14px
                    large: text-sm (original) */}
                <span
                  className="text-[14px] lg:text-sm font-bold tracking-wider"
                  style={{ color: '#F5A210', lineHeight: 1 }}
                >
                  {step.number}
                </span>
              </div>

              {/* Title + Description */}
              <div className="flex flex-col gap-1 pt-0.5">
                {/* small: 11px semibold | large: 2xl semibold (original) */}
                <h3
                  className="text-[11px] font-semibold lg:text-2xl"
                  style={{ color: '#1E1654' }}
                >
                  {step.title}
                </h3>

                {/* small: 10px weight-400 | large: text-base (original) */}
                <p
                  className="text-[10px] font-normal lg:text-base"
                  style={{ color: '#5651A0' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Comparison card
            small: 284×117px, reduced padding & gap
            large: 352×217px, original padding & gap */}
        <div
          className="
            flex flex-col shrink-0 mx-auto 
            w-[314px] h-[127px]       lg:w-[352px] lg:h-[217px]
            pt-[14px]  pb-[30px] pl-[16px]
            lg:pt-[36px] lg:pr-[28px] lg:pb-[36px] lg:pl-[28px]
            gap-[10px] lg:gap-[20px]
          "
          style={{
            border: '1px solid #F5A210',
            backgroundColor: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            boxSizing: 'border-box',
          }}
        >
          {/* Traditional Approach */}
          <div className="flex flex-col gap-2.5 lg:gap-0.5">
            {/* Label — small: 10px bold | large: xs semibold tracking-widest (original) */}
            <span
              className="text-[10px] font-bold lg:text-xs lg:font-semibold tracking-widest uppercase"
              style={{ color: '#F5A210' }}
            >
              Traditional Approach
            </span>
            {/* Value — small: 9px normal | large: 3xl light (original) */}
            <span
              className="text-[9px] font-normal lg:text-3xl lg:font-light"
              style={{ color: '#1E1654' }}
            >
              Weeks → Months
            </span>
          </div>

          <div style={{ borderTop: '1px solid #F5A210', opacity: 0.4 }} />

          {/* With LYNC */}
          <div className="flex flex-col gap-2.5 lg:gap-0.5">
            {/* Label — small: 10px bold | large: xs semibold tracking-widest (original) */}
            <span
              className="text-[10px] font-bold lg:text-xs lg:font-semibold tracking-widest uppercase"
              style={{ color: '#F5A210' }}
            >
              With LYNC
            </span>
            {/* Value — small: 9px normal | large: 3xl light (original) */}
            <span
              className="text-[9px] font-normal lg:text-3xl lg:font-light"
              style={{ color: '#1E1654' }}
            >
              Seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
