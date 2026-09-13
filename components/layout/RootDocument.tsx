import { ScrollReveal } from './ScrollReveal';
import { Inter } from 'next/font/google';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { PortfolioAnalytics } from '@/components/PortfolioAnalytics';
import { getPortfolio, type Locale } from '@/lib/i18n';
import '@/app/globals.css';
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
export function RootDocument({ children, locale }: { children: React.ReactNode; locale: Locale }) {
 const portfolio = getPortfolio(locale);
 const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: portfolio.identity.name, url: portfolio.links.website, jobTitle: portfolio.identity.currentRole, worksFor: { '@type': 'Organization', name: portfolio.identity.currentCompany }, sameAs: [portfolio.links.github, portfolio.links.linkedin], knowsAbout: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Frontend architecture', 'Applied AI'] };
 return <html lang={locale} className={inter.variable}><body className={inter.className}><Navigation locale={locale}/>{children}<Footer locale={locale}/><ScrollReveal/><PortfolioAnalytics locale={locale} enabled={process.env.VERCEL_ENV === 'production'}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}/></body></html>;
}
