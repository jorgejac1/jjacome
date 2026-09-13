import { portfolio } from "@/data/portfolio";
export function Footer() {
    return <footer className="footer shell"><span>© {new Date().getFullYear()} {portfolio.identity.name}</span><div className="footer-links"><a href={portfolio.links.github}>GitHub ↗</a><a href={portfolio.links.linkedin}>LinkedIn ↗</a><a href={portfolio.links.email}>Email ↗</a></div></footer>;
}
