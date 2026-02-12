import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our recent projects and success stories.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get a Quote
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5v14l-5-5M12 14l9-9-9-9" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;