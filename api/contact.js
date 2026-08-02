export const config = { runtime: 'nodejs' };

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const INTEREST_OPTIONS = [
  'Culture & History', 'Luxury', 'Adventure', 'Desert Safari', 'Wellness',
  'Food Tours', 'Photography', 'Village Experiences', 'Festivals', 'Wildlife',
];
const DESTINATION_OPTIONS = [
  'Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Ranthambore', 'Bikaner', 'Mount Abu',
];
const ACCOMMODATION_OPTIONS = ['heritage', 'luxury-resorts', 'boutique', 'camps'];

const MAX_NAME_LENGTH = 100;
const MAX_TEXT_LENGTH = 80;
const MAX_NOTES_LENGTH = 2000;
const MAX_PAYLOAD_BYTES = 1_000_000;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const rateBuckets = new Map();

const DEFAULT_ALLOWED_ORIGINS = 'https://dunexplore.com,https://www.dunexplore.com';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(body));
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

function originAllowed(req) {
  const allowed = (process.env.ALLOWED_ORIGINS || DEFAULT_ALLOWED_ORIGINS)
    .split(',')
    .map((o) => o.trim().toLowerCase())
    .filter(Boolean);
  const origin = (req.headers.origin || '').toLowerCase();
  if (!origin) return true;
  if (origin.includes('.vercel.app') || origin.includes('localhost')) return true;
  return allowed.includes(origin);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    if (Buffer.isBuffer(req.body)) { resolve(req.body.toString('utf8')); return; }
    if (typeof req.body === 'string') { resolve(req.body); return; }
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > MAX_PAYLOAD_BYTES) {
        req.destroy(new Error('Payload too large'));
      }
    });
    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });
}

function sanitizeString(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone) {
  return /^\+?[\d\s\-()]{7,20}$/.test(phone);
}

function pickAllowed(value, allowed) {
  if (typeof value !== 'string') return '';
  return allowed.includes(value) ? value : '';
}

function pickArray(values, allowed, maxItems) {
  if (!Array.isArray(values)) return [];
  const picked = values
    .filter((v) => typeof v === 'string' && allowed.includes(v));
  return picked.slice(0, maxItems);
}

async function verifyTurnstile(token) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { required: false, ok: true };
  if (typeof token !== 'string' || !token) return { required: true, ok: false };
  const params = new URLSearchParams({ secret, response: token });
  const resp = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const data = await resp.json().catch(() => ({}));
  return { required: true, ok: data.success === true };
}

async function forwardToSheets(payload) {
  const url = process.env.GAS_SHEETS_URL;
  if (!url) return { status: 'skipped' };
  const headers = { 'content-type': 'application/json' };
  if (process.env.GAS_SHARED_TOKEN) headers['x-inquiry-token'] = process.env.GAS_SHARED_TOKEN;
  const resp = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });
  const text = await resp.text();
  try {
    const parsed = JSON.parse(text);
    return typeof parsed === 'object' && parsed !== null ? parsed : { status: 'error' };
  } catch {
    return { status: resp.ok ? 'success' : 'error', message: text.slice(0, 200) };
  }
}

async function forwardToEmail(isDuplicate, sanitized) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  if (!serviceId || !templateId || !publicKey) return { status: 'skipped' };

  const name = sanitized.name || 'Not provided';
  const subjectPrefix = isDuplicate ? '\u{1F501} Existing Customer Query' : '\u{1F195} New Customer Query';
  const params = {
    subject: `${subjectPrefix} \u2014 ${name}`,
    name,
    email: sanitized.email,
    whatsapp: sanitized.whatsapp,
    country: sanitized.country || 'Not provided',
    travel_dates: sanitized.travelDates || 'Not specified',
    travelers: sanitized.travelers || 'Not specified',
    accommodation: sanitized.accommodation || 'Not specified',
    interests: sanitized.interests.join(', ') || 'None selected',
    destinations: sanitized.destinations.join(', ') || 'None selected',
    notes: sanitized.notes || 'No special requests',
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: params,
  };
  
  if (privateKey) {
    payload.accessToken = privateKey;
  }

  const resp = await fetch(EMAILJS_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const text = await resp.text();
  try {
    const parsed = JSON.parse(text);
    return typeof parsed === 'object' && parsed !== null ? parsed : { status: resp.ok ? 'success' : 'error' };
  } catch {
    return { status: resp.ok ? 'success' : 'error', message: text.slice(0, 200) };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { status: 'error', message: 'Method not allowed' });
  }
  if (!originAllowed(req)) {
    return json(res, 403, { status: 'error', message: 'Request origin not allowed' });
  }

  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return json(res, 429, { status: 'error', message: 'Too many requests. Please try again later.' });
  }

  let parsed;
  try {
    const raw = await readBody(req);
    parsed = JSON.parse(raw || '{}');
  } catch {
    return json(res, 400, { status: 'error', message: 'Invalid request body' });
  }

  const name = sanitizeString(parsed.name, MAX_NAME_LENGTH);
  const emailAddress = sanitizeString(parsed.email, 254).toLowerCase();
  const whatsapp = sanitizeString(parsed.whatsapp, 20);
  const country = sanitizeString(parsed.country, MAX_TEXT_LENGTH);
  const travelDates = sanitizeString(parsed.travelDates, MAX_TEXT_LENGTH);
  const notes = sanitizeString(parsed.notes, MAX_NOTES_LENGTH);
  const consent = parsed.consent === true;

  let travelers = '';
  if (typeof parsed.travelers === 'number' && Number.isInteger(parsed.travelers)
      && parsed.travelers >= 1 && parsed.travelers <= 100) {
    travelers = String(parsed.travelers);
  } else if (typeof parsed.travelers === 'string' && /^\d{1,3}$/.test(parsed.travelers.trim())
             && Number(parsed.travelers) >= 1 && Number(parsed.travelers) <= 100) {
    travelers = String(Number(parsed.travelers));
  }

  const accommodation = pickAllowed(parsed.accommodation, ACCOMMODATION_OPTIONS);
  const interests = pickArray(parsed.interests, INTEREST_OPTIONS, INTEREST_OPTIONS.length);
  const destinations = pickArray(parsed.destinations, DESTINATION_OPTIONS, DESTINATION_OPTIONS.length);

  if (!isValidEmail(emailAddress)) {
    return json(res, 400, { status: 'error', message: 'Please provide a valid email address.' });
  }
  if (!isValidPhone(whatsapp)) {
    return json(res, 400, { status: 'error', message: 'Please provide a valid phone number.' });
  }
  if (!consent) {
    return json(res, 400, { status: 'error', message: 'Consent is required before submitting.' });
  }

  const turnstile = await verifyTurnstile(parsed.turnstileToken);
  if (turnstile.required && !turnstile.ok) {
    return json(res, 400, { status: 'error', message: 'Security check failed. Please try again.' });
  }

  const sanitized = { name, email: emailAddress, whatsapp, country, travelDates, travelers, accommodation, interests, destinations, notes };

  const sheetsResult = await forwardToSheets(sanitized);
  const isDuplicate = sheetsResult.status === 'duplicate';
  const emailResult = await forwardToEmail(isDuplicate, sanitized);

  const sheets = sheetsResult && sheetsResult.status ? sheetsResult : { status: 'error', message: 'Sheets forward failed' };
  const email = emailResult && emailResult.status ? emailResult : { status: 'error', message: 'Email forward failed' };

  if (isDuplicate) {
    return json(res, 200, {
      status: 'duplicate',
      message: 'Welcome back! Your previous inquiry has been updated.',
      sheets,
      email,
    });
  }

  const failed = [sheets, email].filter((r) => r.status === 'error');
  if (failed.length > 0) {
    console.error('contact proxy: forward failures', JSON.stringify(failed));
    return json(res, 502, { status: 'error', message: 'Failed to deliver your inquiry. Please try again or contact us directly.', sheets, email });
  }

  return json(res, 200, { status: 'success', message: 'Inquiry received. We will contact you shortly.', sheets, email });
}
