import Footer from '../components/layout/Footer';
import AboutNavbar from '../components/layout/AboutNavbar';
import AboutSection from '../Sections/AboutSection';
import bgImage from '../assets/images/radiant-bg.jpg';
import CoreValuesSection from '../Sections/CoreValues';

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full pt-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <AboutNavbar />
      <AboutSection />
      <CoreValuesSection />
      <Footer />
    </div>
  );
}
