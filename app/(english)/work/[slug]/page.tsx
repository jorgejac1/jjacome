import Page from '@/components/studio/pages/WorkStory';
import Rag from '@/components/studio/pages/Rag';
import { getPortfolio } from '@/lib/i18n';
import { workMetadata } from '@/lib/page-metadata';
type Props = { params: Promise<{slug: string}> };
export function generateStaticParams() { const data=getPortfolio('en'); return [...data.projects.map(p=>({slug:p.id})),{slug:data.enterpriseStory.id},{slug:'rag'}]; }
export async function generateMetadata({params}: Props) { return workMetadata('en',(await params).slug); }
export default async function Route({params}: Props) { const {slug}=await params; return slug==='rag' ? <Rag locale="en"/> : <Page locale="en" slug={slug}/>; }
