import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };
  
  const classes = `py-16 md:py-24 ${backgroundClasses[background]} ${className}`;
  
  return (
    <section id={id} className={classes}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
