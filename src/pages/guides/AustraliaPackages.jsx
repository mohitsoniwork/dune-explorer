import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, ShieldCheck, Plane, Clock, Calendar, MessageCircle, MapPin, Globe, CreditCard } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const packageTiers = [
  {
    name: 'Classic Royal Rajasthan & Agra (10 Days)',
    duration: '10 Days / 9 Nights',
    priceUsd: '$3,800 – $5,300',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra (Taj Mahal) – Jaipur – Jodhpur – Udaipur',
    features: [
      'Handpicked 5★ heritage palace hotels and luxury boutique havelis',
      'Private dedicated Toyota Innova Crysta SUV with professional English-speaking chauffeur',
      'Private government-licensed city historians in Delhi, Agra, Jaipur, and Udaipur',
      'Exclusive sunrise private viewing of the Taj Mahal and Amber Fort VIP access',
      'Private sunset boat cruise across Lake Pichola in Udaipur',
      'All toll taxes, state permits, airport meet & greet, and driver boarding included',
    ],
  },
  {
    name: 'Palaces, Thar Desert & Fortresses (12 Days)',
    duration: '12 Days / 11 Nights',
    badge: 'Popular with Australian Guests',
    featured: true,
    priceUsd: '$6,500 – $9,600',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Jaipur – Jodhpur – Jaisalmer Desert – Ranakpur – Udaipur',
    features: [
      'Iconic palace stays: Taj Lake Palace, Rambagh Palace, and Umaid Bhawan Palace',
      '2 Nights luxury secluded desert camp stay in Jaisalmer with candlelit dune dinner',
      'Premium private luxury SUV with mobile Wi-Fi, luggage space, and chilled refreshments',
      'Senior destination historians & master cultural storytellers',
      'Private Lake Pichola solar-boat cruise with champagne or sparkling wine',
      'Dedicated 24/7 on-ground concierge support throughout your journey',
    ],
  },
  {
    name: 'Royal Heritage, Palaces & Wildlife Safari (14 Days)',
    duration: '14 Days / 13 Nights',
    priceUsd: '$8,400 – $13,000',
    perPerson: 'per person (double occupancy)',
    route: 'Delhi – Agra – Ranthambore Tiger Reserve – Jaipur – Jodhpur – Jawai – Udaipur',
    features: [
      'Premier suites at historic royal palaces and luxury tented wilderness lodges',
      '3 Exclusive private 4x4 Gypsy game drives in Ranthambore with senior tiger naturalist',
      'Private leopard tracking expeditions in the rocky boulder country of Jawai',
      'Private sunrise hot air balloon flight over Jaipur fortresses',
      'All inter-city domestic flights within India included',
      'VIP luggage handling, airport fast-track transfers, and personal tour escort',
    ],
  },
];

const flightGuidance = [
  {
    airline: 'Air India (Direct Non-Stop)',
    route: 'Sydney (SYD) & Melbourne (MEL) to Delhi (DEL)',
    flightTime: 'Approx. 12.5 to 13 hours non-stop',
    tip: 'Direct non-stop flights save significant time compared to Asian transit hubs. Arrives in Delhi in the evening, providing a restful night before beginning your private chauffeur circuit the next morning.',
  },
  {
    airline: 'Singapore Airlines',
    route: 'Sydney, Melbourne, Brisbane, Perth, Adelaide via Singapore (SIN) to Delhi or Mumbai',
    flightTime: 'One comfortable connection at Changi',
    tip: 'Award-winning service with seamless transfers through Singapore. Flights connect directly into Delhi, Mumbai, or Ahmedabad, offering flexible entry points into Western India.',
  },
  {
    airline: 'Qantas Airways',
    route: 'Sydney & Melbourne non-stop to Delhi or Bengaluru (BLR)',
    flightTime: 'Direct non-stop service',
    tip: 'Popular choice for Australian frequent flyers, with seamless domestic connections from Brisbane, Adelaide, and Perth.',
  },
];

const ausFaqs = [
  {
    q: 'How does booking directly with Dune Explorer compare to Australian travel agencies?',
    a: 'Australian luxury agencies usually work through intermediaries and DMC wholesalers in India, adding 25% to 40% agency margins. Booking directly with Dune Explorer connects you straight to local destination directors who manage every driver, hotel partnership, and private experience on the ground, delivering a bespoke experience with significant cost efficiency.',
  },
  {
    q: 'What are the visa requirements for Australian citizens visiting India?',
    a: 'Australian passport holders are eligible for an Indian electronic visa (e-Visa), available online for 30 days, 1 year, or 5 years with multiple entries. The application is completely digital and usually approved within 48 to 72 hours. Our team provides step-by-step assistance and verified accommodation vouchers.',
  },
  {
    q: 'How does the Australian holiday calendar align with Rajasthan travel seasons?',
    a: 'The Australian summer break (December to January) perfectly matches Rajasthan’s peak winter season, when desert days are sunny and comfortable (22°C to 26°C) and evenings are cool. The Easter and Autumn school holidays (March to April) also offer prime wildlife conditions for spotting Bengal tigers in Ranthambore.',
  },
  {
    q: 'What health, food safety, and drinking water measures are in place?',
    a: 'We understand health priorities for Australian international travelers. All partner palace hotels, luxury tented camps, and curated heritage restaurants adhere strictly to international culinary hygiene standards. Your chauffeur vehicle is equipped with sealed bottled spring water at all times, and our guides only recommend vetted dining establishments.',
  },
];

const AustraliaPackages = () => {
  usePageMeta({
    title: 'Luxury Rajasthan Tour Packages for Australian Travelers: Bespoke Itineraries | Dune Explorer',
    description:
      'Curated luxury Rajasthan tour packages for Australian travelers. Palace hotel stays, private chauffeured SUVs, direct Sydney/Melbourne flight advice, and transparent pricing.',
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
          alt="Luxury Rajasthan Tour Packages for Australian Travelers"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Luxury Rajasthan Tour Packages for Australian Travelers</h1>
          <p className="guide-hero-sub">
            The complete handbook for Australian guests planning a royal Indian escape: tailored package tiers, direct flights from Sydney &amp; Melbourne, palace stays, and transparent USD pricing.
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
            <span>Australia Tour Packages</span>
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
                For Australian travelers seeking an extraordinary cultural contrast, Rajasthan offers an immersive world of royal history, desert wonder, and warm hospitality. Curated directly on the ground by <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>, direct flights from Sydney and Melbourne place you within easy reach of <Link to="/rajasthan-palace-hotel-itinerary" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>magnificent lake palaces</Link>, <Link to="/luxury-ranthambore-tiger-safari" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>private Bengal tiger safaris</Link>, and <Link to="/luxury-jaisalmer-desert-camps" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>Thar Desert glamping</Link>, all experienced with <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', textDecoration: 'underline' }}>chauffeured luxury SUVs</Link>.
              </p>

              <h2>Curated Luxury Package Tiers in USD ($)</h2>
              <p>
                Every Dune Explorer journey is tailored to your schedule, whether you are planning a holiday around the December–January summer break or an autumn wildlife journey in March. Below are three signature blueprints:
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
                    <strong>Handpicked 5-Star &amp; Royal Palace Stays:</strong> Double occupancy with full daily gourmet breakfast at iconic properties like Taj Lake Palace, Rambagh Palace, and luxury desert retreats.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Private Dedicated Chauffeur &amp; Luxury SUV:</strong> Premium air-conditioned Toyota Innova Crysta or Fortuner for your entire journey. All interstate taxes, toll charges, fuel, and driver allowances included.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Government-Approved Private City Historians:</strong> Fluent English-speaking guides in every destination providing fast-track monument access.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>Signature Private Activities:</strong> Sunset boat charters on Lake Pichola, private camel dune safaris in Jaisalmer, and authentic culinary tastings.
                  </li>
                  <li style={{ marginBottom: '0.4rem' }}>
                    <strong>24/7 On-Ground Concierge Care:</strong> Continuous local support from our Rajasthan headquarters throughout your stay.
                  </li>
                </ul>
              </div>

              <h2>Flight Connections from Australia to Rajasthan</h2>
              <p>
                Traveling from Australia to India has never been easier, with convenient direct and one-stop flights:
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

              <h2>Explore Other Regional &amp; International Guides</h2>
              <p>
                Browse our curated regional guides on <Link to="/" style={{ color: 'var(--color-sand)', fontWeight: 600 }}>Dune Explorer</Link>:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', margin: '1.5rem 0' }}>
                <Link to="/luxury-rajasthan-tour-packages-usa" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  US Luxury Tour Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-uk" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  UK &amp; European Packages &rarr;
                </Link>
                <Link to="/luxury-rajasthan-tour-packages-japan" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Japanese Traveler Packages &rarr;
                </Link>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  10-Day Classic Royal Route &rarr;
                </Link>
                <Link to="/best-time-to-visit-rajasthan" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  Best Time to Visit Rajasthan &rarr;
                </Link>
                <Link to="/guides" style={{ padding: '0.9rem', background: 'var(--color-cream)', border: '1px solid var(--color-border-card)', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>
                  All Rajasthan Guides Hub &rarr;
                </Link>
              </div>
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions for Australian Travelers</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {ausFaqs.map((faq, idx) => {
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
                <h3>Request an Australian Proposal</h3>
                <p>
                  Share your preferred travel dates and passenger numbers. Our destination directors will design an itemized proposal with transparent USD pricing within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Get a Custom Quote
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20inquiring%20about%20luxury%20Rajasthan%20tour%20packages%20from%20Australia"
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
                  Explore how 5-star palace hotels, private chauffeur transport, and guides calculate into daily costs.
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
                  Learn about our Toyota Crysta fleet standards, English-speaking chauffeurs, and safety standards.
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
            <Link to="/luxury-ranthambore-tiger-safari" className="related-card">
              <img src="/images/Ranthambore/pexels-amitrai10-37715052.jpg" alt="Ranthambore Tiger Safari" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Luxury Ranthambore Tiger Safari Guide</h3>
                <span className="related-card-tag">Wildlife</span>
                <p className="related-card-desc">Private 4x4 Gypsy game drives, expert naturalists, and luxury tented wilderness lodges.</p>
                <span className="related-card-link">View Safari Guide <ArrowRight size={15} /></span>
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

            <Link to="/best-time-to-visit-rajasthan" className="related-card">
              <img src="/images/jodhpur-fort.webp" alt="Best Time to Visit Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Best Time to Visit Rajasthan</h3>
                <span className="related-card-tag">Seasons</span>
                <p className="related-card-desc">Month-by-month weather analysis, festivals, and palace hotel seasonal pricing.</p>
                <span className="related-card-link">Read Guide <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AustraliaPackages;
