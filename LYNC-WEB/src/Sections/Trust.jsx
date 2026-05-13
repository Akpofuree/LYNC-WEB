import woman from '../assets/images/womanGlasses.jpg';
import manWoman from '../assets/images/Glasses.jpg';
import man from '../assets/images/glassesMAn.jpg';

const pills = [
  { label: 'Verified lawyer profiles', mobileWidth: 'w-48' },
  { label: 'Clear, structured user experience', mobileWidth: 'w-56' },
  { label: 'Built with the Nigerian legal landscape', mobileWidth: 'w-64' },
];

export default function Trust() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20">
      {/* Heading */}
      <h2 className="text-primary text-[13px] font-bold lg:text-32px  text-center ">
        Built for trust and simplicity
      </h2>

      {/* Subtitle */}
      <p className="text-lightBlue text-[11px] leading-[120%] lg:text-18px w-[50%] lg:w-[497px] text-center mx-auto pt-2 lg:mb-10 mb-8 ">
        LYNC is designed to make legal access more transparent, more structured,
        and easier to navigate
      </p>

      {/* Pills — stacked on mobile with increasing widths, row on md+ */}
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 mb-10 lg:mb-16">
        {pills.map(({ label, mobileWidth }) => (
          <span
            key={label}
            className={`
              border border-accent text-sm rounded-md bg-white text-[#515151] lg:px-4 py-2
              text-center
              ${mobileWidth} md:w-auto
            `}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Lawyer photo cards — always side by side, smaller on mobile */}
      <div className="flex flex-row items-end justify-center gap-2 md:gap-5 w-full px-4 md:w-[70%] md:px-10">
        {/* Card 1 */}
        <div className="rounded-3xl overflow-hidden w-[30%] md:flex-1 md:w-[18rem]">
          <img
            src={woman}
            alt="Lawyer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl overflow-hidden w-[30%] md:flex-1 md:w-[18rem]">
          <img
            src={man}
            alt="Lawyers consulting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl overflow-hidden w-[30%] md:flex-1 md:w-[18rem]">
          <img
            src={manWoman}
            alt="Lawyer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
