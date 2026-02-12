import React from 'react';
import IndustryCarousel from '../components/IndustryCarousel';

const CarouselDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Industry Carousel Demo
        </h1>
        <IndustryCarousel />
      </div>
    </div>
  );
};

export default CarouselDemo;
