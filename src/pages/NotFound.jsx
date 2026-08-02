import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  usePageMeta({
    title: 'Page Not Found | Dune Explorer',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <div className="not-found">
      <div className="container not-found-inner">
        <Compass size={56} className="not-found-icon" aria-hidden="true" />
        <h1>Lost in the Dunes</h1>
        <p>We couldn't find the page you're looking for.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
