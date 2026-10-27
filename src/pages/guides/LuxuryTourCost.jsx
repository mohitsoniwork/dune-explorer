import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, ArrowRight, ShieldCheck, Clock, Calendar, HelpCircle, MessageCircle } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const pricingTiers = [
  {
    name: 'Boutique Heritage Luxury',
    badge: 'Popular',
    priceUsd: '$360 – $540',
    perDay: 'per person / day',
    description: 'Perfect for couples and culturally curious travelers who want authentic royal havelis, private chauffeur, and handpicked local guides.',
    features: [
      'Authentic 4★ and 5★ restored heritage havelis & boutique palaces',
      'Dedicated private air-conditioned SUV with licensed professional driver',
      'Private government-licensed English-speaking guides in every city',
      'Daily breakfast & select traditional royal dining experiences',
      'Jaisalmer luxury desert camp stay with folk music & stargazing',
      'All toll taxes, state inter-city permits & fuel included',
    ],
  },
  {
    name: 'Grand Royal Palace Tier',
    badge: 'Most Loved',
    featured: true,
    priceUsd: '$700 – $1,100',
    perDay: 'per person / day',
    description: 'Experience genuine royalty at iconic properties like Taj Lake Palace, Rambagh Palace, or Oberoi Udaivilas with VIP service.',
    features: [
      'Iconic palace hotel stays (Taj, Oberoi, or Leela historic suites)',
      'Premium private luxury SUV (Toyota Innova Crysta or Fortuner)',
      'Senior destination historians & master storyteller guides',
      'Private boat cruise on Lake Pichola with sunset champagne',
      'Exclusive access to private palace wings and curated artisan walks',
      'VIP priority entry to Mehrangarh, Amber, and City Palaces',
    ],
  },
  {
    name: 'Ultra-Bespoke Signature',
    badge: 'Exclusive',
    priceUsd: '$1,400+',
    perDay: 'per person / day',
    description: 'Completely tailored private journeys with luxury tented wildlife lodges, private aerial charters, and royal host dinners.',
    features: [
      'Presidential / Royal Suites at India\'s finest historic palaces',
      'Aman-i-Khás or Suján Jawai luxury tented tiger & leopard safaris',
      'Private sunrise hot air balloon flight over Jaipur forts',
      'Exclusive private dinners hosted in ancient courtyards & dune crests',
      '24/7 dedicated private concierge & on-ground tour escort',
      'Bespoke private charter transfers available upon request',
    ],
  },
];

const costBreakdownItems = [
  {
    component: '5-Star Heritage & Palace Hotels',
    share: '50% – 60%',
    range: '$250 – $1,050+ per room / night',
    details: 'Rajasthan is home to some of the world’s most celebrated hotels. Restored boutique forts cost $220–$380/night; legendary royal palaces like Taj Lake Palace or Rambagh Palace average $750–$1,800/night in peak season.',
  },
  {
    component: 'Private Chauffeur & Luxury Transport',
    share: '15% – 20%',
    range: '$80 – $150 per vehicle / day',
    details: 'Covers a dedicated professional driver, air-conditioned vehicle (Toyota Crysta or luxury SUV), inter-state taxes, toll charges, fuel, and driver boarding across your full circuit.',
  },
  {
    component: 'Private Guides & Historians',
    share: '8% – 12%',
    range: '$50 – $100 per full day guide',
    details: 'Vetted, government-approved guides in Jaipur, Jodhpur, Udaipur, and Jaisalmer who offer deep historical depth without tourist traps or pressured shopping stops.',
  },
  {
    component: 'Activities & Unique Experiences',
    share: '10% – 15%',
    range: '$60 – $450 per experience',
    details: 'Includes luxury Thar Desert glamping, Ranthambore private tiger safaris, Jaipur sunrise balloon rides, Lake Pichola private solar-boat charters, and royal cooking masterclasses.',
  },
  {
    component: 'Monument Entries & Camera Fees',
    share: '3% – 5%',
    range: '$100 – $190 total per person',
    details: 'International visitor tickets to Amber Fort, Mehrangarh Fort, City Palaces, Jantar Mantar, and cenotaphs.',
  },
];

const faqItems = [
  {
    q: 'Why do luxury Rajasthan tour prices vary between October and April?',
    a: 'October to March is peak luxury season in Rajasthan with idyllic daytime temperatures of 20°C–28°C. Palace hotels and luxury safari lodges frequently charge high-season rates, particularly around Christmas, New Year, and festival weeks. Visiting in October, late February, or March offers pleasant weather with 20–30% hotel savings.',
  },
  {
    q: 'What is included in a Dune Explorer luxury tour quote?',
    a: 'Our quotes are comprehensive and transparent. They include all handpicked luxury accommodations, daily breakfast, private chauffeur-driven vehicle with fuel and permits, licensed local city guides, private boat cruises, camel safaris, and concierge assistance. International flights and personal visa expenses are excluded.',
  },
  {
    q: 'Can a luxury Rajasthan tour be customized to a specific budget?',
    a: 'Yes. Every itinerary at Dune Explorer is custom-built. We frequently combine iconic palace stays for 2–3 nights with high-end boutique heritage properties on other nights to deliver maximum luxury while respecting your target budget.',
  },
  {
    q: 'Is tipping and driver boarding included in the cost?',
    a: 'Driver accommodation and daily meal allowances are 100% handled by Dune Explorer so you never have to worry about driver logistics. Tipping for drivers and guides is voluntary and typically ranges from $15–$25 per day based on your satisfaction.',
  },
  {
    q: 'Are private guides worth the extra cost over audio tours?',
    a: 'Without question. Rajasthan\'s palaces have 500+ years of living history, secret courtyard architecture, and royal anecdotes that audio guides miss. A private guide also coordinates seamless VIP entry, bypasses queues, and customizes explanations to your pace.',
  },
];

const LuxuryTourCost = () => {
  usePageMeta({
    title: 'How Much Does a Luxury Rajasthan Tour Cost Per Person? | Dune Explorer',
    description:
      'See typical price ranges for a luxury Rajasthan tour per person, from hotels to guides and transfers. Read the breakdown and set your budget.',
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
          alt="Luxury Rajasthan Palace Stays and Tours"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>How Much Does a Luxury Rajasthan Tour Cost Per Person?</h1>
          <p className="guide-hero-sub">
            A transparent cost breakdown for discerning travelers worldwide: from iconic palace hotels to private chauffeurs and royal experiences.
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
            <span>Rajasthan Tour Cost</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 8 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Updated for 2026 Season</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            {/* Article Column */}
            <article className="guide-article">
              <p className="guide-lead">
                Planning a luxury holiday to Rajasthan is one of the most rewarding travel investments you will ever make. However, because Rajasthan offers everything from charming boutique havelis to suites once occupied by Maharajas, pricing can feel opaque.
              </p>

              <h2>Realistic Price Ranges at a Glance</h2>
              <p>
                On average, an authentic, high-end private journey through Rajasthan costs between <strong>$360 and $1,100 per person per day</strong> based on double occupancy.
              </p>

              {/* Pricing Cards */}
              <div className="pricing-tiers-grid">
                {pricingTiers.map((tier, idx) => (
                  <div key={idx} className={`tier-card ${tier.featured ? 'featured' : ''}`}>
                    <span className="tier-badge">{tier.badge}</span>
                    <h3 className="tier-title">{tier.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '0.5rem' }}>
                      {tier.description}
                    </p>
                    <div className="tier-price-box">
                      <div className="tier-price-main">{tier.priceUsd}</div>
                      <span className="tier-price-sub">{tier.perDay}</span>
                    </div>
                    <ul className="tier-features">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <Check size={16} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/plan-journey"
                      className={`btn ${tier.featured ? 'btn-primary' : 'btn-outline'}`}
                      style={{ textAlign: 'center', marginTop: 'auto' }}
                    >
                      Enquire For This Tier
                    </Link>
                  </div>
                ))}
              </div>

              <h2>Where Does Your Budget Go? Component Breakdown</h2>
              <p>
                To understand where your money goes when booking a luxury tour across Jaipur, Jodhpur, Udaipur, and Jaisalmer, here is how a typical trip expenditure is distributed:
              </p>

              <div className="guide-table-wrap">
                <table className="guide-table">
                  <thead>
                    <tr>
                      <th>Cost Component</th>
                      <th>% of Total Budget</th>
                      <th>Typical Price Range</th>
                      <th>What Is Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costBreakdownItems.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.component}</strong></td>
                        <td><span style={{ color: 'var(--color-maroon)', fontWeight: 600 }}>{item.share}</span></td>
                        <td>{item.range}</td>
                        <td>{item.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Sample 10-Day Luxury Itinerary Cost Scenario</h2>
              <p>
                For a classic 10-day Golden Triangle & Royal Rajasthan tour (Delhi – Agra – Jaipur – Jodhpur – Udaipur) for 2 adults during peak season:
              </p>

              <div className="guide-callout">
                <h4>Estimated Cost for 2 Persons (Double Occupancy)</h4>
                <p>
                  <strong>Grand Royal Palace Tier:</strong> Approx. <strong>$14,000 – $19,000 total ($7,000 – $9,500 per person)</strong>.
                  Includes 9 nights in 5-star palace hotels (e.g. Taj Lake Palace & Rambagh Palace), private Innova Crysta with chauffeur throughout, all private city guides, Lake Pichola sunset cruise, and monument admissions.
                </p>
              </div>

              <h2>Key Factors That Influence Your Tour Cost</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
                <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.2rem' }}>
                  <h4 style={{ color: 'var(--color-maroon)', marginBottom: '0.4rem' }}>1. Season of Travel</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-dim)' }}>
                    Mid-October to March commands peak rates. Traveling in late September or April offers dramatic hotel savings up to 35%.
                  </p>
                </div>
                <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.2rem' }}>
                  <h4 style={{ color: 'var(--color-maroon)', marginBottom: '0.4rem' }}>2. Palace Category</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-dim)' }}>
                    Mixing 3 nights in an iconic Taj or Oberoi palace with 6 nights in boutique royal fortresses optimizes both charm and value.
                  </p>
                </div>
                <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border-card)', borderRadius: '10px', padding: '1.2rem' }}>
                  <h4 style={{ color: 'var(--color-maroon)', marginBottom: '0.4rem' }}>3. Group Size</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-dim)' }}>
                    Private chauffeur and guide costs remain fixed whether you are 2 or 4 people, reducing per-person cost for families or friends.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions About Rajasthan Tour Costs</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {faqItems.map((item, idx) => {
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
                <h3>Receive a Tailored Quote</h3>
                <p>
                  Share your dream destinations, dates, and preferred comfort tier. Our Rajasthan travel specialists will deliver a transparent, itemized itinerary within 24 hours.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Plan Your Journey
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20would%20like%20a%20cost%20estimate%20for%20a%20luxury%20Rajasthan%20tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Chat with an Expert
                </a>
              </div>

              {/* Table of Contents */}
              <div className="sidebar-card sidebar-toc">
                <h4>Inside This Guide</h4>
                <ul>
                  <li><a href="#realistic-prices">Price Ranges at a Glance</a></li>
                  <li><a href="#component-breakdown">Where Your Budget Goes</a></li>
                  <li><a href="#sample-itinerary">10-Day Cost Scenario</a></li>
                  <li><a href="#cost-factors">Key Factors Influencing Cost</a></li>
                  <li><a href="#faqs">Pricing FAQs</a></li>
                </ul>
              </div>

              {/* Related Guide Link */}
              <div className="sidebar-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: 0, marginBottom: '0.4rem' }}>
                  Best Time to Visit Rajasthan
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                  Learn how hotel rates and weather fluctuate month by month across the royal state.
                </p>
                <Link to="/best-time-to-visit-rajasthan" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read the Season Guide <ArrowRight size={15} />
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
            Plan Your Rajasthan Luxury Experience
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-dim)', maxWidth: 640, margin: '0.5rem auto 2rem' }}>
            Explore curated itineraries, destination guides, and authentic cultural experiences designed by Dune Explorer.
          </p>

          <div className="related-guides-grid">
            <Link to="/best-time-to-visit-rajasthan" className="related-card">
              <img src="/images/jodhpur-fort.webp" alt="Jodhpur Fort Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Best Time to Visit Rajasthan for Luxury Travel</h3>
                <span className="related-card-tag">Seasonal Planning</span>
                <p className="related-card-desc">Month-by-month guide to weather, festivals, palace rates, and tiger safaris.</p>
                <span className="related-card-link">Explore Guide <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/destinations" className="related-card">
              <img src="/images/jaipur/DSC_8153-01.jpeg" alt="Jaipur Palace and Forts" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Royal Cities: Jaipur, Jodhpur & Udaipur</h3>
                <span className="related-card-tag">Destinations</span>
                <p className="related-card-desc">Discover the forts, royal lakes, and desert bastions that define regal Rajasthan.</p>
                <span className="related-card-link">View Destinations <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/experiences" className="related-card">
              <img src="/images/jaisalmer-dunes.jpg" alt="Thar Desert Jaisalmer" className="related-card-img" />
              <div className="related-card-body">
                <h3 className="related-card-title">Signature Desert & Heritage Journeys</h3>
                <span className="related-card-tag">Experiences</span>
                <p className="related-card-desc">Private camel treks, royal dining in ancient courtyards, and local artisan walks.</p>
                <span className="related-card-link">View Experiences <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryTourCost;
