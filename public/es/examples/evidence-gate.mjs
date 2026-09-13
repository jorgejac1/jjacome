/** Ejercicio público original. Sin APIs, modelos ni datos del empleador. Ejecutar: node evidence-gate.mjs */
import assert from 'node:assert/strict';
const sources = new Set(['source-1']);
function validateResponse(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return 'invalid_shape';
  if (value.status === 'insufficient_evidence') return 'needs_review';
  if (value.status !== 'answered' || typeof value.summary !== 'string' || !value.summary.trim() || typeof value.sourceId !== 'string') return 'invalid_shape';
  return sources.has(value.sourceId) ? 'ready_for_review' : 'missing_source';
}
const cases = [
  { name: 'fuente existente', input: {status:'answered', summary:'La fuente proporcionada describe un flujo de revisión.', sourceId:'source-1'}, expected:'ready_for_review' },
  { name: 'cita inventada', input: {status:'answered', summary:'Una frase plausible.', sourceId:'invented-source'}, expected:'missing_source' },
  { name: 'evidencia explícitamente ausente', input: {status:'insufficient_evidence'}, expected:'needs_review' },
  { name: 'respuesta mal formada', input: {status:'answered', summary:42}, expected:'invalid_shape' },
];
for (const fixture of cases) {
  const actual = validateResponse(fixture.input);
  assert.equal(actual, fixture.expected, fixture.name);
  console.log(`${fixture.name}: ${actual}`);
}
console.log('Los 4 ejemplos produjeron los resultados esperados. La existencia de una fuente no demuestra que respalde el contenido.');
