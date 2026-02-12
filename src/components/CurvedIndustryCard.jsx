import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CurvedIndustryCard = ({ 
  industry, 
  scrollOffset, 
  scrollRotation, 
  scrollScale,
  index,
  totalCards 
}) => {
  const navigate = useNavigate();
  const centerIndex = Math.floor(totalCards / 2);
  const isCenterCard = index === centerIndex;

  const handleCardClick = () => {
    navigate(`/industries/${industry.id}`);
  };

  // Apply subtle scroll transforms
  const animatedX = useTransform(scrollOffset, (value) => value);
  const animatedRotation = useTransform(scrollRotation, (value) => value);
  const animatedScale = useTransform(scrollScale, (value) => value);

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={handleCardClick}
      whileHover={{
        y: -15,
        scale: 1.08,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 600,
          damping: 30
        }
      }}
      style={{
        x: animatedX,
        rotateZ: animatedRotation,
        scale: animatedScale,
      }}
    >
      <motion.div
        className="relative w-72 h-96 rounded-2xl overflow-hidden bg-white shadow-xl"
        style={{
          boxShadow: isCenterCard 
            ? "0 20px 40px -12px rgba(0, 0, 0, 0.25)" 
            : "0 10px 25px -8px rgba(0, 0, 0, 0.15)"
        }}
      >
        {/* Background Image */}
        <img
          src={industry.image}
          alt={industry.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-white text-2xl font-bold mb-2">
                {industry.title}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2 leading-relaxed">
                {industry.description}
              </p>
            </div>
            <motion.div
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ml-4"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(255, 255, 255, 0.3)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </motion.div>
          </div>
          
          {/* Animated underline */}
          <motion.div
            className={`h-1 bg-gradient-to-r ${industry.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1 + 0.3,
              ease: "easeOut"
            }}
          />
        </div>

        {/* Hover overlay effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0`}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CurvedIndustryCard;
