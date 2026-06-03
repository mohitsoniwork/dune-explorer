import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled || location.pathname !== '/' ? 'navbar scrolled' : 'navbar';

  return (
    <nav className={navClass}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '10px 20px', borderRadius: '12px' }}>
          <img src="/logo new.png" alt="DuneXplore" style={{ height: '100px', objectFit: 'contain', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }} />
        </Link>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/experiences" onClick={() => setIsMobileMenuOpen(false)}>Experiences</Link>
          <Link to="/destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</Link>
          <Link to="/plan-journey" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Plan Journey</Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
