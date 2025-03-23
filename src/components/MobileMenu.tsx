import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

const linkVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: (custom: number) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: custom * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }),
  hover: {
    x: 5,
    color: 'var(--color-primary)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/videos", label: "Video Demos" },
    { to: "/testimonials", label: "Success Stories" },
    { to: "/blog", label: "Blog" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy", label: "Privacy Policy" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-dark shadow-lg z-50 overflow-y-auto"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" onClick={onClose} className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="text-3xl">🧠</span>
                  <span>HRGPTAI</span>
                </Link>
                <motion.button
                  onClick={onClose}
                  className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>
              
              <nav>
                <motion.ul className="space-y-3" initial="hidden" animate="visible">
                  {menuLinks.map((link, index) => (
                    <motion.li key={link.to} custom={index} variants={linkVariants}>
                      <motion.div whileHover="hover" variants={linkVariants}>
                        <Link
                          to={link.to}
                          className="block py-3 px-2 text-lg text-gray-800 dark:text-gray-200 hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-800"
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Link
                    to="/login"
                    className="block w-full py-3 px-4 text-center rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                    onClick={onClose}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full py-3 px-4 text-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                    onClick={onClose}
                  >
                    Sign Up Free
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 