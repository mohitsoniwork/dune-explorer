import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import SkipLink from './components/ui/SkipLink';
import Preloader from './components/ui/Preloader';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import StickyMobileCta from './components/ui/StickyMobileCta';
import ErrorBoundary from './components/ui/ErrorBoundary';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const PlanJourney = lazy(() => import('./pages/PlanJourney'));
const Destinations = lazy(() => import('./pages/Destinations'));
const StyleDetail = lazy(() => import('./pages/StyleDetail'));
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'));
const About = lazy(() => import('./pages/About'));
const Stories = lazy(() => import('./pages/Stories'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const PaymentPolicy = lazy(() => import('./pages/PaymentPolicy'));
const Experiences = lazy(() => import('./pages/Experiences'));
const Contact = lazy(() => import('./pages/Contact'));
const Faq = lazy(() => import('./pages/Faq'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/plan-journey" element={<PlanJourney />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/styles/:styleId" element={<StyleDetail />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Stories />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Router>
      <Preloader isLoading={isLoading} />
      <SkipLink />
      <ScrollToTop />
      <ErrorBoundary>
        <div className="app">
          <Navbar />
          <main id="main-content">
            <Suspense fallback={<div className="route-fallback" />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCta />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
