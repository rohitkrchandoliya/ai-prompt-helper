const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("product design includes usability trade-offs and user validation", () => {
  const result = improvePrompt("Redesign a settings page", "productDesign");
  assert.match(result, /usability trade-offs/);
  assert.match(result, /validate the design with users/);
});

test("customer support limits questions and identifies escalation", () => {
  const result = improvePrompt("Resolve a billing complaint", "customerSupport");
  assert.match(result, /ask only necessary diagnostic questions/);
  assert.match(result, /when escalation is appropriate/);
});