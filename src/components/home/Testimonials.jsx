import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './Testimonials.css';

const initialTestimonials = [];

const AnimatedStarRating = ({ rating, onRate }) => {
  return (
    <div className="animated-star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          type="button"
          aria-label={`Rate ${star} stars`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRate(star)}
          className={`rating-star-btn ${star <= rating ? 'active' : ''}`}
        >
          <Star size={24} fill={star <= rating ? "currentColor" : "transparent"} strokeWidth={1.5} />
        </motion.button>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [testimonialList, setTestimonialList] = useState(initialTestimonials);
  const [[index, direction], setIndex] = useState([0, 0]);
  const [formData, setFormData] = useState({ name: '', quote: '', rating: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const paginate = useCallback(
    (dir) => {
      setIndex(([i]) => [(i + dir + testimonialList.length) % testimonialList.length, dir]);
    },
    [testimonialList.length]
  );

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paginate]);

  const t = testimonialList[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.quote.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setTestimonialList([
        { 
          name: formData.name.trim(), 
          quote: formData.quote.trim(), 
          rating: formData.rating, 
          from: 'Explorer' 
        },
        ...testimonialList
      ]);
      setFormData({ name: '', quote: '', rating: 5 });
      setIndex([0, -1]); // Instantly jump to the newly added story
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Traveler Love</span>
          <h2>Stories From Our Explorers</h2>
        </div>

        <div className="testimonials-carousel">
          <Quote className="testimonial-quote-mark" size={64} aria-hidden="true" />
          {testimonialList.length > 0 ? (
            <>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={index}
                  className="testimonial-slide"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="testimonial-quote">{t.quote}</blockquote>
                  <figcaption className="testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.from}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <div className="testimonial-controls">
                <button className="testimonial-nav" onClick={() => paginate(-1)} aria-label="Previous testimonial">
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
                  {testimonialList.map((item, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Show testimonial ${i + 1}`}
                      className={`testimonial-dot ${i === index ? 'active' : ''}`}
                      onClick={() => setIndex([i, i > index ? 1 : -1])}
                    />
                  ))}
                </div>
                <button className="testimonial-nav" onClick={() => paginate(1)} aria-label="Next testimonial">
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </div>
            </>
          ) : (
            <div className="empty-testimonials" style={{ padding: '3rem 0', opacity: 0.7 }}>
              <p>Your story could be the first! Add it below.</p>
            </div>
          )}
        </div>

        {/* Minimal Add Story Form */}
        <div className="testimonial-form-wrapper">
          <form className="testimonial-inline-form" onSubmit={handlePost}>
            <div className="form-header">
              <h3>Add Your Story</h3>
              <AnimatedStarRating 
                rating={formData.rating} 
                onRate={(rating) => setFormData({ ...formData, rating })} 
              />
            </div>
            
            <div className="minimal-input-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="minimal-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <textarea 
                placeholder="Tell us about your experience..." 
                className="minimal-input minimal-textarea"
                rows="2"
                value={formData.quote}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                required
              />
              <button type="submit" className="btn btn-primary minimal-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Posting...' : 'Post'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
