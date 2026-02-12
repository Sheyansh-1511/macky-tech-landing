import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-primary-200 transition-all duration-300' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  const MotionComponent = motion.div;
  
  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionComponent>
  );
};

export default Card;
