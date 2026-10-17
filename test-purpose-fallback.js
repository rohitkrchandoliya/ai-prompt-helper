const { test } = require('node:test');
const assert = require('node:assert/strict');
const { improvePrompt } = require('./script.js');

test('unknown purpose falls back to general instructions', () => {
  const prompt = improvePrompt('Explain photosynthesis', 'not-a-purpose');
  assert.match(prompt, /Act as an expert assistant for: general\./);
  assert.match(prompt, /Give a clear, useful, well-structured response\./);
});

test('missing purpose uses general instructions', () => {
  assert.match(improvePrompt('Explain photosynthesis'), /expert assistant for: general/);
});

test('non-string purpose falls back to general instructions', () => {
  assert.match(improvePrompt('Explain photosynthesis', null), /expert assistant for: general/);
});
