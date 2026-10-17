const { test } = require('node:test');
const assert = require('node:assert/strict');
const { improvePrompt } = require('./script.js');

test('improvePrompt rejects an empty idea', () => {
  assert.equal(improvePrompt(''), 'Please enter an idea before generating a prompt.');
});

test('improvePrompt rejects whitespace-only input', () => {
  assert.equal(improvePrompt('  \n  '), 'Please enter an idea before generating a prompt.');
});

test('improvePrompt rejects ideas longer than 2000 characters', () => {
  assert.equal(improvePrompt('x'.repeat(2001)), 'Your idea must be 2000 characters or fewer.');
});

test('improvePrompt accepts an idea exactly 2000 characters long', () => {
  assert.match(improvePrompt('x'.repeat(2000)), /Task: x{2000}/);
});
