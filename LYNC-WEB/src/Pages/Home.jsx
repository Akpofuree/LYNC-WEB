import Navbar from '../components/layout/Navbar';
import Hero from '../Sections/Hero';
import bgImage from '../assets/images/radiant-bg.jpg';
import FindingLawyer from '../Sections/FindingLawyer';
import HowItWorks from '../Sections/HowITworks';
import Features from '../Sections/Features';
import Trust from '../Sections/Trust';
import CTA from '../Sections/CTA';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full pt-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pt-4">
        <Navbar />
      </div>
      <Hero />
      <div id="features">
        <FindingLawyer />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <Features />
      <Trust />
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
