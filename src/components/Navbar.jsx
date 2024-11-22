import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RialLogo } from "../assets/logos/RialLogo";
import { WalletIcon } from "../assets/icons/WalletIcon";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 fixed bg-[#027dbc] z-50 flex items-center justify-center"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-[1280px] flex justify-between items-center px-4 md:px-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/#home" aria-label="Home" className="flex items-center">
            <RialLogo className="text-white text-4xl mr-2" />
            <span className="text-white font-bold text-lg">Rial Coin</span>
          </a>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          className="hidden lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navbarLinks.map(({ href, label, ariaLabel }) => (
            <a
              key={label}
              href={href}
              aria-label={ariaLabel}
              className="text-white font-medium text-base mx-4 hover:underline transition"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Desktop Button */}
        <motion.div
          className="hidden lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="/buy"
            aria-label="Invest in Rial Coin"
            className="flex items-center bg-white text-[#027dbc] hover:text-white hover:bg-gray-800 px-6 py-2 rounded-lg font-medium transition"
          >
            <WalletIcon className="mr-2" />
            Invest in Rial Coin
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-[#027dbc] flex flex-col items-center py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navbarLinks.map(({ label, href, ariaLabel }) => (
              <a
                key={label}
                href={href}
                aria-label={ariaLabel}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium my-2 hover:underline transition"
              >
                {label}
              </a>
            ))}
            <a
              href="/buy"
              target="_blank"
              className="flex items-center bg-white text-[#027dbc] hover:text-white hover:bg-gray-800 px-6 py-2 rounded-lg font-medium mt-4 transition"
              aria-label="Invest in Rial Coin"
            >
              <WalletIcon className="mr-2" />
              Invest in Rial Coin
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
