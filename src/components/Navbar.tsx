import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

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
      <style>{`
        .custom-gradient-last-word {
          background-image: linear-gradient(to right, #D4AF37, #9370DB 40%, #00000B 99%);
          background-size: 300% 100%;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: gradientLoop 10s linear infinite alternate;
          will-change: background-position;
        }
        @keyframes gradientLoop {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      <a href="#main" id="skip-to-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-limeswood-red text-white px-4 py-2 rounded z-[100]">Skip to content</a>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex items-center justify-between">
          <a href="/" className="z-50" aria-label="Limeswood Home">
            <h1 className="text-2xl font-bold font-playfair">
              <span className="text-limeswood-red"></span><span className="custom-gradient-last-word">Limeswood</span>
            </h1>
          </a>

          {/* WhatsApp button and Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="text-limeswood-red hover:text-green-600 focus:outline-none flex items-center text-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.991c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.86 11.86 0 0 0 5.741 1.463h.005c6.554 0 11.889-5.335 11.892-11.893a11.82 11.82 0 0 0-3.477-8.463"/></svg>
            </a>
            <button
              className="z-50 text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(v => !v)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

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
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-gradient-to-br from-white/90 via-gray-100/90 to-limeswood-red/10 backdrop-blur-xl`}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {/* Overlay - render first so menu content is above it */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        {/* Menu content wrapper with higher z-index */}
        <div className="relative z-[60] h-full w-full">
          {/* Mobile menu header (absolute, top) */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-6 pb-2">
            <a href="/" aria-label="Limeswood Home">
              <h1 className="text-2xl font-bold font-playfair">
                <span className="text-limeswood-red"></span><span className="custom-gradient-last-word">Limeswood</span>
              </h1>
            </a>
            <button
              className="text-2xl text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>
          {/* Centered menu links and button */}
          <div className="flex flex-col items-center justify-center h-full w-full">
            <nav aria-label="Mobile navigation" className="w-full">
              <ul className="flex flex-col items-center gap-6 text-2xl font-semibold">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href} className="w-full flex justify-center">
                    <a
                      href={link.href}
                      className="block px-8 py-3 rounded-lg transition-all duration-200 hover:bg-limeswood-red/10 hover:text-limeswood-red focus:outline-none focus:ring-2 focus:ring-limeswood-red focus:bg-limeswood-red/10"
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={currentHash === link.href ? 'page' : undefined}
                      tabIndex={isMenuOpen ? 0 : -1}
                      ref={i === 0 ? firstLinkRef : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="w-full flex justify-center mt-4">
                  <Button className="bg-limeswood-red hover:bg-opacity-90 text-white text-lg px-8 py-3 rounded-lg shadow-lg transition-all duration-200" asChild>
                    <a href="https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program" target="_blank" rel="noopener noreferrer">
                      Join Partnership
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;