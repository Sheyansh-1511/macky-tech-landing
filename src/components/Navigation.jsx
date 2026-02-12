import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from './Button';
import QuoteModal from './QuoteModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (href) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#','');
    scrollToSection(id);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* ✅ LOGO IMAGE ADDED HERE */}
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/ccp2R9zj/logotransparent.png"
                alt="Macky Tech"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l,i)=>(
                <button
                  key={i}
                  onClick={()=>handleClick(l.href)}
                  className={`font-medium ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {l.name}
                </button>
              ))}

              <Button size="sm" onClick={() => setIsQuoteModalOpen(true)}>
                Get Quote
              </Button>
            </div>

            {/* Mobile btn */}
            <button
              className="md:hidden"
              onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen
                ? <X className="w-6 h-6"/>
                : <Menu className="w-6 h-6"/>}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <div className="bg-white w-80 h-full p-6">
            {navLinks.map((l,i)=>(
              <button
                key={i}
                onClick={()=>handleClick(l.href)}
                className="block w-full text-left py-3"
              >
                {l.name}
              </button>
            ))}

            <Button onClick={() => setIsQuoteModalOpen(true)} className="w-full mt-4">
              Get Quote
            </Button>

            <Button
              variant="outline"
              href="https://wa.me/918235910315"
              className="w-full mt-3"
            >
              <MessageCircle className="w-4 h-4 mr-2"/>
              WhatsApp
            </Button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
      
      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default Navigation;
