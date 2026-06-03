import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    name: '', email: '', country: '', whatsapp: '',
    travelDates: '', travelers: '', budget: '', accommodation: '',
    interests: [], destinations: [], notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Thank you! Your inquiry has been sent. Our team will contact you shortly.');
  };

  const interestsOptions = ['Culture & History', 'Luxury', 'Adventure', 'Desert Safari', 'Wellness', 'Food Tours', 'Photography', 'Village Experiences', 'Festivals', 'Wildlife'];
  const destinationsOptions = ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Ranthambore', 'Bikaner', 'Mount Abu'];

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="multistep-form-container">
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
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" name="country" value={formData.country} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Number</label>
                  <input type="tel" className="form-control" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} />
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
                  <label className="form-label">Budget Range (Per Person)</label>
                  <select className="form-control" name="budget" value={formData.budget} onChange={handleInputChange}>
                    <option value="">Select Budget</option>
                    <option value="premium">$150 - $300 / day</option>
                    <option value="luxury">$300 - $600 / day</option>
                    <option value="ultra-luxury">$600+ / day</option>
                  </select>
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
            <button type="submit" className="btn btn-primary submit-btn">
              Submit Inquiry <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
