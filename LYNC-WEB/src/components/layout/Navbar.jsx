import { useNavigate, useLocation } from 'react-router-dom';
import Container from './Container';
import Button from '../UI/Button';
import logo from '../../assets/icons/Margin.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
         rounded-[40px] border-2 w-[90%] h-auto  border-accent px-[20px] py-[3px]
        lg:w-[90%] lg:h-auto lg:rounded-[2.3rem]  lg:border-accent lg:p-[0.1875rem_1.25rem_0.1875rem_1.25rem]
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
            alt="Logo"
            className="
              h-16 w-32px
              lg:w-32 lg:h-16
            "
          />
        </div>

        {/* Mobile — Contact Us only, pushed to the right */}
        <button
          onClick={() => scrollToSection('cta')}
          className="
            lg:hidden text-accent bg-transparent border-none cursor-pointer
            text-[10px] font-[590] ml-auto
          "
        >
          Contact Us
        </button>

        {/* Desktop — full nav links */}
        <div className="hidden lg:flex items-center gap-md text-accent font-sans text-18px font-[590]">
          <button
            onClick={() => scrollToSection('features')}
            className="text-accent text-18px bg-transparent border-none cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how')}
            className="text-accent text-18px bg-transparent border-none cursor-pointer"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('cta')}
            className="text-accent text-18px bg-transparent border-none cursor-pointer"
          >
            Contact us
          </button>
          <Button onClick={() => scrollToSection('cta')}>
            Get Early Access
          </Button>
        </div>
      </Container>
    </nav>
  );
}
