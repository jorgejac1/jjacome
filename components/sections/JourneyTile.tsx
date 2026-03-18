import experienceData from "@/data/experience.json";
import profileData from "@/data/profile.json";

const topRoles = [
  { id: "oracle", positionIdx: 0 },
  { id: "espn", positionIdx: 0 },
  { id: "amex", positionIdx: 0 },
];

export function JourneyTile() {
  const { experiences, awards } = experienceData;
  const { education } = profileData;

  const roles = topRoles
    .map(({ id, positionIdx }) => {
      const exp = experiences.find((e) => e.id === id);
      if (!exp) return null;
      const pos = exp.positions[positionIdx];
      return { company: exp.company, title: pos.title, period: pos.period };
    })
    .filter(Boolean) as { company: string; title: string; period: string }[];

  const award = awards?.[0];

  return (
    <div className="bento-tile h-full flex flex-col animate-fade-up">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim">
        Journey
      </span>

      <div className="mt-4 flex-1">
        <div className="relative pl-4">
          <div className="timeline-line absolute left-0 top-1 bottom-1" />
          <div className="space-y-5">
            {roles.map((role) => (
              <div key={role.company}>
                <p className="text-accent font-semibold text-sm leading-tight">
                  {role.title}
                </p>
                <p className="text-warm text-sm">{role.company}</p>
                <p className="text-accent-dim text-xs mt-0.5">{role.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border space-y-2">
        {award && (
          <div>
            <p className="text-warm text-sm font-medium">{award.title}</p>
            <p className="text-accent-dim text-xs">
              {award.organization} &middot; {award.date}
            </p>
          </div>
        )}
        <div>
          <p className="text-accent-dim text-xs">
            {education.degree}, {education.field}
          </p>
          <p className="text-accent-dim text-xs">
            {education.institution}
          </p>
        </div>
      </div>
    </div>
  );
}
