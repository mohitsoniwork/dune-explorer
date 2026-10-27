import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, X, Clock, Calendar, MessageCircle, Star, Sparkles, Train } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const trainComparisonTable = [
  {
    feature: 'Heritage & Legacy',
    pow: 'Original iconic train launched in 1982; former royal saloons of Maharajas and Viceroys.',
    rrow: 'Modernised version launched in 2009 with contemporary royal interiors and larger suites.',
  },
  {
    feature: 'Classic Itinerary',
    pow: '7 Nights / 8 Days: Delhi – Jaipur – Sawai Madhopur (Ranthambore) – Chittorgarh – Udaipur – Jaisalmer – Jodhpur – Bharatpur – Agra – Delhi.',
    rrow: '7 Nights / 8 Days: Delhi – Jodhpur – Udaipur – Chittorgarh – Sawai Madhopur – Jaipur – Khajuraho – Varanasi – Agra – Delhi.',
  },
  {
    feature: 'Cabin Styles & Capacity',
    pow: '39 Deluxe Cabins + 2 Super Deluxe Suites. Rich silk upholstery, antique brass fittings, vintage Maharaja ambiance.',
    rrow: 'Super Deluxe Saloons + Deluxe Cabins. Contemporary palatial décor, larger double beds, spacious en-suite bathrooms.',
  },
  {
    feature: 'Dining & Lounges',
    pow: 'Two royal dining cars (The Maharaja & The Maharani), plush lounge bar with international spirits.',
    rrow: 'Two restaurants (Sheesh Mahal & Swarn Mahal) with fine chinaware, dedicated spa & wellness car.',
  },
  {
    feature: 'Approx. Cost Per Person (Peak)',
    pow: 'Approx. $7,800 – $10,800 per person (Deluxe twin sharing, full board).',
    rrow: 'Approx. $8,200 – $11,500 per person (Deluxe twin sharing, full board).',
  },
  {
    feature: 'Onboard Atmosphere',
    pow: 'Classic nostalgic colonial & Rajput era charm; felt by purists as more authentically traditional.',
    rrow: 'Polished, spacious, with larger windows, spa treatments, and modern five-star hotel comfort.',
  },
];

const trainFaqs = [
  {
    q: 'Which train is better: Palace on Wheels or Royal Rajasthan on Wheels?',
    a: 'If you want pure historical nostalgia, vintage saloon character, and the classic, concentrated Rajasthan royal circuit (including Jaisalmer’s sand dunes), the Palace on Wheels is the quintessential winner. If you prefer larger cabins, modern spa carriages, and want to extend into Varanasi and Khajuraho, Royal Rajasthan on Wheels provides a more contemporary journey.',
  },
  {
    q: 'What is included in a luxury train ticket in India?',
    a: 'Ticket fares are comprehensive: all meals (onboard and select heritage palace lunches), daily private or luxury coach excursions with monument entrance fees, licensed English-speaking guides, onboard butler (Khidmatgar) service, and arrival ceremonies. Personal bar drinks, spa treatments, and laundry are billed separately.',
  },
  {
    q: 'Why do many luxury travellers choose a private chauffeur tour instead of a luxury train?',
    a: 'While luxury trains offer romantic nostalgia, they follow rigid schedules (early wake-up calls, fixed 2-hour monument stops, group coach excursions, and nighttime track vibrations). A private chauffeur-driven tour with Dune Explorer offers total flexibility: stay 3 leisurely nights at Taj Lake Palace or Rambagh Palace, enjoy private sunrise ballooning, and explore at your own pace without train whistles or time limits.',
  },
  {
    q: 'Is there a dress code onboard luxury trains in Rajasthan?',
    a: 'Smart-casual attire is customary during daytime excursions (comfortable walking shoes, breathable linen). In the evenings, guests typically dress up in elegant smart-casual or formal dinner attire for cocktails in the lounge and dinner in the royal dining cars.',
  },
  {
    q: 'What is the best month to book a Rajasthan luxury train journey?',
    a: 'Both trains operate strictly from September/October through April. November, December, January, and February are the peak months with delightful daytime weather and pleasant desert excursions.',
  },
];

const LuxuryTrains = () => {
  usePageMeta({
    title: 'Palace on Wheels vs Royal Rajasthan on Wheels: Which Luxury Train Wins? | Dune Explorer',
    description:
      'Palace on Wheels or Royal Rajasthan on Wheels? Compare routes, cabins and prices side by side, then choose your rail journey today.',
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
          src="/images/jaipur/DSC_0449.jpg"
          alt="Palace on Wheels vs Royal Rajasthan on Wheels"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Palace on Wheels vs Royal Rajasthan on Wheels: Which Luxury Train Wins?</h1>
          <p className="guide-hero-sub">
            A side-by-side comparison of cabins, routes, dining, and costs: plus how luxury rail compares to a private chauffeured palace tour.
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
            <span>Palace on Wheels Comparison</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 9 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Rail & Travel Blueprint</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                Stepping onto a luxury train in India is a journey back into the golden age of travel. Both the <strong>Palace on Wheels</strong> and <strong>Royal Rajasthan on Wheels</strong> promise royal butler service, crystal glassware, and waking up in a new royal city every morning. But which one offers the finest experience for your travel style?
              </p>

              <h2>Side-by-Side Comparison: At a Glance</h2>
              <div className="guide-table-wrap">
                <table className="guide-table">
                  <thead>
                    <tr>
                      <th style={{ width: '22%' }}>Feature</th>
                      <th style={{ width: '39%' }}>Palace on Wheels</th>
                      <th style={{ width: '39%' }}>Royal Rajasthan on Wheels</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainComparisonTable.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.feature}</strong></td>
                        <td>{row.pow}</td>
                        <td>{row.rrow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Detailed Verdict: Which One Should You Choose?</h2>

              <div className="comparison-grid-2">
                <div className="comparison-card winner">
                  <div className="comparison-header">
                    <h3 className="comparison-title">Palace on Wheels</h3>
                    <span className="comparison-tag">Best for Tradition & Classic Route</span>
                  </div>
                  <ul className="comparison-list">
                    <li><Check size={16} /> Authentic vintage coaches modeled after royal saloons</li>
                    <li><Check size={16} /> Includes the Thar Desert dunes of Jaisalmer</li>
                    <li><Check size={16} /> Renowned Khidmatgar (personal butler) service</li>
                    <li><Check size={16} /> World-famous heritage status and nostalgia</li>
                  </ul>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', margin: 0 }}>
                    <strong>Ideal for:</strong> First-time visitors to India who want the classic Rajasthan royal circuit with maximum historical atmosphere.
                  </p>
                </div>

                <div className="comparison-card">
                  <div className="comparison-header">
                    <h3 className="comparison-title">Royal Rajasthan on Wheels</h3>
                    <span className="comparison-tag">Best for Space & Extended Route</span>
                  </div>
                  <ul className="comparison-list">
                    <li><Check size={16} /> Larger cabins with contemporary luxury suites</li>
                    <li><Check size={16} /> Dedicated Ayurvedic spa and salon carriage</li>
                    <li><Check size={16} /> Extends beyond Rajasthan to Varanasi & Khajuraho</li>
                    <li><Check size={16} /> Enhanced soundproofing and suspension</li>
                  </ul>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', margin: 0 }}>
                    <strong>Ideal for:</strong> Travelers who prioritize cabin comfort, spa indulgence, and want to see the spiritual ghats of the Ganges on the same rail voyage.
                  </p>
                </div>
              </div>

              <h2>Luxury Train vs Private Chauffeured Tour: The Honest Truth</h2>
              <p>
                Before committing $7,500 to $12,000+ per person for a luxury train cabin, consider how it compares to a private chauffeured journey staying in actual royal palaces:
              </p>

              <div className="guide-callout">
                <h4>Why Many Discerning Travelers Prefer Private Chauffeuring:</h4>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--color-text-deep)' }}>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Sleep in Real Palaces:</strong> On a train, you sleep on rail tracks in motion. On a chauffeured tour, you sleep in former royal suites at <em>Taj Lake Palace Udaipur</em> or <em>Rambagh Palace Jaipur</em>.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>No Rushed Excursions:</strong> Train excursions disembark 80+ passengers together on strict timers. A private tour allows you to linger as long as you wish at Amber Fort or wander artisan bazaars freely.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Custom Itinerary:</strong> Tailor your days around your preferred pace, dietary wishes, and photography interests.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Comparable or Better Value:</strong> A bespoke 10-day private palace itinerary frequently costs less per person than a train cabin while offering superior comfort and suite square footage.
                  </li>
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {trainFaqs.map((faq, idx) => {
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
                <h3>Compare With a Private Palace Tour</h3>
                <p>
                  Explore how a bespoke private chauffeured circuit with palace stays compares to luxury rail. Receive an itemized proposal within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Private Journey
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20comparing%20Palace%20on%20Wheels%20with%20a%20private%20luxury%20Rajasthan%20tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Ask a Specialist
                </a>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  10-Day Royal Circuit
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  See the complete day-by-day palace driving itinerary covering Jaipur, Jodhpur, and Udaipur.
                </p>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View 10-Day Route <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Tour Cost Per Person
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Transparent price breakdown for palace hotels, private chauffeur, and excursions.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Check Pricing <ArrowRight size={15} />
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
                <h3 className="related-card-title">Stay Like Royalty: The Best Palace Hotels</h3>
                <span className="related-card-tag">Palace Stays</span>
                <p className="related-card-desc">Taj Lake Palace, Rambagh, and Umaid Bhawan ranked and reviewed.</p>
                <span className="related-card-link">Read Guide <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/10-day-luxury-rajasthan-itinerary" className="related-card">
              <img src="/images/jaipur/DSC_8425-01-02.jpeg" alt="10 Day Luxury Rajasthan Itinerary" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">10 Day Luxury Rajasthan Itinerary</h3>
                <span className="related-card-tag">Itineraries</span>
                <p className="related-card-desc">Full circuit blueprint with palace stays, desert camps, and timings.</p>
                <span className="related-card-link">Explore Route <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/best-time-to-visit-rajasthan" className="related-card">
              <img src="/images/jodhpur-fort.webp" alt="Best Time to Visit" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Best Time to Visit Rajasthan for Luxury Travel</h3>
                <span className="related-card-tag">Seasonal Planning</span>
                <p className="related-card-desc">Month-by-month weather, festivals, and palace hotel rate guide.</p>
                <span className="related-card-link">View Seasons <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryTrains;
