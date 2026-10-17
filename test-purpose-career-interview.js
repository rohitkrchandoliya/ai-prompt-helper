const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("resume purpose forbids inventing experience", () => {
  const result = improvePrompt("Improve my project bullets", "resume");
  assert.match(result, /achievement-focused language/);
  assert.match(result, /without inventing experience/);
});

test("interview purpose asks for realistic practice and strong-answer signals", () => {
  const result = improvePrompt("Prepare me for a support role", "interview");
  assert.match(result, /realistic practice prompts/);
  assert.match(result, /avoid fabricated credentials/);
});