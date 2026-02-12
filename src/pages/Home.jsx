import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import CurvedIndustries from '../components/CurvedIndustries';
import WhyChooseUs from '../sections/WhyChooseUs';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import CallToAction from '../sections/CallToAction';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <CurvedIndustries />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
