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

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)">
              <XIcon />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/destinations">Destinations</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/about">About Us</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/plan-journey">Plan Your Journey</Link>
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
          <p>Email: info@dunexplore.com</p>
          <p>Phone: +91 63750 60566</p>
          <a href="https://wa.me/916375060566" target="_blank" rel="noopener noreferrer" className="btn btn-outline whatsapp-btn">
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
