import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Camera, Heart, Palmtree, Map, Leaf } from 'lucide-react';
import './TravelStyles.css';

const styles = [
  { id: 'luxury', title: 'Luxury Escapes', icon: <Heart size={32} />, desc: 'Curated premium stays and exclusive experiences.' },
  { id: 'village', title: 'Village Exploration', icon: <Map size={32} />, desc: 'Experience the authentic rural life and timeless traditions.' },
  { id: 'local', title: 'Local Experiences', icon: <Camera size={32} />, desc: 'Immerse yourself in the true spirit of Rajasthan and India.' },
  { id: 'heritage', title: 'Heritage Tours', icon: <Compass size={32} />, desc: 'Explore majestic forts, royal palaces, and timeless legacies.' },
  { id: 'desert', title: 'Desert Adventures', icon: <Palmtree size={32} />, desc: 'Experience the magic of the Thar Desert beneath endless golden skies.' },
  { id: 'wildlife', title: 'Wildlife Experiences', icon: <Leaf size={32} />, desc: 'Embark on unforgettable safaris through India\'s most spectacular wilderness.' },
];

const TravelStyles = () => {
  return (
    <section className="section travel-styles bg-light">
      <div className="container">
        <div className="section-header text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How Do You Want to Travel?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tailor-made journeys for every kind of explorer
          </motion.p>
        </div>

        <div className="styles-grid">
          {styles.map((style, index) => (
            <motion.div 
              key={style.id}
              className="style-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="style-icon">{style.icon}</div>
              <h3>{style.title}</h3>
              <p>{style.desc}</p>
              <Link to={`/styles/${style.id}`} className="style-link">Explore →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStyles;
