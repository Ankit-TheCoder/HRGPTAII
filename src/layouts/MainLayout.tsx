import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DarkModeToggle from '../components/DarkModeToggle';
import NotificationSystem, { Notification } from '../components/NotificationSystem';
import SearchBar from '../components/SearchBar';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const location = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
    // Add notification for demo purposes
    addNotification('Search functionality coming soon!', 'info');
  };

  // Function to add a notification
  const addNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, message, type }]);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismissNotification(id);
    }, 5000);
  };

  // Function to dismiss a notification
  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // Enhanced animation values
  const navLinkVariants = {
    hover: { 
      y: -2,
      color: 'var(--color-primary)',
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: 'spring', 
        stiffness: 500, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <header className="bg-white dark:bg-dark shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-dark/90 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <motion.div
                className="text-3xl w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md"
                whileHover="hover"
                whileTap="tap"
                variants={logoVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.67 0-5 1.34-5 3v2h2v-2c0-.32.33-1 3-1s3 .68 3 1v2h2v-2c0-1.66-2.33-3-5-3zm-2.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </motion.div>
              <motion.span
                className="font-extrabold tracking-tight"
                whileHover={{ 
                  backgroundImage: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                transition={{ duration: 0.3 }}
              >
                HRGPTAI
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/" 
                      className={`transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Home
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/features" 
                      className={`transition-colors ${location.pathname === '/features' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Features
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/videos" 
                      className={`transition-colors ${location.pathname === '/videos' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Video Demos
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/testimonials" 
                      className={`transition-colors ${location.pathname === '/testimonials' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Success Stories
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/blog" 
                      className={`transition-colors ${location.pathname === '/blog' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Blog
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/pricing" 
                      className={`transition-colors ${location.pathname === '/pricing' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Pricing
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/faq" 
                      className={`transition-colors ${location.pathname === '/faq' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      FAQ
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link 
                      to="/contact" 
                      className={`transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <SearchBar onSearch={handleSearch} suggestions={['Features', 'Pricing', 'FAQ', 'Contact', 'AI Recruitment', 'Video Interview']} />
              </div>
              <DarkModeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 10 
                }}
                className="hidden md:block"
              >
                <Link
                  to="/login"
                  className="btn-primary"
                >
                  Sign Up Free
                </Link>
              </motion.div>
              <motion.button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.1, backgroundColor: "#f1f5f9" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-dark-800 shadow-lg overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <span className="font-bold text-lg">Menu</span>
                <motion.button
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <nav className="p-4">
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/features" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/features' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/videos" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/videos' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Video Demos
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/testimonials" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/testimonials' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/blog' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/pricing" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/pricing' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/faq" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/faq' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                    <Link 
                      to="/login" 
                      className="block w-full p-3 text-center rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up Free
                    </Link>
                  </li>
                  <li className="mt-2">
                    <div className="block p-2 rounded-lg">
                      <SearchBar onSearch={handleSearch} suggestions={['Features', 'Pricing', 'FAQ', 'Contact', 'AI Recruitment', 'Video Interview']} />
                    </div>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-dark text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.67 0-5 1.34-5 3v2h2v-2c0-.32.33-1 3-1s3 .68 3 1v2h2v-2c0-1.66-2.33-3-5-3zm-2.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">HRGPTAI</span>
              </motion.div>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolutionizing hiring with AI-powered solutions.
              </motion.p>
            </div>
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                    Features
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/videos" className="text-gray-300 hover:text-white transition-colors">
                    Video Demos
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </motion.li>
              </ul>
            </div>
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Resources
              </motion.h4>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Support
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </motion.li>
              </ul>
            </div>
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Connect
              </motion.h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 10 
                  }}
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 10 
                  }}
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 10 
                  }}
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 9.341-6.253 9.341-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 10 
                  }}
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
          <motion.div 
            className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>© {new Date().getFullYear()} HRGPTAI. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Notification System */}
      <NotificationSystem notifications={notifications} onDismiss={dismissNotification} />
    </div>
  );
};

export default MainLayout; 