import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Heart, Star, Clock, Calendar, MessageCircle, MapPin, Sparkles, Wine } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const romanticExperiences = [
  {
    title: 'Private Sunset Solar-Boat Charter on Lake Pichola',
    location: 'Udaipur',
    desc: 'Glide past the illuminated marble facades of the City Palace and Jagmandir Island as the sky turns rose-gold, served chilled French champagne and handcrafted canapés.',
  },
  {
    title: 'Private Dune Crest Candlelight Dinner',
    location: 'Jaisalmer / Thar Desert',
    desc: 'A secluded private dining setup nestled between pristine golden dunes, lit by hundreds of flickering hurricane lanterns with private bonfire and acoustic Manganiyar melodies.',
  },
  {
    title: 'Couples Ayurvedic Spa on Taj Lake Palace Boat',
    location: 'Udaipur',
    desc: 'The Jiva Spa Boat experience on Lake Pichola — soak in a private deck jacuzzi, unwind with traditional aromatherapy, and cruise the gentle ripples of the royal lake.',
  },
  {
    title: 'Sunrise Hot Air Balloon Flight over Amer Fort',
    location: 'Jaipur',
    desc: 'Float gracefully above the ancient battlements, dramatic Aravalli ridges, and sleepy desert hamlets as morning sunlight washes over the Pink City.',
  },
];

const honeymoonItinerary = [
  {
    days: 'Day 1 – 3',
    city: 'Udaipur — The City of Romance',
    stay: 'Taj Lake Palace / The Oberoi Udaivilas',
    vibe: 'Private lake cruises, rooftop candlelight dinners at Sheesh Mahal, wandering artisan miniature art galleries, and indulgent couple spa therapies.',
  },
  {
    days: 'Day 4 – 5',
    city: 'Aravalli Countryside / Jawai',
    stay: 'Rawla Narlai / SUJÁN Jawai',
    vibe: 'A serene transition into countryside heritage. Magical 1,000-lamp stepwell dinner under stars, romantic leopard safaris, and tranquil hillside walks.',
  },
  {
    days: 'Day 6 – 8',
    city: 'Jaipur — The Royal Pink City',
    stay: 'Rambagh Palace / The Oberoi Rajvilas',
    vibe: 'Sunrise hot air ballooning, private jewelry & silk shopping with insider stylists, and an unforgettable grand royal dinner in the mirror-work halls of 1135 AD.',
  },
];

const honeymoonFaqs = [
  {
    q: 'Why choose Rajasthan over traditional beach destinations like the Maldives or Bali?',
    a: 'While beach resorts offer relaxation, a luxury Rajasthan honeymoon combines extraordinary romance with rich culture, historic majesty, and world-class palace hospitality. You sleep in actual suites once inhabited by Maharajas, dine by candlelight in ancient fortress courtyards, and create lifelong memories far beyond a standard beach resort.',
  },
  {
    q: 'What special honeymoon privileges does Dune Explorer arrange?',
    a: 'As luxury specialists with direct royal palace relationships, we arrange special honeymoon welcomes: romantic floral suite decorations, bespoke arrival cakes, complimentary champagne toasts, priority suite upgrades (subject to availability), and exclusive private dining tables with prime views.',
  },
  {
    q: 'How long should a luxury Rajasthan honeymoon be?',
    a: 'A 7 to 10-day itinerary is ideal. It allows for an unhurried, romantic pace with 2 to 3 nights in each destination, ensuring leisurely mornings and romantic afternoons by private pools without long consecutive driving days.',
  },
  {
    q: 'What is the most romantic time of year for a Rajasthan honeymoon?',
    a: 'October to March offers ideal romantic weather with pleasant temperatures (15°C–26°C), clear starry nights, and crisp morning sunshine. February in particular is popular for pleasant warmth and Valentine honeymoon journeys.',
  },
];

const HoneymoonTour = () => {
  usePageMeta({
    title: 'Rajasthan Honeymoon Luxury Tour: Romantic Palaces and Private Dinners | Dune Explorer',
    description:
      'Plan a dreamy Rajasthan honeymoon with romantic palace stays, private dinners and lake views. Get the itinerary ideas and enquire today.',
  });

  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="guide-page">
      {/* Hero Banner */}
      <header className="guide-hero">
        <img
          src="/images/jaipur/DSC_0038-01.jpeg"
          alt="Rajasthan Honeymoon Luxury Tour"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Rajasthan Honeymoon Luxury Tour: Romantic Palaces and Private Dinners</h1>
          <p className="guide-hero-sub">
            The definitive honeymoon guide to royal India: floating marble palaces, private desert sundowners, and unforgettable candlelight dining.
          </p>
        </motion.div>
      </header>

      {/* Meta Strip */}
      <div className="guide-meta-strip">
        <div className="container guide-meta-inner">
          <div className="guide-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/stories">Guides</Link>
            <span>/</span>
            <span>Rajasthan Honeymoon Tour</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 8 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Romantic Luxury Edition</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                Few places on Earth inspire romance quite like Rajasthan. Picture floating across shimmering Lake Pichola to a 280-year-old marble palace, sipping champagne as desert sand dunes glow beneath the sunset, and waking up to peacocks calling across private Mughal gardens.
              </p>

              <h2>Signature Romantic Experiences for Couples</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', margin: '2rem 0' }}>
                {romanticExperiences.map((exp, idx) => (
                  <div key={idx} style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.4rem' }}>
                    <div style={{ color: 'var(--color-sand)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                      {exp.location}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-dark)', marginBottom: '0.5rem', fontSize: '1.15rem' }}>
                      {exp.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', margin: 0, lineHeight: 1.6 }}>
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2>The Ideal 8-Day Honeymoon Circuit Blueprint</h2>
              <p>
                To avoid feeling rushed, we recommend an intimate 3-destination flow that balances world-renowned lakefront elegance, rural romance, and grand capital heritage:
              </p>

              <div className="itinerary-timeline">
                {honeymoonItinerary.map((leg, idx) => (
                  <div key={idx} className="itinerary-day-card">
                    <div className="day-header">
                      <div>
                        <span className="day-badge">{leg.days}</span>
                        <h3 className="day-destination" style={{ marginTop: '0.4rem', marginBottom: 0 }}>
                          {leg.city}
                        </h3>
                      </div>
                    </div>
                    <div className="day-hotel-callout">
                      <strong>Recommended Palace Suite:</strong> {leg.stay}
                    </div>
                    <p style={{ fontSize: '0.94rem', color: 'var(--color-text-deep)', lineHeight: 1.65, margin: 0 }}>
                      {leg.vibe}
                    </p>
                  </div>
                ))}
              </div>

              <h2>The Dune Explorer Honeymoon Advantage</h2>
              <div className="guide-callout" style={{ borderLeftColor: 'var(--color-sand)' }}>
                <h4>Discreet, Tailored & Completely Private</h4>
                <p>
                  Your journey includes a dedicated private chauffeur who understands discretion, pre-booked private excursions where you never join group tour crowds, and 24/7 concierge support handling every detail from candlelit dining reservations to luggage transfers.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions About Rajasthan Honeymoons</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {honeymoonFaqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className={`guide-faq-item ${isOpen ? 'open' : ''}`}>
                        <button
                          type="button"
                          className="guide-faq-question"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <ChevronDown size={20} className="guide-faq-icon" />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="guide-faq-answer"
                            >
                              <p>{faq.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="guide-sidebar">
              <div className="sidebar-card cta-card">
                <h3>Craft Your Dream Honeymoon</h3>
                <p>
                  Share your dream travel dates, preferred romantic style, and wishes. We will create a bespoke royal honeymoon proposal within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Royal Honeymoon
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20interested%20in%20planning%20a%20luxury%20Rajasthan%20honeymoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Chat with Honeymoon Designer
                </a>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Best Palace Hotels
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Explore suite recommendations for Taj Lake Palace, Rambagh, and Umaid Bhawan.
                </p>
                <Link to="/rajasthan-palace-hotel-itinerary" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Palace Guide <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Tour Cost Per Person
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  See typical price ranges for luxury couples itineraries in US Dollars ($).
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Tour Costs <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Guides Section */}
      <section className="related-guides-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            More Guides for Your Royal Rajasthan Vacation
          </h2>
          <div className="related-guides-grid">
            <Link to="/rajasthan-palace-hotel-itinerary" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="Palace Hotels Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Stay Like Royalty: Best Palace Hotels</h3>
                <span className="related-card-tag">Palace Stays</span>
                <p className="related-card-desc">Taj Lake Palace, Rambagh, and Umaid Bhawan ranked and reviewed.</p>
                <span className="related-card-link">Explore Palaces <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/luxury-jaisalmer-desert-camps" className="related-card">
              <img src="/images/jaisalmer-dunes.jpg" alt="Desert Camps" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Luxury Jaisalmer Desert Camp Stay</h3>
                <span className="related-card-tag">Desert Glamping</span>
                <p className="related-card-desc">Where to sleep under the dunes with private tents and sunset dinners.</p>
                <span className="related-card-link">Explore Camps <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/best-time-to-visit-rajasthan" className="related-card">
              <img src="/images/jodhpur-fort.webp" alt="Best Time to Visit" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Best Time to Visit Rajasthan for Luxury Travel</h3>
                <span className="related-card-tag">Seasonal Planning</span>
                <p className="related-card-desc">Month-by-month weather, romantic festival dates, and palace rates.</p>
                <span className="related-card-link">Explore Seasons <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HoneymoonTour;
