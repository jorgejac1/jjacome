import Link from 'next/link';
import { localePath, type Locale } from '@/lib/i18n';
export default function NotFoundPage({ locale }: { locale: Locale }) { const es = locale === 'es'; return <main id="main" className="shell not-found"><p className="eyebrow">404 / {es ? 'Página no encontrada' : 'Page not found'}</p><h1>{es ? 'Volvamos al inicio.' : 'Let’s get you back.'}</h1><p>{es ? 'La página que buscas no existe.' : 'The page you’re looking for doesn’t exist.'}</p><Link className="text-link" href={localePath(locale, '/')}>{es ? 'Volver al portafolio' : 'Back to portfolio'} ←</Link></main>; }
