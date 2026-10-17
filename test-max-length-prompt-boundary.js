const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("an idea of exactly 2000 characters is accepted", () => {
  const idea = "x".repeat(2000);
  const result = improvePrompt(idea);
  assert.ok(result.startsWith("Act as an expert assistant for: general."));
  assert.ok(result.includes("Task: " + idea));
  assert.ok(!result.includes("2000 characters or fewer"));
});