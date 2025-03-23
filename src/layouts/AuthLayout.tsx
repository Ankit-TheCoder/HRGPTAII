import { motion } from 'framer-motion';
import { Outlet, Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-800 flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.67 0-5 1.34-5 3v2h2v-2c0-.32.33-1 3-1s3 .68 3 1v2h2v-2c0-1.66-2.33-3-5-3zm-2.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
              </svg>
            </div>
            <span className="font-extrabold tracking-tight">HRGPTAI</span>
          </Link>
        </motion.div>
        <DarkModeToggle />
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} HRGPTAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout; 