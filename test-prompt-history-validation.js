const { test } = require('node:test');
const assert = require('node:assert/strict');
const { savePromptToHistory } = require('./script.js');

test('saving a blank prompt leaves existing history unchanged', () => {
  global.localStorage = { getItem() { return '["existing"]'; }, setItem() { throw new Error('should not write'); } };
  assert.deepEqual(savePromptToHistory('   '), ['existing']);
});

test('saving a non-string prompt leaves history unchanged', () => {
  global.localStorage = { getItem() { return '["existing"]'; }, setItem() { throw new Error('should not write'); } };
  assert.deepEqual(savePromptToHistory(null), ['existing']);
});

test('saving a valid prompt trims surrounding whitespace', () => {
  let stored;
  global.localStorage = { getItem() { return '[]'; }, setItem(key, value) { stored = JSON.parse(value); } };
  const result = savePromptToHistory('  draft a plan  ');
  assert.equal(result[0].prompt, 'draft a plan');
  assert.equal(stored[0].prompt, 'draft a plan');
});
