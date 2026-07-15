import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
import { useState } from 'react';

const navItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Buzz', path: '/buzz' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Order Online', path: '/order' },
  { label: 'Contact', path: '/contact' },
];

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const springTransition = { type: 'spring', stiffness: 100, damping: 20 };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-gutter py-6">
        {/* Brand */}
        <motion.div
          onClick={() => handleNavClick('/')}
          className="relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Abstract organic splash — warm gold blob behind logo */}
          <svg
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[220%] pointer-events-none select-none"
            viewBox="0 0 260 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95 10 C112 2, 136 4, 155 6 C174 8, 194 2, 210 12 C226 22, 238 16, 248 30 C258 44, 252 58, 250 70 C248 82, 258 94, 248 104 C238 114, 216 106, 196 108 C176 110, 156 100, 136 102 C116 104, 92 112, 74 108 C56 104, 34 110, 22 100 C10 90, 16 74, 14 58 C12 42, 6 26, 14 16 C22 6, 42 14, 62 12 C82 10, 80 18, 95 10Z"
              fill="rgba(201, 169, 110, 0.10)"
              stroke="#c9a96e"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <img
            src="/images/savor-logo.png"
            alt="Savor Cafe"
            className="h-8 md:h-9 w-auto object-contain relative z-[1]"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`font-body-md text-text-warm-white relative nav-hover-line ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Reserve Button */}
        <div className="hidden md:block">
          <motion.button
            onClick={() => handleNavClick('/reservations')}
            className="bg-primary-container text-surface-onyx px-6 py-3 rounded-lg font-label-caps hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
          >
            <Calendar className="w-4 h-4" />
            RESERVE A TABLE
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-primary-container border border-border-subtle rounded-lg active:scale-95 transition-transform cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border-subtle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-gutter py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left font-display-lg text-display-lg-mobile py-3 border-b border-border-subtle/40 cursor-pointer ${
                    location.pathname === item.path ? 'text-primary' : 'text-text-warm-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                onClick={() => handleNavClick('/reservations')}
                className="w-full bg-primary-container text-surface-onyx py-4 rounded-lg font-label-caps text-center mt-4 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                RESERVE A TABLE
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}