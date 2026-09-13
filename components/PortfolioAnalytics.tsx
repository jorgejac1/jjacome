"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Analytics, track } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** Fixed, non-personal event properties; links work even if telemetry is blocked. */
export function PortfolioAnalytics({ locale, enabled }: { locale: "en" | "es"; enabled: boolean }) {
  const pathname = usePathname();
  useEffect(() => {
    if (!enabled) return;
    const project = pathname.match(/^\/(?:es\/)?work\/(allylab|conductor|evalgate|espn-platform|rag)$/)?.[1];
    if (project) { try { track("project_open", { locale, placement: "page", project }); } catch { /* Navigation has already succeeded. */ } }
  }, [pathname, locale, enabled]);
  useEffect(() => {
    if (!enabled) return;
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLAnchorElement | HTMLButtonElement>("a,button");
      if (!target) return;
      const href = target.getAttribute("href") ?? "";
      const placement = target.closest("header") ? "header" : target.closest("footer") ? "footer" : "content";
      const props: Record<string, string> = { locale, placement };
      let name: string | undefined;
      if (/\/resume\.pdf$/.test(href)) name = "resume_download";
      else if (href.startsWith("mailto:")) name = "contact_click";
      else if (href.startsWith("https://github.com/")) { name = "social_click"; props.channel = "github"; }
      else if (/^https:\/\/(www\.)?linkedin\.com\//.test(href)) { name = "social_click"; props.channel = "linkedin"; }
      if (name) { try { track(name, props); } catch { /* Telemetry must never block navigation. */ } }
    };
    const selection = (event: Event) => {
      const project = (event as CustomEvent).detail?.project;
      if (!["allylab", "conductor", "evalgate"].includes(project)) return;
      try { track("project_select", { locale, placement: "hero", project }); } catch { /* Non-blocking telemetry. */ }
    };
    document.addEventListener("click", click);
    window.addEventListener("portfolio:project-select", selection);
    return () => { document.removeEventListener("click", click); window.removeEventListener("portfolio:project-select", selection); };
  }, [locale, enabled]);
  return enabled ? <><Analytics /><SpeedInsights /></> : null;
}
