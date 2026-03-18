import profileData from "@/data/profile.json";
import skillsData from "@/data/skills.json";

export function StatusTile() {
  const { profile } = profileData;
  const { languages } = skillsData;

  return (
    <div className="bento-tile h-full flex flex-col justify-between animate-fade-up">
      <div>
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim">
          Status
        </span>
        <div className="flex items-center gap-2.5 mt-4">
          <span className="status-dot" />
          <span className="text-accent text-sm font-medium">
            Currently at {profile.currentCompany} Health
          </span>
        </div>
        <p className="text-accent-dim text-sm mt-3">{profile.location}</p>
        <p className="text-accent-dim text-xs mt-2 leading-relaxed">
          Leading UI modernization and automation for Oracle Health&apos;s
          Cerner platform.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim mb-2">
          Languages
        </p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span key={lang.language} className="text-accent-dim text-sm">
              {lang.language}
              <span className="text-warm-dim text-xs ml-1">
                ({lang.proficiency})
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
