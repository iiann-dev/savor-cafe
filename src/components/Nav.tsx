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
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none select-none"
            viewBox="0 0 240 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="blobGrad" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#e6c487" stopOpacity="0.25" />
                <stop offset="45%" stopColor="#c9a96e" stopOpacity="0.18" />
                <stop offset="85%" stopColor="#c9a96e" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#c9a96e" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              d="M90 8 C105 2, 125 4, 142 6 C160 8, 178 2, 192 10 C206 18, 218 14, 226 26 C234 38, 230 52, 228 62 C226 72, 236 82, 228 90 C220 98, 200 92, 182 94 C164 96, 148 88, 130 90 C112 92, 88 98, 72 94 C56 90, 38 96, 26 88 C14 80, 18 66, 16 52 C14 38, 8 24, 14 16 C20 8, 38 14, 56 12 C74 10, 78 14, 90 8Z"
              fill="url(#blobGrad)"
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