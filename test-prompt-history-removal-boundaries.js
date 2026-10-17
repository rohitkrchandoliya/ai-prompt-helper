const { test } = require('node:test');
const assert = require('node:assert/strict');
const { removePromptFromHistory } = require('./script.js');

test('negative and fractional indexes leave history unchanged', () => {
  const original = '["first","second"]';
  let writes = 0;
  global.localStorage = { getItem() { return original; }, setItem() { writes++; } };
  assert.deepEqual(removePromptFromHistory(-1), ['first', 'second']);
  assert.deepEqual(removePromptFromHistory(0.5), ['first', 'second']);
  assert.deepEqual(removePromptFromHistory('0'), ['first', 'second']);
  assert.equal(writes, 0);
});

test('an index beyond history length leaves entries unchanged', () => {
  let writes = 0;
  global.localStorage = { getItem() { return '["first"]'; }, setItem() { writes++; } };
  assert.deepEqual(removePromptFromHistory(5), ['first']);
  assert.equal(writes, 0);
});
