import Page from '@/components/studio/pages/Teaching';
import { pageMetadata } from '@/lib/page-metadata';
import { getPortfolio } from '@/lib/i18n';
export const metadata = pageMetadata({ locale: 'es', title: 'Evidencia antes de finalizar', description: getPortfolio('es').identity.summary, path: '/notes/evidence-before-completion' });
export default function Route() { return <Page locale="es"/>; }
