import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { portfolio } from "@/data/portfolio";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const description = "Jorge Jacome builds frontend platforms and applied AI systems. Principal Member of Technical Staff at Oracle, with experience at ESPN and American Express.";
export const metadata: Metadata = {
    metadataBase: new URL(portfolio.links.website),
    title: { default: "Jorge Jacome — Frontend Engineering & Applied AI", template: "%s | Jorge Jacome" },
    description,
    alternates: { canonical: "/" },
    authors: [{ name: portfolio.identity.name }],
    icons: { icon: "/favicon.svg" },
    openGraph: { title: "Jorge Jacome — Frontend Engineering & Applied AI", description, siteName: "Jorge Jacome", locale: "en_US", type: "website" },
    twitter: { card: "summary_large_image", title: "Jorge Jacome — Frontend Engineering & Applied AI", description },
    robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#101512" };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: portfolio.identity.name, url: portfolio.links.website, jobTitle: portfolio.identity.currentRole, worksFor: { "@type": "Organization", name: portfolio.identity.currentCompany }, sameAs: [portfolio.links.github, portfolio.links.linkedin], knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Frontend architecture", "Applied AI"] };
    return <html lang="en" className={inter.variable}><body className={inter.className}><Navigation />{children}<Footer /><Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}/></body></html>;
}
