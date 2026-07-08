import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabType } from './types';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import AboutView from './components/AboutView';
import ReservationsView from './components/ReservationsView';
import OrderOnlineView from './components/OrderOnlineView';
import ContactView from './components/ContactView';
import { Menu, X, Calendar } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: TabType }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'Menu', tab: 'menu' },
    { label: 'About', tab: 'about' },
    { label: 'Reservations', tab: 'reservations' },
    { label: 'Order Online', tab: 'order' },
    { label: 'Contact', tab: 'contact' },
  ];

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onNavigate={(tab) => setActiveTab(tab)} />;
      case 'menu':
        return <MenuView />;
      case 'about':
        return <AboutView />;
      case 'reservations':
        return <ReservationsView />;
      case 'order':
        return <OrderOnlineView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const springTransition = { type: 'spring', stiffness: 100, damping: 20 };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md overflow-x-hidden">
      {/* Fixed Header / Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-container-max mx-auto flex justify-between items-center px-gutter py-6">
          {/* Brand */}
          <motion.div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-display-lg text-[24px] uppercase tracking-widest text-primary-container">
              Savor Cafe
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`font-body-md text-text-warm-white relative nav-hover-line ${
                  activeTab === item.tab ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Reserve Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => handleNavClick('reservations')}
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
                    key={item.tab}
                    onClick={() => handleNavClick(item.tab)}
                    className={`w-full text-left font-display-lg text-display-lg-mobile py-3 border-b border-border-subtle/40 cursor-pointer ${
                      activeTab === item.tab ? 'text-primary' : 'text-text-warm-white/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <motion.button
                  onClick={() => handleNavClick('reservations')}
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

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-section-padding px-margin-mobile md:px-gutter">
        <div className="max-w-container-max mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-surface">
        <div className="max-w-container-max mx-auto px-gutter py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display-lg text-headline-md text-primary mb-4">Savor</h3>
              <p className="text-muted-stone text-sm leading-relaxed max-w-xs">
                Healthy vegetarian and modern Arabic food in the heart of San Francisco's Inner Sunset district.
              </p>
            </div>
            <div>
              <h4 className="font-label-caps text-primary uppercase mb-4">Navigation</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => handleNavClick(item.tab)}
                    className="block text-muted-stone text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-label-caps text-primary uppercase mb-4">Contact</h4>
              <div className="space-y-2 text-muted-stone text-sm">
                <p>401 Irving Street</p>
                <p>San Francisco, CA 94122</p>
                <p className="text-primary">415.702.6048</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border-subtle/50 mt-8 pt-8 text-center text-muted-stone text-xs font-label-caps uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Savor Cafe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
