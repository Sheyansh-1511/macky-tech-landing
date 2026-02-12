import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Macky Tech
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate developers and designers dedicated to creating exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded with a vision to transform businesses through technology, Macky Tech has been at the forefront of digital innovation for over 5 years. Our journey began with a simple mission: to help businesses leverage the power of technology to achieve their goals.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                To deliver cutting-edge digital solutions that empower businesses to thrive in the modern digital landscape. We believe in creating technology that not only meets today's needs but also anticipates tomorrow's challenges.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li>• Innovation: We constantly push the boundaries of what's possible</li>
                <li>• Quality: We never compromise on the quality of our work</li>
                <li>• Integrity: We believe in transparent and honest business practices</li>
                <li>• Customer Success: Your success is our success</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
