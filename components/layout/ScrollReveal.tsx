"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement: content stays visible before and without JavaScript. */
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || entry.target.contains(document.activeElement)) continue;
        const animation = entry.target.animate(
          [{ opacity: 0.25, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    const targets = document.querySelectorAll("main > .section, main > .role, main > .case-grid, main > .contact, main > .career-snapshot");
    for (const target of targets) {
      if (target.getBoundingClientRect().top >= window.innerHeight) observer.observe(target);
    }
    const stop = () => {
      observer.disconnect();
      for (const animation of animations) animation.cancel();
      animations.clear();
    };
    const onPreference = () => { if (preference.matches) stop(); };
    // Keyboard navigation should never land on a fading control.
    const onFocus = () => { for (const animation of animations) animation.finish(); };
    preference.addEventListener("change", onPreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      stop();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("focusin", onFocus);
    };
  }, [pathname]);
  return null;
}
