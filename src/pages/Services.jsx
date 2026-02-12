import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['React/Vue/Angular', 'Node.js/Python', 'Database Design', 'API Development']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns']
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
