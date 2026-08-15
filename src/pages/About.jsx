import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import AutoImageSlider from '../components/ui/AutoImageSlider';
import { imageManifest } from '../data/imageManifest';
import './About.css';

const jaipurImages = imageManifest['jaipur'];

const whyChooseItems = [
  'Curated luxury journeys tailored to your travel style',
  'Handpicked heritage hotels and premium accommodations',
  'Authentic cultural and local experiences',
  'Private chauffeur-driven transportation',
  'Expert local guides and destination specialists',
  'Dedicated concierge support throughout your journey',
  'Responsible and sustainable travel practices',
  'Transparent planning with exceptional attention to detail'
];

const About = () => {
  usePageMeta({
    title: 'About Dune Explorer | Luxury Rajasthan Tour Operator',
    description:
      'Learn about Dune Explorer, a premier luxury travel agency specializing in custom Golden Triangle tours, desert safaris, and heritage palace stays across Rajasthan.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <header className="about-hero">
        <AutoImageSlider 
          images={jaipurImages} 
          alt="Rajasthan Heritage" 
          className="about-hero-img-slider" 
        />
        <div className="about-hero-overlay"></div>
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="about-label">About Us</span>
          <h1>Beyond Travel, Into Experience</h1>
        </motion.div>
      </header>

      <section className="about-content">
        <div className="container">
          <motion.div
            className="about-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              At DuneXplore, we believe that the most memorable journeys are not measured by the miles traveled, but by the experiences that stay with you long after you return home. We are a luxury travel company dedicated to curating extraordinary journeys across Rajasthan and India, where every itinerary is thoughtfully designed to reflect your unique interests, pace, and travel aspirations.
            </p>
            <p>
              With extensive experience in the travel industry, our team is passionate about creating seamless, personalized, and immersive travel experiences. From the moment you arrive until your journey comes to an end, every detail is carefully planned to ensure exceptional comfort, authenticity, and peace of mind.
            </p>
            <p>
              Our expertise lies in crafting bespoke itineraries that go beyond traditional sightseeing. Whether it's waking up in a centuries-old palace, enjoying a private sunset over the Thar Desert, exploring vibrant local markets with expert guides, tracking wildlife in Ranthambore and Jawai, or sharing a home-cooked meal in a traditional village, every experience is designed to connect you with the true spirit of India.
            </p>
            <p>
              At DuneXplore, luxury is found in the details. We carefully select premium heritage hotels, boutique resorts, luxury camps, and trusted local partners to deliver world-class hospitality throughout your journey. From chauffeur-driven transportation and knowledgeable local guides to exclusive cultural experiences and personalized concierge services, we ensure that every moment is effortless, comfortable, and unforgettable.
            </p>
            <p>
              We are equally committed to responsible and sustainable tourism. By working closely with local communities, artisans, guides, and conservation initiatives, we strive to preserve India's rich cultural heritage while creating meaningful experiences that benefit both our guests and the destinations they visit.
            </p>
            <p>
              Whether you are discovering Rajasthan's magnificent forts and royal palaces, sailing across the tranquil lakes of Udaipur, wandering through the colourful streets of Jaipur, experiencing the magic of the Thar Desert, or embarking on an unforgettable wildlife safari, DuneXplore transforms every destination into a story worth remembering.
            </p>
            <p className="about-mission">
              Our mission is simple—to create exceptional travel experiences that inspire exploration, celebrate culture, and create memories that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-why-section">
        <div className="container">
          <motion.div
            className="about-why-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Why Choose DuneXplore?</h2>
            <ul className="about-why-list">
              {whyChooseItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <CheckCircle size={20} className="about-check-icon" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="about-closing">
        <div className="container">
          <motion.div
            className="about-closing-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-closing-text">
              At DuneXplore, we don't simply plan holidays—we craft unforgettable journeys that celebrate the beauty, heritage, and soul of India.
            </p>
            <div className="about-closing-brand">
              <strong>DuneXplore</strong>
              <span>Beyond Travel, Into Experience.</span>
            </div>
            <Link to="/plan-journey" className="btn btn-primary">Start Your Journey</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
