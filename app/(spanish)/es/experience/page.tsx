import Page from '@/components/studio/pages/Experience';
import { pageMetadata } from '@/lib/page-metadata';
import { getPortfolio } from '@/lib/i18n';
export const metadata = pageMetadata({ locale: 'es', title: 'Experiencia', description: getPortfolio('es').identity.summary, path: '/experience' });
export default function Route() { return <Page locale="es"/>; }
