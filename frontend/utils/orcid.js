// ORCID validation helper for frontend

/**
 * Validate ORCID identifier using checksum algorithm.
 * Accepts formats with or without hyphens, spaces are ignored.
 *
 * @param {string} value
 * @returns {{isValid: boolean, normalized?: string}}
 */
export function validateOrcid(value) {
  if (!value || typeof value !== 'string') {
    return { isValid: false };
  }
  const normalized = value.replace(/[-\s]/g, '');
  if (!/^\d{15}[\dX]$/.test(normalized)) {
    return { isValid: false };
  }
  let total = 0;
  for (let i = 0; i < 15; i++) {
    total = (total + parseInt(normalized.charAt(i), 10)) * 2;
  }
  const remainder = total % 11;
  let result = (12 - remainder) % 11;
  const checkDigit = result === 10 ? 'X' : String(result);
  if (checkDigit !== normalized.charAt(15)) {
    return { isValid: false };
  }
  // return normalized with hyphens inserted
  const formatted = normalized.replace(/(\d{4})(?=\d)/g, '$1-');
  return { isValid: true, normalized: formatted };
}
