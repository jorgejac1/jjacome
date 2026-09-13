import Link from "next/link";
import { getPortfolio, localePath, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
export function Navigation({ locale }: { locale: Locale }) {
 const portfolio = getPortfolio(locale); const t = (en: string, es: string) => locale === "es" ? es : en;
    return <header className="site-header"><a href="#main" className="skip-link">{t("Skip to content", "Saltar al contenido")}</a><nav className="nav shell" aria-label={t("Main navigation", "Navegación principal")}><Link className="wordmark" href={localePath(locale, "/")}>Jorge Jacome<span aria-hidden="true">.</span></Link><div className="nav-links"><Link href={localePath(locale, "/#work")}>{t("Work", "Trabajo")}</Link><Link href={localePath(locale, "/experience")}>{t("Experience", "Experiencia")}</Link><Link href={localePath(locale, "/#about")}>{t("About", "Sobre mí")}</Link><Link href={localePath(locale, "/#contact")}>{t("Contact", "Contacto")}</Link><a className="nav-resume" href={portfolio.links.resume}>{t("Résumé", "CV")} <span aria-hidden="true">↗</span></a><LanguageSwitch locale={locale}/></div></nav></header>;
}
