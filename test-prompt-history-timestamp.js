const { test } = require('node:test');
const assert = require('node:assert/strict');
const { savePromptToHistory } = require('./script.js');

test('saved history records include an ISO timestamp', () => {
  let stored;
  global.localStorage = { getItem() { return '[]'; }, setItem(key, value) { stored = JSON.parse(value); } };
  const result = savePromptToHistory('  make a checklist  ');
  assert.equal(result[0].prompt, 'make a checklist');
  assert.equal(typeof result[0].createdAt, 'string');
  assert.equal(new Date(result[0].createdAt).toISOString(), result[0].createdAt);
  assert.deepEqual(stored, result);
});
