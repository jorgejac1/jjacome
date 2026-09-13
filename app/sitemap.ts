import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/experience", "/notes/evidence-before-completion", `/work/${portfolio.enterpriseStory.id}`, ...portfolio.projects.map(project => `/work/${project.id}`)].map(path => ({ url: `${portfolio.links.website}${path}`, changeFrequency: "monthly", priority: path ? 0.7 : 1 })); }
