import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation.jsx';
import Footer from './sections/Footer.tsx';

// Sections
import Hero from './sections/Hero.tsx';
import Industries from './sections/Industries.tsx';
import WhyChooseUs from './sections/WhyChooseUs.tsx';
import Portfolio from './sections/Portfolio.tsx';
import CallToAction from './sections/CallToAction.tsx';

// Pages
import Home from './pages/Home.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
