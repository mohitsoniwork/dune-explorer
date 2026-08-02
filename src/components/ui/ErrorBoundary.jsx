import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="container error-boundary-inner">
            <AlertTriangle size={56} className="error-boundary-icon" aria-hidden="true" />
            <h1>Something Went Wrong</h1>
            <p>
              An unexpected error occurred while rendering this page. Please try refreshing, or
              head back home.
            </p>
            <Link
              to="/"
              className="btn btn-primary"
              onClick={() => this.setState({ hasError: false })}
            >
              Back to Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
