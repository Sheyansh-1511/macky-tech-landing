import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { 
    title: "Fashion", 
    img: "https://images.unsplash.com/photo-1441986300917-64674bd86d0b?w=400&h=500&fit=crop", 
    rotate: -15,
    scale: 0.9
  },
  { 
    title: "Grocery", 
    img: "https://images.unsplash.com/photo-1542838132-965f1a3a39c0?w=400&h=500&fit=crop", 
    rotate: -7.5,
    scale: 0.95
  },
  { 
    title: "Restaurant", 
    img: "https://images.unsplash.com/photo-1517248135467-9c5f9b6d1d0d?w=400&h=500&fit=crop", 
    rotate: 0,
    scale: 1
  },
  { 
    title: "Furniture", 
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop", 
    rotate: 7.5,
    scale: 0.95
  },
  { 
    title: "Real Estate", 
    img: "https://images.unsplash.com/photo-1560518883-c0a9c7367b4c?w=400&h=500&fit=crop", 
    rotate: 15,
    scale: 0.9
  },
];

const IndustryCarousel = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 ml-2">
              Transform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge digital solutions across diverse industries, 
            helping businesses thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex justify-center items-center">
          <div className="flex gap-6 md:gap-8 px-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: industry.scale }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  // Floating animation
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  // Hover interactions
                  whileHover={{
                    scale: 1.1,
                    y: -25,
                    rotate: industry.rotate + 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  // Base rotation and styling
                  style={{ 
                    rotate: industry.rotate,
                    transformOrigin: "center center"
                  }}
                  className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white"
                >
                  {/* Background Image */}
                  <img
                    src={industry.img}
                    alt={industry.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {industry.title}
                    </h3>
                    <motion.div
                      className="h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Optional - for future enhancement) */}
        <AnimatePresence>
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustryCarousel;
