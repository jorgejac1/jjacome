import { portfolio, type PortfolioContent } from '@/data/portfolio';
import spanish from '@/data/portfolio.es.json';
import type { Locale } from './locale';
export { localePath, type Locale } from './locale';
export function getPortfolio(locale: Locale): PortfolioContent { return locale === 'es' ? spanish : portfolio; }
