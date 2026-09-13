import Link from "next/link";
import { portfolio } from "@/data/portfolio";
export function Navigation() {
    return <header className="site-header"><a href="#main" className="skip-link">Skip to content</a><nav className="nav shell" aria-label="Main navigation"><Link className="wordmark" href="/">Jorge Jacome<span aria-hidden="true">.</span></Link><div className="nav-links"><Link href="/#work">Work</Link><Link href="/experience">Experience</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link><a className="nav-resume" href={portfolio.links.resume}>Résumé <span aria-hidden="true">↗</span></a></div></nav></header>;
}
