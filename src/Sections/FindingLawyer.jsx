import Typography from '../components/UI/Typography';
import discover from '../assets/images/Image.jpg';
import buttonImage from '../assets/images/Image (1).jpg';
import stayImage from '../assets/images/Image (2).jpg';

export default function FindingLawyer() {
  return (
    <section className="w-full px-4 lg:w-[85%] lg:px-0 lg:mx-auto">
      {/* Problem statements — centered on mobile */}
      <div className="lg:text-sm gap-4 hidden  lg:font-bold lg:block justify-center flex-col items-center w-full mx-auto text-center lg:text-left lg:w-[98%] lg:mx-auto lg:block lg:text-base">
        <Typography>
          <p>
            Finding a lawyer is often{' '}
            <span className="text-accent">unclear</span>
          </p>
          <p>
            Pricing is <span className="text-accent">inconsistent</span>
          </p>
          <p>
            And for many individuals and businesses, legal processes feel{' '}
            <span className="text-accent">overwhelming</span>
          </p>
          <p>
            Most people only seek legal help when its already{' '}
            <span className="text-accent">urgent</span>
          </p>
        </Typography>
      </div>

      <div className="text[11px] text-primary lg:hidden gap-4 font-[510] lg:font-bold flex justify-center flex-col items-center w-full mx-auto text-center lg:text-left lg:w-[98%] lg:mx-auto lg:block lg:text-base">
        <p>
          Finding a lawyer is often <span className="text-accent">unclear</span>
        </p>
        <p>
          Pricing is <span className="text-accent font-bold">inconsistent</span>
        </p>
        <p className="w-full">
          And for many individuals and businesses, legal processes feel{' '}
          <span className="text-accent">overwhelming</span>
        </p>
        <p>
          Most people only seek legal help when its already{' '}
          <span className="text-accent">urgent</span>
        </p>
      </div>

      {/* LYNC statement — centered on mobile */}
      <section className="flex flex-col justify-center text-primary mb-8 lg:pb-20 font-semibold mt-10 lg:mt-22 w-full text-center mx-auto">
        <p className="text-accent text-[14px] leading-[120%] font-bold pb-4 lg:pb-2  lg:text-32px w-[300px] px-4 lg:w-[418px] mx-auto ">
          LYNC makes legal access clear and structured
        </p>
        <p className="w-[270px] font-semibold px-4 lg:w-[616px] lg:text-24px text-[11px] leading-[120%] mx-auto text-center">
          Instead of relying on referals and guesswork, LYNC gives you a simple
          way to find the right legal support when you need it
        </p>
      </section>

      {/* Three images — stay side by side on all screen sizes, reduced on mobile */}
      <section className="flex w-full px-4 mx-auto gap-3 lg:w-[55%] lg:gap-9 justify-center text-primary">
        <article className="flex flex-col gap-3 flex-1">
          <div className="w-full">
            <img
              src={discover}
              alt="discover-Text"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-[9px] font-semibold lg:font-normal lg:text-center lg:text-base lg:w-[238px]">
            Discover lawyers based on your specific issue
          </p>
        </article>

        <article className="flex flex-col gap-3 flex-1">
          <div className="w-full">
            <img
              src={buttonImage}
              alt="Access-Image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-[9px] font-semibold lg:font-normal lg:text-center lg:text-base lg:w-[206px]">
            Access ready-to-use legal documents
          </p>
        </article>

        <article className="flex flex-col gap-3 flex-1">
          <div className="w-full">
            <img
              src={stayImage}
              alt="stay-Image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-[9px] font-semibold lg:font-normal lg:text-center lg:text-base lg:w-[273px]">
            Stay on top of compliance as your business grows
          </p>
        </article>
      </section>
    </section>
  );
}
