import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, ShieldCheck, Plane, Clock, Calendar, MessageCircle, MapPin, Globe, CreditCard } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const packageTiers = [
  {
    name: 'Classic Heritage Circuit (10 Days)',
    duration: '10 Days / 9 Nights',
    priceUsd: '$3,700 – $5,100',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra (Taj Mahal) – Jaipur – Jodhpur – Udaipur',
    features: [
      'Handpicked 4★ & 5★ boutique heritage havelis & royal palaces',
      'Private dedicated Toyota Innova Crysta SUV with professional English-speaking chauffeur',
      'Private government-licensed city historians in Delhi, Agra, Jaipur & Udaipur',
      'Sunrise private visit to the Taj Mahal and Amber Fort VIP access',
      'Private sunset boat cruise on Lake Pichola in Udaipur',
      'All toll taxes, state tourist permits, interstate parking, and driver boarding included',
    ],
  },
  {
    name: 'Grand Royal Palaces & Desert (12 Days)',
    duration: '12 Days / 11 Nights',
    badge: 'Most Popular',
    featured: true,
    priceUsd: '$6,400 – $9,400',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Jaipur – Jodhpur – Jaisalmer Desert – Ranakpur – Udaipur',
    features: [
      'Iconic 5★ Palace Hotel stays (Rambagh Palace, Taj Lake Palace, Umaid Bhawan Palace)',
      '2 Nights luxury secluded desert camp stay in Jaisalmer with starlit dinner',
      'Premium private luxury SUV (Toyota Fortuner or Innova Crysta)',
      'Senior destination historians & master storyteller guides',
      'Private solar-boat Lake Pichola cruise with champagne',
      'Dedicated 24/7 on-ground concierge support throughout your journey',
    ],
  },
  {
    name: 'Royal Palaces & Tiger Safari (14 Days)',
    duration: '14 Days / 13 Nights',
    priceUsd: '$8,300 – $12,800',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra – Ranthambore Tiger Reserve – Jaipur – Jodhpur – Jawai – Udaipur',
    features: [
      'Premier suites at iconic historic palaces and luxury tented wilderness lodges',
      '3 Exclusive private 4x4 Gypsy game drives in Ranthambore with senior naturalist',
      'Private leopard tracking safaris in the rocky wilderness of Jawai',
      'Private sunrise hot air balloon flight over Jaipur forts',
      'All inter-city domestic flights within India included',
      'VIP luggage handling, airport fast-track transfers, and personal tour escort',
    ],
  },
];

const flightGuidance = [
  {
    airline: 'British Airways & Virgin Atlantic',
    route: 'London Heathrow (LHR) to Delhi (DEL) or Mumbai (BOM)',
    flightTime: 'Approx. 8.5 to 9 hours non-stop',
    tip: 'Direct daily overnight flights arrive in Delhi early morning, allowing a seamless same-day domestic transfer to Jaipur or direct private chauffeur pickup.',
  },
  {
    airline: 'Air India',
    route: 'London Heathrow / Birmingham / Gatwick to Delhi',
    flightTime: 'Direct non-stop flights',
    tip: 'Offers convenient direct routes with generous baggage allowances for UK holidaymakers.',
  },
  {
    airline: 'Emirates, Qatar Airways & Etihad',
    route: 'London, Manchester, Birmingham, Edinburgh via Dubai/Doha',
    flightTime: 'One seamless stopover',
    tip: 'Can fly directly into Ahmedabad or Jaipur, minimizing road transfers if starting from the west.',
  },
];

const ukFaqs = [
  {
    q: 'How does booking a luxury tour directly with Dune Explorer compare to a UK high-street travel agency?',
    a: 'High-street UK luxury travel agencies subcontract your journey to on-ground Indian operators while adding a 25% to 40% agency margin. When booking directly with Dune Explorer, you communicate directly with local destination specialists who curate your itinerary on the ground. You receive superior bespoke customization, 24/7 direct concierge care, and substantial cost savings.',
  },
  {
    q: 'What are the visa requirements for UK and European citizens traveling to India?',
    a: 'British and EU citizens can easily apply for an Indian e-Visa online (available for 30 days, 1 year, or 5 years). The online process takes 15 minutes, with electronic approvals typically issued within 72 hours. Our concierge team assists you with itinerary invitation vouchers and step-by-step guidance.',
  },
  {
    q: 'Are international flights included in Dune Explorer package quotes?',
    a: 'Our packages cover all land arrangements within India: palace hotels, private chauffeur-driven transport, fuel, permits, licensed city guides, domestic flights (if included in itinerary), boat charters, safari permits, and concierge service. International flights from London/Europe are booked separately by guests, though we assist in recommending optimal flight times and connections.',
  },
  {
    q: 'How does payment work for international travelers?',
    a: 'We accept international bank wire transfers (SWIFT) directly into our business account, as well as major credit cards. Payments are invoiced transparently in US Dollars ($).',
  },
];

const UkPackages = () => {
  usePageMeta({
    title: 'Luxury Rajasthan Tour Packages From the UK and Europe: What Is Included | Dune Explorer',
    description:
      'Compare luxury Rajasthan tour packages from Europe, with palace stays and private guides included. See what to expect and enquire today.',
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
          src="/images/jaipur/DSC_8425-01-02.jpeg"
          alt="Luxury Rajasthan Tour Packages from UK and Europe"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Luxury Rajasthan Tour Packages: What Is Included</h1>
          <p className="guide-hero-sub">
            The complete handbook for international travelers planning a royal Indian escape: comparing package tiers, flights, on-ground inclusions, and transparent USD pricing.
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
            <span>Tour Packages</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 10 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 2026/2027 Season Edition</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                For travelers from the UK and Europe, Rajasthan represents the quintessential royal escape. Curated directly on the ground by <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>, our bespoke routes connect direct flights into Delhi with <Link to="/rajasthan-palace-hotel-itinerary" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>legendary palace hotels</Link>, <Link to="/luxury-jaisalmer-desert-camps" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Thar Desert glamping</Link>, and <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>private chauffeur-driven travel</Link>.
              </p>

              <h2>Curated Luxury Package Tiers in USD ($)</h2>
              <p>
                Every Dune Explorer journey is tailored to your dates and preferences. Below are three signature package tiers designed for our international guests:
              </p>

              <div className="pricing-tiers-grid">
                {packageTiers.map((pkg, idx) => (
                  <div key={idx} className={`tier-card ${pkg.featured ? 'featured' : ''}`}>
                    {pkg.badge && <span className="tier-badge">{pkg.badge}</span>}
                    <h3 className="tier-title">{pkg.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-sand)', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {pkg.duration}
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-text-dim)', marginBottom: '0.8rem' }}>
                      <strong>Route:</strong> {pkg.route}
                    </p>
                    <div className="tier-price-box">
                      <div className="tier-price-main">{pkg.priceUsd}</div>
                      <span className="tier-price-sub">{pkg.perPerson}</span>
                    </div>
                    <ul className="tier-features">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <Check size={16} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/plan-journey"
                      className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}
                      style={{ textAlign: 'center', marginTop: 'auto' }}
                    >
                      Enquire For This Package
                    </Link>
                  </div>
                ))}
              </div>

              <h2>Explore Other Regional &amp; International Guides</h2>
              <p>
                Plan your itinerary with our curated resources on <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', margin: '1.5rem 0' }}>
                <Link to="/luxury-rajasthan-tour-packages-usa" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  US Luxury Tour Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-australia" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Australia Guest Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-japan" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Japan Luxury Packages &rarr;
                </Link>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  10-Day Classic Royal Route &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-cost" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Tour Cost &amp; Price Breakdown &rarr;
                </Link>
                <Link to="/guides" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  All Rajasthan Guides Hub &rarr;
                </Link>
              </div>

              <h2>What Is Included in Your Dune Explorer Land Package?</h2>
              <div className="guide-callout">
                <h4>Comprehensive & Transparent: Zero Hidden Surprises</h4>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--color-text-deep)' }}>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Handpicked 5-Star & Heritage Palace Hotels:</strong> Double occupancy with full daily gourmet breakfast.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Private Dedicated Chauffeur & Vehicle:</strong> Modern air-conditioned Toyota Innova Crysta or luxury SUV for the entire tour. All inter-state taxes, toll charges, fuel, and driver allowances included.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Government-Approved Private City Guides:</strong> Fluent English-speaking historians in every royal city with VIP monument entry.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Signature Cultural Activities:</strong> Private boat cruises, Thar Desert camel treks, folk concerts, and artisan masterclasses.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>24/7 On-Ground Concierge Care:</strong> Continuous local assistance from our Rajasthan headquarters.
                  </li>
                </ul>
              </div>

              <h2>Flight Connections from the UK to Rajasthan</h2>
              <p>
                Reaching Rajasthan from the UK is straightforward with several direct non-stop and one-stop options:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
                {flightGuidance.map((f, idx) => (
                  <div key={idx} style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <strong style={{ color: 'var(--color-dark)', fontSize: '1rem' }}>{f.airline}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-sand)', fontWeight: 600 }}>{f.flightTime}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-maroon)', marginTop: '0.2rem' }}>{f.route}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginTop: '0.5rem', marginBottom: 0 }}>{f.tip}</p>
                  </div>
                ))}
              </div>

              <h2>Explore Other Regional &amp; International Guides</h2>
              <p>
                Plan your itinerary with our curated resources on <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', margin: '1.5rem 0' }}>
                <Link to="/luxury-rajasthan-tour-packages-usa" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  US Luxury Tour Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-australia" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Australia Guest Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-japan" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Japan Luxury Packages &rarr;
                </Link>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  10-Day Classic Royal Route &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-cost" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Tour Cost &amp; Price Breakdown &rarr;
                </Link>
                <Link to="/guides" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  All Rajasthan Guides Hub &rarr;
                </Link>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions for UK & European Travelers</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {ukFaqs.map((faq, idx) => {
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
                <h3>Request an Itemized Proposal</h3>
                <p>
                  Tell us your travel dates and passenger details. Our travel concierge will prepare a tailored proposal with transparent USD pricing within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Get a Custom Quote
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20inquiring%20about%20luxury%20Rajasthan%20tour%20packages%20from%20the%20UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> WhatsApp Travel Desk
                </a>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Tour Cost Per Person
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Explore how palace hotels, private chauffeur transport, and guides calculate into daily costs.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Tour Cost Guide <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Private Driver & Guide Info
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Learn about our Toyota Crysta fleet standards, English-speaking chauffeurs, and safety.
                </p>
                <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Driver Standards <ArrowRight size={15} />
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
            <Link to="/10-day-luxury-rajasthan-itinerary" className="related-card">
              <img src="/images/jaipur/DSC_8425-01-02.jpeg" alt="10 Day Luxury Rajasthan Itinerary" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">10 Day Luxury Rajasthan Itinerary</h3>
                <span className="related-card-tag">Itineraries</span>
                <p className="related-card-desc">Full circuit blueprint with palace stays, desert camps, and timings.</p>
                <span className="related-card-link">View Route <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/best-time-to-visit-rajasthan" className="related-card">
              <img src="/images/jodhpur-fort.webp" alt="Best Time to Visit" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Best Time to Visit Rajasthan for Luxury Travel</h3>
                <span className="related-card-tag">Seasonal Planning</span>
                <p className="related-card-desc">Month-by-month temperature, festival, and palace hotel rate guide.</p>
                <span className="related-card-link">Explore Seasons <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/rajasthan-luxury-honeymoon" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="Rajasthan Honeymoon Tour" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Rajasthan Honeymoon Luxury Tour</h3>
                <span className="related-card-tag">Honeymoons</span>
                <p className="related-card-desc">Romantic palaces, private lake dinners, and sunset champagne cruises.</p>
                <span className="related-card-link">Romantic Escapes <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UkPackages;
