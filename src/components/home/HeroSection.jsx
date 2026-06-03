import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="/Home page.jpg" 
          alt="Rajasthan Desert Sand Dunes" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.span 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to Dune Explorer
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience Rajasthan <br /> Beyond Tourism
        </motion.h1>
        
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link to="/plan-journey" className="btn btn-primary">Plan Your Journey</Link>
          <Link to="/experiences" className="btn btn-light">Discover More</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
