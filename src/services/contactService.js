const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_42s4bsh';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_bgt5n9n';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '3tdrn0FEuYDppFJZs';
const GAS_SHEETS_URL = import.meta.env.VITE_GAS_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbyZpekF4oJ4cyesXFZAeOcric5sRYHEMLzmkmbrIiVHHINct0YjM-3dDHTgCXWNF6v0/exec';

/**
 * Sends inquiry directly to Google Sheets via Apps Script Webhook.
 */
async function forwardToSheets(formData) {
  if (!GAS_SHEETS_URL) return { status: 'skipped' };
  try {
    const payload = {
      name: formData.name || 'Not provided',
      email: formData.email,
      whatsapp: formData.whatsapp,
      country: formData.country || 'Not provided',
      travelDates: formData.travelDates || 'Not specified',
      travelers: formData.travelers || 'Not specified',
      accommodation: formData.accommodation || 'Not specified',
      interests: Array.isArray(formData.interests) ? formData.interests.join(', ') : (formData.interests || 'None selected'),
      destinations: Array.isArray(formData.destinations) ? formData.destinations.join(', ') : (formData.destinations || 'None selected'),
      notes: formData.notes || 'No special requests',
      consent: formData.consent ?? true,
    };

    const resp = await fetch(GAS_SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
    const text = await resp.text();
    try {
      return JSON.parse(text);
    } catch {
      return { status: resp.ok ? 'success' : 'error', message: text };
    }
  } catch (err) {
    console.warn('Google Sheets warning:', err);
    return { status: 'error', message: err.message };
  }
}

/**
 * Sends notification email directly via EmailJS API.
 */
async function forwardToEmail(formData, isDuplicate = false) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return { status: 'skipped' };
  }

  const name = formData.name || 'Explorer';
  const subjectPrefix = isDuplicate ? '🔁 Existing Customer Query' : '🆕 New Customer Query';
  const params = {
    subject: `${subjectPrefix} — ${name}`,
    name,
    email: formData.email,
    whatsapp: formData.whatsapp,
    country: formData.country || 'Not provided',
    travel_dates: formData.travelDates || 'Not specified',
    travelers: formData.travelers || 'Not specified',
    accommodation: formData.accommodation || 'Not specified',
    interests: Array.isArray(formData.interests) ? formData.interests.join(', ') : (formData.interests || 'None selected'),
    destinations: Array.isArray(formData.destinations) ? formData.destinations.join(', ') : (formData.destinations || 'None selected'),
    notes: formData.notes || 'No special requests',
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  const payload = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: params,
  };

  try {
    const resp = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    try {
      const parsed = JSON.parse(text);
      return typeof parsed === 'object' && parsed !== null ? parsed : { status: resp.ok ? 'success' : 'error' };
    } catch {
      return { status: resp.ok ? 'success' : 'error', message: text.slice(0, 200) };
    }
  } catch (err) {
    console.warn('EmailJS warning:', err);
    return { status: 'error', message: err.message };
  }
}

/**
 * Submits an inquiry.
 * Works natively in static hosting environments (LiteSpeed, Apache, cPanel, Hostinger,
 * Cloudflare Pages, Netlify) by communicating directly with Google Sheets and EmailJS.
 * If VITE_USE_API_PROXY is enabled, it attempts the server proxy first.
 */
export const submitInquiry = async (formData, turnstileToken = '') => {
  const useProxy = import.meta.env.VITE_USE_API_PROXY === 'true';

  if (useProxy) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      if (response.ok || response.status === 429) {
        const result = await response.json().catch(() => ({}));
        return { ...result, httpStatus: response.status };
      }
    } catch {
      // Fall through to direct submission on network or 404 failure
    }
  }

  // Direct client delivery: Send to Google Sheets and EmailJS
  try {
    const sheetsResult = await forwardToSheets(formData);
    const isDuplicate = sheetsResult?.status === 'duplicate';
    const emailResult = await forwardToEmail(formData, isDuplicate);

    const sheetsOk = sheetsResult?.status === 'success' || sheetsResult?.status === 'duplicate' || sheetsResult?.status === 'skipped';
    const emailOk = emailResult?.status === 'success' || emailResult?.status === 'skipped';

    if (!sheetsOk && !emailOk) {
      return {
        status: 'error',
        message: 'Failed to deliver your inquiry. Please try again or contact us directly.',
        email: emailResult,
        sheets: sheetsResult,
      };
    }

    if (isDuplicate) {
      return {
        status: 'duplicate',
        message: 'Welcome back! Your previous inquiry has been updated.',
        sheets: sheetsResult,
        email: emailResult,
      };
    }

    return {
      status: 'success',
      message: 'Inquiry received. We will contact you shortly.',
      sheets: sheetsResult,
      email: emailResult,
    };
  } catch (error) {
    console.error('Submission failed:', error);
    return {
      status: 'error',
      message: error?.message || 'Unable to submit inquiry. Please try again or reach out on WhatsApp.',
    };
  }
};
