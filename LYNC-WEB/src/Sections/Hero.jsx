import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Typography from '../components/UI/Typography';
import lawyer from '../assets/images/Rectangle 59385.jpg';
import lawyer2 from '../assets/images/secondImage.jpg';
import lawyer3 from '../assets/images/Rectangle 59386.jpg';

export default function Hero() {
  return (
    <section className="py-md w-[90%] mx-auto">
      <Container>
        <div className="flex flex-col lg:gap-4 lg:flex-row lg:min-h-[420px] lg:pr-10">
          {/* LEFT TEXT */}
          <div className="flex flex-col mt-4 gap-2 flex-1 lg:mt-16 lg:gap-6">
            {/* Main heading — centered on mobile */}
            <div className="w-full text-center lg:text-left lg:w-full">
              <Typography
                as="h1"
                variant="h1"
                className="flex flex-row justify-center lg:flex-col leading-none"
              >
                <span className="lg:text-[91px] font-bold text-32px leading-[30px] tracking-[-2px] lg:leading-40 lg:tracking-[-5px]">
                  Legal Help
                </span>
                <span className="text-[40px] font-bold text-accent leading-[30px] tracking-[-2px] lg:text-[92px] ml-2 lg:ml-0 lg:leading- lg:tracking- ">
                  simplified
                </span>
              </Typography>
            </div>

            {/* Subtext — centered on mobile */}
            <div className="w-full leading-[140%] tracking-0 px-4 mx-auto pt-2 lg:pt-0 lg:px-0 text-center lg:text-left lg:w-90 lg:mt-30 lg:mx-0">
              <Typography className="text-12px text-primary lg:text-sm">
                Find verified lawyers, access essential legal documents, and
                stay compliant all in one place{' '}
              </Typography>
            </div>

            {/* Buttons — centered on mobile */}
            <div className="flex flex-row items-center justify-center gap-4 mt-1 lg:justify-start lg:gap-5 lg:mt-2">
              <button
                className="
                  bg-lightBlue text-white rounded-[4px] lg:rounded-md lg:rounded-lg font-semibold
                  hover:opacity-90 transition-opacity
                  w-[124px] h-[29px] text-[12px]
                  lg:w-[210px] lg:h-49px lg:px-md lg:py-sm lg:text-sm lg:flex lg:justify-center lg:items-center
                "
              >
                Find a Lawyer
              </button>
              <Link
                to="/lawyers"
                className="text-[14px] font-semibold leading-[140%] flex  gap-1 justify-center items-center  text-[#f5a210] hover:underline lg:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                Connect with Clients
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGES — stays in same row, just smaller on mobile */}
          <div className="flex flex-row gap-2 mt-6 w-full lg:mt-0 lg:flex-shrink-0 lg:w-[55%] lg:pl-8 lg:gap-3">
            <div className="w-[80px] lg:w-[206px] lg:h-[40.5rem]">
              <img
                src={lawyer}
                alt="Lawyer 1"
                className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 lg:rounded-2xl"
              />
            </div>
            <div className="w-[115px] lg:w-[256px] lg:h-[40.5rem]">
              <img
                src={lawyer2}
                alt="Lawyer 2"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300 lg:rounded-2xl"
              />
            </div>
            <div className="w-[220px] lg:w-[596px] lg:h-[40.5rem]">
              <img
                src={lawyer3}
                alt="Lawyer 3"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300 lg:rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <section
          className="
            flex justify-center text-primary font-semibold text-center mx-auto mt-8
            text-[13px] w-[186px]
            lg:text-36px leading-[110%] lg:w-[524px] lg:mt-22
          "
        >
          <p>Legal work should not feel this complicated or inaccessible</p>
        </section>
      </Container>
    </section>
  );
}
