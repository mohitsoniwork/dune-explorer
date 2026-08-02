import { Link } from 'react-router-dom';

const StickyMobileCta = () => (
  <div className="sticky-mobile-cta">
    <Link to="/plan-journey" className="btn btn-primary">
      Plan Your Journey
    </Link>
    <a
      href="https://wa.me/916375060566"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline"
    >
      WhatsApp
    </a>
  </div>
);

export default StickyMobileCta;
