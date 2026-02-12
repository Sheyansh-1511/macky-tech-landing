import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import CurvedIndustryCard from './CurvedIndustryCard';

const industries = [
  { 
    id: 'fashion',
    title: "Fashion", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd86d0b?w=400&h=500&fit=crop&auto=format",
    description: "Premium fashion e-commerce solutions",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 'grocery',
    title: "Grocery", 
    image: "https://images.unsplash.com/photo-1542838132-965f1a3a39c0?w=400&h=500&fit=crop&auto=format",
    description: "Fresh grocery delivery platforms",
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: 'restaurant',
    title: "Restaurant", 
    image: "https://images.unsplash.com/photo-1517248135467-9c5f9b6d1d0d?w=400&h=500&fit=crop&auto=format",
    description: "Restaurant management systems",
    color: "from-orange-500 to-red-500"
  },
  { 
    id: 'furniture',
    title: "Furniture", 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop&auto=format",
    description: "Furniture e-commerce platforms",
    color: "from-amber-500 to-yellow-500"
  },
  { 
    id: 'realestate',
    title: "Real Estate", 
    image: "https://images.unsplash.com/photo-1560518883-c0a9c7367b4c?w=400&h=500&fit=crop&auto=format",
    description: "Property listing websites",
    color: "from-blue-500 to-cyan-500"
  },
];

const CurvedIndustriesSection = () => {
  const containerRef = useRef(null);
  const cardWidth = 320; // Width of each card
  const cardSpacing = 40; // Spacing between cards
  const totalWidth = industries.length * (cardWidth + cardSpacing);
  const curveIntensity = 150; // Height of the curve

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

  // Background animations
  const backgroundY = useTransform(smoothScrollProgress, [0, 1], [0, -100]);
  const backgroundScale = useTransform(smoothScrollProgress, [0, 1], [1, 1.2]);

  // Calculate card position along curve
  const getCardPosition = (index, scrollProgress) => {
    const totalCards = industries.length;
    const centerIndex = Math.floor(totalCards / 2);
    
    // Base position along the curve
    const normalizedIndex = (index - centerIndex) / (totalCards / 2);
    
    // Horizontal position with scroll-based movement
    const baseX = normalizedIndex * (cardWidth + cardSpacing);
    const scrollOffset = useTransform(
      scrollProgress,
      [0, 1],
      [0, -totalWidth * 0.3] // Cards move left as user scrolls
    );
    
    // Vertical curve position (parabolic curve)
    const curveY = Math.abs(normalizedIndex) * curveIntensity;
    const scrollCurveY = useTransform(
      scrollProgress,
      [0, 0.5, 1],
      [curveY, curveY * 0.5, curveY * 1.5]
    );

    // Rotation based on position
    const baseRotation = normalizedIndex * -15; // Cards tilt inward
    const scrollRotation = useTransform(
      scrollProgress,
      [0, 1],
      [baseRotation, baseRotation * 0.5]
    );

    // Scale based on distance from center
    const baseScale = 1 - Math.abs(normalizedIndex) * 0.15;
    const scrollScale = useTransform(
      scrollProgress,
      [0, 0.5, 1],
      [baseScale, baseScale * 1.1, baseScale * 0.9]
    );

    // Opacity based on position and scroll
    const baseOpacity = 1 - Math.abs(normalizedIndex) * 0.3;
    const scrollOpacity = useTransform(
      scrollProgress,
      [0, 0.2, 0.8, 1],
      [0, baseOpacity, baseOpacity, baseOpacity * 0.7]
    );

    return {
      x: scrollOffset,
      y: scrollCurveY,
      rotate: scrollRotation,
      scale: scrollScale,
      opacity: scrollOpacity,
      zIndex: Math.round(totalCards - Math.abs(index - centerIndex))
    };
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
      style={{ perspective: "1200px" }}
    >
      {/* Animated Background */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale
        }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="container relative z-10">
        {/* Section Header */}
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

        {/* Curved Card Container */}
        <div className="relative flex justify-center items-center min-h-[500px] md:min-h-[600px]">
          <div 
            className="relative"
            style={{ 
              width: `${totalWidth}px`,
              height: `${curveIntensity * 2}px`,
              transformStyle: "preserve-3d"
            }}
          >
            {industries.map((industry, index) => {
              const position = getCardPosition(index, smoothScrollProgress);
              
              return (
                <motion.div
                  key={industry.id}
                  className="absolute"
                  style={{
                    x: position.x,
                    y: position.y,
                    rotateZ: position.rotate,
                    scale: position.scale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30
                  }}
                >
                  <CurvedIndustryCard
                    industry={industry}
                    index={index}
                    totalCards={industries.length}
                    scrollProgress={smoothScrollProgress}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
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

export default CurvedIndustriesSection;
