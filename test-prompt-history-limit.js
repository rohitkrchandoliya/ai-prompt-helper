const { test } = require('node:test');
const assert = require('node:assert/strict');
const { savePromptToHistory } = require('./script.js');

test('saving a prompt caps history at ten entries with newest first', () => {
  const initial = Array.from({ length: 10 }, (_, i) => `prompt-${i}`);
  let stored;
  global.localStorage = { getItem() { return JSON.stringify(initial); }, setItem(key, value) { stored = JSON.parse(value); } };
  const result = savePromptToHistory('newest prompt');
  assert.equal(result.length, 10);
  assert.equal(result[0].prompt, 'newest prompt');
  assert.equal(result[1], 'prompt-0');
  assert.equal(result.includes('prompt-9'), false);
  assert.deepEqual(stored, result);
});
