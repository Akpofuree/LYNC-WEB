import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from './Container';
import logo from '../../assets/icons/Margin.svg';

export default function AboutNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

  const goToContact = () => {
    if (location.pathname === '/') {
      document
        .getElementById('cta')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById('cta')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
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
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter {
          animation: slideDown 0.25s ease forwards;
        }
      `}</style>

      <nav
        className="
          md:sticky md:top-0 md:z-50
          mx-auto bg-white
          rounded-bl-3xl rounded-br-3xl border-2 w-[98%] h-auto border-accent px-0 py-0.75 lg:px-0
          lg:w-[90%] lg:h-auto lg:rounded-[24px] lg:border-accent lg:p-[0.1875rem_1.25rem_0.1875rem_1.25rem]
        "
      >
        <Container className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <div
            className="flex gap-2 cursor-pointer -ml-3 lg:-ml-[40px] mr-8.75"
            onClick={scrollToTop}
          >
            <img
              src={logo}
              alt="LYNC Logo"
              className="h-16 w-32px lg:w-32 lg:h-16"
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-accent bg-transparent border-none cursor-pointer text-24px transition-transform duration-200"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <button
            onClick={goToContact}
            className="hidden lg:inline-flex text-accent bg-transparent border-none cursor-pointer text-[18px] font-[590]"
          >
            Contact Us
          </button>
        </Container>
      </nav>

      {mobileMenuOpen && (
        <div
          className="
            mobile-menu-enter
            lg:hidden
            mx-auto w-[90%]
            bg-white
            border-2 border-accent border-t-0
            rounded-b-2xl
            px-6 pt-2 pb-6
            mt-2
            flex flex-col gap-4
          "
        >
          <button
            onClick={() => {
              scrollToSection('features');
              setMobileMenuOpen(false);
            }}
            className="text-accent text-16px font-semibold bg-transparent border-none cursor-pointer py-1"
          >
            Features
          </button>
          <button
            onClick={() => {
              scrollToSection('how');
              setMobileMenuOpen(false);
            }}
            className="text-accent text-16px font-semibold bg-transparent border-none cursor-pointer py-1"
          >
            How It Works
          </button>
          <button
            onClick={() => {
              scrollToSection('cta');
              setMobileMenuOpen(false);
            }}
            className="text-accent text-16px font-semibold bg-transparent border-none cursor-pointer py-1"
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              scrollToSection('cta');
              setMobileMenuOpen(false);
            }}
            className="self-center text-black text-16px font-semibold bg-transparent border-none cursor-pointer py-1"
          >
            Get Early Access
          </button>
        </div>
      )}
    </>
  );
}
