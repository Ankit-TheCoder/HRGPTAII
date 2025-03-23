import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readingTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-recruiting-trends-2023',
    title: 'Top 10 AI Recruiting Trends to Watch in 2023',
    summary: 'Explore the latest AI innovations that are transforming the recruitment landscape, from predictive analytics to conversational AI interviews.',
    author: 'Sarah Johnson',
    date: 'August 15, 2023',
    category: 'trends',
    image: 'https://placehold.co/800x400/007BFF/FFFFFF?text=AI+Trends+2023',
    readingTime: '6 min read'
  },
  {
    id: 'unbiased-hiring',
    title: 'How AI is Eliminating Bias in the Hiring Process',
    summary: 'Learn how advanced algorithms are helping companies create more diverse and inclusive workplaces by reducing unconscious bias in recruitment.',
    author: 'Michael Chen',
    date: 'July 28, 2023',
    category: 'diversity',
    image: 'https://placehold.co/800x400/6F42C1/FFFFFF?text=Unbiased+Hiring',
    readingTime: '9 min read'
  },
  {
    id: 'candidate-experience',
    title: 'Enhancing Candidate Experience with AI Chatbots',
    summary: 'Discover how AI-powered chatbots are revolutionizing the candidate experience by providing instant feedback and personalized interactions.',
    author: 'Jessica Patel',
    date: 'June 12, 2023',
    category: 'experience',
    image: 'https://placehold.co/800x400/28A745/FFFFFF?text=AI+Chatbots',
    readingTime: '5 min read'
  },
  {
    id: 'skills-assessment',
    title: 'The Science Behind AI Skills Assessment',
    summary: 'An in-depth look at how artificial intelligence evaluates candidate skills more effectively than traditional methods.',
    author: 'Dr. Robert Smith',
    date: 'May 30, 2023',
    category: 'technology',
    image: 'https://placehold.co/800x400/FD7E14/FFFFFF?text=Skills+Assessment',
    readingTime: '12 min read'
  },
  {
    id: 'remote-hiring',
    title: 'Remote Hiring Made Simple with AI',
    summary: 'How companies are using AI to streamline remote hiring processes and find the best global talent regardless of location.',
    author: 'Anna Martinez',
    date: 'April 22, 2023',
    category: 'remote-work',
    image: 'https://placehold.co/800x400/20C997/FFFFFF?text=Remote+Hiring',
    readingTime: '7 min read'
  },
  {
    id: 'hr-automation',
    title: 'Beyond Recruitment: AI Applications in HR Automation',
    summary: 'Exploring how AI is expanding beyond recruitment to transform every aspect of human resources management.',
    author: 'James Wilson',
    date: 'March 15, 2023',
    category: 'automation',
    image: 'https://placehold.co/800x400/DC3545/FFFFFF?text=HR+Automation',
    readingTime: '8 min read'
  }
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'trends', name: 'Industry Trends' },
  { id: 'diversity', name: 'Diversity & Inclusion' },
  { id: 'experience', name: 'Candidate Experience' },
  { id: 'technology', name: 'Technology' },
  { id: 'remote-work', name: 'Remote Work' },
  { id: 'automation', name: 'Automation' }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    if (activeCategory !== 'all' && post.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && 
        !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.summary.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog - HRGPTAI</title>
        <meta name="description" content="Insights and updates about AI-powered recruitment and HR technologies." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              The HRGPTAI Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights and updates about AI-powered recruitment and HR technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          {/* Search and Filter */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="results"
              >
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-primary font-semibold px-2 py-1 bg-primary/10 rounded-full">
                          {categories.find(c => c.id === post.category)?.name || post.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.summary}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            <span>By {post.author}</span>
                            <span className="mx-1">•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-dark-700 border-t border-gray-100 dark:border-gray-700">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-primary font-medium flex items-center text-sm"
                      >
                        Read full article
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16 text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="no-results"
              >
                <p className="mb-2 text-2xl">🔍</p>
                <p className="text-xl mb-4">No articles match your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-4 py-2 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 dark:bg-dark-700 py-16">
        <div className="container">
          <motion.div 
            className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 md:p-12 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-white/80 mb-6 md:mb-0">
                  Get the latest insights on AI recruitment technologies delivered straight to your inbox.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-lg flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <motion.button 
                    className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog; 