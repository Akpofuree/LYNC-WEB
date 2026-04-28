import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Typography from '../components/UI/Typography';
import lawyer from '../assets/images/Rectangle 59385.jpg';
import lawyer2 from '../assets/images/secondImage.jpg';
import lawyer3 from '../assets/images/Rectangle 59386.jpg';

export default function Hero() {
  return (
    <section className="py-xl w-[90%] mx-auto">
      <Container>
        {/* HERO ROW — stays side by side on both mobile and desktop */}
        <div className="flex    min-h-[120px] lg:min-h-[420px] lg:pr-10">
          {/* LEFT TEXT */}
          <div className="flex flex-col mt-4 gap-2 flex-1 lg:mt-16 lg:gap-6">
            {/* Main heading */}
            <div className="w-[208px]  lg:w-full lg:h-auto">
              <Typography
                as="h1"
                variant="h1"
                className="flex flex-col leading-none"
              >
                <span className="text-[40px] font-bold lg:text-[length:inherit]">
                  Legal Help
                </span>
                <span className="text-[40px] font-bold text-accent leading-none lg:text-92px">
                  simplified
                </span>
              </Typography>
            </div>

            {/* Subtext */}
            <div className="w-[120px] lg:w-120 lg:mt-20">
              <Typography className="text-[5px] text-primary leading-relaxed lg:text-sm">
                Find verified lawyers, access essential legal documents, and
                manage compliance effortlessly.
              </Typography>
            </div>

            {/* Buttons */}
            <div className="flex flex-row items-center gap-2 mt-1 lg:gap-5 lg:mt-2">
              <button
                className="
                  bg-lightBlue text-white rounded-lg font-semibold
                  hover:opacity-90 transition-opacity
                  w-[52px] h-[12px] text-[5px]
                  lg:w-auto lg:h-auto lg:px-md lg:py-sm lg:text-sm
                "
              >
                Find a Lawyer
              </button>
              <Link
                to="/lawyers"
                className="text-[5px] font-semibold text-accent hover:underline lg:text-sm"
              >
                → Connect with Clients
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGES — stays in same row, just smaller on mobile */}
          <div className="flex flex-row gap-1 flex-shrink-0 lg:w-[55%] lg:pl-8 lg:gap-3">
            <div className="w-[46px] lg:w-[15.87rem] lg:h-[40.5rem]">
              <img
                src={lawyer}
                alt="Lawyer 1"
                className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 lg:rounded-2xl"
              />
            </div>
            <div className="w-[58px] lg:w-[16rem] lg:h-[40.5rem]">
              <img
                src={lawyer2}
                alt="Lawyer 2"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300 lg:rounded-2xl"
              />
            </div>
            <div className="w-[134px] lg:w-[50rem] lg:h-[40.5rem]">
              <img
                src={lawyer3}
                alt="Lawyer 3"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300 lg:rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT — "Legal work should not feel..." */}
        <section
          className="
            flex justify-center text-primary font-semibold text-center mx-auto mt-8
            text-[9px] w-[146px]
            lg:text-36px lg:w-[524px] lg:mt-22
          "
        >
          <p>Legal work should not feel this complicated or inaccessible</p>
        </section>
      </Container>
    </section>
  );
}
