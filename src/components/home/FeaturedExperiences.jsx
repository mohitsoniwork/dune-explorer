import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { experiencesData } from '../../data/experiences';
import TiltCard from '../ui/TiltCard';
import './FeaturedExperiences.css';

const FeaturedExperiences = () => {
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

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Pronounced, editorial layered column movement (scroll-driven differential velocity)
  // Left card glides up, Center card (Jaisalmer) glides at counter-speed, Right card glides up
  const card0Parallax = useTransform(scrollYProgress, [0, 1], [-55, 55]);
  const card1Parallax = useTransform(scrollYProgress, [0, 1], [65, -65]);
  const card2Parallax = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  const cardParallaxes = [card0Parallax, card1Parallax, card2Parallax];

  return (
    <section className="section experiences-section bg-light" ref={sectionRef}>
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
            Curated Expeditions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Handcrafted Luxury Experiences
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Curated private journeys through Rajasthan's palaces, dunes, and wilderness.
          </motion.p>
        </div>

        {/* Staggered Experience Cards Grid */}
        <div className="experiences-grid">
          {experiencesData.map((exp, index) => {
            const staggerDelay = prefersReduced ? 0 : index * 0.16;
            const colParallax = cardParallaxes[index % 3];

            return (
              <motion.div
                key={exp.id}
                className={`experience-col-wrapper experience-col-${index}`}
                style={{
                  y: isWide && !prefersReduced ? colParallax : 0
                }}
              >
                <motion.div
                  className="experience-motion-card"
                  initial={{
                    opacity: 0,
                    y: prefersReduced ? 0 : 55,
                    scale: prefersReduced ? 1 : 0.95
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.85,
                    delay: staggerDelay,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <TiltCard className="experience-card" maxTilt={5}>
                    <Link to={`/experience/${exp.id}`} className="experience-card-link">
                      <div className="experience-image-wrapper">
                        <img
                          src={exp.heroImage}
                          alt={exp.title}
                          className="experience-image"
                          loading="lazy"
                        />
                        <div className="experience-badge">{exp.duration}</div>
                      </div>
                      <div className="experience-info">
                        <span className="experience-type">{exp.type}</span>
                        <h3>{exp.title}</h3>
                        <p className="experience-subtitle">{exp.subtitle}</p>
                        <span className="experience-link">View Details</span>
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Actions Reveal */}
        <motion.div
          className="text-center experiences-actions"
          style={{ marginTop: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Link to="/experiences" className="btn btn-primary">View All Experiences</Link>
          <Link to="/plan-journey" className="btn btn-outline">Plan Your Journey</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
