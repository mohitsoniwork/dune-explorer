import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Send, CheckCircle, Loader } from 'lucide-react';
import { submitInquiry } from '../../services/contactService';
import Turnstile from './Turnstile';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [consent, setConsent] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    setSubmitError('');

    if (!consent) {
      setErrors(prev => ({ ...prev, consent: 'Please agree to be contacted before submitting.' }));
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitInquiry({ ...formData, consent }, turnstileToken);

      if (result.status === 'success' || result.status === 'duplicate') {
        setIsDuplicate(result.status === 'duplicate');
        setIsSubmitted(true);
      } else if (result.httpStatus === 429) {
        setSubmitError('Too many requests. Please wait a few minutes and try again.');
      } else {
        let debugMsg = result.message || 'Something went wrong.';
        if (result.email && result.email.message) debugMsg += ` (Email Error: ${result.email.message})`;
        if (result.sheets && result.sheets.message) debugMsg += ` (Sheets Error: ${result.sheets.message})`;
        setSubmitError(debugMsg);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Something went wrong. Please try again or contact us directly.');
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
    setConsent(false);
    setTurnstileToken(null);
    setSubmitError('');
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
            <CheckCircle size={64} aria-hidden="true" />
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
        <div className="submit-loading" role="status">
          <Loader size={40} className="spinner" aria-hidden="true" />
          <p>Sending your inquiry...</p>
        </div>
      )}

      <div className="progress-bar" aria-hidden="true">
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
                  <label className="form-label" htmlFor="form-name">Full Name</label>
                  <input type="text" className="form-control" id="form-name" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-email">Email Address <span className="mandatory-star" aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'input-error' : ''}`}
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'form-email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="form-email-error" className="field-error" role="alert">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-country">Country</label>
                  <input type="text" className="form-control" id="form-country" name="country" value={formData.country} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-whatsapp">WhatsApp Number <span className="mandatory-star" aria-hidden="true">*</span></label>
                  <input
                    type="tel"
                    className={`form-control ${errors.whatsapp ? 'input-error' : ''}`}
                    id="form-whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    aria-invalid={errors.whatsapp ? 'true' : 'false'}
                    aria-describedby={errors.whatsapp ? 'form-whatsapp-error' : undefined}
                  />
                  {errors.whatsapp && (
                    <span id="form-whatsapp-error" className="field-error" role="alert">{errors.whatsapp}</span>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="form-travel-dates">Expected Travel Dates</label>
                  <input type="text" className="form-control" id="form-travel-dates" placeholder="e.g. Nov 2026 or Exact Dates" name="travelDates" value={formData.travelDates} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-travelers">Number of Travelers</label>
                  <input type="number" className="form-control" id="form-travelers" min="1" name="travelers" value={formData.travelers} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-accommodation">Accommodation Type</label>
                  <select className="form-control" id="form-accommodation" name="accommodation" value={formData.accommodation} onChange={handleInputChange}>
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
                <fieldset className="form-group">
                  <legend className="form-label">Travel Interests (Select Multiple)</legend>
                  <div className="checkbox-grid">
                    {interestsOptions.map(interest => (
                      <label key={interest} className={`checkbox-card ${formData.interests.includes(interest) ? 'selected' : ''}`}>
                        <input type="checkbox" onChange={() => handleCheckboxChange('interests', interest)} checked={formData.interests.includes(interest)} />
                        {interest}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="form-group mt-lg">
                  <legend className="form-label">Preferred Destinations (Select Multiple)</legend>
                  <div className="checkbox-grid">
                    {destinationsOptions.map(dest => (
                      <label key={dest} className={`checkbox-card ${formData.destinations.includes(dest) ? 'selected' : ''}`}>
                        <input type="checkbox" onChange={() => handleCheckboxChange('destinations', dest)} checked={formData.destinations.includes(dest)} />
                        {dest}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}

            {step === 4 && (
              <div className="form-group">
                <label className="form-label" htmlFor="form-notes">Additional Notes or Special Requirements</label>
                <textarea
                  className="form-control"
                  id="form-notes"
                  rows="6"
                  placeholder="Tell us about special occasions, dietary requirements, or specific experiences you're looking forward to..."
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>

                <div className="consent-row">
                  <input
                    type="checkbox"
                    id="form-consent"
                    name="consent"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (errors.consent) setErrors(prev => ({ ...prev, consent: '' }));
                    }}
                    aria-invalid={errors.consent ? 'true' : 'false'}
                  />
                  <label className="consent-label" htmlFor="form-consent">
                    I agree to be contacted about my travel inquiry and consent to Dune Explorer
                    processing my details as described in the{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  </label>
                </div>
                {errors.consent && (
                  <span id="form-consent-error" className="field-error" role="alert">{errors.consent}</span>
                )}

                <div className="turnstile-wrap">
                  <Turnstile
                    onToken={(token) => {
                      setTurnstileToken(token);
                      setSubmitError('');
                    }}
                    onError={() => {
                      setTurnstileToken(null);
                      setSubmitError('Security check unavailable. Please try again.');
                    }}
                  />
                </div>

                {submitError && (
                  <p className="submit-error" role="alert">{submitError}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="form-actions">
          {step > 1 ? (
            <button type="button" className="btn btn-outline" onClick={prevStep}>
              <ChevronLeft size={18} style={{ marginRight: '8px' }} aria-hidden="true" /> Back
            </button>
          ) : <div></div>}

          {step < totalSteps ? (
            <button type="button" className="btn btn-primary" onClick={nextStep}>
              Next Step <ChevronRight size={18} style={{ marginLeft: '8px' }} aria-hidden="true" />
            </button>
          ) : (
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              Submit Inquiry <Send size={18} style={{ marginLeft: '8px' }} aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
