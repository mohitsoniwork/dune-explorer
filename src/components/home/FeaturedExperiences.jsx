import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { experiencesData } from '../../data/experiences';
import TiltCard from '../ui/TiltCard';
import './FeaturedExperiences.css';

const FeaturedExperiences = () => {
  return (
    <section className="section experiences-section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Handcrafted Journeys</span>
          <h2>Featured Experiences</h2>
          <p className="section-subtitle">Journeys crafted to perfection</p>
        </div>

        <div className="experiences-grid">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
          ))}
        </div>

        <div className="text-center experiences-actions" style={{ marginTop: '3rem' }}>
          <Link to="/experiences" className="btn btn-primary">View All Experiences</Link>
          <Link to="/plan-journey" className="btn btn-outline">Plan Your Journey</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
