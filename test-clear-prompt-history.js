const { test } = require('node:test');
const assert = require('node:assert/strict');
const { clearPromptHistory } = require('./script.js');

test('clearPromptHistory removes the promptHistory key', () => {
  const removed = [];
  global.localStorage = { removeItem(key) { removed.push(key); } };
  clearPromptHistory();
  assert.deepEqual(removed, ['promptHistory']);
});

test('clearPromptHistory does not throw when storage is blocked', () => {
  global.localStorage = { removeItem() { throw new Error('blocked'); } };
  assert.doesNotThrow(() => clearPromptHistory());
});
