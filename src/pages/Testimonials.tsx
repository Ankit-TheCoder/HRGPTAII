import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface Company {
  id: string;
  name: string;
  industry: string;
  logo: string;
  color: string;
}

interface Testimonial {
  id: string;
  companyId: string;
  name: string;
  position: string;
  avatar: string;
  quote: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const companies: Company[] = [
  {
    id: 'techcorp',
    name: 'TechCorp',
    industry: 'Software Development',
    logo: 'https://placehold.co/200x80/0066FF/FFFFFF?text=TechCorp&font=montserrat',
    color: '#0066FF',
  },
  {
    id: 'globalhr',
    name: 'Global HR Solutions',
    industry: 'HR Consulting',
    logo: 'https://placehold.co/200x80/8800CC/FFFFFF?text=GlobalHR&font=montserrat',
    color: '#8800CC',
  },
  {
    id: 'quickhire',
    name: 'QuickHire Staffing',
    industry: 'Staffing & Recruitment',
    logo: 'https://placehold.co/200x80/FF6600/FFFFFF?text=QuickHire&font=montserrat',
    color: '#FF6600',
  },
  {
    id: 'medtech',
    name: 'MedTech Innovations',
    industry: 'Healthcare Technology',
    logo: 'https://placehold.co/200x80/00AA88/FFFFFF?text=MedTech&font=montserrat',
    color: '#00AA88',
  },
  {
    id: 'retailmax',
    name: 'RetailMax',
    industry: 'Retail',
    logo: 'https://placehold.co/200x80/DD0000/FFFFFF?text=RetailMax&font=montserrat',
    color: '#DD0000',
  },
  {
    id: 'finedge',
    name: 'FinEdge Capital',
    industry: 'Financial Services',
    logo: 'https://placehold.co/200x80/004488/FFFFFF?text=FinEdge&font=montserrat',
    color: '#004488',
  },
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    companyId: 'techcorp',
    name: 'Jennifer Lee',
    position: 'VP of Talent Acquisition',
    avatar: 'https://placehold.co/100x100/EEE/31343C?text=JL&font=montserrat',
    quote: "HRGPTAI has transformed our hiring process completely. We were spending 40+ hours screening candidates for each technical position. Now, the AI does the heavy lifting, and we only focus on the top 5 candidates for each role. Our time-to-hire has decreased by 70%, and the quality of hires has actually improved.",
    metrics: [
      { label: 'Time to Hire', value: '70% Decrease' },
      { label: 'Candidate Quality', value: '35% Increase' },
      { label: 'HR Team Productivity', value: '60% Improvement' },
    ],
  },
  {
    id: '2',
    companyId: 'globalhr',
    name: 'Marcus Johnson',
    position: 'Chief People Officer',
    avatar: 'https://placehold.co/100x100/EEE/31343C?text=MJ&font=montserrat',
    quote: "As a consulting firm, we've implemented HRGPTAI with dozens of our clients. The results have been consistently impressive. The AI's ability to screen resumes without human bias has led to more diverse hiring outcomes. One of our clients increased their workforce diversity by 40% while simultaneously reducing their recruitment costs.",
    metrics: [
      { label: 'Cost per Hire', value: '65% Reduction' },
      { label: 'Diversity Hiring', value: '40% Increase' },
      { label: 'Client Satisfaction', value: '92% Positive' },
    ],
  },
  {
    id: '3',
    companyId: 'quickhire',
    name: 'Sophia Rodriguez',
    position: 'Director of Operations',
    avatar: 'https://placehold.co/100x100/EEE/31343C?text=SR&font=montserrat',
    quote: "Our staffing agency handles thousands of candidates every month. Before HRGPTAI, we had a team of 12 people just screening resumes. Now we've reassigned 9 of them to more valuable tasks. The AI chatbot pre-screening is particularly impressive - candidates consistently rate it as a positive experience, which reflects well on both our agency and our clients.",
    metrics: [
      { label: 'Staff Efficiency', value: '300% Improvement' },
      { label: 'Candidate Experience', value: '4.8/5 Rating' },
      { label: 'Monthly Placements', value: '45% More' },
    ],
  },
  {
    id: '4',
    companyId: 'medtech',
    name: 'Dr. Robert Chen',
    position: 'Head of Talent',
    avatar: 'https://placehold.co/100x100/EEE/31343C?text=RC&font=montserrat',
    quote: "The healthcare technology sector has unique hiring challenges. We need candidates with both technical skills and healthcare knowledge. HRGPTAI's advanced screening capabilities can identify candidates with this rare combination better than human recruiters. The psychological testing has been particularly valuable for ensuring cultural fit in our high-pressure environment.",
    metrics: [
      { label: 'Specialized Talent Discovery', value: '85% Faster' },
      { label: 'Employee Retention', value: '38% Longer' },
      { label: 'Onboarding Success', value: '90% Rate' },
    ],
  },
  {
    id: '5',
    companyId: 'retailmax',
    name: 'Aisha Patel',
    position: 'Regional HR Manager',
    avatar: 'https://placehold.co/100x100/EEE/31343C?text=AP&font=montserrat',
    quote: "With over 200 stores and constant hiring needs, RetailMax needed a solution that could scale. HRGPTAI handles thousands of applications for us each month, automatically ranking candidates and scheduling interviews. Our store managers now spend 60% less time on hiring activities while making better hires that stay with us longer.",
    metrics: [
      { label: 'Application Processing', value: '1000s Monthly' },
      { label: 'Manager Time Saved', value: '60% Reduction' },
      { label: 'Employee Turnover', value: '42% Lower' },
    ],
  },
  {
    id: '6',
    companyId: 'finedge',
    name: 'Thomas Grant',
    position: 'Senior VP of Human Resources',
    avatar: 'https://placehold.co/100x100/EEE/31343C?text=TG&font=montserrat',
    quote: "In financial services, compliance is critical. HRGPTAI helps us automatically screen for required certifications and credentials, reducing compliance risks. The automated offer letter generation with all our legal requirements has been a game-changer. What used to take our legal team days to review now happens automatically.",
    metrics: [
      { label: 'Compliance Accuracy', value: '99.8%' },
      { label: 'Offer Generation Time', value: 'Minutes vs Days' },
      { label: 'Legal Review Costs', value: '80% Savings' },
    ],
  },
];

const Testimonials = () => {
  const [activeCompany, setActiveCompany] = useState<string | null>('all');
  const [highlightedTestimonial, setHighlightedTestimonial] = useState<Testimonial>(testimonials[0]);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Filter testimonials based on selected company
  const filteredTestimonials = activeCompany === 'all'
    ? testimonials
    : testimonials.filter(t => t.companyId === activeCompany);

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
        <title>Customer Testimonials - HRGPTAI</title>
        <meta name="description" content="See what our customers say about HRGPTAI's AI-powered recruitment solutions." />
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
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how organizations are transforming their hiring process with HRGPTAI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={highlightedTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <motion.div
                      className="flex flex-col items-center md:items-start text-center md:text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="mb-6">
                        <img 
                          src={companies.find(c => c.id === highlightedTestimonial.companyId)?.logo} 
                          alt={companies.find(c => c.id === highlightedTestimonial.companyId)?.name}
                          className="h-12 object-contain"
                        />
                      </div>
                      <div className="flex items-center mb-4">
                        <img 
                          src={highlightedTestimonial.avatar} 
                          alt={highlightedTestimonial.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{highlightedTestimonial.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{highlightedTestimonial.position}</p>
                        </div>
                      </div>
                      {highlightedTestimonial.metrics && (
                        <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-sm w-full mt-6">
                          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Results Achieved</h4>
                          <div className="space-y-4">
                            {highlightedTestimonial.metrics.map((metric, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (idx * 0.1), duration: 0.4 }}
                              >
                                <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
                                <p className="text-lg font-bold text-primary">{metric.value}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <svg className="text-gray-300 dark:text-gray-600 h-16 w-16 mb-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-8">
                        {highlightedTestimonial.quote}
                      </p>
                      <Link 
                        to="/contact" 
                        className="btn-primary inline-flex items-center"
                      >
                        Get Similar Results
                        <span className="ml-2">→</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Company Filter */}
      <section className="py-12 bg-gray-50 dark:bg-dark-700">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Filter by Industry</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className={`px-6 py-3 rounded-lg transition-colors ${
                activeCompany === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
              onClick={() => setActiveCompany('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              All Industries
            </motion.button>
            
            {companies.map((company) => (
              <motion.button
                key={company.id}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeCompany === company.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
                }`}
                onClick={() => setActiveCompany(company.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {company.industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <motion.div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {filteredTestimonials.map((testimonial) => {
              const company = companies.find(c => c.id === testimonial.companyId);
              return (
                <motion.div
                  key={testimonial.id}
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setHighlightedTestimonial(testimonial)}
                >
                  <div className="h-2" style={{ backgroundColor: company?.color }}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto">
                      <img 
                        src={company?.logo} 
                        alt={company?.name}
                        className="h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-dark-700 border-t border-gray-100 dark:border-gray-700">
                    <button 
                      className="text-primary font-medium flex items-center text-sm"
                      onClick={() => setHighlightedTestimonial(testimonial)}
                    >
                      Read full story
                      <span className="ml-1">→</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join these successful companies and experience the future of recruitment.
            </p>
            <Link to="/signup" className="bg-white text-primary hover:bg-gray-100 btn">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials; 