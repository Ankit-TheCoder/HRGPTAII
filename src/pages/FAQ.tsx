import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes HRGPTAI different from traditional recruitment software?",
    answer: "HRGPTAI leverages advanced artificial intelligence to automate and enhance every step of the recruitment process. Unlike traditional software that simply digitizes manual processes, our AI can generate job descriptions, screen resumes with human-like comprehension, conduct pre-screening interviews, perform psychoanalytical testing, and even generate offer letters—all while continuously learning and improving from each interaction.",
    category: "general"
  },
  {
    question: "How accurate is the AI resume screening?",
    answer: "Our AI resume screening achieves over 95% accuracy compared to expert human recruiters. The system uses natural language processing to understand context, identify relevant skills, and rank candidates based on job requirements. It's designed to reduce bias and identify qualified candidates who might be overlooked by traditional keyword-based screening methods.",
    category: "features"
  },
  {
    question: "Is my company's data secure with HRGPTAI?",
    answer: "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and strict access controls. All data is stored in compliance with GDPR and other regional data protection regulations. We never share your data with third parties, and you retain complete ownership of all your information.",
    category: "security"
  },
  {
    question: "Can HRGPTAI integrate with our existing HR systems?",
    answer: "Yes, HRGPTAI is designed for seamless integration with popular HRIS, ATS, and other HR technologies. We offer standard API connections to platforms like Workday, SAP SuccessFactors, BambooHR, and many others. Our team can also develop custom integrations for enterprise clients with specific requirements.",
    category: "technical"
  },
  {
    question: "How long does it take to implement HRGPTAI?",
    answer: "Most companies can be up and running with HRGPTAI in less than a week. Our standard implementation includes account setup, basic customization, and integration with your existing systems. Enterprise clients with complex requirements might require 2-4 weeks for full implementation, including custom integrations and tailored workflows.",
    category: "implementation"
  },
  {
    question: "What kind of support does HRGPTAI provide?",
    answer: "All plans include email support with 24-hour response times. Pro plans add phone support during business hours, while Enterprise clients receive 24/7 priority support with a dedicated account manager. We also provide comprehensive documentation, video tutorials, and regular webinars for all users.",
    category: "support"
  },
  {
    question: "Can I customize the AI chatbot's questions for specific roles?",
    answer: "Absolutely. You can fully customize the AI chatbot's questions for each position. Our platform allows you to define specific technical questions, behavioral assessments, and even simulate job-specific scenarios. The AI will adapt its questioning based on candidate responses, creating a conversational and revealing interview experience.",
    category: "features"
  },
  {
    question: "How does the free trial work?",
    answer: "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start. You can process up to 25 candidates during the trial period, which is enough to experience the full capabilities of the platform. At the end of the trial, you can seamlessly transition to a paid subscription without losing any data.",
    category: "billing"
  },
  {
    question: "Is HRGPTAI suitable for small businesses?",
    answer: "Yes, HRGPTAI is designed to scale with businesses of all sizes. Our Basic plan is specifically created for small businesses, providing essential AI recruitment tools at an affordable price point. The intuitive interface requires minimal training, making it accessible even without dedicated HR staff.",
    category: "general"
  },
  {
    question: "What happens to my data if I cancel my subscription?",
    answer: "If you cancel your subscription, you'll have 30 days to export all your data in standard formats (CSV, JSON, etc.). After this period, your data will be scheduled for deletion from our systems. We can provide extension periods for data retention if needed, and we offer a data escrow service for enterprise clients requiring longer-term data preservation.",
    category: "billing"
  },
  {
    question: "How often is HRGPTAI updated with new features?",
    answer: "We release major feature updates quarterly, with minor improvements and bug fixes deployed continuously. Our development roadmap is partially influenced by customer feedback, and Enterprise clients can request priority development for specific features. All updates are automatically applied to the platform with zero downtime.",
    category: "technical"
  },
  {
    question: "Can HRGPTAI handle recruitment in multiple languages?",
    answer: "Yes, HRGPTAI currently supports 12 languages including English, Spanish, French, German, Chinese, Japanese, Portuguese, Italian, Dutch, Russian, Arabic, and Hindi. The AI can screen resumes, conduct interviews, and generate documents in all supported languages, making it ideal for global organizations.",
    category: "features"
  },
];

const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "features", name: "Features" },
  { id: "technical", name: "Technical" },
  { id: "security", name: "Security" },
  { id: "implementation", name: "Implementation" },
  { id: "support", name: "Support" },
  { id: "billing", name: "Billing" },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(faq => {
    // Filter by category
    if (activeCategory !== "all" && faq.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !faq.question.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const toggleItem = (question: string) => {
    if (expandedItem === question) {
      setExpandedItem(null);
    } else {
      setExpandedItem(question);
    }
  };

  const item = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - HRGPTAI</title>
        <meta name="description" content="Find answers to common questions about HRGPTAI's AI-powered recruitment platform." />
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our AI-powered recruitment platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          {/* Search and Filter */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
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

          {/* FAQ Items */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-dark-800"
                  variants={item}
                >
                  <button
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleItem(faq.question)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                    <motion.span 
                      className="text-primary text-xl"
                      animate={{ rotate: expandedItem === faq.question ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      ↓
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {expandedItem === faq.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="text-center py-12 text-gray-500 dark:text-gray-400"
                variants={item}
              >
                <p className="mb-2 text-2xl">🔍</p>
                <p>No questions match your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gray-50 dark:bg-dark-700 py-16">
        <div className="container">
          <motion.div 
            className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-12 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance with your specific recruitment needs.
              </p>
              <motion.a 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 