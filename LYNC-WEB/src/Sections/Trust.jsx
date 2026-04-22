import woman from '../assets/images/womanGlasses.jpg';
import manWoman from '../assets/images/Glasses.jpg';
import man from '../assets/images/glassesMAn.jpg';

export default function Trust() {
  return (
    <section className="w-full  flex flex-col items-center justify-center  py-20">
      {/* Heading */}
      <h2 className="text-primary text-32px  font-semibold text-center mb-4">
        Built for trust and simplicity
      </h2>
      {/* Subtitle */}
      <p className="text-lightBlue text-18px w-[497px] text-center mx-auto  leading-relaxed mb-10">
        LYNC is designed to make legal access more transparent, more structured,
        and easier to navigate
      </p>
      {/* Pills */}
      <div className="flex flex-wrap items-center  justify-center gap-3 mb-16">
        {[
          'Verified lawyer profiles',
          'Clear, structured user experience',
          'Built with the Nigerian legal landscape',
        ].map((label) => (
          <span
            key={label}
            className="border border-accent text-sm rounded-md bg-white text-[#515151] px-4 py-2"
          >
            {label}
          </span>
        ))}
      </div>
      {/* Lawyer photo cards */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-5 w-[70%] auto px-10">
        {/* Card 1 — tall left */}
        <div className="rounded-3xl overflow-hidden flex-1 w-[18rem]">
          <img
            src={woman}
            alt="Lawyer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 — shorter middle */}
        <div className="rounded-3xl overflow-hidden flex-1 w-[18rem]">
          <img
            src={man}
            alt="Lawyers consulting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 — tall right */}
        <div className="rounded-3xl overflow-hidden flex-1 w-[18rem]">
          <img
            src={manWoman}
            alt="Lawyer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>{' '}
    </section>
  );
}
