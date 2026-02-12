import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Phone, Copy } from 'lucide-react';
import Button from '../components/Button';

const CallToAction: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const phoneNumber = "+91 8235910315";

  const copyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert("Number copied!");
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">

      {/* 🔥 PREMIUM DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#06b6d4]"></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* ⭐ Rating */}
          <div className="flex justify-center items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-white font-medium">
              4.9/5 Customer Rating
            </span>
          </div>

          {/* 🔥 Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-cyan-400">
              Digital Presence?
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses transforming digitally with Macky Tech.
            Let’s build something amazing together.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              'Free Consultation',
              'No Hidden Costs',
              '30-Day Support',
              'Satisfaction Guarantee'
            ].map((benefit, i) => (
              <div key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* 🔥 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button
              size="lg"
              className="bg-cyan-400 text-black hover:bg-cyan-300 shadow-xl"
              href="#contact"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* OPEN MODAL */}
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={() => setShowModal(true)}
            >
              Schedule a Call
            </Button>

          </div>

          {/* Brands */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              Trusted by leading brands worldwide
            </p>

            <div className="flex gap-8 justify-center text-white/70 font-semibold">
              {['TechCorp','InnovateCo','DigitalFlow','CloudBase','DataPro']
                .map((b,i)=>(
                  <span key={i}>{b}</span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      {/* 🔥 CALL MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-2xl">

            <Phone className="mx-auto mb-3 text-blue-600" size={32} />

            <h3 className="text-xl font-bold mb-2">
              Call Us Directly
            </h3>

            <p className="text-gray-600 mb-4">
              Our team is ready to help you.
            </p>

            <div className="flex justify-center items-center gap-3 mb-6">

              <span className="font-semibold text-lg">
                {phoneNumber}
              </span>

              <button onClick={copyNumber}>
                <Copy size={18} />
              </button>

            </div>

            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full">
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default CallToAction;
