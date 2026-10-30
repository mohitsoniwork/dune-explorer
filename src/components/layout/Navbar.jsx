import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const destinationsList = [
  { to: '/destinations#jaipur', label: 'Jaipur' },
  { to: '/destinations#udaipur', label: 'Udaipur' },
  { to: '/destinations#jodhpur', label: 'Jodhpur' },
  { to: '/destinations#jaisalmer', label: 'Jaisalmer' },
  { to: '/destinations#ranthambore', label: 'Ranthambore' },
  { to: '/destinations#pushkar', label: 'Pushkar' },
  { to: '/destinations', label: 'All Destinations', isAll: true },
];

const experiencesList = [
  { to: '/experience/1', label: 'Royal Jaipur' },
  { to: '/experience/2', label: 'Jaisalmer Safari' },
  { to: '/experience/3', label: 'Udaipur Luxury' },
  { to: '/styles/desert', label: 'Desert Adventures' },
  { to: '/styles/wildlife', label: 'Wildlife & Safari' },
  { to: '/styles/heritage', label: 'Heritage & Palaces' },
  { to: '/styles/luxury', label: 'Luxury Escapes' },
  { to: '/experiences', label: 'All Experiences', isAll: true },
];

const guidesList = [
  { to: '/10-day-luxury-rajasthan-itinerary', label: '10-Day Classic Itinerary' },
  { to: '/rajasthan-palace-hotel-itinerary', label: 'Palace Hotels & Stays' },
  { to: '/luxury-rajasthan-tour-cost', label: 'Tour Cost Guide' },
  { to: '/best-time-to-visit-rajasthan', label: 'Best Time to Visit' },
  { to: '/luxury-jaisalmer-desert-camps', label: 'Desert Luxury Camps' },
  { to: '/luxury-ranthambore-tiger-safari', label: 'Tiger Safari Guide' },
  { to: '/rajasthan-luxury-honeymoon', label: 'Royal Honeymoon' },
  { to: '/palace-on-wheels-vs-royal-rajasthan', label: 'Luxury Trains' },
  { to: '/private-rajasthan-tour-driver-guide', label: 'Private Chauffeur' },
  { to: '/luxury-rajasthan-tour-packages-uk', label: 'International Tours' },
  { to: '/guides', label: 'All Travel Guides', isAll: true },
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

  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const destinationsTimeoutRef = useRef(null);

  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
  const [mobileExperiencesOpen, setMobileExperiencesOpen] = useState(false);
  const experiencesTimeoutRef = useRef(null);

  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const guidesTimeoutRef = useRef(null);

  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close menus on route change
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
    setIsDestinationsOpen(false);
    setMobileDestinationsOpen(false);
    setIsExperiencesOpen(false);
    setMobileExperiencesOpen(false);
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
    if (isOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-nav-open');
    };
  }, [isOpen]);

  const handleDestinationsMouseEnter = () => {
    if (destinationsTimeoutRef.current) clearTimeout(destinationsTimeoutRef.current);
    setIsDestinationsOpen(true);
    setIsExperiencesOpen(false);
    setIsGuidesOpen(false);
  };

  const handleDestinationsMouseLeave = () => {
    destinationsTimeoutRef.current = setTimeout(() => {
      setIsDestinationsOpen(false);
    }, 180);
  };

  const handleExperiencesMouseEnter = () => {
    if (experiencesTimeoutRef.current) clearTimeout(experiencesTimeoutRef.current);
    setIsExperiencesOpen(true);
    setIsDestinationsOpen(false);
    setIsGuidesOpen(false);
  };

  const handleExperiencesMouseLeave = () => {
    experiencesTimeoutRef.current = setTimeout(() => {
      setIsExperiencesOpen(false);
    }, 180);
  };

  const handleGuidesMouseEnter = () => {
    if (guidesTimeoutRef.current) clearTimeout(guidesTimeoutRef.current);
    setIsGuidesOpen(true);
    setIsDestinationsOpen(false);
    setIsExperiencesOpen(false);
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
  const isDestinationsActive = location.pathname === '/destinations';
  const isExperiencesActive =
    location.pathname === '/experiences' ||
    location.pathname.startsWith('/experience/') ||
    location.pathname.startsWith('/styles/');
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

            {/* Destinations Dropdown */}
            <div
              className={`nav-dropdown-item dropdown-destinations ${isDestinationsOpen ? 'dropdown-open' : ''} ${isDestinationsActive ? 'active' : ''}`}
              onMouseEnter={handleDestinationsMouseEnter}
              onMouseLeave={handleDestinationsMouseLeave}
            >
              <div className="nav-dropdown-trigger-row">
                <NavLink
                  to="/destinations"
                  className={({ isActive }) => `nav-link nav-link-dropdown ${isActive || isDestinationsActive ? 'active' : ''}`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsDestinationsOpen(false);
                  }}
                >
                  Destinations
                  <ChevronDown size={14} className={`dropdown-chevron ${isDestinationsOpen || mobileDestinationsOpen ? 'rotated' : ''}`} />
                </NavLink>

                <button
                  type="button"
                  className="mobile-dropdown-toggle-btn"
                  aria-label="Toggle destinations menu"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileDestinationsOpen(!mobileDestinationsOpen);
                  }}
                >
                  <ChevronDown size={18} className={`chevron-mobile ${mobileDestinationsOpen ? 'rotated' : ''}`} />
                </button>
              </div>

              {/* Desktop Sleek Dropdown */}
              <div className={`nav-simple-dropdown ${isDestinationsOpen ? 'visible' : ''}`}>
                <div className="nav-simple-menu-inner">
                  {destinationsList.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`nav-simple-item ${item.isAll ? 'nav-simple-all' : ''}`}
                      onClick={() => setIsDestinationsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Submenu */}
              <div className={`mobile-submenu ${mobileDestinationsOpen ? 'open' : ''}`}>
                {destinationsList.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="mobile-submenu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Experiences Dropdown */}
            <div
              className={`nav-dropdown-item dropdown-experiences ${isExperiencesOpen ? 'dropdown-open' : ''} ${isExperiencesActive ? 'active' : ''}`}
              onMouseEnter={handleExperiencesMouseEnter}
              onMouseLeave={handleExperiencesMouseLeave}
            >
              <div className="nav-dropdown-trigger-row">
                <NavLink
                  to="/experiences"
                  className={({ isActive }) => `nav-link nav-link-dropdown ${isActive || isExperiencesActive ? 'active' : ''}`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsExperiencesOpen(false);
                  }}
                >
                  Experiences
                  <ChevronDown size={14} className={`dropdown-chevron ${isExperiencesOpen || mobileExperiencesOpen ? 'rotated' : ''}`} />
                </NavLink>

                <button
                  type="button"
                  className="mobile-dropdown-toggle-btn"
                  aria-label="Toggle experiences menu"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileExperiencesOpen(!mobileExperiencesOpen);
                  }}
                >
                  <ChevronDown size={18} className={`chevron-mobile ${mobileExperiencesOpen ? 'rotated' : ''}`} />
                </button>
              </div>

              {/* Desktop Sleek Dropdown */}
              <div className={`nav-simple-dropdown ${isExperiencesOpen ? 'visible' : ''}`}>
                <div className="nav-simple-menu-inner">
                  {experiencesList.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`nav-simple-item ${item.isAll ? 'nav-simple-all' : ''}`}
                      onClick={() => setIsExperiencesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Submenu */}
              <div className={`mobile-submenu ${mobileExperiencesOpen ? 'open' : ''}`}>
                {experiencesList.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="mobile-submenu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/stories"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Stories
            </NavLink>

            {/* Guides (2nd Last Position) with Dropdown */}
            <div
              className={`nav-dropdown-item dropdown-guides ${isGuidesOpen ? 'dropdown-open' : ''} ${isGuidesActive ? 'active' : ''}`}
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

              {/* Desktop Sleek Dropdown */}
              <div className={`nav-simple-dropdown ${isGuidesOpen ? 'visible' : ''}`}>
                <div className="nav-simple-menu-inner">
                  {guidesList.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`nav-simple-item ${item.isAll ? 'nav-simple-all' : ''}`}
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Submenu */}
              <div className={`mobile-submenu ${mobileGuidesOpen ? 'open' : ''}`}>
                {guidesList.map((guide) => (
                  <Link
                    key={guide.to}
                    to={guide.to}
                    className="mobile-submenu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{guide.label}</span>
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
