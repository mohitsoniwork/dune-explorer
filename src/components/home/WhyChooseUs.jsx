import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Users, Star, Award, BadgeCheck, Headset } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
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

  // Layered vertical parallax for the majestic fort image
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-55, 55]);

  const features = [
    {
      icon: <ShieldCheck className="feature-icon" size={24} aria-hidden="true" />,
      title: 'Secure & Trusted',
      desc: 'Certified guides and safe travels'
    },
    {
      icon: <Users className="feature-icon" size={24} aria-hidden="true" />,
      title: 'Local Experts',
      desc: 'Authentic stories from Rajasthan'
    },
    {
      icon: <Star className="feature-icon" size={24} aria-hidden="true" />,
      title: 'Premium Service',
      desc: '24/7 concierge support on your trip'
    }
  ];

  return (
    <section className="section why-choose-us bg-dark-section" ref={sectionRef}>
      <div className="container">
        <div className="why-grid">
          {/* Left Column: Staggered Content Sequence */}
          <div className="why-content">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              A heritage of hospitality
            </motion.h2>
            <motion.p
              className="why-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              We don't just show you Rajasthan; we let you live it. Our team of local experts
              curates journeys that go beyond the guidebooks, offering exclusive access to
              hidden gems, private palaces, and authentic cultural encounters.
            </motion.p>

            <div className="why-features">
              {features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  className="feature"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: prefersReduced ? 0 : 0.15 + idx * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {feat.icon}
                  <div>
                    <h3>{feat.title}</h3>
                    <p>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="why-awards"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: prefersReduced ? 0 : 0.45 }}
            >
              <div className="award-badge">
                <Award size={22} aria-hidden="true" />
                <span>Travelers' Choice</span>
              </div>
              <div className="award-badge">
                <BadgeCheck size={22} aria-hidden="true" />
                <span>Certified Local Guides</span>
              </div>
              <div className="award-badge">
                <Headset size={22} aria-hidden="true" />
                <span>24/7 Concierge</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Parallax Image Card */}
          <div className="why-image-container">
            <motion.div
              className="why-image-wrapper"
              style={{
                y: isWide && !prefersReduced ? imageParallaxY : 0
              }}
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <img
                src="/images/jodhpur-fort.webp"
                alt="Mehrangarh Fort rising over the Blue City of Jodhpur"
                className="why-image"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
