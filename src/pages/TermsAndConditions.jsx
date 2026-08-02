import { useEffect } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import './Policy.css';

const TermsAndConditions = () => {
  usePageMeta({
    title: 'Terms & Conditions | Dune Explorer',
    description: 'Read the terms and conditions that govern bookings and use of Dune Explorer travel services.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="container policy-container">
        <h1>Terms &amp; Conditions</h1>
        <div className="policy-content">
          <p>
            Welcome to DuneXplore. By accessing our website, requesting a quotation, making a booking, or using any of our services, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions. These terms govern the relationship between DuneXplore ("we," "our," or "us") and every customer ("you" or "traveler") using our website or travel services.
          </p>

          <h2>1. Our Services</h2>
          <p>
            DuneXplore specializes in creating bespoke travel experiences across Rajasthan and India. Our services include customized itineraries, luxury holidays, heritage tours, wildlife safaris, transportation, hotel reservations, guided sightseeing, cultural experiences, destination management, and other travel-related services. All bookings are subject to availability and confirmation from our travel partners.
          </p>

          <h2>2. Booking &amp; Confirmation</h2>
          <p>
            A booking is considered confirmed only after we receive the required advance payment and issue a written booking confirmation. Any itinerary shared before confirmation is a proposed itinerary and may be modified due to availability, operational requirements, weather conditions, government regulations, or other circumstances beyond our control.
          </p>
          <p>
            Customized itineraries may require additional planning and pricing. DuneXplore reserves the right to accept or decline any booking request without assigning a reason.
          </p>

          <h2>3. Payment Policy</h2>
          <p>
            To confirm a booking, an advance payment of 20% of the total tour cost is required unless otherwise agreed in writing.
          </p>
          <p>
            The remaining balance must be paid at least 30 days before the commencement of the tour. Failure to complete payment within the specified period may result in cancellation of the booking, and the advance payment may be forfeited.
          </p>
          <p>
            For bookings made within 30 days of departure, full payment may be required at the time of confirmation.
          </p>

          <h2>4. Cancellation &amp; Refund Policy</h2>
          <p>
            Cancellation requests must be submitted in writing by email to info@dunexplore.com.
          </p>
          <p>Refunds will be processed according to the following schedule:</p>
          <ul>
            <li><strong>More than 60 days before arrival:</strong> 80% refund (20% cancellation fee or deposit amount, whichever is higher)</li>
            <li><strong>59–28 days before arrival:</strong> 60% refund</li>
            <li><strong>27–15 days before arrival:</strong> 30% refund</li>
            <li><strong>Within 14 days of arrival or No Show:</strong> No refund</li>
          </ul>
          <p>
            Refunds, where applicable, will normally be processed within 20 business days after approval.
          </p>
          <p>
            Please note that flights, train tickets, hotels, permits, safaris, and other third-party services may have separate cancellation policies. In such cases, the respective supplier's cancellation charges will apply and may be non-refundable.
          </p>

          <h2>5. Changes to Bookings</h2>
          <p>
            If you wish to modify your itinerary after confirmation, we will make every reasonable effort to accommodate your request. However, changes are subject to availability and may incur additional charges.
          </p>
          <p>
            DuneXplore reserves the right to make reasonable changes to itineraries where necessary due to weather, road conditions, government regulations, operational requirements, or unforeseen circumstances while ensuring a comparable travel experience whenever possible.
          </p>

          <h2>6. Traveler Responsibilities</h2>
          <p>
            Travelers are responsible for ensuring they possess valid passports, visas, travel insurance, vaccination certificates (if applicable), and any other travel documents required by the destination.
          </p>
          <p>
            Guests are also responsible for arriving at departure points on time, complying with local laws and regulations, respecting local customs, and following safety instructions provided by guides and service providers.
          </p>
          <p>
            Any expenses of a personal nature, including meals not mentioned in the itinerary, shopping, beverages, laundry, tips, telephone charges, medical expenses, or optional activities, shall be borne by the traveler.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            DuneXplore works with carefully selected hotels, airlines, transportation providers, activity operators, guides, and other travel partners. While we carefully choose our partners, these services are operated independently.
          </p>
          <p>
            We are not responsible for delays, cancellations, schedule changes, service interruptions, overbooking, strikes, technical failures, or any acts or omissions of third-party suppliers.
          </p>

          <h2>8. Force Majeure</h2>
          <p>
            DuneXplore shall not be held liable for delays, modifications, or cancellation of services resulting from events beyond our reasonable control, including but not limited to natural disasters, floods, earthquakes, pandemics, political unrest, war, government restrictions, airline disruptions, road closures, extreme weather, strikes, or other unforeseen events.
          </p>
          <p>
            In such situations, we will make every reasonable effort to provide suitable alternatives; however, additional costs arising from such circumstances may be payable by the traveler.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            DuneXplore acts as a travel planner and facilitator. Our liability is limited to the travel arrangements directly organized by us.
          </p>
          <p>
            We shall not be liable for any indirect, incidental, consequential, or special loss, including loss of enjoyment, missed flights, delays, personal injury, illness, theft, loss of baggage, or damage arising from the actions of third-party suppliers or events beyond our control.
          </p>

          <h2>10. Intellectual Property</h2>
          <p>
            All content displayed on this website, including our logo, branding, photographs, videos, itineraries, designs, graphics, written content, and other materials, is the intellectual property of DuneXplore unless otherwise stated.
          </p>
          <p>
            No content may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written permission.
          </p>

          <h2>11. Privacy</h2>
          <p>
            Your privacy is important to us. Personal information collected through our website or during the booking process is handled in accordance with our Privacy Policy and is used only to provide travel services, process bookings, and improve your experience.
          </p>

          <h2>12. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms &amp; Conditions shall be governed by the laws of India. Any dispute arising from the use of our website or services shall be subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan, India.
          </p>

          <h2>13. Contact Us</h2>
          <div className="policy-contact">
            <p><strong>DuneXplore</strong></p>
            <p>Aditya Vikram Singh</p>
            <p>Founder &amp; Travel Experience Curator</p>
            <p>📍 Khatipura, Jaipur, Rajasthan, India</p>
            <p>📞 +91 63750 60566</p>
            <p>📧 info@dunexplore.com</p>
            <p>🌐 www.dunexplore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
