import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../sections/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    workDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ WEB3FORMS INTEGRATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const data = new FormData();
    data.append("access_key", "da091ed8-42eb-4541-ade0-28e5cf1c5168");
        data.append("fullName", formData.fullName);
    data.append("contactNumber", formData.contactNumber);
    data.append("emailAddress", formData.emailAddress);
    data.append("workDescription", formData.workDescription);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const result = await res.json();

    if (result.success) {
      setSubmitStatus('success');
      alert("✅ Your request has been received. We’ll contact you soon!");
      setFormData({ fullName:'', contactNumber:'', emailAddress:'', workDescription:'' });
    } else {
      alert("Failed to send");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

            {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Get a Quote</h1>
            <p className="text-gray-600">
              Tell us about your project and we'll get back with a custom quote.
            </p>
          </div>

          {/* Form Box */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-2">
                  ✅ Quote Request Sent!
                </h3>
                <p>We’ll respond within 24 hours.</p>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <textarea
                  name="workDescription"
                  value={formData.workDescription}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your project requirements..."
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                  {isSubmitting ? "Sending..." : "Submit Quote Request"}
                </motion.button>

              </form>
            )}
          </div>

          {/* Contact Info */}
          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center">
              <h3 className="font-semibold">Call Us</h3>
              <a href="tel:+918235910315">+91 8235910315</a>
            </div>

            <div className="text-center">
              <h3 className="font-semibold">Email Us</h3>
              <a href="mailto:info@mackystech.in">
                info@mackystech.in
              </a>
            </div>

            <div className="text-center">
              <h3 className="font-semibold">Visit Us</h3>
              <p>Indrapuri Sector C, Bhopal</p>
            </div>

          </motion.div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
