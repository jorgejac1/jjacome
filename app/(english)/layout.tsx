import { RootDocument } from '@/components/layout/RootDocument';
import { homeMetadata } from '@/lib/page-metadata';
export const metadata = homeMetadata('en');
export const viewport = { themeColor: '#101512' };
export default function Layout({children}: {children: React.ReactNode}) { return <RootDocument locale="en">{children}</RootDocument>; }
