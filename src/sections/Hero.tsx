import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Code2, Smartphone, Globe } from 'lucide-react';
import Button from '../components/Button';
import QuoteModal from '../components/QuoteModal';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ✅ VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/hero-background-video.mp4" type="video/mp4" />
      </video>

      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✅ GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* BADGES */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-medium text-white">
              <Code2 className="w-4 h-4 mr-2" />
              Web Development
            </span>

            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-medium text-white">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Apps
            </span>

            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-medium text-white">
              <Globe className="w-4 h-4 mr-2" />
              Digital Solutions
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Presence @ 7,999
            </span>
          </motion.h1>

          {/* SUBHEADING */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
          We build SEO-friendly websites, high-performance mobile apps, and custom digital marketing solutions that boost online visibility, drive business growth, and increase customer engagement.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button size="lg" onClick={() => setIsQuoteModalOpen(true)}>
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button variant="outline" size="lg" href="https://wa.me/8235910315">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* STATS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Team Members' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>

                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* MODAL */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

    </section>
  );
};

export default Hero;
