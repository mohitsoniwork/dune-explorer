import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AutoImageSlider.css';

const AutoImageSlider = ({ images, alt, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    let intervalTimer;
    // Add a random delay between 0 and 3 seconds so multiple sliders change out of sync
    const staggerDelay = Math.random() * 3000;

    const startTimer = () => {
      intervalTimer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000); // 2-second interval after the first 8 seconds
    };

    const initialTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      startTimer();
    }, 8000 + staggerDelay); // Stay still for 8 secs initially

    return () => {
      clearTimeout(initialTimer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`auto-slider-container ${className}`}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - view ${currentIndex + 1}`}
          className="auto-slider-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
};

export default AutoImageSlider;
