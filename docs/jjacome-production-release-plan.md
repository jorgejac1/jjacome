# jjacome.com production release plan

Status: planned, not deployed. Inspection: 2026-09-13. Production source baseline: 4ce2844 on codex/portfolio-research-implementation, GitHub jorgejac1/jjacome. Approved design reference: private Engineering Studio, including feathered glow, restrained motion, project selector and social footer. The private twelve-design collection stays separate from production.

## Verified current state

- Next.js 16.1.6 App Router, React 19.2.4, TypeScript, Tailwind 4.2.1, Sharp 0.34.5 and @vercel/analytics ^1.3.1. No installed Framer Motion or Lucide; motion is CSS and icons are inline SVG. README claims about the old stack are stale.
- Mostly pre-rendered pages; the project switcher is a small client component. No database, authentication or live model service is needed for this release.
- data/portfolio.json is canonical and typed through data/portfolio.ts. Old profile/experience/projects/skills JSON files still exist. Resume generation and content export exist but are not CI gates.
- Current production routes: /, /experience, /work/allylab, /work/conductor, /work/evalgate, /work/espn-platform, /notes/evidence-before-completion. Metadata, robots, sitemap, favicon and an old DOCX-to-PDF redirect exist.
- Production is not visually identical to the approved Studio: different hero headline, career summary, screenshot controls and story presentation. Treat this as a deliberate port with side-by-side acceptance, not an automatic copy of the twelve-design generator.
- Analytics component is mounted; download/outbound wrappers exist but are unused. No Speed Insights dependency. Preview collection has no analytics. Local insights endpoint returns 404 and does not prove deployment failure or working collection.
- Existing .github/workflows/deploy.yml runs an unpinned Vercel CLI --prod on main with checkout@v2, without install/lint/typecheck/test gates.
- Fresh npm audit --omit=dev: 5 affected packages, 1 critical, 3 high, 1 moderate. Names: next, sharp, postcss, nanoid, baseline-browser-mapping. These are package advisory classifications, not proof that every attack is reachable in this portfolio. Security remediation is a release gate.
- jjacome.com currently returns HTTP200 with Vercel headers. No local .vercel project binding was found; connector list_teams returned an empty list. Account/team/project, production branch, domain records, current deployment ID and plan entitlement are not yet verified.

## Phase 0 — Establish the existing deployment and protect the current site

1. Resolve the existing Vercel project through the correct account using connector, authenticated CLI or dashboard. Do not create a duplicate project merely because discovery returned no teams.
2. Record project/team IDs, connected Git repository, actual production branch, root/build settings, Node version, environment variable names (not values), domain aliases, analytics entitlement and deployment protection settings.
3. Record current production deployment ID and source revision as the rollback target. Confirm it is retained and rollback is available under the current plan.
4. Inventory whether Vercel Git integration and GitHub Actions both deploy. Select exactly one production deployment owner before merging anything to the production branch. Disable and verify automatic assignment of production domains for production-branch builds before the release merge. Confirm that neither Git integration nor the legacy workflow can publish that merge automatically. If the existing project cannot support this staging policy, choose a supported single CLI staging/promotion pipeline before merging.
5. Inspect apex and www behavior, HTTPS, existing paths and important fragment links. Capture current robots, sitemap and resume URLs to build a compatibility map.

Exit: verified project and release owner; known rollback; no uncertain auto-deployment trigger. No DNS changes expected when reusing the current project. Preserve MX/TXT and unrelated records if any DNS correction proves necessary.

## Phase 1 — Resolve dependency and build risks

1. Save the audit output, inspect relevant advisories and update Next, its matching ESLint config, compatible React packages, Sharp and affected transitive dependencies to supported patched versions. Determine versions at execution time; do not blindly run audit fix --force or force incompatible transitive overrides.
2. Use npm ci and the committed lockfile. Pin a Vercel-supported Node LTS version consistently in local configuration, package engines and CI. Pin the package manager and deployment CLI if CLI deployment is selected.
3. Run both production and full dependency audits, distinguish build-only from runtime exposure, and record any non-fixable finding with its mitigation. No unresolved applicable critical/high finding ships.
4. Rebuild and run image-optimizer, routing and hydration checks after upgrades; the previous green build is not sufficient for a new dependency tree.

Exit: reproducible install/build; advisories remediated or explicitly justified where non-applicable; no force-upgrade regressions.

## Phase 2 — Complete the Studio production port

1. Use the approved Studio as the visual reference. Bring its headline, spacing, project presentation, career context and footer into reusable Next components while preserving production URLs and canonical content.
2. Keep real screenshots and explanatory captions, matching image-to-project attribution. Preserve the feathered background and reduced-motion behavior. Avoid additional animation libraries for these effects.
3. Port the useful public story walkthroughs, readable architecture explanation and synthetic RAG explanation to production routes. Suggested /work/rag stays explicitly scripted and contains no private data or model/API credentials. Add it to navigation where relevant and sitemap once implemented.
4. Keep the enterprise contribution record linked and clearly résumé-attributed. Preserve Oracle teaching scope and career-wide technology breadth. Do not republish private rankings, reviewer reports, planning files, local transcripts or the twelve-design gallery on jjacome.com.
5. Keep Server Components for content and client state only for interactions. Consolidate repeated/minified CSS overrides into readable tokens/components without changing accepted appearance. Use one icon component for social links.
6. Remove obsolete data/assets only after reference checks. Decide whether the obsolete public DOCX should be removed now that its URL redirects; retain the original user-supplied résumé outside the public bundle. Update README, setup commands and content-editing instructions.
7. Make canonical schema/export and PDF provenance checks reproducible in CI. PDF regeneration can remain an explicit content-authoring step with pinned tooling; ordinary deploys validate the committed artifact rather than silently requiring local Python libraries.

Exit: production preview visually matches the approved Studio, all chosen public stories exist, production content has one source, no private planning material is deployed.

## Phase 2B — English and Spanish as first-class content

Required by Jorge: the production portfolio must be available in both English and Spanish. Complete this phase before SEO, analytics route validation and final release QA.

1. URL policy: keep existing English URLs unchanged (/, /experience, /work/*, /notes/*); use /es and mirrored Spanish routes (/es/experience, /es/work/*, /es/notes/*). Keeping shared slugs simplifies route parity; language is conveyed by the prefix. Avoid introducing /en redirects or renaming existing URLs unnecessarily.
2. Add a visible EN / ES language switch in the header and footer. Each link targets the equivalent current page and preserves valid section anchors. Mark the current language and use accessible labels such as “Read this page in English” and “Leer esta página en español”. Never show a disabled language that is not actually translated. Default / to English; do not force IP/browser-language redirects. Language preference may be remembered, but explicit URLs remain authoritative.
3. Separate shared facts (employment dates, official titles, project IDs, destinations and evidence provenance) from localized copy. Add typed en/es message/content bundles and build-time completeness checks. Use the same page components and design tokens in both languages; do not fork layouts into two maintenance trees. Audit a compatible App Router localization approach before adding a library: next-intl is a candidate if it reduces routing/formatting complexity, not an automatic dependency. Preserve static rendering.
4. Translate all visitor-facing content: hero, career highlights, case studies, architecture explanations, captions/alt text, image link labels, menus, button names, contact copy, privacy copy, errors/404, status announcements, motion controls, RAG questions/answers/synthetic source notes and downloads. Use natural professional Spanish while retaining recognizable technology/product names. Official employment titles remain exact with a Spanish explanation if useful. Translation must not inflate ownership, outcomes or metrics.
5. Real screenshots can retain their original English application UI: label that fact in Spanish captions and explain what is shown in Spanish. Do not fabricate localized application screenshots. Diagrams with explanatory text should have localized versions or accessible equivalent Spanish descriptions.
6. Provide separately generated English and Spanish public résumé PDFs and localized contribution-record downloads. Preserve /resume.pdf as the English compatibility URL; use /es/resume.pdf for Spanish. Validate text extraction, accents, line wrapping, page breaks and translation fidelity. Retain the supplied original résumé untouched. The Spanish PDF must not silently download the English file.
7. Set document lang=en or es at the appropriate routing/layout boundary. Give each localized page its own canonical URL, translated title/description/social text and reciprocal hreflang en/es plus an x-default policy pointing to the corresponding default-English page. Include both language variants in the sitemap; do not canonicalize Spanish pages to English. Render correct metadata for missing routes too.
8. Analytics event names remain stable across languages with a fixed locale=en|es property when custom events are available. Validate localized pageview paths and avoid duplicate events during switching. Do not send translated free-text content to analytics.
9. Test route-pair completeness, language switching from every public template, 404s, fragment handling, keyboard/screen-reader language announcement, long Spanish labels at 320px, accented characters and both PDFs. Review Spanish copy for natural phrasing and factual parity. Check performance and accessibility in both locales, not only the English homepage.

Exit: every public route and downloadable visitor artifact has a reviewed language equivalent; no English-only fallback is presented as Spanish; existing English URLs continue to work.

## Phase 3 — Analytics and performance visibility

1. Keep Vercel Web Analytics and verify it is enabled for the actual project. Verify script loading, navigation pageviews and dashboard ingestion on a deployed build with tracking unblocked.
2. Check plan entitlement before wiring custom events. Vercel documentation currently lists custom events for Pro/Enterprise. Do not silently buy or upgrade a plan. If unavailable, retain pageview analytics and explicitly defer conversion events, or let Jorge choose an alternative.
3. When supported, instrument resume_download, contact_click, social_click, project_open and project_select. Use small fixed properties such as placement, project and channel; exclude personal data, arbitrary URLs/query strings and document contents. Contact click measures intent, not sent email; download click is not proof the file was saved.
4. Consolidate tracking wrappers and preserve caller onClick behavior, keyboard navigation and normal links. Telemetry failure must not block navigation/download. Verify one event per action and distinguish preview/test traffic from production reporting.
5. Recommend Vercel Speed Insights after confirming entitlement and expected cost. Set launch lab targets: LCP <=2.5s, CLS <=0.1 and no long avoidable interactions on a defined mobile profile. Treat INP <=200ms as a field target; sufficient live traffic is needed to assess it. Record methodology and budgets rather than promise a synthetic score guarantees real performance.
6. Add a concise privacy disclosure matching the actual telemetry. Keep monitoring proportionate; no new database, session replay or external observability suite by default.

Exit: pageview collection verified; custom events verified if enabled or explicitly marked unavailable; performance baseline captured; telemetry does not break UI.

## Phase 4 — URLs, SEO and platform configuration

1. Preserve /ResumeJorge.docx -> /resume.pdf and inventory other real legacy routes before adding explicit permanent redirects. Preserve useful old homepage IDs or add compatible anchors; fragments are not sent to the server and cannot be fixed by server redirects alone.
2. Verify canonical https://jjacome.com, preferred www redirect, per-page metadata and OG image rendering, sitemap absolute URLs and real 404 status. Test case-study sharing and PDF content type/download behavior.
3. Ensure preview deployments are protected/noindex at the platform level and production remains indexable. Avoid baking preview noindex into an artifact later promoted without rebuilding.
4. Review headers: nosniff, appropriate Referrer-Policy and Permissions-Policy. Evaluate CSP in report-only mode first if adopted; verify Next inline/runtime scripts and analytics before enforcement. Avoid a nonce design that unnecessarily turns a static portfolio dynamic.
5. Keep platform caching defaults unless measurements justify changes. Confirm static screenshot caching and Next image optimization behavior after the upgrades. Cache HTML correctly rather than adding blanket immutable headers.

Exit: URL compatibility and SEO checks pass; headers do not break runtime/analytics; indexation differs correctly between preview and production.

## Phase 5 — Automated quality gates and release rehearsal

1. Prefer Vercel Git integration for branch previews with GitHub CI as the quality gate, replacing the current direct --prod workflow. If existing account constraints require CLI deployment, use one pinned staged-production pipeline instead. Never leave both deploying production. Rehearse the configured trigger: the reviewed commit creates only a staged candidate, while one explicit promotion step owns production-domain assignment. Successful PR checks alone do not prevent Vercel automatic promotion.
2. Required PR checks: npm ci; content/PDF validation; lint; typecheck; unit/regression tests; optimized build; local route/asset/fragment crawl; relevant dependency audit. Require them through branch protection before merge. Pin maintained CI actions and use minimal workflow permissions; keep secrets out of PRs from forks.
3. Add automated browser/a11y tests in project tooling: desktop/mobile navigation, project selection, keyboard after swipe, contact/social hrefs, downloads, walkthroughs and RAG states. Include axe checks on key routes and retain manual keyboard/VoiceOver review. The prior DOM checks were not WCAG certification.
4. Check Chromium, WebKit and Firefox; 320/390/768/1024/1440/1920 widths; landscape and zoom/reflow; reduced motion; no-JS essential content; image failures and slow network. Visually inspect hero/footer and each detail template. Add meaningful visual baselines for approved Studio.
5. Measure production-build performance on the deployed candidate. No hydration errors, image failures, broken links or critical/serious unresolved a11y findings. Collect evidence by exact commit/deployment.
6. Independent reviewer signs off design parity, content claims, accessibility fixes and release/rollback checklist. A numeric design score is not a release gate.

Exit: required checks green and unresolved actionable release findings zero; reviewed production-settings candidate and rollback record ready.

## Phase 6 — Stage, promote and verify jjacome.com

1. Build a staged production deployment from the exact reviewed revision with production settings and automatic production-domain assignment disabled. Keep the current public site serving while verifying the staged URL. Do not assume a preview build and production build have identical environment values.
2. Validate staged production URLs, assets, metadata, telemetry configuration and headers. Keep staged access restricted as supported without baking protection/noindex into the production content.
3. Promote that validated production deployment to the existing domain. Vercel distinguishes a staged production promotion (no rebuild) from promoting a preview through a production rebuild. Verify the actual platform path at execution time.
4. Immediately check https://jjacome.com, www redirect, core routes, resume, case-study images, social/contact destinations, analytics script/ingestion and real 404. Confirm production robots does not retain noindex.
5. Roll back to the recorded previous production deployment if primary navigation/content breaks, sustained 5xx/hydration errors occur, resume/assets fail or indexing is inadvertently blocked. Isolated delayed analytics reporting warrants investigation, not automatically reverting a healthy portfolio. Rollback changes the deployment, not previously changed DNS or environment values; record/revert those separately if altered.
6. After recovery, correct the branch/configuration before the next release so automation cannot immediately redeploy the broken revision.

Exit: jjacome.com serves the reviewed Studio revision; smoke checks pass; rollback remains available.

## Phase 7 — Post-release observation

Check logs/errors and telemetry immediately, then review after 24–48 hours and after sufficient field traffic accumulates. Confirm search discovery/sitemap submission through the existing Search Console property if accessible. Compare resume/contact/project interest over time without treating clicks as hiring outcomes. Only create a recurring monitor if Jorge requests scheduling.

## Execution order and decisions

Execute 0 -> 1 -> 2 -> 2B -> 3/4 -> 5 -> 6 -> 7. Content cleanup and design port can proceed while deployment access is resolved; production binding and plan-dependent analytics cannot be guessed. Default: reuse existing Vercel project, keep Next/React/Tailwind, retain small CSS motion, add no backend, use labeled social links, preserve the private design collection as a reference. Required external resolution: correct Vercel account/project, plan entitlement and current deployment/rollback access. This document authorizes no deployment by itself; current request is planning only.

## References

- https://nextjs.org/docs/app/guides/internationalization — App Router localized content and routing.
- https://next-intl.dev/docs/routing/configuration — optional locale prefix configuration.

- https://vercel.com/docs/deployments/promoting-a-deployment — production staging and promotion distinctions.
- https://vercel.com/docs/instant-rollback — retained deployment rollback and limitations.
- https://vercel.com/docs/analytics/custom-events — event API and plan availability.
- https://vercel.com/docs/speed-insights — field performance instrumentation.
- Local evidence: package.json, package-lock.json, .github/workflows/deploy.yml, app/layout.tsx, components/TrackDownload.tsx, components/TrackOutbound.tsx, data/portfolio.json and docs/final-portfolio-audit.md. Fresh dependency audit broadens the earlier UI-focused audit; earlier green UI checks were not a dependency-security sign-off.

## Plan review closure

Independent review identified an automatic-promotion gap between Git integration and staged rollout. Addressed by requiring verified disabled automatic domain assignment before merge and rehearsing a single staged-build/promotion owner. No implementation or deployment performed during planning.
