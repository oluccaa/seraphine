import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'O Doutor', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4",
      isScrolled 
        ? "bg-brand-secondary/90 backdrop-blur-md shadow-sm py-3 text-brand-text" 
        : (isHome ? "bg-transparent text-white" : "bg-brand-secondary text-brand-text")
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-serif font-bold tracking-tight text-brand-primary"
        >
          SERAPHINA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium hover:text-brand-primary transition-colors uppercase tracking-widest",
                location.pathname === link.href ? "text-brand-primary" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contato" className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20">
            <Phone size={16} />
            Agendar Consulta
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-brand-secondary z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-serif font-bold text-brand-primary">SERAPHINA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link 
                    to={link.href}
                    className="text-4xl font-serif hover:text-brand-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-brand-primary/10">
              <Link 
                to="/contato" 
                className="w-full bg-brand-primary text-white px-6 py-5 rounded-full text-center font-bold tracking-widest uppercase text-sm" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Experiência
              </Link>
              <div className="mt-8 flex justify-between text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
                <span>São Paulo, BR</span>
                <span>© 2026 Seraphina</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
