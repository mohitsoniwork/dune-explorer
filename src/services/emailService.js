import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_42s4bsh';
const TEMPLATE_ID = 'template_bgt5n9n';
const PUBLIC_KEY = '3tdrn0FEuYDppFJZs';

/**
 * Sends a formatted inquiry email via EmailJS.
 * @param {object} formData - The form data object
 * @param {boolean} isDuplicate - Whether this is a returning customer
 */
export const sendInquiryEmail = async (formData, isDuplicate = false) => {
  try {
    const subjectPrefix = isDuplicate ? '🔁 Existing Customer Query' : '🆕 New Customer Query';
    const customerName = formData.name || 'Unknown';

    const templateParams = {
      subject: `${subjectPrefix} — ${customerName}`,
      name: formData.name || 'Not provided',
      email: formData.email || 'Not provided',
      whatsapp: formData.whatsapp || 'Not provided',
      country: formData.country || 'Not provided',
      travel_dates: formData.travelDates || 'Not specified',
      travelers: formData.travelers || 'Not specified',
      accommodation: formData.accommodation || 'Not specified',
      interests: Array.isArray(formData.interests) ? formData.interests.join(', ') : (formData.interests || 'None selected'),
      destinations: Array.isArray(formData.destinations) ? formData.destinations.join(', ') : (formData.destinations || 'None selected'),
      notes: formData.notes || 'No special requests',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('Email sent successfully:', response);
    return { status: 'success', message: 'Email sent' };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { status: 'error', message: error.message || 'Failed to send email' };
  }
};
