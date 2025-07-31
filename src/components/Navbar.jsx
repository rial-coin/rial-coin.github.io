import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RialLogo } from "../assets/logos/RialLogo";
import { WalletIcon } from "../assets/icons/WalletIcon";
import { WalletInfo } from "./WalletInfo";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "Tokenomics", href: "/#tokenomics", ariaLabel: "Tokenomics" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/#home" aria-label="Home" className="flex items-center space-x-3 group">
              <div className="relative">
                <RialLogo className="text-primaryColor text-4xl transition-all duration-300 group-hover:text-secondaryColor" />
                <div className="absolute inset-0 bg-primaryColor/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Rial Coin
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navbarLinks.map(({ href, label, ariaLabel }, index) => (
              <motion.a
                key={label}
                href={href}
                aria-label={ariaLabel}
                className="relative text-white/80 hover:text-white font-medium text-base transition-all duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primaryColor to-secondaryColor group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Wallet Info Component */}
            <WalletInfo />
            
            <a
              href="/buy"
              aria-label="Invest in Rial Coin"
              className="group relative overflow-hidden bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryHover hover:to-primaryColor px-6 py-3 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative z-10 flex items-center space-x-2">
                <WalletIcon className="w-5 h-5" />
                <span>Buy RIAL</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></motion.span>
            <motion.span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100 my-1'
              }`}
            ></motion.span>
            <motion.span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></motion.span>
            <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-8 space-y-6">
              {navbarLinks.map(({ label, href, ariaLabel }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={ariaLabel}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/80 hover:text-white text-lg font-medium transition-all duration-300 hover:translate-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  {label}
                </motion.a>
              ))}
              
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a
                  href="/buy"
                  aria-label="Invest in Rial Coin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 bg-gradient-to-r from-primaryColor to-secondaryColor px-6 py-4 rounded-2xl font-bold text-white"
                >
                  <WalletIcon className="w-5 h-5" />
                  <span>Buy RIAL Now</span>
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
