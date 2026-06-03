import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { rajasthanOverview, destinationsList } from '../data/destinations';
import './Destinations.css';

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destinations-page">
      <header className="destinations-header">
        <img 
          src="/Home page.jpg" 
          alt="Rajasthan Architecture" 
          className="destinations-hero-img"
        />
        <div className="destinations-hero-overlay"></div>
        <motion.div 
          className="destinations-header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{rajasthanOverview.title}</h1>
          <p>{rajasthanOverview.description}</p>
        </motion.div>
      </header>

      <section className="destinations-grid-section">
        <div className="container">
          <div className="destinations-grid">
            {destinationsList.map((dest, index) => (
              <motion.div 
                className="destination-card" 
                key={dest.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="destination-img-wrapper">
                  <img src={dest.image} alt={dest.name} className="destination-img" />
                </div>
                <div className="destination-content">
                  <span className="destination-subtitle">{dest.subtitle}</span>
                  <h2>{dest.name}</h2>
                  <p className="destination-desc">{dest.description}</p>
                  
                  <ul className="destination-highlights">
                    {dest.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <Link to="/plan-journey" className="destination-btn">
                    Explore Tours
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
