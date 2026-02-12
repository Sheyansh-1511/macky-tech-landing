import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';

const IndustryCard = ({ 
  title, 
  image, 
  rotate = 0, 
  baseScale = 1, 
  delay = 0,
  scrollProgress,
  description
}) => {
  // Scroll-based transforms
  const scrollRotate = useTransform(
    scrollProgress,
    [0, 0.3, 0.7, 1],
    [rotate + 5, rotate, rotate, rotate - 5]
  );

  const scrollShadow = useTransform(
    scrollProgress,
    [0, 0.3, 0.7, 1],
    [0, 20, 25, 15]
  );

  // Spring-based smooth animations
  const smoothRotate = useSpring(scrollRotate, {
    stiffness: 100,
    damping: 30
  });

  const smoothShadow = useSpring(scrollShadow, {
    stiffness: 100,
    damping: 30
  });

  return (
    <motion.div
      className="relative"
      style={{ 
        rotate: smoothRotate,
      }}
      // Enhanced hover interactions
      whileHover={{
        scale: baseScale * 1.15,
        y: -30,
        rotate: rotate + 8,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{
        scale: baseScale * 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
    >
      <motion.div
        className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden cursor-pointer bg-white"
        style={{
          boxShadow: `0 ${smoothShadow}px ${smoothShadow.get() * 2}px -12px rgba(0, 0, 0, 0.15)`,
        }}
      >
        {/* Background Image with error handling */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to a gradient if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        
        {/* Fallback gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center"
          style={{ display: 'none' }}
        >
          <div className="text-white text-center p-6">
            <div className="text-4xl font-bold mb-2">{title.charAt(0)}</div>
            <div className="text-lg">{title}</div>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <motion.div
            className="h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: delay + 0.5,
              ease: "easeOut"
            }}
          />
        </div>

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default IndustryCard;
