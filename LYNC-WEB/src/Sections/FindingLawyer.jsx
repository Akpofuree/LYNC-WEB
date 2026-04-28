import Typography from '../components/UI/Typography';
import discover from '../assets/images/Image.jpg';
import buttonImage from '../assets/images/Image (1).jpg';
import stayImage from '../assets/images/Image (2).jpg';

export default function FindingLawyer() {
  return (
    <section className="  lg:w-[85%] lg:mx-auto">
      <div className=" text-[9px] font-bold flex justify-center flex-col items-center lg:block w-[100%] mx-auto text-center lg:text-left  lg:w-[98%] lg:mx-auto ">
        <Typography>
          <p>
            Finding a lawyer is often{' '}
            <span className="text-accent">unclear</span>
          </p>
          <p>
            Pricing is <span className="text-accent">inconsistent</span>
          </p>
          <p className="">
            And for many individuals and businesses, legal processes feel{' '}
            <span className="text-accent">overwhelming</span>
          </p>
          <p>
            Most people only seek legal help when its already{' '}
            <span className="text-accent">urgent</span>
          </p>
        </Typography>
      </div>

      <section className="flex flex-col justify-center text-primary text-24px pb-20 font-semibold mt-22 w-full text-center mx-auto">
        <p className="text-accent lg:text-32px w-[418px] mx-auto">
          LYNC makes legal access clear and structured
        </p>
        <p className="lg:w-[616px] lg:mx-auto w-[190px] lg:text-32px text-16px mx-auto">
          Instead of relying on referals and guesswork, LYNC gives you a simple
          way to find the right legal support when you need it
        </p>
      </section>

      <section className="flex lg:w-[55%] w-[30%] mx-auto lg:mx-auto lg:gap-9 justify-center text-19-8px text-primary lg:space-between ">
        <article className="flex flex-col gap-3">
          <div className="flex-1 max-w-[18rem]">
            <img
              src={discover}
              alt="discover-Text"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="w-[238px]">
            Discover lawyers based on your specific issue
          </p>
        </article>
        <article className="flex flex-col gap-3">
          <div className="flex-1 max-w-[18rem]">
            <img
              src={buttonImage}
              alt="Access-Image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />{' '}
          </div>
          <p className="w-[206px]">Access ready-to-use legal documents</p>
        </article>
        <article className="flex flex-col gap-3">
          <div className="flex-1 max-w-[18rem]">
            <img
              src={stayImage}
              alt="stay-Image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />{' '}
          </div>
          <p className="w-[273px]">
            Stay untop of compliance asyour business grows{' '}
          </p>
        </article>
      </section>
    </section>
  );
}
