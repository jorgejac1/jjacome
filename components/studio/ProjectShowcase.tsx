"use client";
import { localePath, type Locale } from "@/lib/locale";
import { shouldSuppressClick } from "@/lib/swipe";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
export interface ShowcaseProject {
    id: string;
    name: string;
    image: string;
    imageAlt: string;
    evidenceLabel: string;
    previewExplanation: string;
    summary: string;
}
export function ProjectShowcase({ projects, locale }: {
    projects: ShowcaseProject[]; locale: Locale;
}) {
    const t = (en: string, es: string) => locale === "es" ? es : en;
    const [selected, setSelected] = useState(0);
    const previousSelected = useRef(selected);
    useEffect(() => {
      if (previousSelected.current !== selected) {
        window.dispatchEvent(new CustomEvent('portfolio:project-select', { detail: { project: projects[selected].id } }));
        previousSelected.current = selected;
      }
    }, [selected, projects]);
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
    return (<section className="showcase" data-project={project.id} aria-label={t("Selected project preview", "Vista del proyecto seleccionado")}>
      <div className="showcase-top"><span className="eyebrow">{t("Independent engineering", "Ingeniería independiente")}</span><span className="mono" aria-hidden="true">0{selected + 1} / 0{projects.length}</span></div>
      <div id="project-preview" onClickCapture={event => { if (shouldSuppressClick(event.detail, suppressClickUntil.current)) event.preventDefault(); suppressClickUntil.current = 0; }} onTouchCancel={() => { touch.current = null; }} onTouchStart={event => { suppressClickUntil.current = 0; touch.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }} onTouchEnd={event => {
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
        <Link className={`showcase-image project-image-${project.id}`} href={localePath(locale, `/work/${project.id}`)} aria-label={t(`Read the ${project.name} engineering story`, `Leer la historia de ${project.name}`)}>
          <Image key={project.id} src={project.image} alt={project.imageAlt} fill sizes="(max-width: 900px) 90vw, 43vw" priority={selected === 0}/>
        </Link>
        <div className="showcase-copy-stack">{projects.map((item, index) => <div key={item.id} className={`showcase-copy ${index === selected ? "is-active" : ""}`} style={{ visibility: index === selected ? "visible" : "hidden" }} aria-hidden={index !== selected} inert={index !== selected}><p className="evidence">{item.evidenceLabel}</p><h2><Link href={localePath(locale, `/work/${item.id}`)}>{item.name}<span aria-hidden="true"> ↗</span></Link></h2><p>{item.previewExplanation}</p></div>)}</div>
      </div>
            <div className="project-tabs showcase-selectors" role="group" aria-label={t("Choose a project", "Elegir un proyecto")}>
        {projects.map((item, index) => <button key={item.id} ref={element => { buttons.current[index] = element; }} type="button" aria-pressed={index === selected} aria-controls="project-preview" onClick={() => setSelected(index)} onKeyDown={event => onKeyDown(event, index)}><Image src={item.image} alt="" width={80} height={45}/><span><small>0{index+1}</small> {item.name}</span></button>)}
      </div>
<p className="showcase-hint">{t("Choose a project · swipe on mobile", "Elige un proyecto · desliza en móvil")}</p>
      <p className="showcase-status" role="status" aria-live="polite" aria-atomic="true">{project.name}, {t("project", "proyecto")} {selected + 1} {t("of", "de")} {projects.length}</p>
    </section>);
}
