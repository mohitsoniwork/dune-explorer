import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div style={{ background: 'white', display: 'inline-block', borderRadius: '8px', padding: '10px', marginBottom: '1.5rem' }}>
            <img src="/logo.png" alt="DuneXplore" style={{ height: '80px', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply', filter: 'brightness(1.1) contrast(1.2)' }} />
          </div>
          <p className="footer-tagline">Experience Rajasthan Beyond Tourism</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/experiences">Experiences</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Stories</Link>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/payment-policy">Payment Policy</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: hello@duneexplorer.com</p>
          <p>Phone: +91 98765 43210</p>
          <a href="https://wa.me/919876543210" className="btn btn-outline whatsapp-btn">
            <MessageCircle size={18} /> Chat on WhatsApp
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
