import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo-box">
            <img src="/logo.png" alt="Dune Explorer" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">Beyond Travel, Into Experience</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/dune_explore?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/destinations">Destinations</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/about">About Us</Link>
            <Link to="/plan-journey">Plan Your Journey</Link>
          </div>
          <div className="footer-column">
            <h3>Guides</h3>
            <Link to="/guides">All Travel Guides Hub</Link>
            <Link to="/luxury-rajasthan-tour-packages-usa">US Tour Packages</Link>
            <Link to="/luxury-rajasthan-tour-packages-uk">UK Tour Packages</Link>
            <Link to="/luxury-rajasthan-tour-packages-australia">Australia Packages</Link>
            <Link to="/luxury-rajasthan-tour-packages-japan">Japan Packages</Link>
            <Link to="/10-day-luxury-rajasthan-itinerary">10-Day Luxury Route</Link>
            <Link to="/rajasthan-palace-hotel-itinerary">Palace Hotels Guide</Link>
            <Link to="/luxury-jaisalmer-desert-camps">Desert Camps Guide</Link>
            <Link to="/luxury-ranthambore-tiger-safari">Tiger Safari Guide</Link>
            <Link to="/rajasthan-luxury-honeymoon">Honeymoon Tours</Link>
            <Link to="/palace-on-wheels-vs-royal-rajasthan">Luxury Trains Guide</Link>
            <Link to="/private-rajasthan-tour-driver-guide">Driver &amp; Guide Info</Link>
            <Link to="/luxury-rajasthan-tour-cost">Tour Cost Guide</Link>
            <Link to="/best-time-to-visit-rajasthan">Best Time to Visit</Link>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/payment-policy">Payment Policy</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@duneexplorer.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@duneexplorer.com</a></p>
          <p>Phone: +91 63750 60566</p>
          <a href="https://wa.me/916375060566" target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
            <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Dune Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
