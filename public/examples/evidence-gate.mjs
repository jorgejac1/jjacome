/** Original public teaching exercise. No API, model or employer data. Run: node evidence-gate.mjs */
import assert from 'node:assert/strict';
const sources = new Set(['source-1']);
function validateResponse(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return 'invalid_shape';
  if (value.status === 'insufficient_evidence') return 'needs_review';
  if (value.status !== 'answered' || typeof value.summary !== 'string' || !value.summary.trim() || typeof value.sourceId !== 'string') return 'invalid_shape';
  return sources.has(value.sourceId) ? 'ready_for_review' : 'missing_source';
}
const cases = [
  { name: 'existing source', input: {status:'answered', summary:'The supplied source describes a review workflow.', sourceId:'source-1'}, expected:'ready_for_review' },
  { name: 'invented citation', input: {status:'answered', summary:'A plausible sentence.', sourceId:'invented-source'}, expected:'missing_source' },
  { name: 'explicitly missing evidence', input: {status:'insufficient_evidence'}, expected:'needs_review' },
  { name: 'malformed response', input: {status:'answered', summary:42}, expected:'invalid_shape' },
];
for (const fixture of cases) {
  const actual = validateResponse(fixture.input);
  assert.equal(actual, fixture.expected, fixture.name);
  console.log(`${fixture.name}: ${actual}`);
}
console.log('All 4 expected fixture outcomes matched. Source existence does not establish semantic support.');
