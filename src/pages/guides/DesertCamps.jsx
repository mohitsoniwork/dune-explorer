import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, X, Star, Clock, Calendar, MessageCircle, MapPin, Sparkles, Moon, Sun, Wind } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const desertCampsList = [
  {
    name: 'The Serai (SUJÁN)',
    location: 'Bherwa (Near Jaisalmer)',
    tag: 'Relais & Châteaux Ultra-Luxury',
    price: '$1,100 – $1,950+ / night',
    description: 'Set within 100 acres of private desert scrubland, The Serai offers magnificent tented suites inspired by royal caravan pavilions of Rajput rulers. Handcrafted canvas suites feature sunken private plunge pools, heated marble bathrooms, and world-class organic farm-to-table dining.',
    highlights: ['Private heated plunge pool suites', 'SUJÁN Spa by Raison d\'Etre', 'Private sundowners on secluded sand dunes', 'Relais & Châteaux gastronomic excellence'],
  },
  {
    name: 'Suryagarh Desert Pavilions & Retreats',
    location: 'Chhatrayil / Thar Desert Gateway',
    tag: 'Fortress Splendour & Private Camp Integration',
    price: '$500 – $990 / night',
    description: 'Combining the stone majesty of Suryagarh with bespoke private desert expeditions. Guests can enjoy private champagne breakfasts amidst peacocks and bespoke candlelit desert dinners arranged on untouched golden dune ridges.',
    highlights: ['Private dune dinner set with thousands of candles', 'Exclusive desert trail 4x4 safaris', 'Folk ballad recitals by Ustad musical masters', 'Seamless combination with fortress luxury'],
  },
  {
    name: 'Dune Explorer Signature Mobile Glamping',
    location: 'Private Khuri / Secluded Frontier Dunes',
    tag: 'Authentic Seclusion Away from Tourist Crowds',
    price: '$360 – $650 / night',
    description: 'Crafted specifically for travelers who seek absolute desert silence. Set miles away from noisy commercial camps, our private mobile camp features plush bespoke tents with en-suite bathrooms, custom camel treks, personal chef, and live bonfire acoustic melodies.',
    highlights: ['Zero commercial crowds or loud dune buggies', 'Authentic campfire barbecue prepared by private chef', 'Deep stargazing under crystalline dark desert skies', 'Dedicated chauffeur and local desert guides'],
  },
];

const desertFaqs = [
  {
    q: 'Why should luxury travelers avoid the commercial Sam Sand Dunes?',
    a: 'Sam Sand Dunes has become heavily commercialised with hundreds of noisy tourist camps, loud generators, dune buggies, and crowded camel rides. For a genuine luxury and romantic experience, you must stay in private desert conservancies or secluded dunes (such as Bherwa, Khuri, or private concessions) where peace, silence, and dark starlit skies prevail.',
  },
  {
    q: 'How cold does the Thar Desert get at night?',
    a: 'Between November and February, daytime desert temperatures are pleasantly warm (24°C–27°C), but night temperatures can drop to 6°C–10°C (43°F–50°F). Premier luxury camps provide heated tents, heavy goose-down duvets, hot water bottles, and outdoor bonfires with cashmere blankets to ensure you stay warm and cozy.',
  },
  {
    q: 'Do luxury desert tents have private en-suite bathrooms and running hot water?',
    a: 'Yes. True luxury glamping tents are built with solid permanent or semi-permanent en-suite stone/canvas bathrooms featuring flushing toilets, walk-in showers with pressurized running hot water, luxury toiletries, and plush bathrobes.',
  },
  {
    q: 'How many nights should I spend in a Jaisalmer desert camp?',
    a: 'One to two nights is the ideal duration. Most guests spend 1 night inside the Golden City or at a heritage fortress (like Suryagarh) exploring the living fort and havelis, followed by 1 or 2 nights immersed in the tranquility of a luxury desert camp.',
  },
];

const DesertCamps = () => {
  usePageMeta({
    title: 'Luxury Jaisalmer Desert Camp Stay: Where to Sleep Under the Dunes | Dune Explorer',
    description:
      'Compare the best luxury desert camps near Jaisalmer, with tent styles, dining and sunset tips. Pick your camp and book with confidence.',
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
          src="/images/jaisalmer-dunes.jpg"
          alt="Luxury Jaisalmer Desert Camp Stay"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Luxury Jaisalmer Desert Camp Stay: Where to Sleep Under the Dunes</h1>
          <p className="guide-hero-sub">
            How to experience the timeless magic of the Thar Desert in absolute luxury: comparing private camps, tent styles, sunset camel safaris, and dining under the stars.
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
            <span>Jaisalmer Desert Camps</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 8 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Desert Glamping Blueprint</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                Watching the sunset melt across the golden ripples of the Thar Desert, sipping spiced masala chai as the desert cools, and dining by bonfire under a blanket of unpolluted constellations is an experience that stays with you forever. But not all desert camps in Jaisalmer are created equal.
              </p>

              <h2>The Golden Rule: Private Dunes vs Commercial Sam Dunes</h2>
              <p>
                The most important decision when planning your desert stay is <strong>location</strong>. Many generic tour operators book visitors into the crowded Sam Sand Dunes strip, which is overwhelmed by noisy quad bikes, loudspeakers, and endless rows of identical commercial tents.
              </p>
              <div className="guide-callout" style={{ borderLeftColor: 'var(--color-sand)' }}>
                <h4>The Dune Explorer Standard: True Desert Seclusion</h4>
                <p>
                  We position our guests in exclusive private desert reserves or pristine secluded dune pockets. You enjoy untouched sand ripples, undisturbed silence, private camel treks to secret viewpoints, and personal folk musicians without a crowd in sight.
                </p>
              </div>

              <h2>Top Luxury Desert Camps in Jaisalmer</h2>

              <div className="property-reviews-list">
                {desertCampsList.map((camp, idx) => (
                  <div key={idx} className="property-card">
                    <div className="property-card-body">
                      <div className="property-top">
                        <h3 className="property-name">{camp.name}</h3>
                        <span className="property-location"><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 3 }} />{camp.location}</span>
                      </div>
                      <div className="property-price-hint">
                        {camp.tag} · <span style={{ color: 'var(--color-sand)' }}>{camp.price}</span>
                      </div>
                      <p style={{ fontSize: '0.94rem', color: 'var(--color-text-deep)', lineHeight: 1.65 }}>
                        {camp.description}
                      </p>

                      <div className="property-features-pills">
                        {camp.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="prop-pill">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>What to Expect Inside a Premier Luxury Tent</h2>
              <p>
                Modern desert glamping does not sacrifice comfort. In our handpicked camps, your canvas suite features:
              </p>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text-deep)' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>King-Size Teak Beds:</strong> High thread-count Egyptian cotton linens, feather duvets, and electric warming blankets.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>En-suite Stone Bathrooms:</strong> Running hot and cold water, ceramic flushes, hand-carved stone basins, and premium botanical toiletries.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Private Verandahs:</strong> Shaded deck seating overlooking rolling sand dunes for morning espresso or evening sundowners.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Personal Butler (Khidmatgar):</strong> Dedicated attendant to coordinate hot water, campfire drinks, and personalized dining preferences.</li>
              </ul>

              <h2>Signature Experiences to Include in Your Desert Stay</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid rgba(187, 135, 96, 0.35)', borderRadius: '10px', padding: '1.2rem', boxShadow: '0 4px 16px rgba(79, 14, 14, 0.04)' }}>
                  <h4 style={{ color: 'var(--color-oxblood)', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>
                    <Sun size={15} style={{ verticalAlign: 'middle', marginRight: 4, color: '#8A5A2B' }} />
                    Private Camel Trek
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#3A352D', margin: 0, lineHeight: 1.6 }}>
                    Ride gentle, beautifully draped camels into isolated dunes away from tourist tracks as the evening sun turns the sands deep ochre.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid rgba(187, 135, 96, 0.35)', borderRadius: '10px', padding: '1.2rem', boxShadow: '0 4px 16px rgba(79, 14, 14, 0.04)' }}>
                  <h4 style={{ color: 'var(--color-oxblood)', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>
                    <Sparkles size={15} style={{ verticalAlign: 'middle', marginRight: 4, color: '#8A5A2B' }} />
                    Dune Crest Dinner
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#3A352D', margin: 0, lineHeight: 1.6 }}>
                    A private table surrounded by hundreds of glowing hurricane lamps, served a multi-course Rajasthani feast prepared over hot embers.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid rgba(187, 135, 96, 0.35)', borderRadius: '10px', padding: '1.2rem', boxShadow: '0 4px 16px rgba(79, 14, 14, 0.04)' }}>
                  <h4 style={{ color: 'var(--color-oxblood)', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>
                    <Moon size={15} style={{ verticalAlign: 'middle', marginRight: 4, color: '#8A5A2B' }} />
                    Acoustic Folk Melodies
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#3A352D', margin: 0, lineHeight: 1.6 }}>
                    Listen to multi-generational Manganiyar musicians singing soulful desert folk ballads by the warmth of a crackling bonfire.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions About Desert Stays</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {desertFaqs.map((faq, idx) => {
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
                <h3>Book a Secluded Desert Stay</h3>
                <p>
                  Experience the magic of the Thar Desert without crowds. We will craft a bespoke Jaisalmer glamping itinerary with private dunes and luxury canvas suites.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Desert Stay
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20interested%20in%20a%20luxury%20Jaisalmer%20desert%20camp%20stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Chat with Desert Specialist
                </a>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  10-Day Royal Route
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  See how the Jaisalmer desert connects smoothly with Jodhpur and Jaipur.
                </p>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View 10-Day Itinerary <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Best Time to Visit
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Check month-by-month desert temperatures and Jaisalmer Desert Festival dates.
                </p>
                <Link to="/best-time-to-visit-rajasthan" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Check Best Months <ArrowRight size={15} />
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

            <Link to="/luxury-rajasthan-tour-cost" className="related-card">
              <img src="/images/jaipur/DSC_5623-01.jpeg" alt="Rajasthan Tour Cost" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">How Much Does a Luxury Rajasthan Tour Cost?</h3>
                <span className="related-card-tag">Pricing Guide</span>
                <p className="related-card-desc">Detailed price ranges for palace hotels, chauffeur cars, and desert camps.</p>
                <span className="related-card-link">View Costs <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesertCamps;
