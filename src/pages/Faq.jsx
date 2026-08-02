import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './Faq.css';

const faqItems = [
  {
    q: 'How do I book a journey with Dune Explorer?',
    a: 'Simply head to our Plan Your Journey page and fill out the inquiry form with your preferences — destinations, travel dates, number of travelers and interests. Our travel experts will respond within 24 hours with a personalised itinerary and quote. No payment is required until you approve the final plan.',
  },
  {
    q: 'Can you customise the itineraries?',
    a: 'Absolutely. Every Dune Explorer journey is bespoke. We build each itinerary around your pace, interests, budget and travel style — whether you want more heritage, more adventure, a honeymoon, or a family-friendly escape. Just tell us what you love and we\'ll craft the rest.',
  },
  {
    q: 'What types of accommodation do you offer?',
    a: 'We work with a curated selection of heritage palace hotels, 5-star luxury resorts, boutique stays and luxury desert camps across Rajasthan. Tell us your preference and we\'ll match you with handpicked properties that fit your style and budget.',
  },
  {
    q: 'What is the best time to visit Rajasthan?',
    a: 'The most comfortable months are October through March, when temperatures are pleasant for sightseeing and desert experiences. Summer (April–June) suits travellers seeking fewer crowds and lower rates, while the monsoon (July–September) brings a unique, greener landscape.',
  },
  {
    q: 'How many travellers can you accommodate?',
    a: 'We host everyone — from solo explorers and honeymoon couples to large family groups and corporate retreats. Our itineraries are designed to scale gracefully, with private transport and guides arranged to suit your group size.',
  },
  {
    q: 'Is it safe to travel with Dune Explorer?',
    a: 'Yes. We work with licensed, experienced drivers and vetted local guides, and every itinerary includes reliable transport and secure accommodation. Our team is available throughout your journey to assist with anything you need.',
  },
  {
    q: 'What is your payment and cancellation policy?',
    a: 'We keep it transparent. A booking deposit confirms your itinerary, with the balance due before departure. For details on instalments and cancellations, please see our Payment Policy — and feel free to ask us directly; we are always flexible when plans change.',
  },
  {
    q: 'Do you include flights or international travel?',
    a: 'Our itineraries cover everything within India — accommodation, transport, guides, activities and experiences. International flights are arranged separately, though our team is happy to advise on the best connections and arrival planning.',
  },
];

const FaqItem = ({ item, isOpen, onToggle, index }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span>{item.q}</span>
        <ChevronDown size={22} className="faq-chevron" aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  usePageMeta({
    title: 'FAQ | Dune Explorer',
    description:
      'Frequently asked questions about booking, customising and travelling with Dune Explorer across Rajasthan, India.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-page">
      <header className="faq-hero">
        <img
          src="/images/home-hero.webp"
          alt="Golden sand dunes of the Thar Desert at sunset"
          className="faq-hero-img"
        />
        <div className="faq-hero-overlay"></div>
        <motion.div
          className="faq-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="faq-label">Help &amp; Support</span>
          <h1>Frequently Asked Questions</h1>
          <p className="faq-tagline">
            Everything you need to know before your journey. Can't find an answer? We're one message away.
          </p>
        </motion.div>
      </header>

      <section className="faq-section">
        <div className="container">
          <motion.div
            className="faq-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>

          <div className="faq-contact text-center">
            <h2>Still Have Questions?</h2>
            <p>Our travel experts are happy to help you plan the perfect journey.</p>
            <div className="faq-contact-actions">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/plan-journey" className="btn btn-outline">Plan Your Journey</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
