import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Clock, Calendar, MapPin, Car, Compass, MessageCircle, Star } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const daysData = [
  {
    days: 'Day 1 – 2',
    destination: 'Jaipur — The Royal Pink City',
    travelTime: 'Arrive via Delhi (4.5h private drive or 45min flight)',
    hotel: 'Rambagh Palace / The Oberoi Rajvilas / Samode Haveli',
    highlights: [
      'Private VIP entry to Amber Fort with panoramic views across Maota Lake',
      'Exclusive tour of the City Palace private residential courtyards (Chandra Mahal)',
      'Sunrise photography at Hawa Mahal before street crowds gather',
      'Artisan block-printing workshop in Bagru with a multi-generational master craftsman',
      'Royal Rajasthani dinner at 1135 AD inside the battlements of Amer Fort',
    ],
  },
  {
    days: 'Day 3 – 4',
    destination: 'Jodhpur — The Sun & Blue City',
    travelTime: 'Jaipur to Jodhpur (5.5h scenic private chauffeur drive via Pushkar)',
    hotel: 'Umaid Bhawan Palace / RAAS Jodhpur / Rohet Garh',
    highlights: [
      'Stop at sacred holy Lake Pushkar for an ancient temple blessing on the ghats',
      'Private guided walkthrough of towering Mehrangarh Fort with senior curator access',
      'Bespoke heritage walk through the azure alleys of the old walled Brahmpuri quarter',
      'Evening sundowners with dramatic cliffside views of illuminated Mehrangarh',
      'Private Jeep excursion into indigenous Bishnoi villages to witness sustainable rural living',
    ],
  },
  {
    days: 'Day 5 – 6',
    destination: 'Jaisalmer — The Thar Desert & Golden Citadel',
    travelTime: 'Jodhpur to Jaisalmer (4.5h smooth highway drive across the arid frontier)',
    hotel: 'The Serai (Relais & Châteaux) / Suryagarh / Jaisalmer Luxury Camp',
    highlights: [
      'Explore the living 12th-century Golden Fort, where royal descendants still reside',
      'Admire intricately carved yellow sandstone havelis (Patwon Ki Haveli)',
      'Private sunset camel trek to isolated pristine desert dunes away from commercial camps',
      'Tented desert luxury under star-studded skies with live Manganiyar folk music and bonfire banquet',
      'Morning desert silence meditation and wildlife spotting (Chinkara gazelles and desert foxes)',
    ],
  },
  {
    days: 'Day 7',
    destination: 'Ranakpur & The Aravalli Foothills',
    travelTime: 'Jaisalmer to Ranakpur (5h drive towards the lush Aravalli valley)',
    hotel: 'Fateh Safari Lodge / Rawla Narlai / Mountbatten Lodge',
    highlights: [
      'Private walkthrough of the world-famous 15th-century Ranakpur Jain Temple (1,444 uniquely carved marble pillars)',
      'Scenic climb through the peaceful forested pass of the Aravalli range',
      'Heritage stepwell dinner illuminated by hundreds of floating clay oil lamps',
      'Option to incorporate a private leopard tracking safari in nearby Jawai wilderness',
    ],
  },
  {
    days: 'Day 8 – 9',
    destination: 'Udaipur — The Venice of the East & City of Lakes',
    travelTime: 'Ranakpur to Udaipur (2h picturesque mountain drive)',
    hotel: 'Taj Lake Palace / The Oberoi Udaivilas / The Leela Palace Udaipur',
    highlights: [
      'Check in by private royal boat to Taj Lake Palace in the middle of Lake Pichola',
      'Private tour of Udaipur City Palace complex overlooking shimmering waters',
      'Private sunset solar-boat charter around Jagmandir Island with chilled champagne',
      'Private miniature painting masterclass with an artist from the royal lineage',
      'Candlelight rooftop dinner at Sheesh Mahal overlooking the illuminated palaces',
    ],
  },
  {
    days: 'Day 10',
    destination: 'Udaipur Departure',
    travelTime: 'Transfer to Udaipur Airport (UDR) — 40 mins',
    hotel: 'Departure Day',
    highlights: [
      'Leisurely lakeside breakfast watching morning reflections over Lake Pichola',
      'Last-minute curated shopping for silver, pashmina shawls, and handcrafted perfumes',
      'Chauffeur transfer to Maharana Pratap Airport (UDR) for connecting flights to Delhi/Mumbai and onward to UK/Europe',
    ],
  },
];

const itineraryFaqs = [
  {
    q: 'Can this 10-day itinerary be reversed (starting in Udaipur and ending in Jaipur)?',
    a: 'Absolutely. Starting in Udaipur and concluding in Jaipur or Delhi works seamlessly. Flights from Delhi and Mumbai connect daily to both Jaipur (JAI) and Udaipur (UDR). Reversing the route allows you to finish your trip closer to Delhi if connecting directly to an international flight.',
  },
  {
    q: 'How long are the drives between cities, and are the roads comfortable?',
    a: 'Rajasthan has some of India\'s finest modern toll highways. The average drive between cities is 4.5 to 5.5 hours in a comfortable, air-conditioned Toyota Innova Crysta. Your private chauffeur plans stops at clean, verified highway eateries and scenic heritage rest stops.',
  },
  {
    q: 'Can we add a tiger safari in Ranthambore into this 10-day plan?',
    a: 'Yes. If a tiger safari is high on your wishlist, we can adjust the itinerary by spending 2 nights in Ranthambore between Jaipur and Jodhpur, either by shortening Jaisalmer or adding 2 additional nights for a 12-day journey.',
  },
  {
    q: 'Is 10 days enough time to see Rajasthan without feeling rushed?',
    a: '10 days is the recommended sweet spot for a classic Rajasthan journey. By dedicating 2 nights to each key destination (Jaipur, Jodhpur, Jaisalmer, Udaipur), you maintain a relaxing pace with afternoons free to enjoy palace gardens, spas, and private pool suites.',
  },
];

const TenDayItinerary = () => {
  usePageMeta({
    title: '10 Day Luxury Rajasthan Itinerary: Jaipur, Jodhpur, Udaipur and Beyond | Dune Explorer',
    description:
      'Follow a day by day 10 day luxury Rajasthan itinerary with top palaces, desert stays and timings. Copy the route and start planning today.',
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
          alt="10 Day Luxury Rajasthan Itinerary"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>10 Day Luxury Rajasthan Itinerary: Jaipur, Jodhpur, Udaipur and Beyond</h1>
          <p className="guide-hero-sub">
            The definitive royal circuit. Step-by-step timings, handpicked palace stays, desert glamping, and private chauffeur routes.
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
            <span>10 Day Itinerary</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 10 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 2026 Season Edition</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                Rajasthan is vast, spanning over 342,000 square kilometres of historic desert kingdoms. A well-planned 10-day itinerary allows you to immerse yourself in the Pink City of Jaipur, the blue streets of Jodhpur, the golden sands of Jaisalmer, and the romantic lake palaces of Udaipur without feeling rushed.
              </p>

              <h2>The Route Overview: Golden Triangle to Lake Palaces</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', margin: '1.2rem 0 1.8rem' }}>
                <span className="pill" style={{ background: 'rgba(79, 14, 14, 0.08)', color: 'var(--color-oxblood)', border: '1px solid rgba(79, 14, 14, 0.2)', fontWeight: 600 }}>Jaipur (2 Nights)</span>
                <span style={{ alignSelf: 'center', color: '#8A5A2B', fontWeight: 700 }}>&rarr;</span>
                <span className="pill" style={{ background: 'rgba(79, 14, 14, 0.08)', color: 'var(--color-oxblood)', border: '1px solid rgba(79, 14, 14, 0.2)', fontWeight: 600 }}>Jodhpur (2 Nights)</span>
                <span style={{ alignSelf: 'center', color: '#8A5A2B', fontWeight: 700 }}>&rarr;</span>
                <span className="pill" style={{ background: 'rgba(79, 14, 14, 0.08)', color: 'var(--color-oxblood)', border: '1px solid rgba(79, 14, 14, 0.2)', fontWeight: 600 }}>Jaisalmer Desert (2 Nights)</span>
                <span style={{ alignSelf: 'center', color: '#8A5A2B', fontWeight: 700 }}>&rarr;</span>
                <span className="pill" style={{ background: 'rgba(79, 14, 14, 0.08)', color: 'var(--color-oxblood)', border: '1px solid rgba(79, 14, 14, 0.2)', fontWeight: 600 }}>Ranakpur (1 Night)</span>
                <span style={{ alignSelf: 'center', color: '#8A5A2B', fontWeight: 700 }}>&rarr;</span>
                <span className="pill" style={{ background: 'rgba(79, 14, 14, 0.08)', color: 'var(--color-oxblood)', border: '1px solid rgba(79, 14, 14, 0.2)', fontWeight: 600 }}>Udaipur (2 Nights)</span>
              </div>

              <h2>Day-by-Day Detailed Itinerary</h2>

              <div className="itinerary-timeline">
                {daysData.map((item, index) => (
                  <div key={index} className="itinerary-day-card">
                    <div className="day-header">
                      <div>
                        <span className="day-badge">{item.days}</span>
                        <h3 className="day-destination" style={{ marginTop: '0.4rem', marginBottom: 0 }}>
                          {item.destination}
                        </h3>
                      </div>
                      <div className="day-travel-time">
                        <Car size={15} />
                        <span>{item.travelTime}</span>
                      </div>
                    </div>

                    <div className="day-hotel-callout">
                      <strong>Recommended Palace Stays:</strong> {item.hotel}
                    </div>

                    <h4 style={{ fontSize: '0.95rem', color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      Key Experiences & Private Highlights
                    </h4>
                    <ul className="day-activities-list">
                      {item.highlights.map((act, aIdx) => (
                        <li key={aIdx}>
                          <Check size={16} />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2>Why Private Chauffeur Travel Delivers Peace of Mind</h2>
              <p>
                Navigating Rajasthan with a dedicated private driver transforms travel days into relaxed scenic excursions. Instead of waiting at railway stations or navigating domestic security lines, you travel in a spacious, climate-controlled luxury SUV with chilled bottled water and mobile Wi-Fi.
              </p>
              <div className="guide-callout">
                <h4>Flexible En-Route Stops</h4>
                <p>
                  Having a private chauffeur means you can spontaneously stop for authentic masala chai at a roadside clay stall, pause to photograph peacock sanctuaries in rural fields, or explore hidden stepwells that tour buses bypass entirely.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions About This 10-Day Route</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {itineraryFaqs.map((faq, idx) => {
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
                <h3>Customise This Route</h3>
                <p>
                  Want to add Ranthambore tiger safaris, upgrade to royal suites, or tailor the pace for a honeymoon? We adapt every day to your wishes.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Customise Itinerary
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20interested%20in%20customising%20the%2010-day%20luxury%20Rajasthan%20itinerary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Chat with Route Designer
                </a>
              </div>

              {/* Cost Guide Cross-Link */}
              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Trip Cost Breakdown
                </h4>
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)', marginBottom: '0.6rem' }}>
                  Estimated Costs
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  See exact cost projections per person in US Dollars ($) for this 10-day journey.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Tour Costs <ArrowRight size={15} />
                </Link>
              </div>

              {/* Driver Guide Cross-Link */}
              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Private Driver & Guide
                </h4>
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)', marginBottom: '0.6rem' }}>
                  Chauffeur Info
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Learn how private chauffeur tours work, vehicle specs, and safety standards.
                </p>
                <Link to="/private-rajasthan-tour-driver-guide" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Private Tour Guide <ArrowRight size={15} />
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
            More Luxury Rajasthan Resources
          </h2>
          <div className="related-guides-grid">
            <Link to="/best-time-to-visit-rajasthan" className="related-card">
              <img src="/images/jodhpur-fort.webp" alt="Best Time to Visit Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Best Time to Visit Rajasthan for Luxury Travel</h3>
                <span className="related-card-tag">Seasonal Planning</span>
                <p className="related-card-desc">Month-by-month weather, festivals, and palace hotel pricing guide.</p>
                <span className="related-card-link">Read Guide <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/private-rajasthan-tour-driver-guide" className="related-card">
              <img src="/images/india-village.webp" alt="Private Tour Driver and Guide" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Private Rajasthan Tour With Driver and Guide</h3>
                <span className="related-card-tag">Transport & Safety</span>
                <p className="related-card-desc">See what a private chauffeur and verified guides add to your journey.</p>
                <span className="related-card-link">Explore Guide <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/luxury-rajasthan-tour-cost" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="Rajasthan Tour Cost" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">How Much Does a Luxury Rajasthan Tour Cost?</h3>
                <span className="related-card-tag">Cost Breakdown</span>
                <p className="related-card-desc">Transparent pricing per person for hotels, cars, and private guides.</p>
                <span className="related-card-link">View Costs <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenDayItinerary;
