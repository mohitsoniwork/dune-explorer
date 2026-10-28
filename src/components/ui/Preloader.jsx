import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADER_DESTINATIONS } from '../../data/loaderDestinations';
import './Preloader.css';

/**
 * Cinematic Preloader inspired by high-end editorial motion design.
 * Features a floating destination thumbnail framed organically by "DUNE EXPLORER" typography.
 */
const Preloader = ({ isLoading, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const timerRef = useRef(null);
  const cycleIntervalRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', handleChange);
      return () => mediaQuery.removeEventListener?.('change', handleChange);
    }
  }, []);

  // Preload all destination images immediately
  useEffect(() => {
    LOADER_DESTINATIONS.forEach((dest) => {
      const img = new Image();
      img.src = dest.image;
    });
  }, []);

  // Orchestrate animation sequence
  useEffect(() => {
    if (!isLoading) return;

    if (prefersReducedMotion) {
      // Simplified quick flow for reduced motion
      const quickTimer = setTimeout(() => {
        setIsExiting(true);
        if (onComplete) onComplete();
      }, 1200);
      return () => clearTimeout(quickTimer);
    }

    // Phase 1: Brand Introduction & Center Image Reveal (500ms)
    timerRef.current = setTimeout(() => {
      setIsIntroDone(true);

      // Phase 2: Rhythmic Destination Transitions
      // Hold each destination for ~520ms
      const intervalMs = 520;
      let step = 0;

      cycleIntervalRef.current = setInterval(() => {
        step += 1;
        if (step < LOADER_DESTINATIONS.length) {
          setCurrentIndex(step);
        } else {
          // All destinations completed
          clearInterval(cycleIntervalRef.current);
          
          // Phase 3: Loading Completion Exit
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 750);
          }, 350);
        }
      }, intervalMs);
    }, 550);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
    };
  }, [isLoading, prefersReducedMotion, onComplete]);

  const currentDestination = LOADER_DESTINATIONS[currentIndex] || LOADER_DESTINATIONS[0];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className={`cinematic-preloader ${isExiting ? 'preloader--exiting' : ''}`}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
          }}
          aria-live="polite"
          aria-label="Loading Dune Explorer Rajasthan experience"
          role="status"
        >
          {/* Subtle noise and warm vignette overlay */}
          <div className="preloader-overlay" aria-hidden="true" />

          {/* Top Editorial Bar */}
          <header className="preloader-top-bar" aria-hidden="true">
            <span className="preloader-meta-label">
              <span className="preloader-gold-dot" /> DUNE EXPLORER · BESPOKE EXPEDITIONS
            </span>
            <span className="preloader-meta-coords">
              {currentDestination.coordinates}
            </span>
          </header>

          {/* Main Kinetic Center Stage */}
          <div className="preloader-stage-container">
            {/* Subtle category subtitle */}
            <motion.p
              className="preloader-eyebrow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              aria-hidden="true"
            >
              DISCOVER RAJASTHAN
            </motion.p>

            <div className="preloader-stage">
              {/* Left Brand Typography: DUNE */}
              <motion.div
                className="preloader-word preloader-word--left"
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 45 }}
                animate={
                  isIntroDone && !prefersReducedMotion
                    ? {
                        opacity: 1,
                        x: [ -3, 0 ],
                        scale: [ 1.015, 1 ],
                        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                      }
                    : { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }
                key={`brand-left-${currentIndex}`}
              >
                <span>DUNE</span>
              </motion.div>

              {/* Central Floating Destination Photograph */}
              <div className="preloader-photo-anchor">
                <motion.div
                  className="preloader-photo-card"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.55, filter: 'blur(4px)' }
                  }
                  animate={
                    isIntroDone
                      ? {
                          opacity: 1,
                          scale: 1,
                          filter: 'blur(0px)',
                          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
                        }
                      : { opacity: 0.2, scale: 0.7 }
                  }
                >
                  <div className="preloader-photo-aspect">
                    <AnimatePresence mode="popLayout">
                      <motion.img
                        key={currentDestination.id}
                        src={currentDestination.image}
                        alt={currentDestination.alt}
                        className="preloader-photo-img"
                        initial={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 1.08 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        onError={(e) => {
                          // Graceful fallback to hero image if a specific asset fails
                          e.currentTarget.src = '/images/home-hero.webp';
                        }}
                      />
                    </AnimatePresence>
                    <div className="preloader-photo-film-tint" />
                    <div className="preloader-photo-border" />
                  </div>
                </motion.div>

                {/* Destination Location Caption beneath Photo */}
                <div className="preloader-caption-wrapper" aria-hidden="true">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`caption-${currentDestination.id}`}
                      className="preloader-caption"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="preloader-caption-primary">
                        <span className="preloader-caption-num">
                          0{currentIndex + 1}
                        </span>
                        <span className="preloader-caption-divider">/</span>
                        <span className="preloader-caption-total">
                          0{LOADER_DESTINATIONS.length}
                        </span>
                        <span className="preloader-caption-dash">—</span>
                        <span className="preloader-caption-city">
                          {currentDestination.name}
                        </span>
                      </div>
                      <div className="preloader-caption-sub">
                        {currentDestination.tagline}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Brand Typography: EXPLORER */}
              <motion.div
                className="preloader-word preloader-word--right"
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -45 }}
                animate={
                  isIntroDone && !prefersReducedMotion
                    ? {
                        opacity: 1,
                        x: [ 3, 0 ],
                        scale: [ 1.015, 1 ],
                        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                      }
                    : { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }
                key={`brand-right-${currentIndex}`}
              >
                <span>EXPLORER</span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Editorial Bar with restrained progress */}
          <footer className="preloader-bottom-bar" aria-hidden="true">
            <div className="preloader-bottom-left">
              <span className="preloader-status-pulse" />
              <span className="preloader-status-text">
                {isExiting ? 'ENTERING RAJASTHAN' : 'A JOURNEY BEYOND THE ORDINARY'}
              </span>
            </div>

            <div className="preloader-bottom-center">
              <div className="preloader-progress-track">
                <motion.div
                  className="preloader-progress-fill"
                  animate={{
                    width: `${((currentIndex + 1) / LOADER_DESTINATIONS.length) * 100}%`
                  }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="preloader-bottom-right">
              <span className="preloader-archive-tag">
                {currentDestination.region}
              </span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
