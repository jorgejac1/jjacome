export type Locale = 'en' | 'es';
export function localePath(locale: Locale, path: string) { return locale === 'es' ? `/es${path === '/' ? '' : path}` : path; }
