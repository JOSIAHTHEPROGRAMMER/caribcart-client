import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


const CURRENCY_MAP = {
  'Trinidad & Tobago': 'TTD',
  'Trinidad and Tobago': 'TTD',
  'Trinidad': 'TTD',
  'Jamaica': 'JMD',
  'Barbados': 'BBD',
  'Saint Lucia': 'XCD',
  'Saint Vincent': 'XCD',
  'Saint Vincent and the Grenadines': 'XCD',
  'Grenada': 'XCD',
  'Dominica': 'XCD',
  'Antigua and Barbuda': 'XCD',
  'Saint Kitts and Nevis': 'XCD',
  'Bahamas': 'BSD',
  'The Bahamas': 'BSD',
  'Guyana': 'GYD',
  'Suriname': 'SRD',
  'Belize': 'BZD',
  'Cayman Islands': 'KYD',
  'Haiti': 'HTG',
  'Dominican Republic': 'DOP',
  'Cuba': 'CUP',
  'default': 'USD'
};

const EXCHANGE_RATES = {
  TTD: 1.0,
  JMD: 0.043,
  BBD: 3.37,
  XCD: 2.52,
  BSD: 6.80,
  GYD: 0.032,
  SRD: 0.19,
  BZD: 3.37,
  KYD: 8.16,
  HTG: 0.052,
  DOP: 0.11,
  CUP: 0.28,
  USD: 6.80
};

export function formatCurrency(price, country) {
  if (!price && price !== 0) {
    return 'Price not available';
  }

  const currencyCode = CURRENCY_MAP[country] || CURRENCY_MAP['default'];
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return `$${formattedPrice} ${currencyCode}`;
}

export function formatCurrencySymbolOnly(price) {
  if (!price && price !== 0) {
    return 'Price not available';
  }

  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return `$${formattedPrice}`;
}

export function getCurrencyCode(country) {
  return CURRENCY_MAP[country] || CURRENCY_MAP['default'];
}



export function convertCurrency(price, fromCountry, toCountry) {
  if (price == null) return price;

  const fromCurrency = getCurrencyCode(fromCountry);
  const toCurrency = getCurrencyCode(toCountry);

  const fromRate = EXCHANGE_RATES[fromCurrency]; // TTD per unit
  const toRate = EXCHANGE_RATES[toCurrency];     // TTD per unit

  // convert to TTD first
  const priceInTTD = price * fromRate;

  // then from TTD to target
  const converted = priceInTTD / toRate;

  return Number(converted.toFixed(2)); // ← IMPORTANT
}



export function getUserCountry() {
  if (typeof window === 'undefined') {
    return 'Trinidad & Tobago';
  }

  const stored = localStorage.getItem('userCountry');
  if (stored) {
    return stored;
  }

  detectUserLocation();
  return 'Trinidad & Tobago';
}

export async function detectUserLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    const countryMap = {
      'TT': 'Trinidad & Tobago',
      'JM': 'Jamaica',
      'BB': 'Barbados',
      'LC': 'Saint Lucia',
      'VC': 'Saint Vincent and the Grenadines',
      'GD': 'Grenada',
      'DM': 'Dominica',
      'AG': 'Antigua and Barbuda',
      'KN': 'Saint Kitts and Nevis',
      'BS': 'Bahamas',
      'GY': 'Guyana',
      'SR': 'Suriname',
      'BZ': 'Belize',
      'KY': 'Cayman Islands',
      'HT': 'Haiti',
      'DO': 'Dominican Republic',
      'CU': 'Cuba'
    };

    const detectedCountry = countryMap[data.country_code] || 'Trinidad & Tobago';
    setUserCountry(detectedCountry);

    return detectedCountry;
  } catch (error) {
    console.error('Failed to detect location:', error);
    return 'Trinidad & Tobago';
  }
}

export function setUserCountry(country) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userCountry', country);
    window.dispatchEvent(new CustomEvent('countryChanged', { detail: { country } }));
  }
}

export function formatCurrencyWithConversion(price, adminCountry, userCountry = null) {
  if (!price && price !== 0) {
    return 'Price not available';
  }

  const targetCountry = userCountry || getUserCountry();
  const convertedPrice = convertCurrency(price, adminCountry, targetCountry);

  return formatCurrency(convertedPrice, targetCountry);
}

export const getDateLabel = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date();

  yesterday.setDate(today.getDate() - 1);

  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  if (isSameDay(date, today)) return "Today";
  if (isSameDay(date, yesterday)) return "Yesterday";

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

