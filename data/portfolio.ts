import publicContent from './portfolio.json';

export interface Position { title: string; period: string; current?: boolean; highlights: string[]; technologies: string[] }
export interface Role { id: string; company: string; positions: Position[] }
export interface StoryStep { title: string; body: string; image?: string; alt?: string }
export interface ProjectStory {
  id: string; name: string; discipline: string; title: string; summary: string; tags: string[];
  image: string; fullImage: string; alt: string; problemTitle: string; problem: string;
  contributionTitle: string; contribution: string; decisionTitle: string; decision: string;
  tradeoff: string; flow: StoryStep[]; steps: StoryStep[]; captureBoundary: string;
  outcomeTitle: string; outcome: string; limits: string; source: string;
}
export interface PortfolioProject {
  id: string; name: string; discipline: string; summary: string; contribution: string;
  outcome: string; technologies: string[]; image: string; fullImage: string; imageAlt: string;
  evidenceLabel: string; github: string; story: ProjectStory;
}
export interface PortfolioContent {
 version: string;
 identity: { name: string; targetRole: string; currentRole: string; currentCompany: string; headline: string; intro: string; summary: string; portrait: string; portraitAlt: string };
 architecture: { title: string; constraint: string; decision: string; result: string; scope: string; image: string };
 languages: string[];
 roles: Role[];
 projects: PortfolioProject[];
 enterpriseStory: { id: string; company: string; title: string; problem: string; constraints: string; contribution: string; decision: string; tradeoff: string; outcome: string; technologies: string[]; limits: string; evidence: string };
 teaching: { title: string; summary: string; scope: string; exercise: { title: string; prompt: string; failure: string; criteria: string[]; download: string; command: string; result: string; limits: string } };
 strengths: { title: string; items: string[] }[];
 links: { email: string; github: string; linkedin: string; website: string; resume: string };
 education: { degree: string; institution: string; period: string };
 awards: { title: string; organization: string; description: string; date: string }[];
 rag: { summary: string; boundary: string };
}
export const portfolio: PortfolioContent = publicContent;
