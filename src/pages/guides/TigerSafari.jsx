import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Star, Clock, Calendar, MessageCircle, MapPin, Compass, ShieldCheck, Camera, Eye } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const safariLodges = [
  {
    name: 'Aman-i-Khás',
    location: 'Ranthambore Perimeter',
    tag: 'Ultra-Luxury Tented Sanctuary',
    price: '$1,400 – $2,300+ / night',
    description: 'A secluded encampment of just 10 Mughal-style luxury air-conditioned tents designed by legendary architect Jean-Michel Gathy. Features private Batman (butler) service, candlelit stepwell dining, outdoor fire pit, and bespoke private safaris led by senior naturalists.',
    highlights: ['Only 10 exclusive luxury tents', 'Dedicated personal Batman (butler)', 'Private safari vehicle priority', 'Organic dining pavilion & spa tent'],
  },
  {
    name: 'The Oberoi Vanyavilas Wildlife Resort',
    location: 'Sawai Madhopur',
    tag: 'Royal Tented Luxury & Triple-Canopy Comfort',
    price: '$950 – $1,800 / night',
    description: 'Set in 20 acres of lush landscaped gardens with watercourses and mango orchards. Luxury tents feature embroidered canopies, standalone claw-foot bathtubs, teak floors, and private walled gardens with sun decks.',
    highlights: ['Claw-foot freestanding bathtubs', 'Observation tower for birdwatching', 'Chauffeured golf buggy grounds', 'World-class Oberoi culinary hospitality'],
  },
  {
    name: 'SUJÁN Sher Bagh',
    location: 'Ranthambore Border',
    tag: 'Relais & Châteaux Heritage Safari Camp',
    price: '$1,150 – $2,100 / night',
    description: 'Inspired by the safari camps of the 1920s British Raj, Sher Bagh combines pioneering wildlife conservation with aristocratic luxury. Handcrafted brass fixtures, Anglo-Indian camp furniture, and private campfire stories with tiger conservationists.',
    highlights: ['Relais & Châteaux gastronomy', 'Royal Suite with private heated pool', 'Private game drives with veteran trackers', 'Strong community & conservation focus'],
  },
];

const zoneGuide = [
  {
    zone: 'Zones 1 to 5 (Core Premium Zones)',
    desc: 'The historic heart of Ranthambore featuring ancient ruins, lakes (Padam Talao, Rajbagh Talao, Malik Talao), and the dramatic backdrop of Ranthambore Fort. Highest historical concentration of Bengal tiger sightings.',
  },
  {
    zone: 'Zones 6 to 10 (Buffer & Hill Habitats)',
    desc: 'Quieter, scenic hill and valley terrain added to expand tiger territory. Excellent sightings of leopards, sloth bears, caracals, and tigers patrolling rocky ridgelines with fewer tourist vehicles.',
  },
];

const safariFaqs = [
  {
    q: 'When is the best season for tiger sightings in Ranthambore?',
    a: 'Ranthambore is open from October 1 to June 30 (core zones close during the monsoon from July to September). For pleasant weather, November to February is wonderful (10°C–25°C). For the highest probability of tiger sightings, March to May is prime: as summer heat dries up forest waterholes, tigers frequently visit remaining lakes and water points.',
  },
  {
    q: 'What is the difference between a private Gypsy (Jeep) and a Canter?',
    a: 'A private Gypsy is an open-top 4x4 vehicle that seats up to 4–6 guests, allowing agility on tight jungle tracks, silent maneuverability, and unobstructed 360-degree photography angles. A Canter is an open 20-seater bus that is slower and noisier. Dune Explorer exclusively arranges private Gypsies for our luxury guests.',
  },
  {
    q: 'How far in advance do safari zone permits need to be booked?',
    a: 'Ranthambore safari permits are heavily restricted by the Rajasthan Forest Department to protect wildlife. Core zones (1 to 5) routinely sell out 90 to 120 days in advance. We recommend booking your journey 3 to 4 months ahead so we can secure premium zones and top naturalists.',
  },
  {
    q: 'How many safaris should I do for a guaranteed tiger sighting?',
    a: 'While wildlife in the wild can never be 100% guaranteed, doing 3 to 4 game drives (a mix of early morning and late afternoon safaris) with expert trackers gives our guests a greater than 90% chance of observing Bengal tigers in their natural habitat.',
  },
];

const TigerSafari = () => {
  usePageMeta({
    title: 'Luxury Ranthambore Tiger Safari Tour: Lodges, Zones and Best Seasons | Dune Explorer',
    description:
      'Plan a luxury Ranthambore tiger safari with the best lodges, park zones and months to go. Read the guide and boost your sighting chances.',
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
          src="/images/jaipur/DSC_8153-01.jpeg"
          alt="Luxury Ranthambore Tiger Safari"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="guide-badge">Wildlife & Safari Blueprint</span>
          <h1>Luxury Ranthambore Tiger Safari Tour: Lodges, Zones and Best Seasons</h1>
          <p className="guide-hero-sub">
            How to craft the ultimate royal wilderness experience — comparing world-renowned luxury lodges, park zone strategies, and private 4x4 game drives.
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
            <span>Ranthambore Tiger Safari</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 9 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Safari Season Guide</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                Ranthambore National Park is one of the world's most dramatic wildlife sanctuaries — where wild Royal Bengal Tigers roam amidst ancient 10th-century fort ruins, banyan trees, and tranquil crocodile-filled lakes. Combining wildlife adventure with five-star luxury tented hospitality makes this a centerpiece of any Rajasthan journey.
              </p>

              <h2>Top Luxury Tented Lodges in Ranthambore</h2>
              <p>
                To experience wildlife without compromising on comfort, these three iconic properties offer exceptional wilderness luxury:
              </p>

              <div className="property-reviews-list">
                {safariLodges.map((lodge, idx) => (
                  <div key={idx} className="property-card">
                    <div className="property-card-body">
                      <div className="property-top">
                        <h3 className="property-name">{lodge.name}</h3>
                        <span className="property-location"><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 3 }} />{lodge.location}</span>
                      </div>
                      <div className="property-price-hint">
                        {lodge.tag} · <span style={{ color: 'var(--color-sand)' }}>{lodge.price}</span>
                      </div>
                      <p style={{ fontSize: '0.94rem', color: '#444', lineHeight: 1.65 }}>
                        {lodge.description}
                      </p>

                      <div className="property-features-pills">
                        {lodge.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="prop-pill">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Understanding Ranthambore Safari Zones</h2>
              <p>
                Ranthambore is divided into 10 regulated safari zones. Understanding the terrain helps set expectations:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
                {zoneGuide.map((z, idx) => (
                  <div key={idx} style={{ background: '#fff', border: '1px solid rgba(141, 90, 43, 0.16)', borderRadius: '10px', padding: '1.4rem' }}>
                    <h4 style={{ color: 'var(--color-maroon)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>
                      {z.zone}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: 1.6 }}>
                      {z.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2>Private 4x4 Gypsy vs Shared Canter: Why It Matters</h2>
              <div className="guide-callout">
                <h4>Exclusively Private 4x4 Gypsies</h4>
                <p>
                  At Dune Explorer, we never place our guests in 20-seater canters. Your safari is conducted in an open-top private Gypsy with a dedicated senior naturalist and driver. This allows quiet observation, the freedom to halt for lighting angles, and customized tracking of alarm calls from spotted deer and langurs.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions About Tiger Safaris</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {safariFaqs.map((faq, idx) => {
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
                <h3>Reserve Your Safari Permits</h3>
                <p>
                  Park permits are strictly quota-controlled. Share your target dates early so we can secure core zones and luxury lodge suites.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Safari Journey
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20interested%20in%20a%20luxury%20Ranthambore%20tiger%20safari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Ask Safari Specialist
                </a>
              </div>

              <div className="sidebar-card">
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)' }}>
                  Circuit Route
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: '0.6rem', marginBottom: '0.4rem' }}>
                  10-Day Royal Route
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '1rem' }}>
                  See how Ranthambore connects between Jaipur and the southern palace circuit.
                </p>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View 10-Day Itinerary <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)' }}>
                  Best Seasons
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: '0.6rem', marginBottom: '0.4rem' }}>
                  Best Time to Visit
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '1rem' }}>
                  Check climate and national park opening months across Rajasthan.
                </p>
                <Link to="/best-time-to-visit-rajasthan" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Check Seasons <ArrowRight size={15} />
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
                <span className="related-card-tag">Palace Stays</span>
                <h3 className="related-card-title">Stay Like Royalty: Best Palace Hotels</h3>
                <p className="related-card-desc">Taj Lake Palace, Rambagh, and Umaid Bhawan ranked and reviewed.</p>
                <span className="related-card-link">Explore Palaces <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/luxury-jaisalmer-desert-camps" className="related-card">
              <img src="/images/jaisalmer-dunes.jpg" alt="Desert Camps" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Desert Glamping</span>
                <h3 className="related-card-title">Luxury Jaisalmer Desert Camp Stay</h3>
                <p className="related-card-desc">Secluded dunes, luxury canvas suites, and starlit banquets.</p>
                <span className="related-card-link">Explore Camps <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/luxury-rajasthan-tour-cost" className="related-card">
              <img src="/images/jaipur/DSC_5623-01.jpeg" alt="Tour Costs" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Pricing Guide</span>
                <h3 className="related-card-title">Rajasthan Tour Cost Per Person</h3>
                <p className="related-card-desc">Detailed price ranges for palace hotels, safaris, and private drivers.</p>
                <span className="related-card-link">View Pricing <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TigerSafari;
