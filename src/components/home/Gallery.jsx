import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import AutoImageSlider from '../ui/AutoImageSlider';
import { imageManifest } from '../../data/imageManifest';
import './Gallery.css';

const galleryItems = [
  { 
    id: 'jaipur',
    images: imageManifest['jaipur'], 
    alt: 'Pink City architecture of Jaipur', 
    label: 'Jaipur',
    col: 0,
    row: 0
  },
  { 
    id: 'jaisalmer',
    images: imageManifest['jaisalmer'], 
    alt: 'Golden sand dunes of Jaisalmer', 
    label: 'Jaisalmer',
    col: 1,
    row: 0
  },
  { 
    id: 'udaipur',
    images: imageManifest['udaipur'], 
    alt: 'Palace beside Lake Pichola in Udaipur', 
    label: 'Udaipur',
    col: 2,
    row: 0
  },
  { 
    id: 'jodhpur',
    images: imageManifest['jodhpur'], 
    alt: 'Mehrangarh Fort rising over Jodhpur', 
    label: 'Jodhpur',
    col: 1,
    row: 1
  },
  { 
    id: 'ranthambore',
    images: imageManifest['ranthambore'], 
    alt: 'Bengal tiger in Ranthambore National Park', 
    label: 'Ranthambore',
    col: 2,
    row: 1
  },
  { 
    id: 'random',
    images: Object.values(imageManifest).flat().sort(() => 0.5 - Math.random()).slice(0, 15), 
    alt: 'Beautiful moments across Rajasthan', 
    label: 'Explore Rajasthan',
    col: 0,
    row: 2
  },
  {
    id: 'pushkar',
    images: imageManifest['pushkar'],
    alt: 'Holy lake and ghats of Pushkar',
    label: 'Pushkar',
    col: 1,
    row: 2
  }
];

const Gallery = () => {
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

  // Track scroll through the gallery section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Pronounced editorial column velocities:
  // Column 0 moves smoothly upward (-70px to +70px)
  // Column 1 (center column) moves at a counter-rate (+85px to -85px)
  // Column 2 moves at (-55px to +55px)
  const col0Parallax = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const col1Parallax = useTransform(scrollYProgress, [0, 1], [85, -85]);
  const col2Parallax = useTransform(scrollYProgress, [0, 1], [-55, 55]);

  const columnParallaxes = [col0Parallax, col1Parallax, col2Parallax];

  return (
    <section className="section gallery-section" ref={sectionRef}>
      <div className="container">
        {/* Coordinated Staggered Typography */}
        <div className="section-header text-center">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Rajasthan Visual Archive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Moments That Feel Like Gold
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            From Thar sand dunes at golden hour to floating marble palaces and tiger reserves.
          </motion.p>
        </div>

        {/* Staggered Scroll-Driven Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, i) => {
            const staggerDelay = prefersReduced ? 0 : (item.col * 0.12 + item.row * 0.14);
            const colParallax = columnParallaxes[item.col];

            return (
              <motion.div
                key={item.id}
                className={`gallery-col-wrapper gallery-item-${i + 1} gallery-col-${item.col}`}
                style={{
                  y: isWide && !prefersReduced ? colParallax : 0
                }}
              >
                <motion.figure
                  className="gallery-item"
                  initial={{
                    opacity: 0,
                    y: prefersReduced ? 0 : 50,
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
                  <AutoImageSlider images={item.images} alt={item.alt} />
                  <figcaption>
                    <span>{item.label}</span>
                  </figcaption>
                </motion.figure>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
