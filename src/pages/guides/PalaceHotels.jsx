import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Star, Clock, Calendar, MessageCircle, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import './GuidePages.css';

const grandPalaces = [
  {
    name: 'Taj Lake Palace',
    city: 'Udaipur',
    tag: 'The Floating White Marble Marvel',
    price: '$850 – $1,800+ / night',
    description: 'Built in 1746 by Maharana Jagat Singh II as a pleasure palace, this white marble jewel floats majestically on Lake Pichola. Accessible only by private royal boat, every room features lake views and antique fresco details.',
    splurgeTip: 'Book a Palace Room Lake View or Grand Royal Suite. Sunset drinks on the rooftop overlooking City Palace are unmissable.',
    highlights: ['Arrive by private ceremonial boat', 'Jiva Spa boat treatments on Lake Pichola', 'Rooftop dining at Bhairo with lake breezes', 'Only accessible to resident hotel guests'],
  },
  {
    name: 'Rambagh Palace',
    city: 'Jaipur',
    tag: 'The Jewel of Jaipur & Former Royal Residence',
    price: '$780 – $1,750+ / night',
    description: 'The former official residence of Maharaja Sawai Man Singh II and Maharani Gayatri Devi. Sprawling across 47 acres of Mughal gardens with peacocks roaming freely, Rambagh is widely regarded as one of the world\'s finest heritage hotels.',
    splurgeTip: 'Dine in Suvarna Mahal under enormous crystal chandeliers and gold-leaf ceilings, served on gold-plated tableware.',
    highlights: ['Vintage car arrival drive', 'Polo bar with royal memorabilia', 'Peacock gardens & indoor marble pool', 'Butler service steeped in Rajput courtly hospitality'],
  },
  {
    name: 'Umaid Bhawan Palace',
    city: 'Jodhpur',
    tag: 'Art Deco Grandeur & Living Royal Home',
    price: '$900 – $1,950+ / night',
    description: 'One of the world\'s largest private residences, part of which is still occupied by the current Maharaja of Jodhpur. Built from golden Chittar sandstone with a dramatic 105-foot cupola and opulent Art Deco and Indo-Saracenic interiors.',
    splurgeTip: 'Opt for a Palace Room with views of the peacock gardens or a Historical Suite. Explore the private royal museum on the palace grounds.',
    highlights: ['World-class Art Deco subterranean subterranean Zodiac pool', 'Private vintage car collection on display', 'Spectacular sunset terrace overlooking Mehrangarh Fort', 'Direct connection with living royal family legacy'],
  },
  {
    name: 'Suryagarh',
    city: 'Jaisalmer',
    tag: 'Fortress Luxury in the Thar Desert',
    price: '$360 – $850 / night',
    description: 'A contemporary fortress crafted from golden sandstone that evokes the grandeur of medieval desert kingdoms. Suryagarh sits on the gateway to the Thar Desert, offering royal courtyard banquets, desert breakfasts, and falconry experiences.',
    splurgeTip: 'Book the Thar Haveli or Signature Suite. Take part in their bespoke \'Breakfast with Peacocks\' at sunrise.',
    highlights: ['Starlit courtyard musical soirees', 'Private Halwai culinary breakfast spread', 'Bespoke desert exploration excursions', 'Opulent indoor heated pool (Rait)'],
  },
];

const boutiqueForts = [
  {
    name: 'Samode Palace',
    city: 'Near Jaipur',
    price: '$340 – $580 / night',
    desc: 'A 475-year-old palace nestled in the rugged Aravalli hills with breath-taking mirror-work hall (Sheesh Mahal) and tiered courtyards.',
  },
  {
    name: 'Rawla Narlai',
    city: 'Aravalli Hills (Near Ranakpur)',
    price: '$230 – $440 / night',
    desc: 'A restored 17th-century royal hunting lodge famous for its dramatic 1,000-lamp stepwell dinner in the countryside.',
  },
  {
    name: 'Rohet Garh',
    city: 'Near Jodhpur',
    price: '$220 – $400 / night',
    desc: 'The ancestral home of the Rathore nobility, set around tranquil peacocks, equestrian safaris, and pioneering culinary workshops.',
  },
];

const palaceFaqs = [
  {
    q: 'Which palace hotel in Rajasthan is the absolute best for couples?',
    a: 'Taj Lake Palace in Udaipur is widely considered the most romantic hotel in the world. Arriving by private royal boat across Lake Pichola, dining on the open-air marble rooftop, and waking up surrounded by tranquil water makes it the top choice for honeymoons and romantic celebrations.',
  },
  {
    q: 'How far in advance should I book Rajasthan palace hotels?',
    a: 'For travel during the peak season (October to March) — particularly November, December, and January — palace hotel inventory is limited and high-tier suites sell out 4 to 6 months in advance. Booking early guarantees preferred room categories and best contractual rates.',
  },
  {
    q: 'Is it worth mixing 5-star palace hotels with boutique heritage forts?',
    a: 'Yes! In fact, we highly recommend it. Balancing 3 or 4 nights in iconic landmark palaces (like Rambagh Palace and Taj Lake Palace) with 3 or 4 nights in intimate rural forts (like Samode Palace or Rawla Narlai) gives you both grand opulence and intimate countryside peace while optimizing your total trip budget.',
  },
  {
    q: 'Do palace hotels enforce a dress code?',
    a: 'During the day, smart casual travel attire is welcome. In the evening, fine-dining restaurants such as Suvarna Mahal (Rambagh Palace) request smart-elegant attire (collared shirts, jackets or smart attire for gentlemen; elegant evening wear for ladies).',
  },
];

const PalaceHotels = () => {
  usePageMeta({
    title: 'Stay Like Royalty: The Best Palace Hotels on a Rajasthan Tour | Dune Explorer',
    description:
      'Discover which Rajasthan palace hotels are worth the splurge, with room tips and route ideas. Read the guide and plan your royal stay.',
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
          alt="Luxury Rajasthan Palace Hotels"
          className="guide-hero-img"
        />
        <div className="guide-hero-overlay"></div>
        <motion.div
          className="guide-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="guide-badge">Heritage Hospitality</span>
          <h1>Stay Like Royalty: The Best Palace Hotels on a Rajasthan Tour</h1>
          <p className="guide-hero-sub">
            From floating lake palaces to sprawling desert bastions — an insider guide to the iconic properties worth the splurge, with room recommendations and route blueprints.
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
            <span>Palace Hotels Guide</span>
          </div>
          <div className="guide-meta-info">
            <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> 10 min read</span>
            <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Curated Heritage Collection</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="guide-content-section">
        <div className="container">
          <div className="guide-layout">
            <article className="guide-article">
              <p className="guide-lead">
                Rajasthan has what no other destination in the world can replicate: genuine living palaces converted into world-class luxury hotels. Sleeping in suites where Maharajas once held court, walked by courtiers and honored guests, is the very essence of luxury travel in India.
              </p>

              <h2>The 'Big Four' Grand Palaces Worth the Splurge</h2>
              <p>
                If you are creating a once-in-a-lifetime journey, these four legendary palace properties deliver unmatched grandeur, architectural wonder, and white-glove hospitality:
              </p>

              <div className="property-reviews-list">
                {grandPalaces.map((palace, idx) => (
                  <div key={idx} className="property-card">
                    <div className="property-card-body">
                      <div className="property-top">
                        <h3 className="property-name">{palace.name}</h3>
                        <span className="property-location"><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 3 }} />{palace.city}</span>
                      </div>
                      <div className="property-price-hint">
                        {palace.tag} · <span style={{ color: 'var(--color-sand)' }}>{palace.price}</span>
                      </div>
                      <p style={{ fontSize: '0.94rem', color: '#444', lineHeight: 1.65 }}>
                        {palace.description}
                      </p>

                      <div className="property-features-pills">
                        {palace.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="prop-pill">{h}</span>
                        ))}
                      </div>

                      <div className="guide-callout" style={{ margin: '1rem 0 0', padding: '0.9rem 1.1rem' }}>
                        <strong style={{ color: 'var(--color-maroon)' }}>Insider Splurge Tip:</strong>{' '}
                        <span style={{ fontSize: '0.9rem' }}>{palace.splurgeTip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Intimate Boutique Forts & Havelis</h2>
              <p>
                In addition to the grand city palaces, rural Rajasthan is dotted with private forts owned by royal thakurs (nobles). These properties offer a deeply personal, peaceful countryside contrast:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
                {boutiqueForts.map((fort, idx) => (
                  <div key={idx} style={{ background: '#fff', border: '1px solid rgba(141, 90, 43, 0.16)', borderRadius: '10px', padding: '1.3rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-dark)', marginBottom: '0.2rem' }}>
                      {fort.name}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-sand)', fontWeight: 600 }}>{fort.city} · {fort.price}</span>
                    <p style={{ fontSize: '0.88rem', color: '#555', marginTop: '0.6rem', marginBottom: 0 }}>
                      {fort.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2>Sample 8-Night All-Palace Route Blueprint</h2>
              <div className="guide-table-wrap">
                <table className="guide-table">
                  <thead>
                    <tr>
                      <th>Nights</th>
                      <th>Destination</th>
                      <th>Featured Palace Property</th>
                      <th>Signature Royal Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nights 1–3</td>
                      <td>Jaipur</td>
                      <td><strong>Rambagh Palace</strong></td>
                      <td>Vintage car welcome & private dinner in gold-leaf Suvarna Mahal</td>
                    </tr>
                    <tr>
                      <td>Nights 4–5</td>
                      <td>Jodhpur</td>
                      <td><strong>Umaid Bhawan Palace</strong></td>
                      <td>Private tour of royal family museum & sunset drinks over Mehrangarh Fort</td>
                    </tr>
                    <tr>
                      <td>Night 6</td>
                      <td>Aravalli Valley</td>
                      <td><strong>Rawla Narlai</strong></td>
                      <td>1,000-lamp private stepwell banquet beneath the night sky</td>
                    </tr>
                    <tr>
                      <td>Nights 7–8</td>
                      <td>Udaipur</td>
                      <td><strong>Taj Lake Palace</strong></td>
                      <td>Private sunset solar-boat charter with champagne on Lake Pichola</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* FAQ Section */}
              <div className="guide-faq-section">
                <h2>Frequently Asked Questions About Palace Stays</h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {palaceFaqs.map((faq, idx) => {
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
                <h3>Design Your Palace Circuit</h3>
                <p>
                  Let us secure your preferred suite categories at India’s finest palaces with preferential partner amenities and VIP welcome privileges.
                </p>
                <Link to="/plan-journey" className="btn btn-primary sidebar-cta-btn">
                  Enquire Palace Itinerary
                </Link>
                <a
                  href="https://wa.me/916375060566?text=Hello%20Dune%20Explorer,%20I%20would%20like%20to%20plan%20a%20luxury%20Rajasthan%20palace%20hotel%20tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <MessageCircle size={17} /> Ask Suite Specialist
                </a>
              </div>

              <div className="sidebar-card">
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)' }}>
                  Total Trip Budget
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: '0.6rem', marginBottom: '0.4rem' }}>
                  Cost Breakdown Guide
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '1rem' }}>
                  Explore how palace suite costs combine with private chauffeurs and guides.
                </p>
                <Link to="/luxury-rajasthan-tour-cost" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Tour Costs <ArrowRight size={15} />
                </Link>
              </div>

              <div className="sidebar-card">
                <span className="guide-badge" style={{ color: 'var(--color-sand)', background: 'rgba(141, 90, 43, 0.1)', borderColor: 'rgba(141, 90, 43, 0.2)' }}>
                  Complete Circuit
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginTop: '0.6rem', marginBottom: '0.4rem' }}>
                  10-Day Royal Route
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '1rem' }}>
                  Follow the step-by-step route between Jaipur, Jodhpur, and Udaipur.
                </p>
                <Link to="/10-day-luxury-rajasthan-itinerary" style={{ color: 'var(--color-sand)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  View 10-Day Itinerary <ArrowRight size={15} />
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
            <Link to="/luxury-jaisalmer-desert-camps" className="related-card">
              <img src="/images/jaisalmer-dunes.jpg" alt="Luxury Jaisalmer Desert Camps" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Desert Glamping</span>
                <h3 className="related-card-title">Luxury Jaisalmer Desert Camp Stay</h3>
                <p className="related-card-desc">Where to sleep under the dunes with private luxury tents and starlit banquets.</p>
                <span className="related-card-link">Explore Camps <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/palace-on-wheels-vs-royal-rajasthan" className="related-card">
              <img src="/images/jaipur/DSC_0449.jpg" alt="Luxury Trains Rajasthan" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Luxury Rail</span>
                <h3 className="related-card-title">Palace on Wheels vs Royal Rajasthan</h3>
                <p className="related-card-desc">Side-by-side comparison of cabins, routes, dining, and pricing.</p>
                <span className="related-card-link">Compare Trains <ArrowRight size={15} /></span>
              </div>
            </Link>

            <Link to="/luxury-rajasthan-tour-cost" className="related-card">
              <img src="/images/jaipur/DSC_0038-01.jpeg" alt="Rajasthan Tour Cost" className="related-card-img" />
              <div className="related-card-body">
                <span className="related-card-tag">Pricing Guide</span>
                <h3 className="related-card-title">How Much Does a Luxury Rajasthan Tour Cost?</h3>
                <p className="related-card-desc">Real price ranges for palace hotels, chauffeur cars, and licensed guides.</p>
                <span className="related-card-link">Read Cost Breakdown <ArrowRight size={15} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PalaceHotels;
