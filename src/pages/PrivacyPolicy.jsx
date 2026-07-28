import React, { useEffect } from 'react';
import './Policy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="container policy-container">
        <h1>Privacy Policy</h1>
        <div className="policy-content">
          <p>
            At DuneXplore, your privacy and trust are important to us. We are committed to protecting your personal information and handling it responsibly. Any information you share with us—including your name, contact details, travel preferences, passport information (where required), and booking details—is collected solely to plan, manage, and deliver your travel experience efficiently.
          </p>
          <p>
            We use your information to process bookings, coordinate with trusted travel partners such as hotels, airlines, transport providers, and local guides, communicate important travel updates, and provide personalized services. Your information is never sold, rented, or shared with third parties for marketing purposes without your consent.
          </p>
          <p>
            Our website may use cookies and similar technologies to improve your browsing experience, understand website performance, and personalize content. You may manage or disable cookies through your browser settings, although some features of the website may not function as intended.
          </p>
          <p>
            DuneXplore follows reasonable technical and organizational security measures to protect your personal information from unauthorized access, misuse, or disclosure. While we strive to maintain the highest standards of data security, no method of internet transmission or electronic storage can be guaranteed to be completely secure.
          </p>
          <p>
            By using our website or booking our services, you consent to the collection and use of your information as outlined in this Privacy Policy. We may update this policy from time to time to reflect changes in our services or applicable laws, and the latest version will always be available on this page.
          </p>
          <p>
            If you have any questions regarding this Privacy Policy or wish to access, update, or request the deletion of your personal information, please contact us.
          </p>

          <div className="policy-contact">
            <p><strong>DuneXplore</strong></p>
            <p>Aditya Vikram Singh</p>
            <p>Founder</p>
            <p>Khatipura, Jaipur, Rajasthan, India</p>
            <p>📞 +91 63750 60566</p>
            <p>📧 info@dunexplore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
