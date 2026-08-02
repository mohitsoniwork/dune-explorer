const CONTACT_ENDPOINT = '/api/contact';

/**
 * Submits an inquiry through the serverless contact proxy, which performs
 * server-side validation, CAPTCHA verification, rate limiting, and forwarding
 * to EmailJS + Google Sheets. No secrets live in this bundle.
 * Returns { status: 'success' | 'duplicate' | 'error', message, ... }
 */
export const submitInquiry = async (formData, turnstileToken = '') => {
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, turnstileToken }),
    });
    const result = await response.json().catch(() => ({}));
    return { ...result, httpStatus: response.status };
  } catch {
    return { status: 'error', message: 'Unable to reach the server. Please try again.' };
  }
};
