const stack: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
  Backend: ["Node.js", "Java", "GraphQL", "REST APIs"],
  Data: ["MongoDB", "MySQL", "Oracle DB", "Redis"],
  DevOps: ["Docker", "AWS", "CI/CD", "Git"],
  Testing: ["Jest", "Selenium", "React Testing Library"],
};

export function TechStackTile() {
  return (
    <div className="bento-tile h-full flex flex-col animate-fade-up">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim">
        Tech Stack
      </span>

      <div className="mt-4 space-y-4 flex-1">
        {Object.entries(stack).map(([domain, techs]) => (
          <div key={domain}>
            <p className="text-accent-dim text-xs font-medium mb-1.5">
              {domain}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
