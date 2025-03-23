import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'job-description',
    title: 'Job Description & KRA Generator',
    description: 'Our AI creates detailed job descriptions and Key Responsibility Areas based on your requirements, saving HR teams hours of manual work.',
    icon: '📝',
    details: [
      'Save hours of manual writing with AI-generated job descriptions',
      'Ensure consistency across all job postings',
      'Include industry-specific skills and requirements automatically',
      'Generate KRAs that align with your company goals',
      'Optimize job descriptions for better candidate engagement',
      'Reduce unconscious bias with inclusive language recommendations',
    ],
  },
  {
    id: 'resume-screening',
    title: 'Resume Screening AI',
    description: 'Automatically filter and rank candidates based on skills, experience, and job fit with our advanced machine learning algorithms.',
    icon: '📄',
    details: [
      'Analyze hundreds of resumes in minutes',
      'Identify top candidates with skill-matching algorithms',
      'Reduce bias in the screening process',
      'Track candidate qualifications with detailed scoring',
      'Support for multiple file formats including PDF, DOCX, and LinkedIn profiles',
      'Create custom screening criteria based on your specific requirements',
    ],
  },
  {
    id: 'chatbot',
    title: 'Pre-Screening AI Chatbot',
    description: 'Conduct real-time interviews and assess candidates before the human interview stage with our conversational AI that adapts to candidate responses.',
    icon: '💬',
    details: [
      'Ask job-specific questions that evaluate technical knowledge',
      'Assess communication skills and problem-solving abilities',
      'Available 24/7 for candidate convenience',
      'Generate comprehensive interview reports',
      'Support for multiple languages and regionalized content',
      'Dynamic questioning that adapts based on candidate responses',
    ],
  },
  {
    id: 'testing',
    title: 'Psychoanalytical Testing',
    description: 'Evaluate emotional intelligence, leadership skills, and cultural fit with our scientifically validated assessment tools.',
    icon: '🧠',
    details: [
      'Assess personality traits relevant to specific roles',
      'Evaluate cultural fit with your organization',
      'Identify leadership and growth potential',
      'Generate detailed reports with actionable insights',
      'Benchmark candidates against high performers in similar roles',
      'Customize assessments based on your company values and culture',
    ],
  },
  {
    id: 'offers',
    title: 'Offer Letter Automation',
    description: 'Generate professional offer letters instantly based on selected candidates with customizable templates to match your brand.',
    icon: '📨',
    details: [
      'Create customized offer letters with all relevant details',
      'Maintain consistent branding across all communications',
      'Track offer acceptance and follow-ups',
      'Integrate with your HRIS system for seamless onboarding',
      'Legal compliance checks for different regions and jurisdictions',
      'Digital signing capabilities for faster acceptance process',
    ],
  },
  {
    id: 'analytics',
    title: 'Advanced Recruitment Analytics',
    description: 'Gain deep insights into your hiring process with comprehensive analytics and reporting tools that track every aspect of recruitment.',
    icon: '📊',
    details: [
      'Track key metrics like time-to-fill, cost-per-hire, and quality of hire',
      'Create custom dashboards for different stakeholders',
      'Forecast hiring needs based on historical data and growth projections',
      'Identify bottlenecks in your recruitment funnel',
      'Compare performance across teams, departments, and locations',
      'Export reports for executive presentations and planning',
    ],
  },
  {
    id: 'scheduling',
    title: 'Intelligent Interview Scheduling',
    description: 'Eliminate scheduling headaches with our AI-powered calendar coordination that finds optimal interview times for all parties.',
    icon: '📅',
    details: [
      'Automatically find available time slots across multiple calendars',
      'Send smart reminders to reduce no-shows',
      'Support for multiple time zones and international scheduling',
      'Seamless integration with Google Calendar, Outlook, and other platforms',
      'Create custom interview panels and routing based on candidate profiles',
      'Virtual meeting links generated automatically for remote interviews',
    ],
  },
  {
    id: 'talent-pipeline',
    title: 'Talent Pipeline Management',
    description: 'Build and maintain a robust talent pipeline with our AI-powered candidate relationship management system.',
    icon: '🌟',
    details: [
      'Categorize and organize candidates for future opportunities',
      'Set up automated nurture campaigns to keep candidates engaged',
      'Receive AI recommendations for previous candidates when new positions open',
      'Track candidate engagement with your communications',
      'Maintain compliance with data retention regulations',
      'Create talent pools based on skills, experience, and potential',
    ],
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <>
      <Helmet>
        <title>Features - HRGPTAI</title>
        <meta name="description" content="Explore HRGPTAI's AI-powered recruitment features." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Features
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our AI-powered tools can transform your recruitment process from job posting to offer letter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Feature Tabs */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                {features.map((feature) => (
                  <motion.button
                    key={feature.id}
                    className={`w-full px-6 py-4 text-left flex items-center gap-4 transition-colors ${
                      activeFeature === feature.id 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-900 dark:text-white'
                    }`}
                    onClick={() => setActiveFeature(feature.id)}
                    whileHover={{ x: activeFeature === feature.id ? 0 : 5 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Feature Details */}
            <div className="lg:w-2/3">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700 ${
                    activeFeature === feature.id ? 'block' : 'hidden'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{feature.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{feature.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{feature.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <span className="text-primary mr-2">✓</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/signup" className="btn-primary inline-block">
                    Try This Feature
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-dark-700 py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to transform your hiring?</h2>
                <p className="text-white/80">Get started with a free trial today.</p>
              </div>
              <Link to="/signup" className="btn bg-white text-primary hover:bg-gray-100">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features; 