import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import './GuidesHub.css';

export const guidesData = [
  {
    slug: '10-day-luxury-rajasthan-itinerary',
    title: '10-Day Classic Luxury Rajasthan Itinerary',
    category: 'Itinerary',
    badge: 'Flagship Journey',
    readTime: '8 min read',
    summary: 'The definitive circuit: Delhi, Agra (Taj Mahal), Jaipur (Pink City), Jodhpur (Blue City), and Udaipur (City of Lakes) with handpicked 5-star palace accommodations.',
    highlights: ['Oberoi Amarvilas Agra view', 'Private Amber Fort guided exploration', 'Udaipur Lake Pichola sunset boat'],
    image: '/images/jaipur/DSC_0038-01.jpeg',
  },
  {
    slug: 'rajasthan-palace-hotel-itinerary',
    title: 'Rajasthan Palace Hotels & Heritage Stays',
    category: 'Palace Stays',
    badge: 'Royal Heritage',
    readTime: '9 min read',
    summary: 'A curated 12-day palace route staying at Taj Lake Palace, Rambagh Palace, Umaid Bhawan, and SUJÁN Jawai luxury leopard camp.',
    highlights: ['Taj Lake Palace lake-view suites', 'Rambagh Palace royal dining', 'Umaid Bhawan private museum tour'],
    image: '/images/Udaipur/pexels-kushal-verma-123877130-9952977.jpg',
  },
  {
    slug: 'luxury-rajasthan-tour-cost',
    title: 'Luxury Rajasthan Tour Cost Guide (2025–2026)',
    category: 'Costs & Planning',
    badge: 'Pricing & Budget',
    readTime: '7 min read',
    summary: 'Transparent breakdown of 5-star heritage vs ultra-luxury tier pricing, private driver costs, monument VIP entries, and seasonal rate fluctuations.',
    highlights: ['$3,500 – $14,000+ budget tiers', 'Peak season vs shoulder rates', 'Hidden luxury cost insights'],
    image: '/images/jaipur/DSC_5623-01.jpeg',
  },
  {
    slug: 'best-time-to-visit-rajasthan',
    title: 'Best Time to Visit Rajasthan: Season-by-Season',
    category: 'Weather & Timing',
    badge: 'Seasonal Timing',
    readTime: '6 min read',
    summary: 'Detailed climate analysis for winter palace touring (Oct–Mar), wildlife safari prime months, monsoon romance in Udaipur, and avoiding extreme heat.',
    highlights: ['Month-by-month temperature guide', 'Desert Festival & Pushkar timing', 'Monsoon lake retreat guide'],
    image: '/images/jodhpur-fort.webp',
  },
  {
    slug: 'luxury-jaisalmer-desert-camps',
    title: 'Luxury Jaisalmer Desert Camps & Glamping',
    category: 'Desert & Glamping',
    badge: 'Thar Desert',
    readTime: '7 min read',
    summary: 'Comparing Serai by SUJÁN vs Damodra Desert Camp: private dune dinners, stargazing, camel safaris, and high-end desert glamping.',
    highlights: ['SUJÁN The Serai luxury tents', 'Private sunset camel expeditions', 'Live Rajasthani folk music under the stars'],
    image: '/images/jaisalmer-dunes.jpg',
  },
  {
    slug: 'luxury-ranthambore-tiger-safari',
    title: 'Luxury Ranthambore Tiger Safari & Lodge Guide',
    category: 'Wildlife & Safari',
    badge: 'Royal Wildlife',
    readTime: '7 min read',
    summary: 'Exclusive safari planning: private 4x4 Gypsy vs Canter bookings, best tiger zones (1–5), and ultra-luxury stays at Aman-i-Khás and Oberoi Vanyavilas.',
    highlights: ['Private naturalist-guided safaris', 'Aman-i-Khás tented pavilions', 'Zone booking strategy 90 days out'],
    image: '/images/Ranthambore/pexels-amitrai10-37715052.jpg',
  },
  {
    slug: 'rajasthan-luxury-honeymoon',
    title: 'Rajasthan Luxury Honeymoon Itinerary',
    category: 'Occasions',
    badge: 'Romance & Palaces',
    readTime: '8 min read',
    summary: 'Romantic 10-day royal getaway: Lake Pichola candlelit boat dining, desert sunset champagne in Jaisalmer, and couples wellness in Jaipur.',
    highlights: ['Private Udaipur sunset cruise', 'Thar Desert champagne under stars', 'Couple spa rituals at royal retreats'],
    image: '/images/Udaipur/pexels-chetan-jha-624961868-17397822.jpg',
  },
  {
    slug: 'palace-on-wheels-vs-royal-rajasthan',
    title: 'Palace on Wheels vs Royal Rajasthan Luxury Trains',
    category: 'Luxury Trains',
    badge: 'Rail Journeys',
    readTime: '8 min read',
    summary: 'Direct comparison of India’s top luxury heritage trains: cabins, onboard dining, included excursions, routes, and presidential suites.',
    highlights: ['Palace on Wheels 7-night classic route', 'Maharajas\' Express Heritage of India', 'Butler service & bespoke cabins'],
    image: '/images/Jaisalmer/pexels-axp-photography-500641970-19160088.jpg',
  },
  {
    slug: 'private-rajasthan-tour-driver-guide',
    title: 'Private Rajasthan Chauffeur & Driver Guide',
    category: 'Costs & Planning',
    badge: 'Chauffeur Guide',
    readTime: '6 min read',
    summary: 'Everything you need to know about hiring a private chauffeur in Rajasthan: luxury fleet options (Toyota Crysta, BMW, Mercedes), road etiquette, and tipping.',
    highlights: ['English-speaking vetted chauffeurs', 'Flexible spontaneous stops along scenic routes', 'Zero luggage stress & door-to-door comfort'],
    image: '/images/Jodhpur/pexels-mehul-2025855431-35644782.jpg',
  },
  {
    slug: 'luxury-rajasthan-tour-packages-uk',
    title: 'Luxury Rajasthan Tour Packages for UK & Overseas',
    category: 'Occasions',
    badge: 'UK & Global Guests',
    readTime: '8 min read',
    summary: 'Tailor-made planning for travelers arriving from London Heathrow, Manchester, and North America: direct flight connections, visas, and VIP airport meet & greet.',
    highlights: ['Heathrow to Delhi direct connections', 'VIP expedited airport arrival', 'Dedicated 24/7 UK-friendly concierge'],
    image: '/images/Jaisalmer/pexels-harsh-kukadiya-244412142-37415378.jpg',
  },
  {
    slug: 'luxury-rajasthan-tour-packages-usa',
    title: 'Luxury Rajasthan Tour Packages for US Travelers',
    category: 'Occasions',
    badge: 'US & North America',
    readTime: '9 min read',
    summary: 'Bespoke planning for American luxury travelers: non-stop flights from NYC/SFO/Chicago, 5-star palace suites, private chauffeured SUVs, and transparent USD pricing.',
    highlights: ['Direct non-stop flights from US hubs', 'Taj & Oberoi royal palace suites', 'Dedicated 24/7 on-ground concierge'],
    image: '/images/jaipur/DSC_5623-01.jpeg',
  },
  {
    slug: 'luxury-rajasthan-tour-packages-australia',
    title: 'Luxury Rajasthan Tour Packages for Australian Travelers',
    category: 'Occasions',
    badge: 'Australia & Pacific',
    readTime: '9 min read',
    summary: 'Curated royal escapes for guests from Sydney, Melbourne, and Brisbane: direct non-stop flights, desert glamping in Jaisalmer, and private tiger safaris.',
    highlights: ['Direct flights from Sydney & Melbourne', 'Luxury desert glamping & private dunes', 'Ranthambore private tiger safaris'],
    image: '/images/jaipur/DSC_0038-01.jpeg',
  },
  {
    slug: 'luxury-rajasthan-tour-packages-japan',
    title: 'Luxury Rajasthan Tour Packages for Japanese Travelers',
    category: 'Occasions',
    badge: 'Japan & East Asia',
    readTime: '9 min read',
    summary: 'Thoughtful royal journeys tailored for travelers from Tokyo and Osaka: direct flights from Haneda, serene palace heritage, and immaculate punctuality.',
    highlights: ['Direct non-stop flights from Tokyo Haneda', 'Immaculate private chauffeur luxury', 'Pristine palace stays & mild dining'],
    image: '/images/Udaipur/pexels-chetan-jha-624961868-17397822.jpg',
  },
];

const categories = ['All Guides', 'Itinerary', 'Palace Stays', 'Costs & Planning', 'Desert & Glamping', 'Wildlife & Safari', 'Occasions'];

const GuidesHub = () => {
  const [activeCategory, setActiveCategory] = useState('All Guides');

  usePageMeta({
    title: 'Luxury Rajasthan Travel Guides | Expert Insights & Itineraries | Dune Explorer',
    description:
      'Explore expert Rajasthan luxury travel guides by Dune Explorer. Unpack palace hotel itineraries, tour costs, best times to visit, desert glamping, and private chauffeur tips.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGuides = activeCategory === 'All Guides'
    ? guidesData
    : guidesData.filter((guide) => guide.category === activeCategory);

  return (
    <div className="guides-hub-page">
      {/* Hero Header */}
      <header className="guides-hub-hero">
        <img
          src="/images/jaipur/DSC_0038-01.jpeg"
          alt="Luxury Rajasthan Travel Guides"
          className="guides-hub-hero-img"
        />
        <div className="guides-hub-hero-overlay"></div>
        <div className="container guides-hub-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="guides-hub-hero-content"
          >
            <h1>Luxury Rajasthan Travel Guides</h1>
            <p className="guides-hub-hero-desc">
              Curated itineraries, palace hotel insights, and insider advice for royal Indian journeys.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filter Tabs */}
      <section className="guides-hub-filters-section">
        <div className="container">
          <div className="guides-hub-filters" role="tablist" aria-label="Guides categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`guides-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="guides-hub-grid-section">
        <div className="container">
          <div className="guides-hub-grid">
            {filteredGuides.map((guide, idx) => (
              <motion.article
                key={guide.slug}
                className="guide-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link to={`/${guide.slug}`} className="guide-card-image-wrap" tabIndex={-1} aria-hidden="true">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="guide-card-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/jaipur/DSC_0038-01.jpeg';
                    }}
                  />
                  <span className="guide-card-badge">{guide.badge}</span>
                </Link>

                <div className="guide-card-body">
                  <div className="guide-card-meta">
                    <span className="guide-card-category">{guide.category}</span>
                    <span className="guide-card-readtime">
                      <Clock size={13} />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="guide-card-title">
                    <Link to={`/${guide.slug}`}>{guide.title}</Link>
                  </h2>

                  <p className="guide-card-summary">{guide.summary}</p>

                  <ul className="guide-card-highlights">
                    {guide.highlights.map((item, i) => (
                      <li key={i}>
                        <ShieldCheck size={14} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="guide-card-footer">
                    <Link to={`/${guide.slug}`} className="guide-card-link">
                      <span>Read Complete Guide</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="guides-hub-cta-section">
        <div className="container">
          <div className="guides-hub-cta-card">
            <div className="guides-hub-cta-icon">
              <Compass size={36} />
            </div>
            <h2>Ready to Transform These Ideas Into a Bespoke Journey?</h2>
            <p>
              Every itinerary we craft is 100% custom-tailored to your timing, preferred palace stays, and personal travel style. Speak with a dedicated Dune Explorer specialist today.
            </p>
            <div className="guides-hub-cta-actions">
              <Link to="/plan-journey" className="btn btn-primary">
                Plan Your Royal Journey
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidesHub;
