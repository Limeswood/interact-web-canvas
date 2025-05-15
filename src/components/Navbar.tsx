import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#strategy', label: 'Strategy' },
  { href: '#partners', label: 'Partners' },
  { href: '#locations', label: 'Locations' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skip to content
  useEffect(() => {
    const skip = document.getElementById('skip-to-content');
    if (skip) {
      skip.addEventListener('click', () => {
        const main = document.querySelector('main');
        if (main) (main as HTMLElement).focus();
      });
    }
  }, []);

  // Active link detection (hash)
  const currentHash = typeof window !== 'undefined' ? window.location.hash : '';

  return (
    <>
      <a href="#main" id="skip-to-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-limeswood-red text-white px-4 py-2 rounded z-[100]">Skip to content</a>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex items-center justify-between">
          <a href="/" className="z-50" aria-label="Limeswood Home">
            <h1 className="text-2xl font-bold font-playfair">
              <span className="text-limeswood-red">Limes</span>wood
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium hover:text-limeswood-red transition-colors"
                    aria-current={currentHash === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button className="bg-limeswood-red hover:bg-opacity-90 text-white" asChild>
                  <a href="https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program" target="_blank" rel="noopener noreferrer">
                    Join Partnership
                  </a>
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden z-50 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(v => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {/* Overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/30 z-30"
                aria-hidden="true"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
            <nav aria-label="Mobile navigation" className="flex flex-col items-center justify-center h-full space-y-6 text-xl relative z-40">
              <ul>
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-limeswood-red block px-4 py-2"
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={currentHash === link.href ? 'page' : undefined}
                      tabIndex={isMenuOpen ? 0 : -1}
                      ref={i === 0 ? firstLinkRef : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Button className="bg-limeswood-red hover:bg-opacity-90 text-white mt-4 w-full" asChild>
                    <a href="https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program" target="_blank" rel="noopener noreferrer">
                      Join Partnership
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;