const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("purpose names are matched exactly and unknown casing uses general", () => {
  const result = improvePrompt("Explain a concept", "Learning");
  assert.match(result, /expert assistant for: general/);
  assert.match(result, /Give a clear, useful, well-structured response/);
});