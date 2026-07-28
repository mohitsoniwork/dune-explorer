import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PlanJourney from './pages/PlanJourney';
import Destinations from './pages/Destinations';
import StyleDetail from './pages/StyleDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import About from './pages/About';
import Stories from './pages/Stories';

import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PaymentPolicy from './pages/PaymentPolicy';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
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
            {/* Fallback routes for now */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
