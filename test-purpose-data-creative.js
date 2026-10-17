const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("data analysis notes data quality and causation limits", () => {
  const result = improvePrompt("Analyze customer churn", "dataAnalysis");
  assert.match(result, /inspect data quality/);
  assert.match(result, /without overstating causation/);
});

test("creative purpose asks for original ideas and distinct directions", () => {
  const result = improvePrompt("Invent a fantasy setting", "creative");
  assert.match(result, /Offer original ideas, explore distinct directions/);
  assert.match(result, /creative choices/);
});