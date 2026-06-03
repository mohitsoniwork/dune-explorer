import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Star } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us bg-beige">
      <div className="container">
        <div className="why-grid">
          <motion.div 
            className="why-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why Choose Dune Explorer?</h2>
            <p className="section-subtitle">A heritage of hospitality</p>
            <p className="why-desc">
              We don't just show you Rajasthan; we let you live it. Our team of local experts 
              curates journeys that go beyond the guidebooks, offering exclusive access to 
              hidden gems, private palaces, and authentic cultural encounters.
            </p>
            
            <div className="why-features">
              <div className="feature">
                <ShieldCheck className="feature-icon" size={24} />
                <div>
                  <h4>Secure & Trusted</h4>
                  <p>Certified guides and safe travels</p>
                </div>
              </div>
              <div className="feature">
                <Users className="feature-icon" size={24} />
                <div>
                  <h4>Local Experts</h4>
                  <p>Authentic stories from Rajasthan</p>
                </div>
              </div>
              <div className="feature">
                <Star className="feature-icon" size={24} />
                <div>
                  <h4>Premium Service</h4>
                  <p>24/7 concierge support on your trip</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="why-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rajasthan Fort Architecture" 
              className="why-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
