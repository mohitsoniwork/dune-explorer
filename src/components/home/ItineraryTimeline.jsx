import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './ItineraryTimeline.css';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Jaipur — The Pink City',
    desc: 'Arrive and settle into a heritage palace. Evening welcome dinner with traditional Rajasthani performances.',
  },
  {
    day: 'Day 2',
    title: 'Jodhpur — The Blue City',
    desc: 'Explore Mehrangarh Fort at sunrise, wander the blue old town, and dine at a rooftop overlooking the city.',
  },
  {
    day: 'Day 3',
    title: 'Jaisalmer — The Golden Desert',
    desc: 'Sunset camel safari over the Sam Sand Dunes, luxury desert camp, folk music and a sky full of stars.',
  },
];

const ItineraryTimeline = () => {
  return (
    <section className="section itinerary-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Signature Itinerary</span>
          <h2>Three Days. One Golden Route.</h2>
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
