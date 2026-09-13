import type { Metadata } from 'next';
import { getPortfolio, localePath, type Locale } from './i18n';
export function pageMetadata({ title, description, path, image, locale = 'en' }: { title: string; description: string; path: string; image?: { url: string; alt: string }; locale?: Locale }): Metadata {
 const portfolio = getPortfolio(locale);
 const shareTitle = `${title} | ${portfolio.identity.name}`;
 const images = image ? [image] : [];
 return { metadataBase: new URL(portfolio.links.website), title, description, alternates: { canonical: localePath(locale, path), languages: { en: path, es: localePath('es', path), 'x-default': path } }, openGraph: { title: shareTitle, description, url: localePath(locale, path), siteName: portfolio.identity.name, locale: locale === 'es' ? 'es_ES' : 'en_US', alternateLocale: locale === 'es' ? 'en_US' : 'es_ES', type: 'website', images }, twitter: { card: image ? 'summary_large_image' : 'summary', title: shareTitle, description, images } };
}
export function homeMetadata(locale: Locale): Metadata { return { ...pageMetadata({ locale, title: locale === 'es' ? 'Jorge Jacome — Ingeniería frontend e IA aplicada' : 'Jorge Jacome — Frontend Engineering & Applied AI', description: getPortfolio(locale).identity.summary, path: '/', image: {url:localePath(locale, '/opengraph-image'),alt:locale === 'es' ? 'Jorge Jacome — Interfaces bien pensadas. Ingeniería con rigor.' : 'Jorge Jacome — Thoughtful interfaces. Serious engineering.'} }), icons: { icon: '/favicon.svg' }, robots: { index: true, follow: true } }; }
export function workMetadata(locale: Locale, slug: string): Metadata {
 const data = getPortfolio(locale); const project = data.projects.find(item => item.id === slug);
 if (!project && slug !== 'rag' && slug !== data.enterpriseStory.id) return {title:locale === 'es' ? 'Página no encontrada' : 'Page not found',robots:{index:false,follow:false},openGraph:{images:[]},twitter:{images:[]}};
 if (slug === 'rag') return pageMetadata({ locale, title: locale === 'es' ? 'RAG — Demostración sintética' : 'RAG — Synthetic walkthrough', description: data.rag.boundary, path: '/work/rag' });
 return pageMetadata({ locale, title: project ? `${project.name} — ${locale === 'es' ? 'Historia de ingeniería' : 'Engineering story'}` : data.enterpriseStory.title, description: project?.summary ?? data.enterpriseStory.problem, path: `/work/${slug}`, image: project ? { url: project.fullImage, alt: `${project.imageAlt}. ${project.evidenceLabel}` } : undefined });
}
