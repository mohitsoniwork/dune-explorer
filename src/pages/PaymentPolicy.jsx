import React, { useEffect } from 'react';
import './Policy.css'; // Shared CSS for policy pages

const PaymentPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="container policy-container">
        <h1>Booking and Cancellation Policy</h1>
        <div className="policy-content">
          <p><strong>Booking Policy:</strong></p>
<p>To confirm your reservation, a 30% advance payment is required at the time of booking.</p>
<p>The remaining balance must be paid 30 days before your scheduled travel date.</p>
<p>&nbsp;</p>
<p><strong>Payment Methods:</strong></p>
<p><strong>Credit/Debit Card:</strong> A 3.5% processing fee will be applied to the total amount.</p>
<p><strong>Wire Transfer:</strong> The sender is responsible for all associated wire transfer fees.</p>
<p>&nbsp;</p>
<p><strong>Cancellation Policy:</strong></p>
<p>Cancellations made 30 days or more before the travel date: 95% refund (5% cancellation fee applies due to peak season).</p>
<p>Cancellations made between 15 to 30 days before the travel date: 70% refund.</p>
<p>Cancellations made between 7 to 14 days before the travel date: 40% refund.</p>
<p>Cancellations made within 7 days or in the event of a no-show: No refund.</p>
<p>Any applicable refund will require a minimum of 20 days for processing.</p>
<p>&nbsp;</p>
<p><strong>If bookings are made via third party, cancellation charges will be as follows:</strong></p>
<p>Cancellation up to 60 days before the trip start date: 80% refund (20% cancellation fee applies or deposit amount, whichever is higher).</p>
<p>Cancellation 59 to 28 days before the trip start date: 60% refund (40% cancellation fee applies).</p>
<p>Cancellation 27 to 15 days before the trip start date: 30% refund (70% cancellation fee applies).</p>
<p>Cancellation within 14 days of the trip start date or in case of a no-show: No refund.</p>
<p>Any applicable refund will require a minimum of 20 days for processing.</p>
<p>&nbsp;</p>
<p><strong>Additional Terms:</strong></p>
<p>Jungle safari charges are non-refundable.</p>
<p>Bookings for blackout dates (New Year and Christmas week) are non-refundable.</p>
<p>Domestic flights are partially refundable, subject to airline policies.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
