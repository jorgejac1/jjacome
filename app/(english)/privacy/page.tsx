import Page from '@/components/studio/pages/Privacy';
import { pageMetadata } from '@/lib/page-metadata';
import { getPortfolio } from '@/lib/i18n';
export const metadata = pageMetadata({ locale: 'en', title: 'Privacy', description: getPortfolio('en').identity.summary, path: '/privacy' });
export default function Route() { return <Page locale="en"/>; }
