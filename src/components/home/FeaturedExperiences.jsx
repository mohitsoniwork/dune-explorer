import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FeaturedExperiences.css';

const experiences = [
  {
    id: 1,
    title: 'The Royal Jaipur',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Heritage & Luxury',
    duration: '3 Days'
  },
  {
    id: 2,
    title: 'Jaisalmer Desert Safari',
    image: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Adventure',
    duration: '2 Days'
  },
  {
    id: 3,
    title: 'Udaipur Palace Stay',
    image: '/udaipur.jpg',
    type: 'Luxury & Wellness',
    duration: '4 Days'
  }
];

const FeaturedExperiences = () => {
  return (
    <section className="section experiences-section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Featured Experiences</h2>
          <p className="section-subtitle">Journeys crafted to perfection</p>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-image-wrapper">
                <img src={exp.image} alt={exp.title} className="experience-image" />
                <div className="experience-badge">{exp.duration}</div>
              </div>
              <div className="experience-info">
                <span className="experience-type">{exp.type}</span>
                <h3>{exp.title}</h3>
                <Link to={`/experience/${exp.id}`} className="experience-link">View Details</Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link to="/experiences" className="btn btn-outline">View All Experiences</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
