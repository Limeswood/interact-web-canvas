
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="z-50">
          <h1 className="text-2xl font-bold font-playfair">
            <span className="text-whitevill-red">White</span>Vill
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="font-medium hover:text-whitevill-red transition-colors">About Us</a>
          <a href="#strategy" className="font-medium hover:text-whitevill-red transition-colors">Strategy</a>
          <a href="#partners" className="font-medium hover:text-whitevill-red transition-colors">Partners</a>
          <a href="#locations" className="font-medium hover:text-whitevill-red transition-colors">Locations</a>
          <a href="#contact" className="font-medium hover:text-whitevill-red transition-colors">Contact</a>
          <Button className="bg-whitevill-red hover:bg-opacity-90 text-white">Join Partnership</Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden z-50 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
            <a href="#about" className="hover:text-whitevill-red" onClick={toggleMenu}>About Us</a>
            <a href="#strategy" className="hover:text-whitevill-red" onClick={toggleMenu}>Strategy</a>
            <a href="#partners" className="hover:text-whitevill-red" onClick={toggleMenu}>Partners</a>
            <a href="#locations" className="hover:text-whitevill-red" onClick={toggleMenu}>Locations</a>
            <a href="#contact" className="hover:text-whitevill-red" onClick={toggleMenu}>Contact</a>
            <Button className="bg-whitevill-red hover:bg-opacity-90 text-white mt-4">Join Partnership</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
