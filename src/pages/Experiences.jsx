import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { experiencesData } from '../data/experiences';
import { usePageMeta } from '../hooks/usePageMeta';
import AutoImageSlider from '../components/ui/AutoImageSlider';
import './Experiences.css';

const Experiences = () => {
  usePageMeta({
    title: 'Experiences | Dune Explorer',
    description:
      'Discover handcrafted Rajasthan experiences — royal heritage, desert adventures, and luxury escapes curated by Dune Explorer.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experiences-page">
      <header className="experiences-hero">
        <img
          src="/images/jaisalmer-dunes.webp"
          alt="Golden sand dunes of the Thar Desert"
          className="experiences-hero-img"
        />
        <div className="experiences-hero-overlay"></div>
        <motion.div
          className="experiences-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="experiences-label">Handcrafted Journeys</span>
          <h1>Rajasthan Experiences</h1>
          <p className="experiences-tagline">
            Every journey is a story — crafted around your pace, passions, and sense of wonder.
          </p>
        </motion.div>
      </header>

      <section className="experiences-grid-section">
        <div className="container">
          <div className="experiences-grid">
            {experiencesData.map((exp, index) => (
              <motion.article
                className="experience-card"
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/experience/${exp.id}`} className="experience-card-link">
                  <div className="experience-img-wrapper">
                    <AutoImageSlider images={exp.images} alt={exp.title} />
                    <span className="experience-badge">{exp.duration}</span>
                  </div>
                  <div className="experience-info">
                    <span className="experience-type">{exp.type}</span>
                    <h2>{exp.title}</h2>
                    <p className="experience-subtitle">{exp.subtitle}</p>
                    <ul className="experience-highlights">
                      {exp.mustExperience.slice(0, 4).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="experience-link">View Details →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="experiences-cta text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Craft Your Own Journey?</h2>
            <p>Tell us your preferences and our experts will design a bespoke itinerary around you.</p>
            <Link to="/plan-journey" className="btn btn-primary">Plan Your Journey</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
