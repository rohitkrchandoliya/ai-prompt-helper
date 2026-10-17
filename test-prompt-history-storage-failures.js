const { test } = require('node:test');
const assert = require('node:assert/strict');
const { getPromptHistory, savePromptToHistory, removePromptFromHistory, clearPromptHistory } = require('./script.js');

test('getPromptHistory returns an empty array when storage access throws', () => {
  global.localStorage = { getItem() { throw new Error('blocked'); } };
  assert.deepEqual(getPromptHistory(), []);
});

test('getPromptHistory returns an empty array for invalid JSON', () => {
  global.localStorage = { getItem() { return '{invalid'; } };
  assert.deepEqual(getPromptHistory(), []);
});

test('saving a prompt does not throw when storage writes fail', () => {
  global.localStorage = { getItem() { return '[]'; }, setItem() { throw new Error('blocked'); } };
  assert.equal(savePromptToHistory('A useful prompt')[0].prompt, 'A useful prompt');
});

test('removing and clearing history do not throw when storage fails', () => {
  global.localStorage = { getItem() { return '["hello"]'; }, setItem() { throw new Error('blocked'); }, removeItem() { throw new Error('blocked'); } };
  assert.deepEqual(removePromptFromHistory(0), []);
  assert.doesNotThrow(() => clearPromptHistory());
});
