import { motion } from 'framer-motion';
import { ShieldCheck, Users, Star, Award, BadgeCheck, Headset } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us bg-dark-section">
      <div className="container">
        <div className="why-grid">
          <motion.div
            className="why-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle why-subtitle">Why DuneXplore?</span>
            <h2 className="section-title">A heritage of hospitality</h2>
            <p className="why-desc">
              We don't just show you Rajasthan; we let you live it. Our team of local experts
              curates journeys that go beyond the guidebooks, offering exclusive access to
              hidden gems, private palaces, and authentic cultural encounters.
            </p>

            <div className="why-features">
              <div className="feature">
                <ShieldCheck className="feature-icon" size={24} aria-hidden="true" />
                <div>
                  <h4>Secure &amp; Trusted</h4>
                  <p>Certified guides and safe travels</p>
                </div>
              </div>
              <div className="feature">
                <Users className="feature-icon" size={24} aria-hidden="true" />
                <div>
                  <h4>Local Experts</h4>
                  <p>Authentic stories from Rajasthan</p>
                </div>
              </div>
              <div className="feature">
                <Star className="feature-icon" size={24} aria-hidden="true" />
                <div>
                  <h4>Premium Service</h4>
                  <p>24/7 concierge support on your trip</p>
                </div>
              </div>
            </div>

            <div className="why-awards">
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
              src="/images/jodhpur-fort.webp"
              alt="Mehrangarh Fort rising over the Blue City of Jodhpur"
              className="why-image"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
