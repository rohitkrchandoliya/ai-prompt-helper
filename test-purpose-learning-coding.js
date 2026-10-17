const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("learning purpose asks for beginner-friendly steps and examples", () => {
  const result = improvePrompt("Explain recursion", "learning");
  assert.match(result, /expert assistant for: learning/);
  assert.match(result, /step by step for a beginner and include examples/);
});

test("coding purpose requests working code and edge cases", () => {
  const result = improvePrompt("Parse a CSV file", "coding");
  assert.match(result, /expert assistant for: coding/);
  assert.match(result, /working code, explain how it works, and mention edge cases/);
});