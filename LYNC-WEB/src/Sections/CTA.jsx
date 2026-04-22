import background from '../assets/images/Background.jpg';

export default function CTA() {
  return (
    <section className="flex items-center justify-center px-6 py-10">
      <div className="relative w-full max-w-4xl h-52 rounded-2xl overflow-hidden shadow-2xl">
        {/* Background image */}
        <img
          src={background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-light tracking-tight drop-shadow-lg"></h2>
        </div>
      </div>
    </section>
  );
}
