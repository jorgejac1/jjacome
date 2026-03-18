import projectsData from "@/data/projects.json";
import { TrackOutbound } from "@/components/TrackOutbound";

const featuredIds = [
  "hechomx",
  "finance-dashboard",
  "dfs-app",
  "interview-prep",
];

export function MoreProjectsTile() {
  const projects = featuredIds
    .map((id) => projectsData.projects.find((p) => p.id === id))
    .filter(Boolean) as typeof projectsData.projects;

  return (
    <div className="bento-tile h-full animate-fade-up">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim">
        More Projects
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded-xl bg-surface-overlay/50 border border-border hover:border-border-hover transition-colors"
          >
            <h4 className="text-accent font-semibold text-sm">
              {project.title}
            </h4>
            <p className="text-accent-dim text-xs mt-1 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="tech-tag text-[0.65rem]">
                  {tech}
                </span>
              ))}
            </div>
            <TrackOutbound
              href={project.githubUrl}
              eventName="project_click"
              eventProps={{ project: project.title }}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-warm text-xs font-medium inline-block mt-2.5"
            >
              GitHub &rarr;
            </TrackOutbound>
          </div>
        ))}
      </div>
    </div>
  );
}
