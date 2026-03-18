import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jorge Jacome — Principal Engineer",
  description:
    "Principal Technical Member of Staff Engineer at Oracle Health. 15+ years building enterprise-scale applications at Oracle, ESPN, and American Express.",
  keywords: [
    "Jorge Jacome",
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Oracle",
    "ESPN",
    "American Express",
  ],
  authors: [{ name: "Jorge Jacome" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jorge Jacome — Principal Engineer",
    description:
      "Principal Technical Member of Staff Engineer at Oracle Health. 15+ years building enterprise-scale applications.",
    url: "https://jjacome.com",
    siteName: "Jorge Jacome",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Jacome — Principal Engineer",
    description:
      "Principal Technical Member of Staff Engineer at Oracle Health. 15+ years building enterprise-scale applications.",
  },
};

export const viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        {children}
        <Analytics />
        <JsonLd />
      </body>
    </html>
  );
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jorge Jacome",
    url: "https://jjacome.com",
    jobTitle: "Principal Technical Member of Staff Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Oracle Health",
    },
    sameAs: [
      "https://github.com/jorgejac1",
      "https://linkedin.com/in/jorge-jacome",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Software Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
