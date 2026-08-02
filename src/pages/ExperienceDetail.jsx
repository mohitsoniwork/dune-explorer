import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { experiencesData } from '../data/experiences';
import { usePageMeta } from '../hooks/usePageMeta';
import AutoImageSlider from '../components/ui/AutoImageSlider';
import './ExperienceDetail.css';

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiencesData.find(exp => exp.id === parseInt(id));

  usePageMeta({
    title: experience ? `${experience.title} | Dune Explorer` : 'Experience | Dune Explorer',
    description: experience ? experience.subtitle : 'Experience not found.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!experience) {
    return (
      <div className="experience-detail-page">
        <div className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
          <h1>Experience Not Found</h1>
          <p>The experience you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-detail-page">
      <header className="exp-detail-hero">
        <AutoImageSlider 
          images={experience.images} 
          alt={experience.title} 
          className="exp-detail-hero-img-slider" 
        />
        <div className="exp-detail-hero-overlay"></div>
        <motion.div
          className="exp-detail-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="exp-detail-type">{experience.type}</span>
          <h1>{experience.title}</h1>
          <p className="exp-detail-subtitle">{experience.subtitle}</p>
          <span className="exp-detail-duration">{experience.duration}</span>
        </motion.div>
      </header>

      <section className="exp-detail-content">
        <div className="container">
          <motion.div
            className="exp-detail-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {experience.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </motion.div>

          <motion.div
            className="exp-detail-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Must Experience</h2>
            <ul className="must-experience-list">
              {experience.mustExperience.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="must-exp-bullet">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {experience.closingLine && (
            <motion.p
              className="exp-detail-closing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {experience.closingLine}
            </motion.p>
          )}

          <motion.div
            className="exp-detail-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/plan-journey" className="btn btn-primary">Plan This Journey</Link>
            <Link to="/" className="btn btn-outline">Explore More Experiences</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetail;
