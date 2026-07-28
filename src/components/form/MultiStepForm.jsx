import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Send, CheckCircle, Loader } from 'lucide-react';
import { saveToGoogleSheets } from '../../services/sheetsService';
import { sendInquiryEmail } from '../../services/emailService';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', email: '', country: '', whatsapp: '',
    travelDates: '', travelers: '', accommodation: '',
    interests: [], destinations: [], notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (name, value) => {
    setFormData(prev => {
      const currentList = prev[name];
      if (currentList.includes(value)) {
        return { ...prev, [name]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [name]: [...currentList, value] };
      }
    });
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.whatsapp.trim()) {
        newErrors.whatsapp = 'WhatsApp number is required';
      } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.whatsapp.trim())) {
        newErrors.whatsapp = 'Please enter a valid phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step < totalSteps) setStep(step + 1);
    }
  };

  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Google Sheets and check for duplicates
      const sheetsResult = await saveToGoogleSheets(formData);
      const customerIsDuplicate = sheetsResult.status === 'duplicate';
      setIsDuplicate(customerIsDuplicate);

      // Send email notification
      await sendInquiryEmail(formData, customerIsDuplicate);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', country: '', whatsapp: '',
      travelDates: '', travelers: '', accommodation: '',
      interests: [], destinations: [], notes: ''
    });
    setStep(1);
    setIsSubmitted(false);
    setIsDuplicate(false);
    setErrors({});
  };

  const interestsOptions = ['Culture & History', 'Luxury', 'Adventure', 'Desert Safari', 'Wellness', 'Food Tours', 'Photography', 'Village Experiences', 'Festivals', 'Wildlife'];
  const destinationsOptions = ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Ranthambore', 'Bikaner', 'Mount Abu'];

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  // Success screen after submission
  if (isSubmitted) {
    return (
      <div className="multistep-form-container">
        <motion.div
          className="submission-success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="success-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle size={64} />
          </motion.div>
          
          {isDuplicate && (
            <div className="duplicate-banner">
              Welcome back! We've updated your previous inquiry with the latest details.
            </div>
          )}

          <h2>Thank You, {formData.name || 'Explorer'}!</h2>
          <p>
            Your travel inquiry has been received. Our team will reach out to you
            at <strong>{formData.email}</strong> or <strong>{formData.whatsapp}</strong> shortly.
          </p>
          <button className="btn btn-primary" onClick={resetForm} style={{ marginTop: '2rem' }}>
            Submit Another Inquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="multistep-form-container">
      {/* Loading overlay */}
      {isSubmitting && (
        <div className="submit-loading">
          <Loader size={40} className="spinner" />
          <p>Sending your inquiry...</p>
        </div>
      )}

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
      </div>
      
      <div className="form-header">
        <span className="step-indicator">Step {step} of {totalSteps}</span>
        <h2>
          {step === 1 && "Let's Get to Know You"}
          {step === 2 && "Tell Us About Your Trip"}
          {step === 3 && "What Are Your Preferences?"}
          {step === 4 && "Any Special Requests?"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="form-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address <span className="mandatory-star">*</span></label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'input-error' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" name="country" value={formData.country} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Number <span className="mandatory-star">*</span></label>
                  <input
                    type="tel"
                    className={`form-control ${errors.whatsapp ? 'input-error' : ''}`}
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                  {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Expected Travel Dates</label>
                  <input type="text" className="form-control" placeholder="e.g. Nov 2026 or Exact Dates" name="travelDates" value={formData.travelDates} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Number of Travelers</label>
                  <input type="number" className="form-control" min="1" name="travelers" value={formData.travelers} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label className="form-label">Accommodation Type</label>
                  <select className="form-control" name="accommodation" value={formData.accommodation} onChange={handleInputChange}>
                    <option value="">Select Accommodation</option>
                    <option value="heritage">Heritage Hotels</option>
                    <option value="luxury-resorts">5-Star Luxury Resorts</option>
                    <option value="boutique">Boutique Stays</option>
                    <option value="camps">Luxury Desert Camps</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="preferences-section">
                <div className="form-group">
                  <label className="form-label">Travel Interests (Select Multiple)</label>
                  <div className="checkbox-grid">
                    {interestsOptions.map(interest => (
                      <label key={interest} className={`checkbox-card ${formData.interests.includes(interest) ? 'selected' : ''}`}>
                        <input type="checkbox" onChange={() => handleCheckboxChange('interests', interest)} checked={formData.interests.includes(interest)} />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="form-group mt-lg">
                  <label className="form-label">Preferred Destinations (Select Multiple)</label>
                  <div className="checkbox-grid">
                    {destinationsOptions.map(dest => (
                      <label key={dest} className={`checkbox-card ${formData.destinations.includes(dest) ? 'selected' : ''}`}>
                        <input type="checkbox" onChange={() => handleCheckboxChange('destinations', dest)} checked={formData.destinations.includes(dest)} />
                        {dest}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-group">
                <label className="form-label">Additional Notes or Special Requirements</label>
                <textarea 
                  className="form-control" 
                  rows="6" 
                  placeholder="Tell us about special occasions, dietary requirements, or specific experiences you're looking forward to..."
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="form-actions">
          {step > 1 ? (
            <button type="button" className="btn btn-outline" onClick={prevStep}>
              <ChevronLeft size={18} style={{ marginRight: '8px' }} /> Back
            </button>
          ) : <div></div>}
          
          {step < totalSteps ? (
            <button type="button" className="btn btn-primary" onClick={nextStep}>
              Next Step <ChevronRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          ) : (
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              Submit Inquiry <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
