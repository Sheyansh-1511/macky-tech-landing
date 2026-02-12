import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, User, MessageSquare } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    workDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("access_key", "da091ed8-42eb-4541-ade0-28e5cf1c5168");
    data.append("name", formData.fullName);
    data.append("phone", formData.contactNumber);
    data.append("email", formData.emailAddress);
    data.append("message", formData.workDescription);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const result = await res.json();

    if (result.success) {
      setIsSuccess(true);
    }

    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      contactNumber: '',
      emailAddress: '',
      workDescription: ''
    });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <MessageSquare className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold">Get a Quote</h2>
          <p className="text-gray-600">
            Tell us about your project and we'll get back with a quote.
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Request Received!
            </h3>
            <p className="text-gray-600 mb-4">
              We will contact you shortly.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="workDescription"
              value={formData.workDescription}
              onChange={handleChange}
              placeholder="Project details..."
              rows={4}
              required
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Submit Quote Request"}
            </button>

          </form>
        )}

        {!isSuccess && (
          <p className="text-xs text-gray-500 text-center mt-4">
            We'll respond within 24 hours
          </p>
        )}

      </div>
    </div>
  );
};

export default QuoteModal;
