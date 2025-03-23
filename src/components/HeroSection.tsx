import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transform Your Hiring Process with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Streamline recruitment, eliminate bias, and find the perfect candidates using our advanced AI-powered platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="btn-primary text-lg px-8 py-3 rounded-xl hover:scale-105 transform transition-all"
              >
                Get Started Free
              </Link>
              <Link
                to="/videos"
                className="btn-secondary text-lg px-8 py-3 rounded-xl hover:scale-105 transform transition-all"
              >
                Watch Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-dark bg-gray-200 flex items-center justify-center text-sm font-medium"
                  >
                    👤
                  </div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Trusted by <span className="font-bold text-primary">1000+</span> companies
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl z-0" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">AI Interview Assistant</h3>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Live</span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {i === 1 ? '🎯' : i === 2 ? '🤖' : '📊'}
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {i === 1
                            ? 'Smart Candidate Matching'
                            : i === 2
                            ? 'AI-Powered Interviews'
                            : 'Real-time Analytics'}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {i === 1
                            ? 'Find the perfect fit instantly'
                            : i === 2
                            ? 'Conduct bias-free interviews'
                            : 'Track hiring metrics effortlessly'}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 