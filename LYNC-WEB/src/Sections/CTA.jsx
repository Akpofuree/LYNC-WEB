import background from '../assets/images/CTA.PNG';
import gpsNavigator from '../assets/icons/gps-navigation.png';

export default function CTA() {
  return (
    <section className="flex items-center justify-center px-6 lg:py-10">
      <div className="relative w-full max-w-4xl h-52 rounded-2xl overflow-hidden shadow-2xl">
        {/* Background image */}
        <img
          src={background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* dark overlay if cta is to bright        <div className="absolute inset-0 bg-black/25" />
         */}
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-light tracking-tight drop-shadow-lg">
            Be among the first to experience LYNC
          </h2>
          <button className="bg-white flex gap-2 text-black py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Join Waitlist{' '}
            <img src={gpsNavigator} className="w-6 h-6" alt="GPS Navigator" />
          </button>
        </div>
      </div>
    </section>
  );
}
