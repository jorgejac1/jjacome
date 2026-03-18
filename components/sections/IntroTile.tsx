import profileData from "@/data/profile.json";
import { TrackDownload } from "@/components/TrackDownload";

export function IntroTile() {
  const { profile } = profileData;

  return (
    <div className="bento-tile h-full flex flex-col justify-between animate-fade-up">
      <div>
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-accent mt-3 mb-2">
          {profile.name}
        </h1>
        <p className="text-lg text-warm">{profile.title}</p>
        <p className="text-accent-dim mt-4 max-w-xl leading-relaxed">
          Building scalable, high-performance health and enterprise applications
          for millions of users. 15+ years shipping at Oracle, ESPN, and
          American Express.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-8">
        <div>
          <span className="text-2xl font-bold text-accent">15+</span>
          <span className="text-accent-dim text-sm ml-1.5">years</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-accent">1M+</span>
          <span className="text-accent-dim text-sm ml-1.5">daily users</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-accent">10+</span>
          <span className="text-accent-dim text-sm ml-1.5">
            engineers mentored
          </span>
        </div>
        <TrackDownload
          href="/ResumeJorge.docx"
          eventName="resume_download"
          className="link-hover text-warm font-medium ml-auto"
        >
          Download Resume &darr;
        </TrackDownload>
      </div>
    </div>
  );
}
