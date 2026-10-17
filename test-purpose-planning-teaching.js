const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("planning purpose asks for steps, timelines, dependencies, and risks", () => {
  const result = improvePrompt("Organize a community event", "planning");
  assert.match(result, /actionable steps/);
  assert.match(result, /dependencies, risks, and checkpoints/);
});

test("teaching purpose includes learning objectives and checks for understanding", () => {
  const result = improvePrompt("Teach fractions", "teaching");
  assert.match(result, /measurable learning objectives/);
  assert.match(result, /checks for understanding/);
});