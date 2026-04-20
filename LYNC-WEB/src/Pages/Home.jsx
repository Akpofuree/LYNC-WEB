import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import bgImage from '../assets/images/radiant-bg.jpg';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
