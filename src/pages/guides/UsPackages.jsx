import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, ShieldCheck, Plane, Clock, Calendar, MessageCircle, MapPin, Globe, CreditCard } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const packageTiers = [
  {
    name: 'Classic Golden Triangle & Palaces (10 Days)',
    duration: '10 Days / 9 Nights',
    priceUsd: '$3,800 – $5,400',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra (Taj Mahal) – Jaipur – Jodhpur – Udaipur',
    features: [
      'Handpicked 5★ heritage palace hotels (The Oberoi, Taj, and boutique royal havelis)',
      'Private dedicated luxury SUV with professional English-speaking chauffeur',
      'Private government-licensed city historians in Delhi, Agra, Jaipur, and Udaipur',
      'VIP sunrise access to the Taj Mahal and Amber Fort private entry',
      'Private sunset boat cruise on Lake Pichola in Udaipur',
      'All toll taxes, state tourist permits, interstate parking, and driver boarding included',
    ],
  },
  {
    name: 'Grand Royal Palaces & Desert Sands (12 Days)',
    duration: '12 Days / 11 Nights',
    badge: 'Most Popular with US Guests',
    featured: true,
    priceUsd: '$6,600 – $9,800',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Jaipur – Jodhpur – Jaisalmer Desert – Ranakpur – Udaipur',
    features: [
      'Premier suites at iconic palace hotels (Rambagh Palace, Taj Lake Palace, Umaid Bhawan)',
      '2 Nights luxury secluded desert glamping in Jaisalmer with starlit dune dinner',
      'Private luxury SUV (Toyota Fortuner or Innova Crysta) with mobile Wi-Fi & chilled water',
      'Senior destination historians & master storyteller guides',
      'Private Lake Pichola solar-boat charter with sparkling wine',
      'Dedicated 24/7 on-ground concierge support throughout your journey',
    ],
  },
  {
    name: 'Royal Heritage, Palaces & Tiger Safari (14 Days)',
    duration: '14 Days / 13 Nights',
    priceUsd: '$8,500 – $13,200',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra – Ranthambore Tiger Reserve – Jaipur – Jodhpur – Jawai – Udaipur',
    features: [
      'Ultra-luxury palace suites and world-renowned tented wilderness lodges',
      '3 Exclusive private 4x4 Gypsy game drives in Ranthambore with senior wildlife naturalist',
      'Private leopard tracking safaris across the granite hills of Jawai',
      'Private sunrise hot air balloon flight over Jaipur fortress ridges',
      'All inter-city domestic flights within India included',
      'VIP luggage handling, airport fast-track transfers, and personal tour escort',
    ],
  },
];

const flightGuidance = [
  {
    airline: 'Air India (Non-Stop)',
    route: 'New York (JFK/EWR), San Francisco (SFO), Chicago (ORD) to Delhi (DEL)',
    flightTime: 'Approx. 14 to 16 hours non-stop',
    tip: 'Direct non-stop flights save significant travel time. Arriving in Delhi in late evening allows a full night of rest at an airport luxury hotel before your private chauffeur begins your royal circuit.',
  },
  {
    airline: 'Emirates & Qatar Airways',
    route: 'New York, Los Angeles, Dallas, Chicago, Seattle via Dubai (DXB) / Doha (DOH)',
    flightTime: 'One comfortable layover',
    tip: 'Offers exceptional Business and First Class cabin products. Both carriers fly directly into Delhi or Mumbai with smooth connections.',
  },
  {
    airline: 'United Airlines & Lufthansa',
    route: 'Major US hubs connecting via Frankfurt or Munich to Delhi',
    flightTime: 'One European layover',
    tip: 'Popular with East Coast and Midwest travelers who prefer breaking the journey into two manageable flight legs.',
  },
];

const usFaqs = [
  {
    q: 'How does booking a luxury tour directly with Dune Explorer compare to a US travel agency?',
    a: 'Most US-based luxury travel agents outsource ground operations to third-party Indian handling companies while marking up prices by 30% to 50%. By planning directly with Dune Explorer, you communicate with our Rajasthan-based luxury travel directors who personally curate your route, vet every driver, and provide direct 24/7 concierge support at substantial savings.',
  },
  {
    q: 'What are the visa requirements for US citizens traveling to India?',
    a: 'US citizens can apply online for an Indian electronic visa (e-Visa), available for 30 days, 1 year, or 5 years with multiple entries. The online application is simple and approvals are typically granted within 48 to 72 hours. Our concierge team provides step-by-step assistance and verified itinerary invitation letters.',
  },
  {
    q: 'Are payments invoiced in US Dollars ($)?',
    a: 'Yes. All our proposals, deposit schedules, and final invoices are denominated transparently in US Dollars ($). We accept international bank wire transfers, ACH transfers, and major US credit cards (Visa, MasterCard, American Express).',
  },
  {
    q: 'How do you handle dietary preferences, food safety, and filtered water?',
    a: 'We understand health and comfort concerns for international guests. All partner palace hotels, boutique heritage resorts, and curated restaurants adhere to international culinary hygiene standards. Your private chauffeur vehicle is stocked daily with sealed bottled spring water, and our guides handpick hygienic, authentic dining locations.',
  },
];

const UsPackages = () => {
  usePageMeta({
    title: 'Luxury Rajasthan Tour Packages for US Travelers: Tailored Itineraries | Dune Explorer',
    description:
      'Bespoke luxury Rajasthan tour packages for American travelers. Private palace stays, chauffeured SUVs, non-stop flight advice, and transparent USD pricing.',
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
          src="/images/jaipur/DSC_5623-01.jpeg"
          alt="Luxury Rajasthan Tour Packages for US Travelers"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Luxury Rajasthan Tour Packages for US Travelers</h1>
          <p className="guide-hero-sub">
            The complete handbook for American travelers planning a royal Indian escape: package tiers, non-stop flights from US hubs, palace inclusions, and transparent USD pricing.
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
            <span>US Tour Packages</span>
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
                For American travelers, India’s royal state of Rajasthan is the ultimate journey into living history. Curated by the destination team at <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>, our bespoke routes connect the pink stone courtyards of <Link to="/experience/1" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Jaipur</Link> and the romantic floating palaces of <Link to="/experience/2" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Udaipur</Link> to the rolling dunes of <Link to="/luxury-jaisalmer-desert-camps" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Jaisalmer and the Thar Desert</Link>. Every journey eliminates travel friction with <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>dedicated private chauffeurs</Link>, <Link to="/rajasthan-palace-hotel-itinerary" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>iconic 5-star palace hotels</Link>, and licensed regional historians.
              </p>

              <h2>Curated Luxury Package Tiers in USD ($)</h2>
              <p>
                Every Dune Explorer journey is tailored to your schedule, whether you have a 10-day vacation window or an extended 2-week exploration. Below are three signature package blueprints designed for our US guests:
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
                    <strong>Handpicked 5-Star &amp; Royal Palace Stays:</strong> Double occupancy with full daily gourmet breakfast at iconic Taj, Oberoi, and heritage properties.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Private Dedicated Chauffeur &amp; Luxury SUV:</strong> Premium air-conditioned Toyota Fortuner or Innova Crysta for your entire journey. All interstate permits, toll charges, fuel, and driver allowances are included.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Government-Approved Private City Historians:</strong> Fluent English-speaking guides in every city providing VIP monument access without queuing.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Bespoke Royal Experiences:</strong> Private solar-boat cruises on Lake Pichola, sunset camel expeditions on the Thar Desert dunes, and heritage bazaars walks.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>24/7 On-Ground Concierge Care:</strong> Direct WhatsApp and phone support from our Jaipur headquarters throughout your trip.
                  </li>
                </ul>
              </div>

              <h2>Flight Routes from the US to Rajasthan</h2>
              <p>
                Traveling from the United States to Rajasthan is convenient, with multiple daily non-stop and premium one-stop flight paths:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
                {flightGuidance.map((f, idx) => (
                  <div key={idx} style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <strong style={{ color: 'var(--color-dark)', fontSize: '1rem' }}>{f.airline}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-sand)', fontWeight: 600 }}>{f.flightTime}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-maroon)', marginTop: '0.2rem' }}>{f.route}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginTop: '0.5rem', marginBottom: 0 }}>{f.tip}</p>
                  </div>
                ))}
              </div>

              <h2>Best Travel Windows for US Guests</h2>
              <p>
                The prime touring season in Rajasthan runs from <strong>October through March</strong>, when desert temperatures are pleasantly warm during the day (72°F to 82°F) and crisp at night. For month-by-month temperature details and festival calendars, read our dedicated <Link to="/best-time-to-visit-rajasthan" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Best Time to Visit Rajasthan guide</Link>. Popular booking windows for American travelers include:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-deep)' }}>
                <li><strong>Thanksgiving Week (Late November):</strong> Ideal for a condensed 9 to 10-day Golden Triangle and palace retreat, matching our <Link to="/10-day-luxury-rajasthan-itinerary" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>10-Day Classic Luxury Route</Link>.</li>
                <li><strong>Christmas &amp; New Year Holidays:</strong> High festive demand across luxury palace hotels; booking our <Link to="/rajasthan-palace-hotel-itinerary" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Palace Hotels Itinerary</Link> 4 to 6 months in advance is essential.</li>
                <li><strong>February &amp; March (Spring Season):</strong> Flawless sunny weather, blooming palace gardens, and prime wildlife conditions for a <Link to="/luxury-ranthambore-tiger-safari" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Ranthambore Tiger Safari</Link>.</li>
              </ul>

              <h2>Explore Other Regional &amp; International Guides</h2>
              <p>
                Browse our complete collection of bespoke itineraries and destination resources on <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', margin: '1.5rem 0' }}>
                <Link to="/luxury-rajasthan-tour-packages-uk" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  UK &amp; European Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-australia" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Australian Guest Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-japan" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Japanese Traveler Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-cost" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Tour Cost &amp; Price Tiers &rarr;
                </Link>
                <Link to="/guides" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  All Rajasthan Travel Guides &rarr;
                </Link>
                <Link to="/destinations" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  All Royal Destinations &rarr;
                </Link>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions for US Travelers</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {usFaqs.map((faq, idx) => {
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
                <h3>Request a Bespoke US Itinerary</h3>
                <p>
                  Share your travel dates and passenger details. Our destination directors will design an itemized proposal with transparent USD pricing within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Get a Custom Quote
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20inquiring%20about%20luxury%20Rajasthan%20tour%20packages%20from%20the%20US"
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
                  Learn about our Toyota Crysta fleet standards, English-speaking chauffeurs, and road safety.
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

            <Link to="/luxury-jaisalmer-desert-camps" className="related-card">
              <img src="/images/jaisalmer-dunes.jpg" alt="Desert Camps Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Luxury Jaisalmer Desert Camps &amp; Glamping</h3>
                <span className="related-card-tag">Glamping</span>
                <p className="related-card-desc">Private dune dining, camel expeditions, and starlit camps in the Thar Desert.</p>
                <span className="related-card-link">View Glamping Guide <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsPackages;
