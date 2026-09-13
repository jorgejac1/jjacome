import Page from '@/components/studio/pages/Teaching';
import { pageMetadata } from '@/lib/page-metadata';
import { getPortfolio } from '@/lib/i18n';
export const metadata = pageMetadata({ locale: 'en', title: 'Evidence before completion', description: getPortfolio('en').identity.summary, path: '/notes/evidence-before-completion' });
export default function Route() { return <Page locale="en"/>; }
