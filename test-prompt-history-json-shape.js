const { test } = require('node:test');
const assert = require('node:assert/strict');
const { getPromptHistory } = require('./script.js');

test('getPromptHistory returns an empty array for non-array JSON values', () => {
  for (const value of ['{}', '"saved prompt"', '42', 'null']) {
    global.localStorage = { getItem() { return value; } };
    assert.deepEqual(getPromptHistory(), [], `expected empty history for ${value}`);
  }
});
