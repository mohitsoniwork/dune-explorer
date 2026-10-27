import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Compass, Sparkles } from 'lucide-react';
import './Navbar.css';

const guidesList = [
  {
    to: '/10-day-luxury-rajasthan-itinerary',
    label: '10-Day Classic Itinerary',
    tag: 'Flagship',
    desc: 'Delhi, Agra, Jaipur, Jodhpur & Udaipur',
  },
  {
    to: '/rajasthan-palace-hotel-itinerary',
    label: 'Palace Hotels & Stays',
    tag: 'Palaces',
    desc: 'Taj Lake Palace, Rambagh & Umaid Bhawan',
  },
  {
    to: '/luxury-rajasthan-tour-cost',
    label: 'Luxury Tour Cost Guide',
    tag: 'Pricing',
    desc: 'Price tiers, driver costs & VIP tickets',
  },
  {
    to: '/best-time-to-visit-rajasthan',
    label: 'Best Time to Visit',
    tag: 'Seasons',
    desc: 'Climate, wildlife seasons & festivals',
  },
  {
    to: '/luxury-jaisalmer-desert-camps',
    label: 'Thar Desert Luxury Camps',
    tag: 'Glamping',
    desc: 'SUJÁN The Serai & private dune camps',
  },
  {
    to: '/luxury-ranthambore-tiger-safari',
    label: 'Ranthambore Tiger Safari',
    tag: 'Wildlife',
    desc: 'Private 4x4 Gypsy & Aman-i-Khás',
  },
  {
    to: '/rajasthan-luxury-honeymoon',
    label: 'Royal Honeymoon Tour',
    tag: 'Romance',
    desc: 'Candlelit lakes, palaces & desert stars',
  },
  {
    to: '/palace-on-wheels-vs-royal-rajasthan',
    label: 'Palace on Wheels & Trains',
    tag: 'Rail',
    desc: 'Heritage train suites & routes compared',
  },
  {
    to: '/private-rajasthan-tour-driver-guide',
    label: 'Private Chauffeur Guide',
    tag: 'Chauffeur',
    desc: 'Vetted drivers, fleet & road etiquette',
  },
  {
    to: '/luxury-rajasthan-tour-packages-uk',
    label: 'UK & Overseas Packages',
    tag: 'Global',
    desc: 'Direct flights, visas & VIP arrival',
  },
];

const transparentHeroRoutes = [
  '/',
  '/destinations',
  '/experiences',
  '/stories',
  '/blog',
  '/about',
  '/guides',
  '/10-day-luxury-rajasthan-itinerary',
  '/rajasthan-palace-hotel-itinerary',
  '/luxury-rajasthan-tour-cost',
  '/best-time-to-visit-rajasthan',
  '/luxury-jaisalmer-desert-camps',
  '/luxury-ranthambore-tiger-safari',
  '/rajasthan-luxury-honeymoon',
  '/palace-on-wheels-vs-royal-rajasthan',
  '/private-rajasthan-tour-driver-guide',
  '/luxury-rajasthan-tour-packages-uk',
  '/luxury-rajasthan-tour-packages-usa',
  '/luxury-rajasthan-tour-packages-australia',
  '/luxury-rajasthan-tour-packages-japan',
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);

  const guidesTimeoutRef = useRef(null);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close menus on route change
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
    setIsGuidesOpen(false);
    setMobileGuidesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleGuidesMouseEnter = () => {
    if (guidesTimeoutRef.current) clearTimeout(guidesTimeoutRef.current);
    setIsGuidesOpen(true);
  };

  const handleGuidesMouseLeave = () => {
    guidesTimeoutRef.current = setTimeout(() => {
      setIsGuidesOpen(false);
    }, 180);
  };

  const hasHero =
    transparentHeroRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/styles/') ||
    location.pathname.startsWith('/experience/');

  // When on top of hero pages: transparent blended navbar. When scrolled: solid luxury dark navbar.
  const isTransparent = !isScrolled && hasHero && !isOpen;
  const isGuidesActive =
    location.pathname === '/guides' ||
    guidesList.some((g) => location.pathname === g.to);

  return (
    <header
      className={`navbar ${isTransparent ? 'navbar-transparent' : 'navbar-scrolled'} ${
        isOpen ? 'mobile-open' : ''
      }`}
    >
      <div className="container navbar-container">
        {/* Left: Brand Logo */}
        <div className="navbar-logo-col">
          <Link to="/" className="navbar-logo" aria-label="Dune Explorer — home">
            <img src="/logo.png" alt="Dune Explorer" className="navbar-logo-img" />
          </Link>
        </div>

        {/* Center: Main Navigation Tabs (Perfect Middle Centering) */}
        <nav className={`navbar-center-col ${isOpen ? 'active' : ''}`} id="main-nav" aria-label="Main navigation">
          <div className="navbar-nav-list">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/destinations"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </NavLink>

            <NavLink
              to="/experiences"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Experiences
            </NavLink>

            <NavLink
              to="/stories"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Stories
            </NavLink>

            {/* Guides (2nd Last Position) with Dropdown */}
            <div
              className={`nav-dropdown-item ${isGuidesOpen ? 'dropdown-open' : ''} ${isGuidesActive ? 'active' : ''}`}
              onMouseEnter={handleGuidesMouseEnter}
              onMouseLeave={handleGuidesMouseLeave}
            >
              <div className="nav-dropdown-trigger-row">
                <NavLink
                  to="/guides"
                  className={({ isActive }) => `nav-link nav-link-dropdown ${isActive || isGuidesActive ? 'active' : ''}`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsGuidesOpen(false);
                  }}
                >
                  Guides
                  <ChevronDown size={14} className={`dropdown-chevron ${isGuidesOpen || mobileGuidesOpen ? 'rotated' : ''}`} />
                </NavLink>

                {/* Mobile accordion toggle button */}
                <button
                  type="button"
                  className="mobile-dropdown-toggle-btn"
                  aria-label="Toggle guides menu"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileGuidesOpen(!mobileGuidesOpen);
                  }}
                >
                  <ChevronDown size={18} className={`chevron-mobile ${mobileGuidesOpen ? 'rotated' : ''}`} />
                </button>
              </div>

              {/* Desktop Mega Dropdown Menu */}
              <div className={`nav-dropdown-menu ${isGuidesOpen ? 'visible' : ''}`}>
                <div className="dropdown-menu-inner">
                  <div className="dropdown-menu-header">
                    <div className="dropdown-header-title">
                      <Sparkles size={14} />
                      <span>Luxury Rajasthan Travel Guides</span>
                    </div>
                    <Link
                      to="/guides"
                      className="dropdown-view-all-link"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      Explore all guides
                    </Link>
                  </div>

                  <div className="dropdown-grid">
                    <div className="dropdown-column">
                      <span className="dropdown-col-title">Itineraries & Palace Stays</span>
                      {guidesList.slice(0, 5).map((guide) => (
                        <Link
                          key={guide.to}
                          to={guide.to}
                          className="dropdown-guide-item"
                          onClick={() => setIsGuidesOpen(false)}
                        >
                          <div className="dropdown-guide-text">
                            <span className="dropdown-guide-label">{guide.label}</span>
                            <span className="dropdown-guide-desc">{guide.desc}</span>
                          </div>
                          <span className="dropdown-guide-tag">{guide.tag}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-column">
                      <span className="dropdown-col-title">Safaris, Costs & Logistics</span>
                      {guidesList.slice(5, 10).map((guide) => (
                        <Link
                          key={guide.to}
                          to={guide.to}
                          className="dropdown-guide-item"
                          onClick={() => setIsGuidesOpen(false)}
                        >
                          <div className="dropdown-guide-text">
                            <span className="dropdown-guide-label">{guide.label}</span>
                            <span className="dropdown-guide-desc">{guide.desc}</span>
                          </div>
                          <span className="dropdown-guide-tag">{guide.tag}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="dropdown-footer-bar">
                    <Link
                      to="/guides"
                      className="dropdown-footer-cta"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      <span>Explore all 10 curated luxury guides & season itineraries</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Drawer Submenu */}
              <div className={`mobile-submenu ${mobileGuidesOpen ? 'open' : ''}`}>
                <Link
                  to="/guides"
                  className="mobile-submenu-all-link"
                  onClick={() => setIsOpen(false)}
                >
                  <Compass size={16} />
                  <span>All Guides Hub</span>
                </Link>
                {guidesList.map((guide) => (
                  <Link
                    key={guide.to}
                    to={guide.to}
                    className="mobile-submenu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{guide.label}</span>
                    <span className="mobile-item-tag">{guide.tag}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* About (Last Nav Tab) */}
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            {/* Mobile Drawer Bottom CTA */}
            <div className="mobile-drawer-cta">
              <Link
                to="/plan-journey"
                className="btn btn-primary nav-cta-pill"
                onClick={() => setIsOpen(false)}
              >
                Plan Journey
              </Link>
            </div>
          </div>
        </nav>

        {/* Right: CTA Button & Mobile Menu Toggle */}
        <div className="navbar-action-col">
          <Link to="/plan-journey" className="btn btn-primary nav-cta-pill desktop-only">
            Plan Journey
          </Link>

          <button
            className="mobile-menu-btn"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="main-nav"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
