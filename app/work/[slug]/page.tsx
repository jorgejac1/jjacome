import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { pageMetadata } from "@/lib/page-metadata";
type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return [...portfolio.projects.map(project => ({ slug: project.id })), { slug: portfolio.enterpriseStory.id }]; }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolio.projects.find(item => item.id === slug);
    const enterprise = slug === portfolio.enterpriseStory.id ? portfolio.enterpriseStory : null;
    if (!project && !enterprise)
        return { title: "Story not found" };
    return pageMetadata({ title: project ? `${project.name} — Engineering story` : "ESPN — Shared frontend platform", description: project?.summary ?? enterprise!.problem, path: `/work/${slug}`, image: project ? { url: project.fullImage, alt: `${project.imageAlt}. ${project.evidenceLabel}` } : undefined });
}
export default async function WorkStory({ params }: Props) {
    const { slug } = await params;
    const project = portfolio.projects.find(item => item.id === slug);
    const enterprise = portfolio.enterpriseStory;
    if (slug === enterprise.id)
        return <main id="main" className="shell" data-content-version={portfolio.version}><header className="page-heading"><Link className="text-link" href="/#work">← Selected work</Link><p className="eyebrow" style={{ marginTop: 30 }}>Enterprise contribution / {enterprise.company}</p><h1>{enterprise.title}</h1><p>{enterprise.contribution}</p><div className="tag-list">{enterprise.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></header><StorySection title="Context"><p>{enterprise.problem}</p><p>{enterprise.constraints}</p></StorySection><StorySection title="My contribution"><p>{enterprise.contribution}</p></StorySection><StorySection title="Decision & tradeoff"><p>{enterprise.decision}</p><p>{enterprise.tradeoff}</p></StorySection><StorySection title={enterprise.artifactTitle}><p className="figure-caption">{enterprise.artifactSource}</p><p>{enterprise.artifactDecision}</p><p><strong>Documented result.</strong> {enterprise.artifactResult}</p><p className="figure-caption">{enterprise.artifactBoundary}</p><a className="text-link" href={enterprise.artifactDownload} download>Download the contribution record ↓</a></StorySection><StorySection title="Result & evidence"><p>{enterprise.outcome}</p><p>{enterprise.limits}</p><Link className="text-link" href="/experience">Read the full career history ↗</Link></StorySection></main>;
    if (!project)
        notFound();
    const story = project.story;
    return <main id="main" className="shell" data-content-version={portfolio.version}><header className="page-heading"><Link className="text-link" href="/#work">← Selected work</Link><p className="eyebrow" style={{ marginTop: 30 }}>Independent project / {project.name}</p><h1>{story.title}</h1><p>{project.summary}</p><div className="tag-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></header><figure><a className={`case-image project-image-${project.id}`} style={{ display: "block" }} href={project.fullImage} aria-label={`Open full ${project.name} application capture`}><Image src={project.fullImage} alt={project.imageAlt} fill sizes="(max-width: 760px) 95vw, 85vw" priority/></a><figcaption className="figure-caption">{project.evidenceLabel} <a href={project.fullImage}>View full capture ↗</a></figcaption></figure><StorySection title="The problem"><p>{story.problem}</p></StorySection><StorySection title="What I built"><p>{project.contribution}</p></StorySection><StorySection title="Decision & tradeoff"><p>{story.decision}</p><p>{story.tradeoff}</p></StorySection>
    {project.id === "evalgate" ? <StorySection title={portfolio.architecture.title}><figure className="diagram"><a href={portfolio.architecture.image}><Image src={portfolio.architecture.image} alt="Evalgate acceptance flow: define a check, execute a verifier, update passing contracts or retain failure for explicit review." width={1120} height={680}/></a><figcaption className="figure-caption"><a href={portfolio.architecture.image}>Open full architecture diagram ↗</a></figcaption></figure><ol className="diagram-steps"><li><strong>Constraint:</strong> {portfolio.architecture.constraint}</li><li><strong>Decision:</strong> {portfolio.architecture.decision}</li><li><strong>Result:</strong> {portfolio.architecture.result}</li></ol><p>{portfolio.architecture.scope} Retry counts are advisory; model judgments differ from deterministic checks.</p></StorySection> : <StorySection title="How the workflow fits"><ol className="diagram-steps">{story.flow.map(step => <li key={step.title}><strong>{step.title}.</strong> {step.body}</li>)}</ol></StorySection>}
    <StorySection title="Result & limits"><p>{project.outcome}</p><p>{story.limits}</p><a className="text-link" href={project.github}>Inspect {project.name} on GitHub ↗</a></StorySection><section className="contact"><div><p className="eyebrow">More engineering stories</p><div className="actions">{portfolio.projects.filter(item => item.id !== project.id).map(item => <Link className="button secondary" href={`/work/${item.id}`} key={item.id}>{item.name} ↗</Link>)}</div></div></section></main>;
}
function StorySection({ title, children }: {
    title: string;
    children: React.ReactNode;
}) { return <section className="case-grid"><h2>{title}</h2><div className="prose">{children}</div></section>; }
