import AboutNavbar from '../components/layout/AboutNavbar';
import Footer from '../components/layout/Footer';
import bgImage from '../assets/images/radiant-bg.jpg';

export default function ContactUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full pt-4 flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pt-4">
        <AboutNavbar />
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-3xl rounded-[20px] bg-white/45 backdrop-blur-[2px] px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_40px_rgba(34,30,87,0.08)]">
          <h1 className="text-center text-primary text-32px md:text-40px font-bold mb-8">
            Send us a mail
          </h1>

          <form className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-primary text-sm font-[590] mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder=""
                className="w-full h-12 rounded-[12px] bg-[#c9bcc0]/70 px-4 outline-none border border-transparent focus:border-accent text-primary"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-primary text-sm font-[590] mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder=""
                className="w-full h-12 rounded-[12px] bg-[#c9bcc0]/70 px-4 outline-none border border-transparent focus:border-accent text-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-primary text-sm font-[590] mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                className="w-full h-12 rounded-[12px] bg-[#c9bcc0]/70 px-4 outline-none border border-transparent focus:border-accent text-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-primary text-sm font-[590] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full rounded-[12px] bg-[#c9bcc0]/70 px-4 py-3 outline-none border border-transparent focus:border-accent text-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 mx-auto w-full max-w-[325px] h-12 rounded-full bg-lightBlue text-white text-sm font-[590] hover:opacity-90 transition-opacity duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
