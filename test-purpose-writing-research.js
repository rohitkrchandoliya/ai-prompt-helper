const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("writing purpose requests clear language and logical structure", () => {
  const result = improvePrompt("Draft a welcome note", "writing");
  assert.match(result, /clear language, a suitable tone, and a logical structure/);
});

test("research purpose distinguishes facts from assumptions", () => {
  const result = improvePrompt("Compare battery technologies", "research");
  assert.match(result, /Compare reliable sources, explain the evidence, and distinguish facts from assumptions/);
});