import { Link } from 'react-router-dom';

const StickyMobileCta = () => (
  <div className="sticky-mobile-cta" role="region" aria-label="Quick actions">
    <Link to="/plan-journey" className="btn btn-primary">
      Plan Your Journey
    </Link>
    <Link to="/contact" className="btn btn-outline">
      Contact Us
    </Link>
  </div>
);

export default StickyMobileCta;
