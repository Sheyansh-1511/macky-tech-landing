/* import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Button from './Button';
import QuoteModal from './QuoteModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */
        /*    <motion.a
              href="/"
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
                Macky<span className="text-blue-600">Tech</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */
     /*       <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-blue-300'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */
     /*       <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                href="tel:+8235910315"
                className={`${
                  isScrolled
                    ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 8235910315
              </Button>
              <Button
                size="sm"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */
     /*       <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={isScrolled ? 'text-gray-900' : 'text-white'}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */
   /*   <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */
       /*     <motion.div
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */
     /*       <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */
         /*       <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">
                    Macky<span className="text-blue-600">Tech</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Navigation Links */
        /*        <div className="flex-1 p-6">
                  <div className="space-y-4">
                    {navLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* CTA Section */
      /*          <div className="p-6 border-t border-gray-100 space-y-3">
                  <Button
                    variant="outline"
                    href="tel:+8235910315"
                    className="w-full justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  <Button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full justify-center"
                  >
                    Get Quote
                  </Button>
                  <Button
                    variant="outline"
                    href="https://wa.me/8235910315"
                    className="w-full justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default Navigation;*/
