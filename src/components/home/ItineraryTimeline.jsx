import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './ItineraryTimeline.css';

const itinerary = [
  {
    day: 'Destination 1',
    title: 'New Delhi',
    desc: 'As the nation\'s bustling capital, New Delhi boasts magnificent historic landmarks such as the Red Fort, Qutub Minar, and India Gate.',
  },
  {
    day: 'Destination 2',
    title: 'Agra',
    desc: 'Situated in Uttar Pradesh, Agra is renowned worldwide as the home of the iconic Taj Mahal and the majestic Agra Fort.',
  },
  {
    day: 'Destination 3',
    title: 'Jaipur',
    desc: 'Known affectionately as the "Pink City" of Rajasthan, Jaipur captivates travelers with majestic structures like the Amber Fort, Hawa Mahal, and City Palace.',
  },
];

const ItineraryTimeline = () => {
  return (
    <section className="section itinerary-section sr-smooth-reveal">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">India's Tourism Circuit</span>
          <h2>Golden Triangle</h2>
          <p style={{ marginTop: '1rem', color: 'var(--color-text-secondary)' }}>
            Best Time to Visit: October to March offers cool, pleasant weather ideal for sightseeing.
          </p>
        </div>

        <div className="timeline">
          {itinerary.map((item, i) => (
            <motion.article
              key={item.day}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-marker" aria-hidden="true">
                <MapPin size={18} />
              </div>
              <div className="timeline-card">
                <span className="timeline-day">{item.day}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryTimeline;
