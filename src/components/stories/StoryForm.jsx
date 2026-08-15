import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './StoryForm.css';

const StoryForm = ({ onAddStory }) => {
  const [formData, setFormData] = useState({ name: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) return;

    setIsSubmitting(true);
    
    // Simulate a brief network delay for UX
    setTimeout(() => {
      onAddStory({
        id: Date.now(),
        author: formData.name.trim(),
        text: formData.text.trim(),
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      });
      setFormData({ name: '', text: '' });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <motion.form 
      className="story-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3>Share Your Experience</h3>
      <p className="story-form-subtitle">Have you travelled with us? We'd love to hear your story.</p>
      
      <div className="form-group">
        <label htmlFor="story-name" className="form-label">Your Name</label>
        <input 
          type="text" 
          id="story-name" 
          className="form-control" 
          placeholder="e.g. Sarah & James"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="story-text" className="form-label">Your Story</label>
        <textarea 
          id="story-text" 
          className="form-control story-textarea" 
          placeholder="Tell us about your favorite memory..."
          rows="5"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Post Story'}
      </button>
    </motion.form>
  );
};

export default StoryForm;
