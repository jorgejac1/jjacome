# Portfolio release handoff

## Destinations

- Engineering Studio Next.js candidate is implemented in the production repository. A local build does not change `https://jjacome.com/`.
- Twelve-design collection uses its existing Sites project and owner-only audience. Its publication is a separate operation from production.

## Rollback

Production pre-change source: `377488e76795594ee941839a5e0c67a535ffed90`. Preserve the previous hosting deployment when publishing the candidate. Restore that deployment if résumé/contact/case navigation or essential rendering regresses, then investigate in the implementation branch rather than rewriting source history.

Private design pre-change source: `57dc973bf544532044a88d8e8b431777e31fc49d`; prior saved version 14. Its rollback must use the known earlier archived version on the same Site with the existing audience. Do not recreate the Site or change access as a recovery step.

## Release record

Final source/content identity, check results, deployment outcome and remaining external evidence limitations are recorded in `portfolio-implementation-validation.md`. Sensitive source credentials and private claim evidence must never be included in public archives.
