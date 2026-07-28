import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { travelStylesData } from '../data/travelStyles';
import './StyleDetail.css';

const StyleDetail = () => {
  const { styleId } = useParams();
  const style = travelStylesData[styleId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [styleId]);

  if (!style) {
    return (
      <div className="style-detail-page">
        <div className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
          <h1>Experience Not Found</h1>
          <p>The travel style you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="style-detail-page">
      <header className="style-detail-hero">
        <img src={style.heroImage} alt={style.title} className="style-detail-hero-img" />
        <div className="style-detail-hero-overlay"></div>
        <motion.div
          className="style-detail-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="style-detail-label">DuneXplore</span>
          <h1>{style.title}</h1>
          <p className="style-detail-subtitle">{style.subtitle}</p>
        </motion.div>
      </header>

      <section className="style-detail-content">
        <div className="container">
          <motion.div
            className="style-detail-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {style.paragraphs.map((para, index) => (
              <p key={index} className={index === style.paragraphs.length - 1 ? 'style-detail-closing' : ''}>
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="style-detail-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/plan-journey" className="btn btn-primary">Plan Your Journey</Link>
            <Link to="/" className="btn btn-outline">Explore More Styles</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StyleDetail;
