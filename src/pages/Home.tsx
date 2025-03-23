import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';

const features = [
  {
    title: 'AI-Powered Resume Screening',
    description: 'Automatically shortlist top candidates based on skills, experience, and job fit with our advanced machine learning algorithms. Process hundreds of resumes in minutes.',
    icon: '📄',
  },
  {
    title: 'AI Chatbot Interviews',
    description: 'Conduct interactive pre-screening interviews to save time and identify the best fits. Our conversational AI adapts to candidate responses for a personalized experience.',
    icon: '💬',
  },
  {
    title: 'Psychoanalytical Testing',
    description: 'Evaluate candidates\' personalities, work styles, and cultural fit within your organization using scientifically validated assessment tools. Identify future leaders.',
    icon: '🧠',
  },
  {
    title: 'Job Description Generator',
    description: 'Create compelling and inclusive job descriptions with our AI assistant. Optimize for candidate engagement and reduce unconscious bias in your hiring process.',
    icon: '📝',
  },
  {
    title: 'Interview Scheduling',
    description: 'Eliminate scheduling headaches with our intelligent calendar coordination that finds optimal interview times for all parties across multiple time zones.',
    icon: '📅',
  },
  {
    title: 'Recruitment Analytics',
    description: 'Make data-driven decisions with comprehensive analytics dashboards tracking every aspect of your hiring process from sourcing to onboarding.',
    icon: '📊',
  },
];

const benefits = [
  {
    title: 'Faster Hiring Process',
    description: 'Reduce time-to-hire by up to 75% with automated screening and interviewing.',
    count: '75%',
  },
  {
    title: 'Cost-Effective Recruitment',
    description: 'Save on recruitment costs by automating time-consuming manual processes.',
    count: '60%',
  },
  {
    title: 'AI-Driven Decision Making',
    description: 'Make data-backed hiring decisions with advanced AI analytics and insights.',
    count: '90%',
  },
  {
    title: 'Improved Candidate Experience',
    description: 'Provide faster feedback and a streamlined application process for candidates.',
    count: '4.8/5',
  },
];

const testimonials = [
  {
    id: 1,
    quote: "HRGPTAI has transformed our hiring process completely. We've cut our time-to-hire by 70% while improving the quality of candidates we bring on board.",
    name: "Ananya Sharma",
    position: "VP of Talent Acquisition, TechMahindra",
    image: "https://placehold.co/100x100/EEE/31343C?text=AS&font=montserrat"
  },
  {
    id: 2,
    quote: "The AI chatbot interviews have been a game-changer for our high-volume recruitment needs. We can now screen thousands of candidates efficiently without sacrificing the personal touch.",
    name: "Rajiv Kapoor",
    position: "Chief People Officer, Infosys HR Solutions",
    image: "https://placehold.co/100x100/EEE/31343C?text=RK&font=montserrat"
  },
  {
    id: 3,
    quote: "I was skeptical about AI recruitment tools, but HRGPTAI proved me wrong. The psychoanalytical testing has helped us build more cohesive teams with better culture fits.",
    name: "Priya Malhotra",
    position: "Director of Operations, QuickHire India",
    image: "https://placehold.co/100x100/EEE/31343C?text=PM&font=montserrat"
  }
];

const integrationPartners = [
  { name: "Zoho People", logo: "https://placehold.co/200x80/EEE/31343C?text=Zoho&font=montserrat" },
  { name: "TalentRecruit", logo: "https://placehold.co/200x80/EEE/31343C?text=TalentRecruit&font=montserrat" },
  { name: "Darwinbox", logo: "https://placehold.co/200x80/EEE/31343C?text=Darwinbox&font=montserrat" },
  { name: "PeopleStrong", logo: "https://placehold.co/200x80/EEE/31343C?text=PeopleStrong&font=montserrat" },
  { name: "Keka HR", logo: "https://placehold.co/200x80/EEE/31343C?text=Keka&font=montserrat" },
  { name: "greytHR", logo: "https://placehold.co/200x80/EEE/31343C?text=greytHR&font=montserrat" }
];

const steps = [
  {
    number: "01",
    title: "Set Up Your Job Profile",
    description: "Define your job requirements, desired skills, and company culture attributes through our intuitive interface.",
    icon: "🎯"
  },
  {
    number: "02",
    title: "AI Screens Applicants",
    description: "Our AI automatically evaluates resumes, ranking candidates based on job fit and highlighting top matches.",
    icon: "🤖"
  },
  {
    number: "03",
    title: "Conduct Automated Interviews",
    description: "AI chatbots engage shortlisted candidates in preliminary interviews, evaluating responses and soft skills.",
    icon: "💬"
  },
  {
    number: "04",
    title: "Review AI Insights",
    description: "Examine comprehensive candidate reports with AI-generated insights to make data-driven hiring decisions.",
    icon: "📊"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>HRGPTAI - AI-Powered Recruitment Platform</title>
        <meta name="description" content="HRGPTAI streamlines recruitment with AI resume screening, chatbot interviews, and psychoanalytical testing." />
      </Helmet>

      <HeroSection />
      
      {/* Divider */}
      <div className="relative h-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        </motion.div>
      </div>

      <FeaturesSection />
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How HRGPTAI Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes implementing AI-powered recruitment simple and effective
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-soft relative overflow-hidden"
                variants={staggerItem}
              >
                <div className="absolute -right-4 -top-4 bg-primary/5 dark:bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <span className="text-5xl font-bold text-primary/20 dark:text-primary/10">{step.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link 
              to="/videos" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              <span>Watch demo videos</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from companies who have transformed their hiring processes with HRGPTAI
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative h-80">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => 
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-gray-50 dark:bg-dark-700 p-8 md:p-10 rounded-2xl shadow-soft absolute inset-0"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="text-5xl mb-6 text-gray-300 dark:text-gray-600">❝</div>
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic mb-8">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-14 h-14 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
            
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link 
              to="/testimonials" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              <span>View all success stories</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        </motion.div>
      </div>

      <StatsSection />
      
      {/* Integration Partners */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              HRGPTAI works with your existing HR and recruitment systems
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {integrationPartners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white dark:bg-dark-700 rounded-lg hover:shadow-soft transition-shadow duration-300"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies using HRGPTAI to find better candidates faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/signup" 
                  className="btn bg-white text-primary hover:bg-gray-100 w-full sm:w-auto"
                >
                  Start Free Trial
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="btn border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Request Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 