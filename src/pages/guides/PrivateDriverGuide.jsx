import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, ShieldCheck, Car, Users, Clock, Calendar, MessageCircle, MapPin, Award } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const fleetVehicles = [
  {
    name: 'Toyota Innova Crysta',
    tag: 'The Gold Standard (Couples & Small Families)',
    seats: 'Up to 3–4 passengers + Chauffeur',
    luggage: '3 large bags + 2 cabin bags',
    specs: [
      'Dual climate-control air conditioning',
      'Plush captain seats with reclining backrests',
      'Daily complimentary chilled mineral water & sanitizing amenities',
      'Smooth suspension optimized for inter-city highway travel',
      'Fast onboard mobile charging ports & Wi-Fi hotspot upon request',
    ],
  },
  {
    name: 'Toyota Fortuner / Luxury SUV',
    tag: 'Premium Luxury & Desert Exploration',
    seats: 'Up to 3–4 passengers + Chauffeur',
    luggage: '4 large bags + 3 cabin bags',
    specs: [
      'Elevated road visibility with commanding driving comfort',
      '4WD capability for rugged rural roads and sandy approaches',
      'Premium leather upholstery and rear air vents',
      'Whisper-quiet cabin insulation for relaxed journeys',
      'Complimentary refreshment cooler box',
    ],
  },
  {
    name: 'Executive Luxury Van / Tempo Traveller',
    tag: 'Private Family Groups & Small Parties (5–10 Guests)',
    seats: 'Up to 6–10 luxury recliner seats',
    luggage: 'Spacious dedicated rear luggage compartment',
    specs: [
      'Individual 1x1 or 2x1 custom plush reclining leather seats',
      'High ceiling allowing guests to stand and move comfortably',
      'Dedicated individual AC louvers and USB charging ports',
      'Large panoramic picture windows for scenic photography',
      'Dedicated professional driver + optional tour escort onboard',
    ],
  },
];

const benefitsList = [
  {
    title: 'Total Flexibility & Stress-Free Pace',
    desc: 'You dictate the schedule. Linger longer at Amber Fort, pause at a tranquil temple courtyard, or halt for roadside masala chai without worrying about train schedules or group tours.',
  },
  {
    title: 'Uncompromised Road Safety & Comfort',
    desc: 'Driving in India requires years of specialized local instincts. Our licensed chauffeurs have 10+ years of flawless highway records, maintain strict defensive driving habits, and know every detour.',
  },
  {
    title: 'Zero Shopping Pressure or Commission Traps',
    desc: 'We strictly prohibit commissioned shopping detours. Your guides and driver are dedicated solely to your cultural immersion, not tourist gift shops or commercial factory stops.',
  },
  {
    title: 'The Chauffeur vs Guide Difference Explained',
    desc: 'Your private chauffeur stays with you throughout your entire circuit (Jaipur to Udaipur). In each royal city, a dedicated government-licensed historian joins you for deep monument insights.',
  },
];

const driverFaqs = [
  {
    q: 'Does the driver stay in the same hotels as the guests?',
    a: 'No. Premier luxury palace hotels and boutique havelis provide dedicated driver quarters, or Dune Explorer arranges separate vetted driver accommodation and daily meal allowances nearby. You never need to manage or pay for driver lodging.',
  },
  {
    q: 'Can our private driver speak fluent English?',
    a: 'Yes. All Dune Explorer chauffeurs speak conversational English, possess impeccable manners, and maintain courteous professional discretion. For detailed historical and architectural storytelling, we pair you with senior licensed city historians.',
  },
  {
    q: 'How are tipping guidelines structured for drivers and guides in India?',
    a: 'Tipping is discretionary but customary. For a private chauffeur who has taken exceptional care of you over a multi-day trip, approx. $15–$25 per day from the party is warmly appreciated. For local city guides, approx. $10–$20 for a full day is standard.',
  },
  {
    q: 'Why is self-driving not recommended for tourists in Rajasthan?',
    a: 'Navigating Indian traffic involves unmarked speed bumps, free-roaming cattle, and unpredictable highway traffic patterns. Having a seasoned professional driver eliminates all stress, ensuring you arrive rested and relaxed at every palace.',
  },
];

const PrivateDriverGuide = () => {
  usePageMeta({
    title: 'Private Rajasthan Tour With Driver and Guide: Is It Worth It? | Dune Explorer',
    description:
      'See what a private driver and guide really add to a Rajasthan trip, with sample costs and tips. Read the guide before you book.',
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
          src="/images/india-village.webp"
          alt="Private Rajasthan Tour with Chauffeur and Driver"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Private Rajasthan Tour With Driver and Guide: Is It Worth It?</h1>
          <p className="guide-hero-sub">
            A practical guide to chauffeured luxury travel across Rajasthan: vehicle fleet standards, safety, licensed guides, and honest costs.
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
            <span>Private Driver & Guide</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 8 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Safety & Standards Guide</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                When planning a journey across royal India, one question always arises: <em>Is hiring a private chauffeur and local guide truly worth the investment, or are trains and domestic flights better?</em> The short answer is that a dedicated private driver is the single biggest factor in elevating a Rajasthan trip from exhausting to deeply relaxing.
              </p>

              <h2>The Verdict: Why 95% of Luxury Travelers Choose a Private Driver</h2>
              <p>
                Unlike Europe or North America, renting a car to self-drive in India is neither practical nor relaxing for international visitors. Unregulated road customs, livestock, and rural navigations turn driving into an ordeal.
              </p>
              <p>
                A private chauffeur grants you <strong>complete peace of mind</strong>. You travel door-to-door from your palace lobby to ancient fortress gates without haggling for taxis, carrying heavy luggage through train stations, or worrying about logistics.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', margin: '2rem 0' }}>
                {benefitsList.map((item, idx) => (
                  <div key={idx} style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.3rem' }}>
                    <h4 style={{ color: 'var(--color-maroon)', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2>Our Private Vehicle Fleet Standards</h2>
              <p>
                Every vehicle arranged by Dune Explorer meets strict luxury criteria: commercial tourism licensing, dual air conditioning, pristine sanitization, seatbelts for all passengers, and bottled water.
              </p>

              <div className="driver-fleet-grid">
                {fleetVehicles.map((v, idx) => (
                  <div key={idx} className="fleet-card">
                    <div className="fleet-card-header">
                      <div className="fleet-vehicle-name">{v.name}</div>
                      <div className="fleet-vehicle-tag">{v.tag}</div>
                    </div>
                    <div className="fleet-card-body">
                      <div style={{ fontSize: '0.86rem', color: 'var(--color-maroon)', fontWeight: 600, marginBottom: '0.8rem' }}>
                        <Users size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                        {v.seats}
                      </div>
                      <ul className="fleet-specs">
                        {v.specs.map((sp, sIdx) => (
                          <li key={sIdx}>
                            <Check size={14} />
                            <span>{sp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h2>How Our Private Guides Enhance Your Exploration</h2>
              <p>
                There is a vital distinction between a <strong>driver</strong> and a <strong>guide</strong> in India:
              </p>
              <div className="guide-callout">
                <h4>Your Dedicated Chauffeur</h4>
                <p>
                  Accompanies you across all cities and highways. Handles luggage, navigates traffic, coordinates with hotels, and recommends clean culinary stops.
                </p>
              </div>
              <div className="guide-callout" style={{ borderLeftColor: 'var(--color-forest)' }}>
                <h4>Your Certified City Historians & Guides</h4>
                <p>
                  Join you in Jaipur, Jodhpur, Udaipur, or Jaisalmer for deep architectural walkthroughs, royal genealogy stories, and VIP monument entrance bypassing long visitor queues.
                </p>
              </div>

              <h2>What Does a Private Driver & Guide Cost?</h2>
              <p>
                On average, an air-conditioned luxury SUV (such as a Toyota Innova Crysta) with a private chauffeur costs approximately <strong>$85 to $145 per day</strong>.
              </p>
              <p>
                This rate includes fuel, all interstate border permits, commercial toll taxes, parking fees, and driver boarding allowances. When shared between a couple or family, it represents exceptional value compared to standard train tickets or airport transfers.
              </p>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {driverFaqs.map((faq, idx) => {
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
                <h3>Book a Chauffeured Journey</h3>
                <p>
                  Tell us your travel route and group size. We will assign a premier vehicle and trusted chauffeur with a customized luxury itinerary.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Your Tour
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20interested%20in%20a%20private%20tour%20with%20a%20driver%20and%20guide%20in%20Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Ask Driver Details
                </a>
              </div>

              {/* Route Blueprint Cross-Link */}
              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  10-Day Luxury Itinerary
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Explore the classic driving route connecting Jaipur, Jodhpur, the desert, and Udaipur.
                </p>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View 10-Day Route <ArrowRight size={15} />
                </Link>
              </div>

              {/* Cost Guide Cross-Link */}
              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Total Trip Cost Breakdown
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  See how private vehicle and hotel costs combine into full package pricing.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Tour Cost Guide <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Section */}
      <section className="related-guides-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            More Guides to Plan Your Rajasthan Vacation
          </h2>
          <div className="related-guides-grid">
            <Link to="/10-day-luxury-rajasthan-itinerary" className="related-card">
              <img src="/images/jaipur/DSC_8425-01-02.jpeg" alt="10 Day Luxury Rajasthan Itinerary" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">10 Day Luxury Rajasthan Itinerary</h3>
                <span className="related-card-tag">Itineraries</span>
                <p className="related-card-desc">Day-by-day route with palace stays, desert camps, and timings.</p>
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

            <Link to="/luxury-rajasthan-tour-cost" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="Tour Cost Breakdown" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Rajasthan Tour Cost Per Person</h3>
                <span className="related-card-tag">Pricing Guide</span>
                <p className="related-card-desc">Comprehensive price tiers for luxury palace tours.</p>
                <span className="related-card-link">View Pricing <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateDriverGuide;
