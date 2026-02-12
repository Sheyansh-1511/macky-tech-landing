import React from 'react';
import { Link } from 'react-router-dom';
import CurvedIndustries from '../components/CurvedIndustries';
import Footer from '../sections/Footer';

const Industries = () => {
  return (
    <div className="min-h-screen">
      <CurvedIndustries />
      <Footer />
    </div>
  );
};

export default Industries;
