import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";

/** Detail pages own their share text and never inherit the homepage artwork. */
export function pageMetadata({ title, description, path, image }: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
}): Metadata {
  const shareTitle = `${title} | ${portfolio.identity.name}`;
  const images = image ? [image] : [];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: portfolio.identity.name,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: shareTitle,
      description,
      images,
    },
  };
}
