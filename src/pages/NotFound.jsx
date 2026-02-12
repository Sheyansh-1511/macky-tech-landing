import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <Button size="lg" href="/">
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
