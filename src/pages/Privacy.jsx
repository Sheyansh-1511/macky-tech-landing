import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../sections/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Macky Tech, we collect information you provide directly to us. 
                This includes personal information such as your name, email address, and any other details 
                you voluntarily share when contacting us or using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services. 
                This includes responding to inquiries, processing requests, and communicating with clients. 
                We do not sell or share your personal information with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. We use SSL encryption 
                for all data transmissions and follow industry best practices for data protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, update, or delete your personal information. 
                You may also request that we cease processing your information and delete any data 
                we have collected about you. We will comply with your request within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  <strong>Email:</strong>{' '}
                  <a 
                    href="mailto:info@mackystech.in" 
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    info@mackystech.in
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong>{' '}
                  <a 
                    href="tel:+918235910315" 
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    +91 8235910315
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Last Updated:</strong> February 5, 2024
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
