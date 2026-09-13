# Independent production implementation review

Reviewer role: independent of production implementation; this agent implemented the separate preview candidate. Scope: Next.js page/component/data source, existing route behavior, semantic and no-JavaScript core paths, supplied mobile capture and generated metadata. Root owns browser interaction, responsive matrix and lab checks. No deployment performed.

## Findings — resolved

### PROD-01 — P2: Arrow navigation starts from selection rather than keyboard focus

`components/studio/ProjectShowcase.tsx`, keyboard handler. All selector buttons remain tabbable. With AllyLab selected, Tab can focus Conductor without selecting it; ArrowRight originally derived its destination from selected index 0 and therefore remained on Conductor rather than moving to Evalgate.

Fix: pass the focused button index into the handler and derive ArrowLeft/ArrowRight from that index. Keep Home/End and explicit focus transfer. Resolved: handler now accepts focusedIndex and derives both arrows from it; each button passes its own index. Independent source recheck passed. Root owns the Tab-to-unselected/ArrowRight browser retest.

### PROD-02 — P2: Detail shares inherit homepage social metadata

`app/work/[slug]/page.tsx` generated only standard title/description/canonical. Experience and teaching metadata followed the same pattern. Confirmed directly in `.next/server/app/work/allylab.html`: `og:title`, `og:description`, `twitter:title` and `twitter:description` described Jorge's homepage instead of the AllyLab story.

Fix: provide route-specific social title/description/URL for each detail destination. Independent cases can use their corresponding real product capture; pages without a representative image can use text-oriented metadata. Resolved: shared pageMetadata helper sets destination-specific OG/Twitter fields. Independent SSR fetches of all six detail routes confirmed matching titles, descriptions and URLs, three correct project image URLs and no inherited homepage artwork on the other pages.

## Final result

No unresolved actionable production findings in this review scope. Two findings were fixed and independently rechecked.

## Checks with no additional findings

- Frontend target and official Oracle title are distinct, with employer and independent contributions labeled separately.
- Canonical JSON powers chronology, project stories, strengths, public teaching and portrait. Amex metrics remain scoped/historically qualified; private RAG description avoids exposing records.
- Primary content is server rendered. No-JavaScript readers can use ordinary navigation, every case link, résumé, email and the static first project. The selector is progressive enhancement; no core story depends on it.
- Main landmarks and page h1 are present. Skip link points to main; active selector has aria-pressed, controls linkage and a named polite status. Focus outlines and reduced-motion CSS are explicit.
- Homepage sections are focused; details live on case/Experience pages. Teaching sample is complete, downloadable and labeled as an original public example.
- Evalgate has an original diagram with text equivalent and explicit verification/retry limits.
- Existing homepage remains at `/`; `/ResumeJorge.docx` has an explicit permanent redirect to `/resume.pdf`; missing paths have a useful 404. Sitemap enumerates intended pages; no comparison/review routes are introduced into production.
- Source reserves project image dimensions and overlapping text panel height. Root's browser validation remains authoritative for actual reflow/interaction behavior.

This report does not claim field performance, VoiceOver verification, human recruiter validation or a new numerical score.
