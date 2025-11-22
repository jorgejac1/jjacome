import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Jacome | Lead Software Engineer",
  description: "Lead Software Engineer at ESPN with 14+ years of experience building enterprise-scale applications. Previously at American Express developing features for 1M+ daily users.",
  keywords: ["Jorge Jacome", "Software Engineer", "React", "TypeScript", "Next.js", "ESPN", "American Express"],
  authors: [{ name: "Jorge Jacome" }],
  openGraph: {
    title: "Jorge Jacome | Lead Software Engineer",
    description: "Lead Software Engineer at ESPN with 14+ years of experience",
    url: "https://jjacome.com",
    siteName: "Jorge Jacome Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Jacome | Lead Software Engineer",
    description: "Lead Software Engineer at ESPN with 14+ years of experience",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
