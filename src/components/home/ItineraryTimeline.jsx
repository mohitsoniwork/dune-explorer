import { motion, useReducedMotion } from 'framer-motion';
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
  const prefersReduced = useReducedMotion();

  return (
    <section className="section itinerary-section">
      <div className="container">
        {/* Staggered Section Header */}
        <div className="section-header text-center">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Iconic Cultural Circuits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            The Golden Triangle Route
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            India's iconic cultural circuit through Delhi, Agra, and Jaipur. Ideal for travel from October to March.
          </motion.p>
        </div>

        {/* Staggered Timeline Items */}
        <div className="timeline">
          {itinerary.map((item, i) => (
            <motion.article
              key={item.day}
              className="timeline-item"
              initial={{
                opacity: 0,
                y: prefersReduced ? 0 : 45,
                scale: prefersReduced ? 1 : 0.97
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: '-50px', amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: prefersReduced ? 0 : i * 0.16,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div
                className="timeline-marker"
                aria-hidden="true"
                initial={{ scale: prefersReduced ? 1 : 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: prefersReduced ? 0 : i * 0.16 + 0.08
                }}
              >
                <MapPin size={18} />
              </motion.div>
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
