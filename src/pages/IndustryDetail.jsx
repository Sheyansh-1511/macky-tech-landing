import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../sections/Footer';

const industryData = {
  fashion: {
    title: 'Fashion Industry',
    description: 'Transforming fashion retail with cutting-edge digital solutions',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd86d0b?w=1200&h=600&fit=crop&auto=format',
    color: 'from-purple-500 to-pink-500',
    services: [
      'E-commerce Platforms',
      'Virtual Try-On Solutions',
      'Inventory Management',
      'Customer Analytics',
      'Mobile Shopping Apps',
      'Social Commerce Integration'
    ],
    challenges: [
      'Omnichannel Experience',
      'Size & Fit Recommendations',
      'Real-time Inventory',
      'Personalization at Scale',
      'Sustainability Tracking'
    ]
  },
  grocery: {
    title: 'Grocery Industry',
    description: 'Revolutionizing grocery delivery and retail experiences',
    image: 'https://images.unsplash.com/photo-1542838132-965f1a3a39c0?w=1200&h=600&fit=crop&auto=format',
    color: 'from-green-500 to-emerald-500',
    services: [
      'Delivery Platforms',
      'Inventory Management',
      'Freshness Tracking',
      'Customer Loyalty Programs',
      'Smart Shopping Carts',
      'Real-time Analytics'
    ],
    challenges: [
      'Cold Chain Logistics',
      'Last-mile Delivery',
      'Quality Assurance',
      'Supply Chain Optimization',
      'Customer Retention'
    ]
  },
  restaurant: {
    title: 'Restaurant Industry',
    description: 'Digital transformation for modern dining experiences',
    image: 'https://images.unsplash.com/photo-1517248135467-9c5f9b6d1d0d?w=1200&h=600&fit=crop&auto=format',
    color: 'from-orange-500 to-red-500',
    services: [
      'Online Ordering Systems',
      'Table Reservation Apps',
      'Kitchen Management',
      'Customer Feedback Systems',
      'Loyalty Programs',
      'Delivery Integration'
    ],
    challenges: [
      'Real-time Menu Updates',
      'Peak Hour Management',
      'Customer Experience',
      'Staff Scheduling',
      'Multi-location Management'
    ]
  },
  furniture: {
    title: 'Furniture Industry',
    description: 'Innovative digital solutions for furniture retail',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop&auto=format',
    color: 'from-amber-500 to-yellow-500',
    services: [
      'AR Showroom Apps',
      'Custom Design Tools',
      '3D Product Visualization',
      'Inventory Management',
      'Customer Support Chat',
      'Installation Scheduling'
    ],
    challenges: [
      'Product Visualization',
      'Shipping & Logistics',
      'Customization Options',
      'Customer Education',
      'Return Management'
    ]
  },
  realestate: {
    title: 'Real Estate Industry',
    description: 'Modern digital solutions for property management',
    image: 'https://images.unsplash.com/photo-1560518883-c0a9c7367b4c?w=1200&h=600&fit=crop&auto=format',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Property Listing Platforms',
      'Virtual Tours',
      'CRM for Agents',
      'Document Management',
      'Lead Generation',
      'Market Analytics'
    ],
    challenges: [
      'Virtual Property Tours',
      'Lead Qualification',
      'Document Security',
      'Market Analysis',
      'Client Communication'
    ]
  }
};

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const industry = industryData[industryId];

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <button
            onClick={() => navigate('/industries')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Back to Industries
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-96 md:h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={industry.image}
          alt={industry.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-80`} />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div
          className="relative h-full flex items-center justify-center text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {industry.description}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Solutions
              </h2>
              <div className="space-y-4">
                {industry.services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{service}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Industry Challenges
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-primary-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="font-semibold text-gray-900">{challenge}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your {industry.title.replace(' Industry', '')} Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our tailored solutions can help you overcome industry challenges 
              and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/contact')}
                className={`px-8 py-4 bg-gradient-to-r ${industry.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                onClick={() => navigate('/industries')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Industries
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryDetail;
