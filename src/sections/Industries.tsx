import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const industries = [
  {
    title: 'Healthcare',
    image: '/images/healthcare.jpg',
    description: 'Digital solutions for medical professionals and healthcare facilities'
  },
  {
    title: 'Education',
    image: '/images/education.jpg',
    description: 'E-learning platforms and educational technology solutions'
  },
  {
    title: 'Retail',
    image: '/images/retail.jpg',
    description: 'E-commerce platforms and digital retail experiences'
  },
  {
    title: 'Finance',
    image: '/images/finance.jpg',
    description: 'Secure fintech solutions and banking applications'
  },
  {
    title: 'Real Estate',
    image: '/images/real-estate.jpg',
    description: 'Property management and real estate technology solutions'
  },
  {
    title: 'Hospitality',
    image: '/images/hospitality.jpg',
    description: 'Hotel management and hospitality industry solutions'
  },
  {
    title: 'Transportation',
    image: '/images/transportation.jpg',
    description: 'Logistics and transportation management systems'
  },
  {
    title: 'Manufacturing',
    image: '/images/manufacturing.jpg',
    description: 'Industrial automation and manufacturing technology'
  }
];

const Industries = () => {
  return (
    <Section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold tracking-tight mb-4">
            Industries We Transform
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We deliver innovative digital solutions across various industries, helping businesses thrive in the digital age
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Image */}
              <div className="aspect-[4/5] w-full h-full overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {industry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Industries;
