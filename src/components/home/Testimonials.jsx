import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'Dune Explorer crafted a honeymoon we will never forget — private dinners in a 400-year-old haveli and a night under the Thar stars. Flawless from start to finish.',
    name: 'Sophie & James',
    from: 'United Kingdom',
    rating: 5,
  },
  {
    quote:
      'The team anticipated everything before we even asked. Our kids still talk about the camel safari and the folk performances around the campfire.',
    name: 'The Andersons',
    from: 'Australia',
    rating: 5,
  },
  {
    quote:
      'As a photographer I was nervous about logistics, but Dune Explorer handled permits, guides and golden-hour locations perfectly. A world-class experience.',
    name: 'Marco Rossi',
    from: 'Italy',
    rating: 5,
  },
  {
    quote:
      'From Jaipur to Jaisalmer, every hotel, driver and local guide exceeded expectations. True luxury with the warmth of genuine hospitality.',
    name: 'Priya & Rohan',
    from: 'India',
    rating: 5,
  },
];

const Testimonials = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = useCallback(
    (dir) => {
      setIndex(([i]) => [(i + dir + testimonials.length) % testimonials.length, dir]);
    },
    []
  );

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paginate]);

  const t = testimonials[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
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
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
