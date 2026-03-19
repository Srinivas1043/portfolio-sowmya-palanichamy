import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Certifications', href: '#certifications' },
    { title: 'Projects', href: '#projects' },
    { title: 'News', href: '#news' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 bg-[#0a0a0a] backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity" title="Sowmya Palanichamy - Hydroponics & CEA Engineer">
          Sowmya.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              aria-label={`Navigate to ${link.title}`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-gray-800"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-300 hover:text-white block py-2"
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${link.title}`}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
