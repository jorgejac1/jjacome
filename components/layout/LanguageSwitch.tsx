'use client';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/locale';
export function LanguageSwitch({ locale }: { locale: Locale }) {
 const pathname = usePathname();
 const bare = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
 const alternate = locale === 'en' ? `/es${bare === '/' ? '' : bare}` : bare;
 return <div className="language-switch" aria-label={locale === 'es' ? 'Idioma' : 'Language'}><span aria-current="true">{locale.toUpperCase()}</span><span aria-hidden="true">/</span><a href={alternate} lang={locale === 'en' ? 'es' : 'en'} hrefLang={locale === 'en' ? 'es' : 'en'} aria-label={locale === 'en' ? 'Ver esta página en español' : 'View this page in English'} onClick={event => { event.currentTarget.href = alternate + window.location.hash; }}>{locale === 'en' ? 'ES' : 'EN'}</a></div>;
}
