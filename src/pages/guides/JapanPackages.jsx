import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, ShieldCheck, Plane, Clock, Calendar, MessageCircle, MapPin, Globe, CreditCard } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const packageTiers = [
  {
    name: 'Classic Golden Triangle & Lake Palaces (9 Days)',
    duration: '9 Days / 8 Nights',
    priceUsd: '$3,600 – $5,200',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra (Taj Mahal) – Jaipur – Udaipur',
    features: [
      'Stays at renowned 5★ palace hotels (The Oberoi Amarvilas, Rambagh Palace, Taj Lake Palace)',
      'Dedicated private luxury SUV with professional, courteous English-speaking chauffeur',
      'Private government-licensed historians in Delhi, Agra, Jaipur, and Udaipur',
      'Quiet early morning private viewing of the Taj Mahal and Amber Fort VIP access',
      'Private solar-boat cruise on Lake Pichola in Udaipur at sunset',
      'All toll taxes, state permits, airport meet & greet, and chauffeur allowances included',
    ],
  },
  {
    name: 'Grand Royal Palaces & Desert Wonder (11 Days)',
    duration: '11 Days / 10 Nights',
    badge: 'Recommended for Japanese Guests',
    featured: true,
    priceUsd: '$6,200 – $9,200',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Jaipur – Jodhpur (Blue City) – Jaisalmer Desert – Udaipur',
    features: [
      'Palatial luxury stays: Taj Lake Palace, Rambagh Palace, and Umaid Bhawan Palace',
      '2 Nights luxury secluded desert camp stay in Jaisalmer with private dune dinner under the stars',
      'Immaculately maintained private luxury SUV with mobile Wi-Fi, luggage care, and chilled spring water',
      'Senior destination historians specializing in royal architecture and textile craftsmanship',
      'Private Lake Pichola boat charter with evening refreshments',
      'Dedicated 24/7 on-ground concierge support throughout your journey',
    ],
  },
  {
    name: 'Imperial Heritage, Palaces & Tiger Safari (13 Days)',
    duration: '13 Days / 12 Nights',
    priceUsd: '$8,200 – $12,600',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra – Ranthambore Tiger Reserve – Jaipur – Jodhpur – Jawai – Udaipur',
    features: [
      'Premier suites at iconic heritage palaces and luxury tented wilderness lodges (Aman-i-Khás / Oberoi)',
      '3 Exclusive private 4x4 Gypsy game drives in Ranthambore with senior wildlife naturalist',
      'Private leopard tracking safaris across the granite boulder landscapes of Jawai',
      'Private sunrise hot air balloon flight over Jaipur fortresses',
      'All inter-city domestic flights within India included',
      'VIP luggage handling, airport fast-track transfers, and personal tour escort',
    ],
  },
];

const flightGuidance = [
  {
    airline: 'All Nippon Airways (ANA) & Japan Airlines (JAL)',
    route: 'Tokyo Haneda (HND) to Delhi (DEL) Non-Stop',
    flightTime: 'Approx. 9.5 to 10 hours non-stop',
    tip: 'Direct daily non-stop flights from Haneda provide the fastest and most comfortable connection from Japan. Arrives in Delhi in the evening, giving you a full restful night before your private chauffeur route begins.',
  },
  {
    airline: 'Air India',
    route: 'Tokyo Narita (NRT) to Delhi (DEL) Non-Stop',
    flightTime: 'Direct non-stop service',
    tip: 'Convenient non-stop flight connecting Narita directly with Delhi with generous baggage allowance.',
  },
  {
    airline: 'Singapore Airlines & Cathay Pacific',
    route: 'Tokyo (HND/NRT), Osaka (KIX), Nagoya (NGO) via Singapore or Hong Kong to Delhi/Mumbai',
    flightTime: 'One seamless connection',
    tip: 'Ideal for travelers departing from Osaka or Nagoya seeking premium business class comfort and flexible arrival times.',
  },
];

const japanFaqs = [
  {
    q: 'How does Dune Explorer cater to Japanese hospitality standards (Omotenashi)?',
    a: 'We take great pride in punctuality, cleanliness, and thoughtful attentiveness. Your dedicated chauffeur vehicle is thoroughly sanitized and detailed daily, stocked with sealed bottled water and cool hand towels. Our guides are respectful, patient, and knowledgeable, ensuring a serene, stress-free travel experience.',
  },
  {
    q: 'What are the visa requirements for Japanese citizens visiting India?',
    a: 'Japanese passport holders have access to the convenient Indian electronic visa (e-Visa), which is easily applied for online and typically approved within 48 to 72 hours. In addition, Japanese citizens are eligible for Visa-on-Arrival at major Indian airports (including Delhi). Our team provides step-by-step guidance and official accommodation confirmation documents.',
  },
  {
    q: 'How are meals and dietary preferences handled?',
    a: 'We understand that many Japanese travelers prefer mild, authentic, and non-greasy culinary preparations. All our partner 5-star palace hotels (Oberoi, Taj, Leela) feature internationally acclaimed kitchens that cater to personalized dietary needs, offering mild Indian specialties, continental options, and Japanese breakfast selections.',
  },
  {
    q: 'Can we request Japanese-speaking private guides?',
    a: 'Yes. Upon request, we can arrange government-licensed Japanese-speaking guides in major historical hubs like Delhi, Agra, and Jaipur, subject to advance booking. Alternatively, our senior English-speaking historians speak clear, articulate English and are trained in guiding international guests.',
  },
];

const JapanPackages = () => {
  usePageMeta({
    title: 'Luxury Rajasthan Tour Packages for Japanese Travelers: Royal Itineraries | Dune Explorer',
    description:
      'Curated luxury Rajasthan tour packages for travelers from Japan. Direct flights from Tokyo Haneda, 5-star palace hotels, private chauffeured SUVs, and bespoke care.',
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
          src="/images/Udaipur/pexels-chetan-jha-624961868-17397822.jpg"
          alt="Luxury Rajasthan Tour Packages for Japanese Travelers"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Luxury Rajasthan Tour Packages for Japanese Travelers</h1>
          <p className="guide-hero-sub">
            The complete handbook for travelers from Japan: tailored package tiers, direct flights from Tokyo Haneda, 5-star palace stays, and attentive on-ground concierge care.
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
            <span>Japan Tour Packages</span>
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
                Rajasthan captivates travelers with its timeless royal dignity, intricate architectural details, and poetic desert landscapes. Curated by the specialists at <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>, our private journeys blend India’s warm hospitality with immaculate punctuality, <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>private chauffeured luxury SUVs</Link>, and handpicked <Link to="/rajasthan-palace-hotel-itinerary" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>5-star palace accommodations</Link> across <Link to="/experience/1" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Jaipur</Link>, Jodhpur, and <Link to="/experience/2" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Udaipur</Link>.
              </p>

              <h2>Curated Luxury Package Tiers in USD ($)</h2>
              <p>
                Every Dune Explorer journey is tailored to your preferred pacing and cultural interests. Below are three signature blueprints created for our guests from Japan:
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

              <h2>What Is Included in Your Dune Explorer Land Package?</h2>
              <div className="guide-callout">
                <h4>Comprehensive &amp; Transparent: Zero Hidden Surprises</h4>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--color-text-deep)' }}>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Handpicked 5-Star Heritage Palace Stays:</strong> Double occupancy with full daily breakfast at premier Taj, Oberoi, and boutique palace properties.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Private Dedicated Chauffeur &amp; Luxury SUV:</strong> Immaculately maintained Toyota Innova Crysta or Fortuner with bottled spring water and sanitized interiors throughout.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Government-Approved Private Historians:</strong> Courteous, articulate guides providing fast-track monument access without waiting in queues.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Bespoke Cultural Activities:</strong> Private sunset boat charters on Lake Pichola, serene desert stargazing, and private textile &amp; gemstone artisan viewings.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>24/7 On-Ground Concierge Care:</strong> Continuous dedicated support from our Rajasthan headquarters for immediate assistance.
                  </li>
                </ul>
              </div>

              <h2>Direct Flight Connections from Tokyo to Delhi</h2>
              <p>
                Reaching Rajasthan from Japan is convenient, with multiple direct non-stop daily options connecting Tokyo with Delhi:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
                {flightGuidance.map((f, idx) => (
                  <div key={idx} style={{ background: '#FAF5EE', border: '1px solid rgba(187, 135, 96, 0.35)', borderRadius: '10px', padding: '1.2rem', boxShadow: '0 4px 16px rgba(79, 14, 14, 0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <strong style={{ color: 'var(--color-oxblood)', fontSize: '1rem', fontWeight: 700 }}>{f.airline}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#8A5A2B', fontWeight: 700 }}>{f.flightTime}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#1E6B47', fontWeight: 600, marginTop: '0.2rem' }}>{f.route}</div>
                    <p style={{ fontSize: '0.88rem', color: '#3A352D', marginTop: '0.5rem', marginBottom: 0, lineHeight: 1.6 }}>{f.tip}</p>
                  </div>
                ))}
              </div>

              <h2>Best Travel Windows for Japanese Guests</h2>
              <p>
                The most pleasant touring season in Rajasthan runs from <strong>October through March</strong>, when daytime skies are crystal clear and temperatures are mild:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-deep)' }}>
                <li><strong>Autumn Season (October &amp; November):</strong> Clear skies and comfortable weather right after the monsoon, ideal for photography and palace exploration.</li>
                <li><strong>New Year Holidays (Shogatsu):</strong> Peak travel period for Japanese holidaymakers; early reservation of palace suites is highly recommended.</li>
                <li><strong>Spring (February &amp; March):</strong> Mild temperatures, blooming palace courtyards, and vibrant royal cultural festivals.</li>
              </ul>

              <h2>Explore Other Regional &amp; International Guides</h2>
              <p>
                Browse our curated itineraries and regional planning guides on <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', margin: '1.5rem 0' }}>
                <Link to="/luxury-rajasthan-tour-packages-usa" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  US Luxury Tour Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-uk" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  UK &amp; European Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-australia" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Australia Guest Packages &rarr;
                </Link>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  10-Day Classic Royal Route &rarr;
                </Link>
                <Link to="/palace-on-wheels-vs-royal-rajasthan" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Luxury Heritage Trains Guide &rarr;
                </Link>
                <Link to="/guides" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  All Rajasthan Guides Hub &rarr;
                </Link>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions for Japanese Travelers</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {japanFaqs.map((faq, idx) => {
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
                <h3>Request a Bespoke Proposal</h3>
                <p>
                  Share your preferred travel dates and party size. Our travel directors will prepare an itemized proposal with transparent USD pricing within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Get a Custom Quote
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20inquiring%20about%20luxury%20Rajasthan%20tour%20packages%20from%20Japan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> WhatsApp Travel Desk
                </a>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Tour Cost Breakdown
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Explore how 5-star palace hotels, private chauffeur transport, and guides price out per person.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Tour Cost Guide <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Private Driver &amp; Guide Info
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Learn about our Toyota Crysta fleet standards, vetted chauffeurs, and safety protocols.
                </p>
                <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Driver Standards <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="related-guides-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            More Luxury Rajasthan Resources
          </h2>
          <div className="related-guides-grid">
            <Link to="/rajasthan-palace-hotel-itinerary" className="related-card">
              <img src="/images/Udaipur/pexels-kushal-verma-123877130-9952977.jpg" alt="Rajasthan Palace Hotels" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Rajasthan Palace Hotels &amp; Heritage Stays</h3>
                <span className="related-card-tag">Palaces</span>
                <p className="related-card-desc">Curated 12-day palace route staying at Taj Lake Palace, Rambagh, and Umaid Bhawan.</p>
                <span className="related-card-link">Explore Guide <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/10-day-luxury-rajasthan-itinerary" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="10-Day Rajasthan Itinerary" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">10-Day Classic Luxury Rajasthan Route</h3>
                <span className="related-card-tag">Flagship</span>
                <p className="related-card-desc">Delhi, Agra Taj Mahal, Jaipur Pink City, Jodhpur, and Udaipur Lake Pichola.</p>
                <span className="related-card-link">Read Blueprint <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/palace-on-wheels-vs-royal-rajasthan" className="related-card">
              <img src="/images/Jaisalmer/pexels-axp-photography-500641970-19160088.jpg" alt="Luxury Trains Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Palace on Wheels vs Royal Rajasthan Trains</h3>
                <span className="related-card-tag">Rail</span>
                <p className="related-card-desc">Detailed comparison of India’s premier luxury trains, private suites, and itineraries.</p>
                <span className="related-card-link">Compare Trains <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JapanPackages;
