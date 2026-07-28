const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyZpekF4oJ4cyesXFZAeOcric5sRYHEMLzmkmbrIiVHHINct0YjM-3dDHTgCXWNF6v0/exec';

/**
 * Sends inquiry data to Google Sheets via Apps Script.
 * Returns { status: 'success' | 'duplicate' | 'error', message: string }
 */
export const saveToGoogleSheets = async (formData) => {
  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      country: formData.country,
      travelDates: formData.travelDates,
      travelers: formData.travelers,
      accommodation: formData.accommodation,
      interests: Array.isArray(formData.interests) ? formData.interests.join(', ') : formData.interests,
      destinations: Array.isArray(formData.destinations) ? formData.destinations.join(', ') : formData.destinations,
      notes: formData.notes,
    };

    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { status: 'error', message: error.message };
  }
};
