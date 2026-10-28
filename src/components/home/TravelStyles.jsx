import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Camera, Heart, Palmtree, Map, Leaf } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import './TravelStyles.css';

const styles = [
  { id: 'luxury', title: 'Luxury Escapes', icon: <Heart size={32} />, desc: 'Curated premium stays and exclusive experiences.' },
  { id: 'village', title: 'Village Exploration', icon: <Map size={32} />, desc: 'Experience the authentic rural life and timeless traditions.' },
  { id: 'local', title: 'Local Experiences', icon: <Camera size={32} />, desc: 'Immerse yourself in the true spirit of Rajasthan and India.' },
  { id: 'heritage', title: 'Heritage Tours', icon: <Compass size={32} />, desc: 'Explore majestic forts, royal palaces, and timeless legacies.' },
  { id: 'desert', title: 'Desert Adventures', icon: <Palmtree size={32} />, desc: 'Experience the magic of the Thar Desert beneath endless golden skies.' },
  { id: 'wildlife', title: 'Wildlife Experiences', icon: <Leaf size={32} />, desc: 'Embark on unforgettable safaris through India\'s most spectacular wilderness.' },
];

const TravelStyles = () => {
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isWide = windowWidth > 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Subtle differential column speeds
  const col0Parallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const col1Parallax = useTransform(scrollYProgress, [0, 1], [38, -38]);
  const col2Parallax = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const columnParallaxes = [col0Parallax, col1Parallax, col2Parallax];

  return (
    <section className="section travel-styles bg-light" ref={sectionRef}>
      <div className="container">
        {/* Staggered Section Header */}
        <div className="section-header text-center">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Travel Styles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            How Do You Want to Travel?
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Tailor-made journeys for every kind of explorer
          </motion.p>
        </div>

        {/* Staggered Grid of Travel Styles */}
        <div className="styles-grid">
          {styles.map((style, index) => {
            const col = index % 3;
            const row = Math.floor(index / 3);
            const staggerDelay = prefersReduced ? 0 : (col * 0.12 + row * 0.15);
            const colParallax = columnParallaxes[col];

            return (
              <motion.div
                key={style.id}
                className={`style-item-wrapper style-col-${col}`}
                style={{
                  y: isWide && !prefersReduced ? colParallax : 0
                }}
              >
                <motion.div
                  className="style-item-motion"
                  initial={{
                    opacity: 0,
                    y: prefersReduced ? 0 : 45,
                    scale: prefersReduced ? 1 : 0.96
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.75,
                    delay: staggerDelay,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <TiltCard className="style-card">
                    <Link to={`/styles/${style.id}`} className="style-card-link">
                      <div className="style-icon">{style.icon}</div>
                      <h3>{style.title}</h3>
                      <p>{style.desc}</p>
                      <span className="style-link">Explore style</span>
                    </Link>
                  </TiltCard>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelStyles;
