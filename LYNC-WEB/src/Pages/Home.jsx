import Navbar from '../components/layout/Navbar';
import Hero from '../Sections/Hero';
import bgImage from '../assets/images/radiant-bg.jpg';
import FindingLawyer from '../Sections/FindingLawyer';
import HowItWorks from '../Sections/HowITworks';
import Features from '../Sections/Features';
import Trust from '../Sections/Trust';
import CTA from '../Sections/CTA';

export default function Home() {
  return (
    <div
      className="min-h-screen  bg-cover bg-center bg-no-repeat w-full pt-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pt-4">
        <Navbar />
      </div>
      <Hero />
      <FindingLawyer />
      <HowItWorks />
      <Features />
      <Trust />
      <CTA />
    </div>
  );
}
