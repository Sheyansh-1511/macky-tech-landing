import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../sections/Footer';

const Terms = () => {
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
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Macky Tech's services, you accept and agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Services Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Macky Tech provides web development, mobile app development, UI/UX design, 
                and digital consulting services. We work with clients to create custom solutions 
                tailored to their specific business needs and requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Client Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Provide accurate and complete information for your project requirements</li>
                <li>Respond promptly to communications and requests</li>
                <li>Provide necessary assets and materials in a timely manner</li>
                <li>Review and provide feedback on deliverables</li>
                <li>Make timely payments as agreed in project contracts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Macky Tech Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Deliver high-quality work that meets professional standards</li>
                <li>Communicate clearly and regularly about project progress</li>
                <li>Meet agreed-upon deadlines and milestones</li>
                <li>Provide technical support and maintenance as specified</li>
                <li>Protect client confidentiality and intellectual property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Payment terms are specified in individual project agreements. 
                Typically, projects require a deposit to begin work, with milestone payments 
                throughout the project lifecycle. Final payment is due upon project completion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Upon full payment, all intellectual property rights for the delivered work 
                transfer to the client. Macky Tech retains rights to tools, processes, 
                and methodologies used in project development.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Macky Tech shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of our services. 
                Our total liability shall not exceed the amount paid for the services in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate the agreement with written notice. 
                Client will pay for all work completed up to the termination date. 
                Macky Tech will provide all work product to date of termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. 
                Changes will be effective immediately upon posting. 
                Continued use of our services constitutes acceptance of any modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
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
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws 
                of the State of California, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Last Updated
              </h2>
              <p className="text-sm text-gray-500">
                February 5, 2024
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
