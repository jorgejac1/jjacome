import { RootDocument } from '@/components/layout/RootDocument';
import { homeMetadata } from '@/lib/page-metadata';
export const metadata = homeMetadata('es');
export const viewport = { themeColor: '#101512' };
export default function Layout({children}: {children: React.ReactNode}) { return <RootDocument locale="es">{children}</RootDocument>; }
