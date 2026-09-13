import type { MetadataRoute } from 'next';
import { portfolio } from '@/data/portfolio';
import { localePath, type Locale } from '@/lib/i18n';
export default function sitemap(): MetadataRoute.Sitemap {
 const paths=['/','/experience','/notes/evidence-before-completion','/privacy','/work/rag',`/work/${portfolio.enterpriseStory.id}`,...portfolio.projects.map(project=>`/work/${project.id}`)];
 const absolute=(path:string)=>new URL(path,portfolio.links.website).href;
 return (['en','es'] as Locale[]).flatMap(locale=>paths.map(path=>({url:absolute(localePath(locale,path)),changeFrequency:'monthly' as const,priority:path==='/'?1:0.7,alternates:{languages:{en:absolute(path),es:absolute(localePath('es',path)),'x-default':absolute(path)}}})));
}
