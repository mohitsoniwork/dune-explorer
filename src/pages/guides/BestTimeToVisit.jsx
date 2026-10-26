import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Sun, Calendar, Clock, Compass, ShieldCheck, MessageCircle, Thermometer, Sparkles } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const seasonSummary = [
  {
    type: 'peak',
    tag: 'Prime Travel Season',
    title: 'Winter & Festive Season',
    months: 'October to March',
    temp: '10°C – 28°C (50°F – 82°F)',
    desc: 'The gold standard for luxury travel. Crisp blue skies, golden sunshine, comfortable desert nights, and royal festivals like Diwali, Pushkar Fair, and Jaisalmer Desert Festival.',
  },
  {
    type: 'shoulder',
    tag: 'Shoulder Season',
    title: 'Spring & Early Autumn',
    months: 'April & September',
    temp: '22°C – 36°C (72°F – 97°F)',
    desc: 'Warm days with peaceful palaces and fewer tourists. Excellent value at luxury heritage resorts and heightened chances of spotting tigers in Ranthambore as foliage thins.',
  },
  {
    type: 'monsoon',
    tag: 'Romantic Greenery',
    title: 'Monsoon Renewal',
    months: 'July to August',
    temp: '24°C – 34°C (75°F – 93°F)',
    desc: 'Udaipur and the Aravalli Hills transform into verdant royal sanctuaries. Palace lakes are brimming and majestic rain clouds drape ancient fortresses in romance.',
  },
];

const monthData = [
  {
    month: 'October',
    temp: '20°C – 33°C',
    status: 'Season Opening',
    verdict: 'Excellent for crisp mornings, opening of national parks, and pleasant evening palace dining.',
    highlights: 'Ranthambore National Park reopens on Oct 1st. Mild evenings, festive preparations, ideal time for Jaipur & Udaipur walks.',
  },
  {
    month: 'November',
    temp: '13°C – 29°C',
    status: 'Peak Luxury',
    verdict: 'One of the single best months of the year for a royal tour.',
    highlights: 'Pushkar Camel Fair and Diwali celebrations. Flawless weather for desert glamping in Jaisalmer and hot air ballooning over Jaipur.',
  },
  {
    month: 'December',
    temp: '9°C – 24°C',
    status: 'Peak Luxury',
    verdict: 'World-renowned festive atmosphere, royal palace galas, and chilly starlit desert nights.',
    highlights: 'Christmas and New Year at Taj Lake Palace and Rambagh Palace. Pack warm cashmere for evening desert safaris.',
  },
  {
    month: 'January',
    temp: '8°C – 22°C',
    status: 'Peak Luxury',
    verdict: 'Crisp, refreshing winter weather. Jaipur Literature Festival attracts royalty and thinkers from around the globe.',
    highlights: 'Pleasant midday sightseeing without fatigue. Best month for full-day fort explorations in Jodhpur and Chittorgarh.',
  },
  {
    month: 'February',
    temp: '11°C – 26°C',
    status: 'Peak Luxury',
    verdict: 'Sunny, comfortable, and romantically mild. Prime month for luxury honeymoons and desert cultural festivals.',
    highlights: 'Jaisalmer World Sacred Spirit Festival & Desert Festival. Ideal temperature across the entire desert belt.',
  },
  {
    month: 'March',
    temp: '16°C – 32°C',
    status: 'Spring & Festivals',
    verdict: 'Warm sunny days and vibrant royal celebrations. Royal Holi in Udaipur is an unforgettable spectacle.',
    highlights: 'Celebrate Royal Holi with Mewar royalty in Udaipur. Palace hotel rates start softening towards late March.',
  },
  {
    month: 'April',
    temp: '23°C – 38°C',
    status: 'Shoulder Season',
    verdict: 'Warm afternoons, but luxury hotels offer attractive suite promotions and uncrowded courtyards.',
    highlights: 'Top month for tiger sightings in Ranthambore. Sightseeing recommended in morning and late afternoon.',
  },
  {
    month: 'May – June',
    temp: '28°C – 43°C',
    status: 'Summer Heat',
    verdict: 'Intense summer temperatures across the plains. Best reserved for spa retreats or high-end wildlife enthusiasts.',
    highlights: 'Highest tiger sighting probabilities at waterholes. Deep discounts at premier palace resorts.',
  },
  {
    month: 'July – September',
    temp: '24°C – 34°C',
    status: 'Monsoon Magic',
    verdict: 'A serene and romantic time, especially for Udaipur, Mount Abu, and heritage havelis surrounded by green hills.',
    highlights: 'Full lakes, misty Aravali hilltops, peacocks dancing in palace gardens, and secluded luxury stays.',
  },
];

const bestTimeFaqs = [
  {
    q: 'What is the absolute best month for a luxury Rajasthan tour?',
    a: 'November and February are the two undisputed finest months. You will experience pleasant daytime temperatures (24°C–27°C), crisp evenings, lush post-monsoon or early spring landscapes, and clear desert skies without the extreme cold of mid-January or high holiday surcharges of Christmas week.',
  },
  {
    q: 'When should I travel if I want to combine Rajasthan palaces with a tiger safari?',
    a: 'Ranthambore National Park is open from October 1 to June 30 (core zones close during monsoon). For comfortable weather, visit between November and March. For maximum tiger sighting probability, March through May is ideal as dry undergrowth draws tigers to remaining watering holes.',
  },
  {
    q: 'How cold does Rajasthan get in December and January?',
    a: 'While daytime temperatures hover around a pleasant 22°C–24°C under brilliant sunshine, desert nights in Jaisalmer and Bikaner can drop to 6°C–9°C. Luxury desert camps like The Serai provide heated luxury tents, bonfires, hot water bottles, and pashmina shawls for complete comfort.',
  },
  {
    q: 'How far in advance should I book for peak winter travel?',
    a: 'For travel between November and February—especially during Diwali, Pushkar Fair, and Christmas/New Year—we recommend booking 4 to 6 months in advance. Premier suites at Taj Lake Palace Udaipur, Rambagh Palace Jaipur, and luxury Ranthambore lodges routinely sell out months ahead.',
  },
  {
    q: 'Is it worth visiting Rajasthan during the monsoon (July–August)?',
    a: 'Yes, particularly for Udaipur and the Aravalli belt. Unlike coastal India, Rajasthan receives moderate rainfall. The lakes fill up, palace gardens flourish, and the atmosphere at heritage lakeside palaces is deeply romantic, with the added benefit of peaceful properties and exceptional value.',
  },
];

const BestTimeToVisit = () => {
  usePageMeta({
    title: 'Best Time to Visit Rajasthan for Luxury Travel: Month by Month Guide | Dune Explorer',
    description:
      'Find the best month for a luxury Rajasthan trip, with weather, festivals and hotel price tips. Check the calendar and pick your dates.',
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
          src="/images/jodhpur-fort.webp"
          alt="Best Time to Visit Rajasthan Forts and Palaces"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="guide-badge">Seasonal Travel Insights</span>
          <h1>Best Time to Visit Rajasthan for Luxury Travel</h1>
          <p className="guide-hero-sub">
            A comprehensive month-by-month guide covering climate, royal festivals, luxury palace rates, and wildlife safari seasons.
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
            <span>Best Time to Visit</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 9 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Updated for 2026/2027 Season</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            {/* Article Body */}
            <article className="guide-article">
              <p className="guide-lead">
                Rajasthan is a land of extremes — from sun-drenched desert dunes to breezy lakefront palaces. Choosing the right month ensures you experience regal forts in comfortable weather, catch vibrant cultural festivals, and secure the finest palace suites at prime value.
              </p>

              <h2>Rajasthan Travel Seasons at a Glance</h2>
              <div className="season-summary-grid">
                {seasonSummary.map((season, idx) => (
                  <div key={idx} className={`season-card ${season.type}`}>
                    <span className="season-tag">{season.tag}</span>
                    <h3 className="season-title">{season.title}</h3>
                    <div className="season-months">{season.months}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-maroon)', fontWeight: 600, marginBottom: '0.6rem' }}>
                      <Thermometer size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                      {season.temp}
                    </div>
                    <p className="season-desc">{season.desc}</p>
                  </div>
                ))}
              </div>

              <h2>Month-by-Month Luxury Guide: Weather, Events & Vibe</h2>
              <p>
                Here is a month-by-month analysis to help you synchronize your travel dates with Rajasthan's best experiences:
              </p>

              <div className="month-cards-list">
                {monthData.map((m, idx) => (
                  <div key={idx} className="month-item-card">
                    <div className="month-badge-col">
                      <span className="month-name">{m.month}</span>
                      <span className="month-temp">{m.temp}</span>
                      <span className="month-status-pill">{m.status}</span>
                    </div>
                    <div className="month-details-col">
                      <h4>{m.verdict}</h4>
                      <p>{m.highlights}</p>
                      <div className="month-highlights">
                        <Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                        Recommended for: Curated bespoke tours & private chauffeur circuits.
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Best Time by Travel Style</h2>
              <div className="guide-callout">
                <h4>1. For Luxury Honeymoons (October to March)</h4>
                <p>
                  Crisp starlit dinners on private Lake Pichola terraces in Udaipur, private desert dune suites in Jaisalmer, and serene sunset cocktails overlooking the Pink City of Jaipur.
                </p>
              </div>

              <div className="guide-callout" style={{ borderLeftColor: '#2f6f4f' }}>
                <h4>2. For Tiger Safaris in Ranthambore (November to May)</h4>
                <p>
                  Park reopens October 1st. Mild weather runs November to February. Highest photographic sighting frequency happens March to May when heat draws tigers to prominent water holes.
                </p>
              </div>

              <div className="guide-callout" style={{ borderLeftColor: 'var(--color-gold)' }}>
                <h4>3. For Palace Architecture & Photography (October to February)</h4>
                <p>
                  Clear blue skies create striking contrasts against the golden sandstone of Jaisalmer, blue walls of Jodhpur, and pink stone of Jaipur without harsh noon haze.
                </p>
              </div>

              <h2>Booking Advice: When to Reserve Your Journey</h2>
              <p>
                Because Rajasthan hosts some of the most celebrated palace hotels in the world, inventory is finite. For stays between November and February, reserving <strong>4 to 6 months in advance</strong> is strongly advised to guarantee your preferred suite categories at iconic properties like:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: '#444' }}>
                <li><strong>Taj Lake Palace & Oberoi Udaivilas</strong> (Udaipur)</li>
                <li><strong>Rambagh Palace & The Oberoi Rajvilas</strong> (Jaipur)</li>
                <li><strong>Umaid Bhawan Palace & Raas Haveli</strong> (Jodhpur)</li>
                <li><strong>The Serai & Suryagarh</strong> (Jaisalmer)</li>
              </ul>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {bestTimeFaqs.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className={`guide-faq-item ${isOpen ? 'open' : ''}`}>
                        <button
                          type="button"
                          className="guide-faq-question"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                        >
                          <span>{item.q}</span>
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
                              <p>{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="guide-sidebar">
              {/* CTA Box */}
              <div className="sidebar-card cta-card">
                <h3>Ready to Pick Your Dates?</h3>
                <p>
                  Tell us your ideal travel month and preferences. We will design a custom itinerary with weather-optimized schedules and reserved palace suites.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Your Journey
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20am%20planning%20a%20luxury%20Rajasthan%20tour%20and%20want%20advice%20on%20dates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Ask Date Recommendations
                </a>
              </div>

              {/* Related Pricing Guide */}
              <div className="sidebar-card">
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)' }}>
                  Cost Breakdown
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: '0.6rem', marginBottom: '0.4rem' }}>
                  Rajasthan Tour Cost Per Person
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '1rem' }}>
                  Explore how hotel rates, private chauffeurs, and royal experiences price out per person.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Cost Breakdown <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Guides / Footer Links */}
      <section className="related-guides-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            Explore Rajasthan Journeys by Dune Explorer
          </h2>
          <div className="related-guides-grid">
            <Link to="/luxury-rajasthan-tour-cost" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="Rajasthan Tour Cost" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Pricing Guide</span>
                <h3 className="related-card-title">How Much Does a Luxury Rajasthan Tour Cost?</h3>
                <p className="related-card-desc">Detailed price ranges for heritage hotels, private drivers, guides, and luxury safaris.</p>
                <span className="related-card-link">Read Pricing Guide <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/destinations" className="related-card">
              <img src="/images/jaipur/DSC_5623-01.jpeg" alt="Jaipur Pink City" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Destinations</span>
                <h3 className="related-card-title">Curated Cities & Fortresses</h3>
                <p className="related-card-desc">Explore Jaipur, Udaipur, Jodhpur, Jaisalmer, and Pushkar with insider access.</p>
                <span className="related-card-link">View Destinations <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/plan-journey" className="related-card">
              <img src="/images/jaisalmer-dunes.jpg" alt="Plan Your Journey" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Custom Itineraries</span>
                <h3 className="related-card-title">Design Your Bespoke Royal Tour</h3>
                <p className="related-card-desc">Fill in our quick travel planner to receive a personalized day-by-day proposal.</p>
                <span className="related-card-link">Start Planning <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestTimeToVisit;
