import { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES } from './config';

export { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES };

export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : 'en';
  return langCode as typeof KNOWN_LANGUAGE_CODES[number];
}

/** Strip Astro `base` so route matching stays relative to the site root. */
export function stripBasePath(pathname: string) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!base) return pathname;
  return pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}
