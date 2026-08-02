import { useEffect } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import './Policy.css';

const PaymentPolicy = () => {
  usePageMeta({
    title: 'Booking & Payment Policy | Dune Explorer',
    description: 'Booking, payment, and cancellation policy for Dune Explorer luxury tours.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="container policy-container">
        <h1>Booking &amp; Cancellation Policy</h1>
        <div className="policy-content">
          <p>
            At DuneXplore, we believe in providing a seamless and transparent booking experience. Please read our booking and cancellation policy carefully before confirming your journey.
          </p>

          <h2>Booking Policy</h2>
          <p>
            To secure your reservation, an advance payment of 30% of the total tour cost is required at the time of booking. Your booking will be confirmed once the advance payment has been received and acknowledged by DuneXplore.
          </p>
          <p>
            The remaining 70% balance must be paid at least 30 days prior to your scheduled arrival or travel date. For bookings made within 30 days of departure, full payment may be required at the time of confirmation.
          </p>
          <p>
            All bookings are subject to availability of hotels, transportation, guides, safari permits, and other travel services. Once confirmed, you will receive your booking confirmation and final itinerary via email.
          </p>

          <hr className="policy-divider" />

          <h2>Payment Methods</h2>
          <p>We offer secure and convenient payment options for our guests worldwide.</p>
          <ul>
            <li><strong>Credit/Debit Card:</strong> A payment processing fee of 3.5% will be applicable to the total transaction amount.</li>
            <li><strong>Bank/Wire Transfer:</strong> Guests are responsible for any bank charges, intermediary fees, or international transfer costs associated with the transaction.</li>
          </ul>

          <hr className="policy-divider" />

          <h2>Cancellation &amp; Refund Policy</h2>
          <p>
            If you need to cancel your booking, please notify us in writing by emailing info@dunexplore.com.
          </p>
          <p>Refunds will be processed according to the following schedule:</p>

          <table className="policy-table">
            <thead>
              <tr>
                <th>Cancellation Period</th>
                <th>Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30 days or more before arrival</td>
                <td>95% refund (5% cancellation fee applies)</td>
              </tr>
              <tr>
                <td>15–29 days before arrival</td>
                <td>70% refund</td>
              </tr>
              <tr>
                <td>7–14 days before arrival</td>
                <td>40% refund</td>
              </tr>
              <tr>
                <td>Less than 7 days before arrival or No Show</td>
                <td>No Refund</td>
              </tr>
            </tbody>
          </table>

          <p>
            Where applicable, approved refunds will be processed within 20 business days from the date of cancellation confirmation.
          </p>

          <hr className="policy-divider" />

          <h2>Bookings Made Through Third-Party Partners</h2>
          <p>
            If your reservation has been made through an online travel agency, travel advisor, or any third-party booking platform, the cancellation and refund policy of the respective provider may apply.
          </p>
          <p>Where DuneXplore's policy is applicable, the following refund schedule will be followed:</p>

          <table className="policy-table">
            <thead>
              <tr>
                <th>Cancellation Period</th>
                <th>Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60 days or more before arrival</td>
                <td>80% refund</td>
              </tr>
              <tr>
                <td>59–28 days before arrival</td>
                <td>60% refund</td>
              </tr>
              <tr>
                <td>27–15 days before arrival</td>
                <td>30% refund</td>
              </tr>
              <tr>
                <td>Within 14 days before arrival or No Show</td>
                <td>No Refund</td>
              </tr>
            </tbody>
          </table>

          <p>
            Refunds for third-party bookings are subject to the respective booking partner's processing timelines and terms. DuneXplore cannot guarantee refund timelines where payments have been collected by a third-party platform.
          </p>

          <hr className="policy-divider" />

          <h2>Important Information</h2>
          <ul>
            <li>Wildlife safari permits, including those for Ranthambore, Jawai, and other national parks, are non-refundable once confirmed, as they are governed by government regulations.</li>
            <li>Bookings made during Christmas, New Year, festival periods, or other designated peak travel dates may be non-refundable or subject to special cancellation terms communicated at the time of booking.</li>
            <li>Domestic flight tickets, train tickets, and certain hotel reservations are subject to the cancellation policies of the respective airline, railway, hotel, or service provider. Applicable supplier charges will be deducted from any eligible refund.</li>
            <li>Any amendment to a confirmed itinerary, including changes to travel dates, destinations, accommodation, or services, will be subject to availability and may incur additional charges.</li>
            <li>In the event of unforeseen circumstances such as extreme weather, natural disasters, government restrictions, political unrest, or other force majeure events, DuneXplore will make every reasonable effort to offer suitable alternatives; however, additional costs incurred due to such events may be the responsibility of the traveler.</li>
          </ul>

          <hr className="policy-divider" />

          <h2>Need Assistance?</h2>
          <p>
            If you have any questions regarding your booking or cancellation, our team will be happy to assist you.
          </p>
          <div className="policy-contact">
            <p><strong>DuneXplore</strong></p>
            <p>📧 info@dunexplore.com</p>
            <p>📞 +91 63750 60566</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
