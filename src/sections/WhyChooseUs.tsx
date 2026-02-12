import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Clock, Award, Zap, Shield } from 'lucide-react';
import Section from '../components/Section';

const features = [
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality checks ensure flawless delivery'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of industry experience'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects on schedule'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ successful projects delivered across various industries'
  },
  {
    icon: Zap,
    title: 'Fast Development',
    description: 'Agile methodology ensures rapid and efficient development'
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security for all your digital assets'
  }
];

const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Macky Tech
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-End Support Expert Team & Global Experience Security & Reliability Business-Centric Results Product-Driven Innovation Business-Centric Results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </Section>
  );
};

export default WhyChooseUs;
