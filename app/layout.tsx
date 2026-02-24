import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorge Jacome | Principal Engineer at Oracle",
  description: "Principal Technical Member of Staff Engineer at Oracle Health (Cerner) with 15+ years of experience. Previously at ESPN and American Express developing features for 1M+ daily users.",
  keywords: ["Jorge Jacome", "Software Engineer", "React", "TypeScript", "Next.js", "Oracle", "Cerner", "ESPN", "American Express"],
  authors: [{ name: "Jorge Jacome" }],
  openGraph: {
    title: "Jorge Jacome | Principal Engineer at Oracle",
    description: "Principal Technical Member of Staff Engineer at Oracle Health with 15+ years of experience",
    url: "https://jjacome.com",
    siteName: "Jorge Jacome Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Jacome | Principal Engineer at Oracle",
    description: "Principal Technical Member of Staff Engineer at Oracle Health with 15+ years of experience",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
