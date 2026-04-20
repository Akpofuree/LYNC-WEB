import { Link } from 'react-router-dom';
import Container from './Container';
import Button from '../UI/Button';
import logo from '../../assets/icons/Margin.svg';
export default function Navbar() {
  return (
    <nav className="py-sm">
      <Container className="flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        {/* Links */}
        <div className="hidden md:flex  items-center gap-md text-accent font-sans  text-18px font-[590]">
          <a href="#features" className="text-accent text-18px">
            Features
          </a>
          <a href="#how">How it works</a>
          <Link to="/about">Contact us</Link>
          <Button>Get Early Access</Button>
        </div>
      </Container>
    </nav>
  );
}
