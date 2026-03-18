import projectsData from "@/data/projects.json";
import { TrackOutbound } from "@/components/TrackOutbound";

export function FeaturedProjectTile() {
  const hero = projectsData.projects.find((p) => p.id === "lyra")!;

  return (
    <div className="bento-tile h-full flex flex-col animate-fade-up">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim">
        Featured Project
      </span>

      <div className="mt-4 flex-1">
        <h3 className="text-accent text-lg font-semibold">{hero.title}</h3>
        <p className="text-accent-dim text-sm mt-2 leading-relaxed">
          {hero.description}
        </p>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hero.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <TrackOutbound
          href={hero.githubUrl}
          eventName="project_click"
          eventProps={{ project: hero.title }}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover text-warm text-sm font-medium"
        >
          View on GitHub &rarr;
        </TrackOutbound>
      </div>
    </div>
  );
}
