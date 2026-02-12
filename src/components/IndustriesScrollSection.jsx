import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import IndustryCard from './IndustryCard';

const industries = [
  { 
    title: "Fashion", 
    img: "https://images.unsplash.com/photo-1441986300917-64674bd86d0b?w=400&h=500&fit=crop&auto=format",
    rotate: -15,
    scale: 0.9,
    description: "Premium fashion e-commerce solutions"
  },
  { 
    title: "Grocery", 
    img: "https://images.unsplash.com/photo-1542838132-965f1a3a39c0?w=400&h=500&fit=crop&auto=format",
    rotate: -7.5,
    scale: 0.95,
    description: "Fresh grocery delivery platforms"
  },
  { 
    title: "Restaurant", 
    img: "https://images.unsplash.com/photo-1517248135467-9c5f9b6d1d0d?w=400&h=500&fit=crop&auto=format",
    rotate: 0,
    scale: 1,
    description: "Restaurant management systems"
  },
  { 
    title: "Furniture", 
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop&auto=format",
    rotate: 7.5,
    scale: 0.95,
    description: "Furniture e-commerce platforms"
  },
  { 
    title: "Real Estate", 
    img: "https://images.unsplash.com/photo-1560518883-c0a9c7367b4c?w=400&h=500&fit=crop&auto=format",
    rotate: 15,
    scale: 0.9,
    description: "Property listing websites"
  },
];

const IndustriesScrollSection = () => {
  const containerRef = React.useRef(null);
  
  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Spring-based smooth scroll progress
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for background elements
  const backgroundY = useTransform(smoothScrollProgress, [0, 1], [0, -50]);
  const backgroundScale = useTransform(smoothScrollProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Animated Background */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale
        }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="container relative z-10">
        {/* Section Header with scroll animation */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Industries We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 ml-2">
              Transform
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We deliver cutting-edge digital solutions across diverse industries, 
            helping businesses thrive in the modern digital landscape.
          </motion.p>
        </motion.div>

        {/* Scroll-based Carousel */}
        <div className="relative flex justify-center items-center px-4">
          <div className="flex gap-4 md:gap-8">
            {industries.map((industry, index) => {
              // Individual card scroll progress
              const cardScrollY = useScroll({
                target: containerRef,
                offset: ["start end", "end start"]
              });
              
              // Card-specific transforms based on scroll
              const cardY = useTransform(
                cardScrollY.scrollYProgress, 
                [0, 0.3, 0.7, 1], 
                [50, 0, 0, -50]
              );
              
              const cardOpacity = useTransform(
                cardScrollY.scrollYProgress,
                [0, 0.2, 0.5, 0.8, 1],
                [0, 1, 1, 1, 0]
              );
              
              const cardScale = useTransform(
                cardScrollY.scrollYProgress,
                [0, 0.3, 0.5, 0.7, 1],
                [industry.scale * 0.8, industry.scale, industry.scale * 1.05, industry.scale, industry.scale * 0.9]
              );

              return (
                <motion.div
                  key={industry.title}
                  style={{
                    y: cardY,
                    opacity: cardOpacity,
                    scale: cardScale
                  }}
                  className="relative"
                >
                  <IndustryCard
                    title={industry.title}
                    image={industry.img}
                    rotate={industry.rotate}
                    baseScale={industry.scale}
                    delay={index * 0.1}
                    scrollProgress={cardScrollY.scrollYProgress}
                    description={industry.description}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesScrollSection;
