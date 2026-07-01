import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Visit Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-coffee-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-coffee-espresso font-serif text-2xl font-bold tracking-tight z-50">
          <Coffee size={28} strokeWidth={2.5} />
          <span>Aura</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="group relative text-sm tracking-widest uppercase text-coffee-charcoal/70 hover:text-coffee-espresso transition-colors py-2"
              >
                {link.name}
                <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-coffee-espresso transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
          ))}
          <Link to="/menu" className="bg-coffee-espresso text-coffee-cream px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-coffee-charcoal transition-colors">
            Order Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden z-50 text-coffee-espresso"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-coffee-cream flex flex-col items-center justify-center gap-8 z-40 md:hidden"
            >
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-2xl font-serif transition-colors ${location.pathname === link.path ? 'text-coffee-espresso' : 'text-coffee-charcoal/60 hover:text-coffee-charcoal'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/menu" className="mt-8 bg-coffee-espresso text-coffee-cream px-8 py-3 rounded-full text-lg tracking-wide hover:bg-coffee-charcoal transition-colors">
                Order Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
