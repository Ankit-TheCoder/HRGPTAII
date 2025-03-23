import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
        <title>Privacy Policy - HRGPTAI</title>
        <meta name="description" content="HRGPTAI's privacy policy details how we handle and protect your personal information." />
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Last updated: June 15, 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h2>Introduction</h2>
                <p>
                  At HRGPTAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered recruitment platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
                </p>
                <p>
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Collection of Your Information</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect via the Platform includes:
                </p>
                
                <h3>Personal Data</h3>
                <p>
                  When you register with our platform, we collect personally identifiable information, such as your name, email address, and company information. If you're a candidate being assessed through our platform, we may collect information about your professional skills, work history, education, and assessment results.
                </p>
                
                <h3>Derivative Data</h3>
                <p>
                  Our servers automatically collect information when you access the Platform, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Platform. This information is primarily needed to maintain the security and operation of our platform.
                </p>
                
                <h3>AI-Generated Data</h3>
                <p>
                  When you use our AI recruitment tools, we collect data on interactions with the AI, including resume screening results, chatbot interview responses, psychoanalytical test results, and other assessments. This information is used to deliver our services and improve the AI's performance.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Use of Your Information</h2>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Platform to:
                </p>
                
                <ul>
                  <li>Provide and deliver the recruitment services you request</li>
                  <li>Create and manage your account</li>
                  <li>Increase the efficiency and operation of the Platform</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Platform</li>
                  <li>Notify you of updates to the Platform</li>
                  <li>Offer new products, services, and/or recommendations to you</li>
                  <li>Process payments and refunds</li>
                  <li>Resolve disputes and troubleshoot problems</li>
                  <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
                  <li>Train and improve our AI recruitment tools</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Disclosure of Your Information</h2>
                <p>
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                
                <h3>By Law or to Protect Rights</h3>
                <p>
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
                
                <h3>Third-Party Service Providers</h3>
                <p>
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>
                
                <h3>Business Transfers</h3>
                <p>
                  If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different Privacy Policy.
                </p>
                
                <h3>Interactions with Other Users</h3>
                <p>
                  If you interact with other users of the Platform, those users may see your profile, work activity, and any information you share in collaborative features.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
                <p>
                  Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Data Retention</h2>
                <p>
                  We will retain your information for as long as your account is active or as needed to provide you services. If you wish to cancel your account or request that we no longer use your information to provide you services, you can delete your account at any time. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Cross-Border Data Transfers</h2>
                <p>
                  Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                </p>
                <p>
                  If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal data, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Your Rights Regarding Your Data</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as:
                </p>
                
                <ul>
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request correction of inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                
                <p>
                  To exercise these rights, please contact us at privacy@hrgptai.com.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2>Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                
                <p>
                  HRGPTAI, Inc.<br />
                  123 AI Boulevard<br />
                  San Francisco, CA 94105<br />
                  Email: privacy@hrgptai.com<br />
                  Phone: (800) HR-GPTAI
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-gray-50 dark:bg-dark-700 py-12">
        <div className="container">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-dark-800 rounded-xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Have questions about our privacy practices?</h2>
              <p className="text-gray-600 dark:text-gray-300">Our team is here to help with any privacy concerns.</p>
            </div>
            <Link 
              to="/contact" 
              className="mt-4 md:mt-0 btn-primary"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Privacy; 