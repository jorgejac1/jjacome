"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
export interface ShowcaseProject {
    id: string;
    name: string;
    image: string;
    imageAlt: string;
    evidenceLabel: string;
    previewExplanation: string;
    summary: string;
}
export function ProjectShowcase({ projects }: {
    projects: ShowcaseProject[];
}) {
    const [selected, setSelected] = useState(0);
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);
    const touch = useRef<{
        x: number;
        y: number;
    } | null>(null);
    const suppressClickUntil = useRef(0);
    const project = projects[selected];
    function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, focusedIndex: number) {
        let next = focusedIndex;
        if (event.key === "ArrowRight")
            next = (focusedIndex + 1) % projects.length;
        else if (event.key === "ArrowLeft")
            next = (focusedIndex - 1 + projects.length) % projects.length;
        else if (event.key === "Home")
            next = 0;
        else if (event.key === "End")
            next = projects.length - 1;
        else
            return;
        event.preventDefault();
        setSelected(next);
        buttons.current[next]?.focus();
    }
    return (<section className="showcase" data-project={project.id} aria-label="Selected project preview">
      <div className="showcase-top"><span className="eyebrow">Independent engineering</span><span className="mono" aria-hidden="true">0{selected + 1} / 0{projects.length}</span></div>
      <div className="project-tabs" role="group" aria-label="Choose a project">
        {projects.map((item, index) => <button key={item.id} ref={element => { buttons.current[index] = element; }} type="button" aria-pressed={index === selected} aria-controls="project-preview" onClick={() => setSelected(index)} onKeyDown={event => onKeyDown(event, index)}>{item.name}</button>)}
      </div>
      <div id="project-preview" onClickCapture={event => { if (event.detail > 0 && Date.now() < suppressClickUntil.current) event.preventDefault(); suppressClickUntil.current = 0; }} onTouchCancel={() => { touch.current = null; }} onTouchStart={event => { suppressClickUntil.current = 0; touch.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }} onTouchEnd={event => {
            if (!touch.current)
                return;
            const dx = event.changedTouches[0].clientX - touch.current.x;
            const dy = event.changedTouches[0].clientY - touch.current.y;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                setSelected(current => (current + (dx < 0 ? 1 : -1) + projects.length) % projects.length);
                suppressClickUntil.current = Date.now() + 500;
            }
            touch.current = null;
        }}>
        <Link className={`showcase-image project-image-${project.id}`} href={`/work/${project.id}`} aria-label={`Read the ${project.name} engineering story`}>
          <Image key={project.id} src={project.image} alt={project.imageAlt} fill sizes="(max-width: 900px) 90vw, 43vw" priority={selected === 0}/>
        </Link>
        <div className="showcase-copy-stack">{projects.map((item, index) => <div key={item.id} className={`showcase-copy ${index === selected ? "is-active" : ""}`} style={{ visibility: index === selected ? "visible" : "hidden" }} aria-hidden={index !== selected} inert={index !== selected}><p className="evidence">{item.evidenceLabel}</p><h2><Link href={`/work/${item.id}`}>{item.name}<span aria-hidden="true"> ↗</span></Link></h2><p>{item.previewExplanation}</p></div>)}</div>
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{project.name}, project {selected + 1} of {projects.length}</p>
    </section>);
}
