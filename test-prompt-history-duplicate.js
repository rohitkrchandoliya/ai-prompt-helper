const { test } = require('node:test');
const assert = require('node:assert/strict');
const { savePromptToHistory } = require('./script.js');

test('saving duplicate text moves the normalized prompt to the front once', () => {
  const initial = [{ prompt: 'same prompt', createdAt: '2020-01-01T00:00:00.000Z' }, { prompt: 'another prompt', createdAt: '2020-01-02T00:00:00.000Z' }];
  let stored;
  global.localStorage = { getItem() { return JSON.stringify(initial); }, setItem(key, value) { stored = JSON.parse(value); } };
  const result = savePromptToHistory(' same prompt ');
  assert.equal(result.length, 2);
  assert.equal(result[0].prompt, 'same prompt');
  assert.notEqual(result[0].createdAt, '2020-01-01T00:00:00.000Z');
  assert.equal(result.filter(item => item.prompt === 'same prompt').length, 1);
  assert.deepEqual(stored, result);
});
