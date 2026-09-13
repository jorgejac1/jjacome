# Bilingual Studio implementation

Production source changes completed for the release plan; no deployment or commit performed by this implementer.

## Routes and shared rendering

English URLs remain unchanged. Route groups provide separate static root documents for English and Spanish, with `html lang="en"` and `html lang="es"`; shared server renderers accept an explicit locale. `/es` mirrors the homepage, experience, all four contribution/project stories, teaching note, privacy page and new synthetic RAG walkthrough. Locale-specific catch-all routes retain localized navigation and 404 copy.

Canonical content is selected from the English and Spanish structured files. Translated UI copy lives with shared renderers; client components import only lightweight locale helpers rather than the complete data files. Language controls are visible in both header and footer and preserve the equivalent pathname and fragment. Metadata includes localized canonical URLs and reciprocal English, Spanish and x-default alternates. Home artwork is generated at explicit locale-specific image routes; detail pages retain their own artwork or text-only cards. Unknown project routes return noindex metadata.

## Studio port

The approved “Thoughtful interfaces. Serious engineering.” headline and a natural Spanish equivalent replace the old production headline. The career snapshot sits immediately below the hero, includes exact official titles, and shows the full American Express tenure. Manual thumbnail project controls sit beneath the real capture, with visible named status and a mobile swipe hint. Existing feathered glow, social icons, reduced-motion support and focused-index keyboard navigation remain.

Project stories expose the source-backed walkthrough steps through native disclosure elements, accessible without JavaScript. Actual screenshot assets remain unchanged; Spanish content explains their English UI. The Evalgate architecture diagram uses the locale-specific asset and explanatory text. No employer attribution, adoption metrics or project capabilities were expanded.

## Interaction and telemetry boundaries

The swipe click guard is factored into `lib/swipe.ts`; keyboard activation remains exempt from suppression. A custom project-selection event emits only after a selected index changes, including keyboard and swipe input. Root-owned analytics is integrated only when `VERCEL_ENV` is production. Privacy copy describes Web Analytics, Speed Insights and fixed identifier events.

The RAG route uses three fully translated, preset scenarios: supported answer, missing evidence and retrieval failure. It makes no requests or model calls and exposes synthetic-data limits before the controls. Its default example and architecture explanation remain available without JavaScript.

## Validation and handoff

- ESLint: passed after final source edits.
- TypeScript: passed after final source edits.
- Corrected review findings: relative walkthrough screenshot URLs; missing footer language control; unknown-story metadata; Spanish social artwork.
- Root owns final build, browser verification across breakpoints and languages, CI and deployment checks. This note does not claim those checks have passed.
