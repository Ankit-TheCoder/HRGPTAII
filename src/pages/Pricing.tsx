import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'Free',
    billing: '',
    description: 'Essential AI tools for small businesses',
    features: [
      'Resume Screening (10/month)',
      'Job Description Generator',
      'Email Support',
      '1 User Account',
    ],
    isPopular: false,
    cta: 'Sign Up Free',
    ctaLink: '/signup',
  },
  {
    name: 'Pro',
    price: '₹2,499',
    billing: '/month',
    description: 'Advanced tools for growing companies',
    features: [
      'Resume Screening (100/month)',
      'AI Chatbot Interviews',
      'Psychoanalytical Testing',
      'Job Description Generator',
      'Priority Support',
      '3 User Accounts',
    ],
    isPopular: true,
    cta: 'Start Free Trial',
    ctaLink: '/signup',
  },
  {
    name: 'Enterprise',
    price: '₹8,499',
    billing: '/month',
    description: 'Complete AI suite for large organizations',
    features: [
      'Unlimited Resume Screening',
      'Advanced AI Chatbot Interviews',
      'Comprehensive Psychoanalytical Testing',
      'Offer Letter Automation',
      'Custom Integrations',
      'Dedicated Account Manager',
      'Unlimited User Accounts',
    ],
    isPopular: false,
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },
];

const comparisonData = [
  {
    category: 'Time Savings',
    traditional: '40+ hours per hire',
    hrgptai: '10 hours per hire',
    savings: '75% less time',
  },
  {
    category: 'Cost Per Hire',
    traditional: '₹30,000 - ₹1,50,000',
    hrgptai: '₹8,000 - ₹40,000',
    savings: '75% cost reduction',
  },
  {
    category: 'Candidate Experience',
    traditional: 'Slow feedback, lengthy process',
    hrgptai: 'Instant feedback, streamlined',
    savings: 'Higher satisfaction',
  },
  {
    category: 'Quality of Hire',
    traditional: 'Subjective evaluation',
    hrgptai: 'Data-driven decisions',
    savings: 'Better fit candidates',
  },
];

const successStories = [
  {
    companyName: "Reliance Tech Solutions",
    logo: "https://placehold.co/100x100/EEE/31343C?text=RTS&font=montserrat",
    quote: "After implementing HRGPTAI, our time-to-hire decreased by 65%. We now process over 500 applications per month with just 2 HR team members.",
    stats: [
      { value: "65%", label: "Faster Hiring" },
      { value: "40%", label: "Cost Reduction" },
      { value: "3x", label: "Candidate Quality" }
    ],
    person: {
      name: "Vikram Mehta",
      position: "Chief HR Officer",
      image: "https://placehold.co/60x60/EEE/31343C?text=VM&font=montserrat"
    }
  },
  {
    companyName: "Tata Consultancy Services",
    logo: "https://placehold.co/100x100/EEE/31343C?text=TCS&font=montserrat",
    quote: "HRGPTAI's psychoanalytical testing has been a game-changer for our organization. Our retention rates have improved by 45% with better culture fits.",
    stats: [
      { value: "45%", label: "Better Retention" },
      { value: "70%", label: "Faster Screening" },
      { value: "₹1.2Cr", label: "Annual Savings" }
    ],
    person: {
      name: "Priya Singh",
      position: "Head of Talent Acquisition",
      image: "https://placehold.co/60x60/EEE/31343C?text=PS&font=montserrat"
    }
  },
  {
    companyName: "Infosys HR Solutions",
    logo: "https://placehold.co/100x100/EEE/31343C?text=IHR&font=montserrat",
    quote: "We've been able to scale our recruitment operations across 12 cities without adding additional HR staff, all thanks to HRGPTAI's automation capabilities.",
    stats: [
      { value: "300%", label: "Efficiency Gain" },
      { value: "12", label: "Cities Covered" },
      { value: "0", label: "New HR Hires" }
    ],
    person: {
      name: "Rajiv Kapoor",
      position: "Director of Operations",
      image: "https://placehold.co/60x60/EEE/31343C?text=RK&font=montserrat"
    }
  }
];

const trustBadges = [
  { name: "ISO 27001 Certified", icon: "🔒" },
  { name: "GDPR Compliant", icon: "🛡️" },
  { name: "99.9% Uptime", icon: "⚡" },
  { name: "256-bit Encryption", icon: "🔐" },
  { name: "SOC 2 Compliant", icon: "✅" }
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [activeStory, setActiveStory] = useState(0);

  return (
    <>
      <Helmet>
        <title>Pricing - HRGPTAI</title>
        <meta name="description" content="Explore HRGPTAI's flexible pricing plans for AI-powered recruitment solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 py-20">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">PRICING PLANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that works best for your recruitment needs. No hidden fees. Cancel anytime.
            </p>
            <div className="max-w-xs mx-auto bg-white dark:bg-dark-800 p-1 rounded-full flex items-center shadow-md">
              <button 
                className={`flex-1 py-2 px-4 rounded-full font-medium transition-all duration-500 ease-in-out ${billingPeriod === 'monthly' ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md' : 'text-gray-700 dark:text-gray-300'}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`flex-1 py-2 px-4 rounded-full font-medium transition-all duration-500 ease-in-out ${billingPeriod === 'annual' ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md' : 'text-gray-700 dark:text-gray-300'}`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual (Save 20%)
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white dark:bg-dark py-8 border-b border-gray-100 dark:border-gray-800">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="font-medium">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white dark:bg-dark py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-xl border-2 ${
                  plan.isPopular ? 'border-primary scale-105 z-10 relative' : 'border-gray-200 dark:border-gray-700'
                } bg-white dark:bg-dark-800 transition-all duration-300 hover:transform hover:translate-y-[-0.5rem]`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.isPopular && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white py-1.5 px-4 text-sm font-bold absolute top-0 left-0 right-0 text-center">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-8 ${plan.isPopular ? 'pt-12 bg-primary/5 dark:bg-primary/10' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 h-12">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {billingPeriod === 'annual' && plan.price !== 'Free' 
                        ? plan.price === '₹2,499' ? '₹1,999' : '₹6,799'
                        : plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1 text-xl">
                      {plan.billing && (billingPeriod === 'annual' ? '/month, billed annually' : plan.billing)}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/login"
                    className={`block text-center py-4 rounded-xl transition-all duration-300 font-bold text-base ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section bg-gray-50 dark:bg-dark-800 py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Real Results from Real Companies</h2>
            <p className="subtitle mx-auto text-gray-600 dark:text-gray-300 max-w-2xl">
              See how organizations across India are transforming their hiring processes with HRGPTAI
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="flex gap-3">
              {successStories.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeStory === index ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600'}`}
                  onClick={() => setActiveStory(index)}
                  aria-label={`View success story ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeStory * 100}%)` }}>
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <motion.div 
                    className="bg-white dark:bg-dark-700 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img src={story.logo} alt={story.companyName} className="w-16 h-16 rounded-lg" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{story.companyName}</h3>
                    </div>
                    
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">"{story.quote}"</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {story.stats.map((stat, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-dark-600 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <img src={story.person.image} alt={story.person.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{story.person.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{story.person.position}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex gap-3">
              <button 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                onClick={() => setActiveStory(prev => Math.max(0, prev - 1))}
                disabled={activeStory === 0}
                aria-label="Previous story"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                onClick={() => setActiveStory(prev => Math.min(successStories.length - 1, prev + 1))}
                disabled={activeStory === successStories.length - 1}
                aria-label="Next story"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white dark:bg-dark py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">ROI COMPARISON</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">HRGPTAI vs. Traditional Hiring</h2>
            <p className="subtitle mx-auto text-gray-600 dark:text-gray-300 max-w-2xl">
              See how our AI-powered platform can revolutionize your recruitment process with significant time and cost savings.
            </p>
          </motion.div>

          <motion.div 
            className="overflow-x-auto max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <table className="w-full bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                <tr>
                  <th className="py-5 px-6 text-left font-bold text-lg">Category</th>
                  <th className="py-5 px-6 text-left font-bold text-lg">Traditional Hiring</th>
                  <th className="py-5 px-6 text-left font-bold text-lg">HRGPTAI</th>
                  <th className="py-5 px-6 text-left font-bold text-lg">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-dark-700' : 'bg-white dark:bg-dark-800'}>
                    <td className="py-5 px-6 font-medium text-gray-900 dark:text-white text-lg">{row.category}</td>
                    <td className="py-5 px-6 text-gray-600 dark:text-gray-300">{row.traditional}</td>
                    <td className="py-5 px-6 text-primary font-medium">{row.hrgptai}</td>
                    <td className="py-5 px-6 text-green-600 dark:text-green-400 font-bold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-dark-700 py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white dark:bg-dark-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Can I switch plans later?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-dark-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Do you offer custom plans?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, for larger organizations with specific needs, we offer custom enterprise solutions. Contact our sales team for details.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-dark-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Is there a free trial?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, all paid plans include a 14-day free trial so you can experience the full power of HRGPTAI before committing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-dark-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">What payment methods do you accept?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, UPI, NetBanking, and PayTM. We also offer invoicing for annual Enterprise plans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free trial today. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </Link>
              <Link to="/login" className="btn border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing; 