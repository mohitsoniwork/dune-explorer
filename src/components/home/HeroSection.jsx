import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { imageManifest } from '../../data/imageManifest';
import DestinationMarquee from './DestinationMarquee';
import './HeroSection.css';

const pickShuffledHeroImages = () => {
  const picks = Object.values(imageManifest)
    .filter((imgs) => imgs && imgs.length > 0)
    .map((imgs) => imgs[Math.floor(Math.random() * imgs.length)]);

  for (let i = picks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [picks[i], picks[j]] = [picks[j], picks[i]];
  }
  return picks;
};

const headline = ['Luxury', 'Tours'];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const [heroImages] = useState(pickShuffledHeroImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!heroImages || heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages]);

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const duneY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section className="hero-section" ref={ref}>
      <motion.div className="hero-background" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt="Rajasthan destination showcase"
            className="hero-image"
            fetchPriority="high"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
        <div className="hero-dune-layer" aria-hidden="true"></div>
        <motion.div className="hero-dune-shape" aria-hidden="true" style={{ y: duneY }}></motion.div>
      </motion.div>

      <motion.div className="container hero-content" style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}>
        <motion.span
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Welcome to Dune Explorer
        </motion.span>

        <h1 className="hero-title" aria-label="Luxury Tours">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              className="hero-word"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Bespoke journeys, private desert safaris &amp; heritage palace stays.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <Link to="/plan-journey" className="btn btn-primary">Plan Your Journey</Link>
          <Link to="/destinations" className="btn btn-light">Discover Destinations</Link>
        </motion.div>

        <motion.div
          className="hero-more"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link to="/experiences" className="hero-more-link">
            Discover More
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </motion.div>


      <motion.a
        href="#main-content"
        className="scroll-indicator"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
        <span className="scroll-text">Scroll</span>
      </motion.a>

      <DestinationMarquee />
    </section>
  );
};

export default HeroSection;
