import Footer from '../components/layout/Footer';
import bgImage from '../assets/images/Gradient background.jpg';
import centerBG from '../assets/images/logo new transp 1.jpg';
import AboutNavbar from '../components/layout/AboutNavbar';
export default function Privacy() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col pt-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pt-4">
        <AboutNavbar />
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <section className="relative w-full max-w-6xl min-h-[65vh] flex items-center justify-center overflow-hidden">
          <img
            src={centerBG}
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 w-[520px] md:w-[640px] lg:w-[720px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.12] blur-[1px]"
          />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-[3rem] md:text-[4.5rem] leading-none font-bold">
              <span className="text-primary">Currently </span>
              <span className="text-accent">in development</span>....
            </h1>

            <p className="mt-4 text-primary text-base md:text-18px font-[590]">
              We're ensuring everything meets the right standard before launch
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
