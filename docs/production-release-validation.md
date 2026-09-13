# Production release validation — 2026-09-13

The Engineering Studio implementation replaces the previous portfolio with English and Spanish pages. Source implementation: `319037f300ef6e26fd8fd3feacf960307684a017` on main.

## Completed gates

GitHub Actions run [34743279392](https://github.com/jorgejac1/jjacome/actions/runs/34743279392) passed:

- ESLint, TypeScript, content/translation and PDF provenance validation.
- Four swipe interaction unit tests.
- Full dependency audit: zero reported vulnerabilities.
- Optimized Next.js build.
- 84 Playwright tests across Chromium, Firefox, WebKit and mobile, including axe checks, language switching, project navigation, downloads and missing routes.
- Rendered crawl: 18 pages, 43 resources, no reported failures.

Local browser review covered English and Spanish at 320, 390, 768, 1024, 1440 and 1920 pixels. No horizontal overflow or broken loaded images were observed. Mobile and desktop screenshots were independently reviewed. The three scripted RAG states and equivalent-page language switching were exercised.

Independent reviews resolved relative walkthrough image paths, localized footer routing, missing-project metadata, Spanish Open Graph images, and analytics handling of client-side navigation. No actionable source/design findings remained in the completed reviews. Automated accessibility checks are scoped checks, not a WCAG certification.

## Release controls

The existing Vercel project is linked to this repository, uses Node 22, and stages Git builds with automatic domain assignment disabled. Promote only the tested revision after its quality gates pass. Web Analytics and Speed Insights are enabled; telemetry components render only for the production environment. The www host redirects to the apex with HTTP 308.

Original production rollback deployment: `dpl_9HhzW48L9Tv1YDc5UCpMtNVXnFF5` (source `377488e76795594ee941839a5e0c67a535ffed90`). Use Vercel rollback if post-promotion smoke checks fail.

Deployment and the subsequent live-domain checks are recorded in the task's release result. Field performance data requires real traffic and is not replaced by build or browser checks.
