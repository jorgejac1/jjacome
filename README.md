# Jorge Jacome — frontend engineering and applied AI

Bilingual English/Spanish portfolio for https://jjacome.com. Built with Next.js App Router, React, TypeScript and Tailwind CSS. The Engineering Studio design uses CSS motion and inline SVG icons; no animation service, database or model API is required.

## Development

Use Node 22 (`nvm use`) and npm 10.9.8. Run `npm ci`, then `npm run dev`.

English routes start at `/`; Spanish routes start at `/es`. Shared page components receive a locale, with separate static root layouts setting the document language. Translation switches preserve the corresponding page. Case-study slugs remain stable across languages.

## Content and downloads

- `data/portfolio.json`: English source and shared professional facts.
- `data/portfolio.es.json`: Spanish equivalent, with the same schema and identifiers.
- `components/studio/pages/`: shared portfolio page implementations.
- `public/` and `public/es/`: public images, localized downloads and diagrams.

Update both content files without changing claims or evidence boundaries. Generate public résumés with Python + ReportLab:

```
python3 scripts/generate-resume.py --locale en
python3 scripts/generate-resume.py --locale es
```

The original user-supplied résumé is not modified. Generated PDFs and provenance manifests are committed. `npm run validate:content` checks locale completeness, linked artifacts and PDF hashes without requiring Python during a deployment.

## Validation

```
npm run validate:content
npm run lint
npm run typecheck
npm test
npm audit --audit-level=high
npm run build
```

Browser tests use Playwright and axe in CI across Chromium, Firefox, WebKit and mobile WebKit. To run in a dedicated test environment: `npx playwright install --with-deps` followed by `npx playwright test`. The production HTTP crawl is `python3 scripts/check-portfolio-links.py http://localhost:3000` after starting the built app. Generated reports are ignored by Git.

## Analytics

Vercel Web Analytics and Speed Insights render only for `VERCEL_ENV=production`. The existing Vercel project must have these integrations enabled. Fixed custom events measure resume-download clicks, contact intent, social destinations, project opens and actual project selections. Properties use fixed locale/project/channel/placement values. Events never include message contents or arbitrary URL parameters, and telemetry failure does not block links. A contact click does not establish email delivery.

The private design comparison site is a separate artifact and is not part of this production deployment.

## Release

GitHub `main` is the source of truth. CI validates pushes; it does not run an unconditional production deployment. The existing Vercel Git integration builds staged production candidates with automatic custom-domain assignment disabled. The release operator must verify checks and the exact staged deployment before promoting it to jjacome.com. Do not re-enable a second competing deploy workflow.

Record the current live deployment as the rollback target before promotion. Validate English/Spanish pages, contact/social links, both résumés, redirects, metadata, image delivery and analytics after release. An instant rollback reassigns domains to a retained previously-live deployment; it does not restore changed environment or DNS settings.

See `docs/jjacome-production-release-plan.md` for the detailed release gates and `docs/production-release-validation.md` for release evidence when available.
