import Container from '../components/layout/Container';
import Typography from '../components/UI/Typography';
import lawyer from '../assets/images/Rectangle 59385.jpg';
import lawyer2 from '../assets/images/secondImage.jpg';
import lawyer3 from '../assets/images/Rectangle 59386.jpg';

export default function Hero() {
  return (
    <section className="py-xl w-[90%] mx-auto">
      <Container>
        <div className="flex lg:pr-10 flex-col w-full md:flex-row lg:flex-row justify-between gap-2 min-h-[420px]">
          {/* LEFT TEXT */}
          <div className="flex flex-col w-[25%] mt-16 gap-6 flex-1">
            <div className="w-full">
              <Typography
                as="h1"
                variant="h1"
                className="flex flex-col leading-none"
              >
                Legal Help
                <span className="text-accent font-bold text-92px leading-none">
                  {/* ✅ Fixed text-91px → text-92px */}
                  simplified
                </span>
              </Typography>
            </div>
            <div className="w-120 mt-20 ">
              <Typography className="text-sm text-primary leading-relaxed">
                Find verified lawyers, access essential legal documents, and
                manage compliance effortlessly.
              </Typography>
            </div>

            <div className="flex flex-row items-center gap-5 mt-2">
              <button className="bg-lightBlue text-white px-md py-sm rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Find a Lawyer
              </button>
              <a
                href="#"
                className="text-sm font-semibold text-accent hover:underline"
              >
                → Connect with Clients
              </a>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex flex-row w-[55%] pl-8 gap-3 flex-shrink-0">
            <div className="w-[15.87rem] flex h-[40.5rem]">
              <img
                src={lawyer}
                alt="Lawyer 1"
                className="w-full h-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-[16rem] h-[40.5rem]">
              <img
                src={lawyer2}
                alt="Lawyer 2"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-[50rem] h-[40.5rem]">
              <img
                src={lawyer3}
                alt="Lawyer 3"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <section className="flex justify-center text-primary text-36px font-semibold mt-22 w-[524px] text-center mx-auto">
          <p>Legal work should not feel this complicated or inaccessible</p>
        </section>
      </Container>
    </section>
  );
}
