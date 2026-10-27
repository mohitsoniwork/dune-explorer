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
const LuxuryTourCost = lazy(() => import('./pages/guides/LuxuryTourCost'));
const BestTimeToVisit = lazy(() => import('./pages/guides/BestTimeToVisit'));
const TenDayItinerary = lazy(() => import('./pages/guides/TenDayItinerary'));
const PrivateDriverGuide = lazy(() => import('./pages/guides/PrivateDriverGuide'));
const LuxuryTrains = lazy(() => import('./pages/guides/LuxuryTrains'));
const PalaceHotels = lazy(() => import('./pages/guides/PalaceHotels'));
const DesertCamps = lazy(() => import('./pages/guides/DesertCamps'));
const TigerSafari = lazy(() => import('./pages/guides/TigerSafari'));
const HoneymoonTour = lazy(() => import('./pages/guides/HoneymoonTour'));
const UkPackages = lazy(() => import('./pages/guides/UkPackages'));
const GuidesHub = lazy(() => import('./pages/GuidesHub'));
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
        <Route path="/guides" element={<GuidesHub />} />
        <Route path="/luxury-rajasthan-tour-cost" element={<LuxuryTourCost />} />
        <Route path="/best-time-to-visit-rajasthan" element={<BestTimeToVisit />} />
        <Route path="/10-day-luxury-rajasthan-itinerary" element={<TenDayItinerary />} />
        <Route path="/private-rajasthan-tour-driver-guide" element={<PrivateDriverGuide />} />
        <Route path="/palace-on-wheels-vs-royal-rajasthan" element={<LuxuryTrains />} />
        <Route path="/rajasthan-palace-hotel-itinerary" element={<PalaceHotels />} />
        <Route path="/luxury-jaisalmer-desert-camps" element={<DesertCamps />} />
        <Route path="/luxury-ranthambore-tiger-safari" element={<TigerSafari />} />
        <Route path="/rajasthan-luxury-honeymoon" element={<HoneymoonTour />} />
        <Route path="/luxury-rajasthan-tour-packages-uk" element={<UkPackages />} />
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
    
    // Initialize ScrollReveal for smooth, elegant animations
    import('scrollreveal').then((module) => {
      const ScrollReveal = module.default;
      const sr = ScrollReveal({
        distance: '40px',
        duration: 1000,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: 0,
        reset: false,
        mobile: true
      });

      // Target specific elements to animate smoothly without disturbing framer-motion
      sr.reveal('.sr-smooth-reveal', { origin: 'bottom', interval: 150 });
      sr.reveal('.testimonial-form-wrapper', { origin: 'bottom', distance: '60px', duration: 1200 });
    });

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
