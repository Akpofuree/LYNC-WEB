import { useNavigate, useLocation } from 'react-router-dom';
import Container from './Container';
import logo from '../../assets/icons/Margin.svg';

export default function AboutNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className="
        mx-auto bg-white
        rounded-[40px] border-2 w-[90%] h-auto border-accent px-[10px] py-[3px]
        lg:w-[90%] lg:h-auto lg:rounded-[2.3rem] lg:border-accent lg:p-[0.1875rem_1.25rem_0.1875rem_1.25rem]
      "
    >
      <Container className="flex items-center justify-between w-full h-full">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <img
            src={logo}
            alt="LYNC Logo"
            className="h-16 w-32px lg:w-32 lg:h-16"
          />
        </div>

        {/* Contact Us — always visible on both mobile and desktop */}
        <button
          onClick={goToContact}
          className="text-accent bg-transparent border-none cursor-pointer text-[10px] lg:text-[18px] font-[590]"
        >
          Contact Us
        </button>
      </Container>
    </nav>
  );
}
