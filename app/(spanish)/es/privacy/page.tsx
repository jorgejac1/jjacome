import Page from '@/components/studio/pages/Privacy';
import { pageMetadata } from '@/lib/page-metadata';
import { getPortfolio } from '@/lib/i18n';
export const metadata = pageMetadata({ locale: 'es', title: 'Privacidad', description: getPortfolio('es').identity.summary, path: '/privacy' });
export default function Route() { return <Page locale="es"/>; }
