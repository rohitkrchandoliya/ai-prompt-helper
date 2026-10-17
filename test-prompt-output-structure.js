const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("generated prompt preserves trimmed task and ordered sections", () => {
  const result = improvePrompt("  Explain photosynthesis  ", "general");
  assert.ok(result.startsWith("Act as an expert assistant for: general.\n\n"));
  assert.ok(result.includes("Task: Explain photosynthesis"));
  assert.ok(result.indexOf("Task:") < result.indexOf("Instructions:"));
  assert.match(result, /Ask clarifying questions if important details are missing/);
  assert.match(result, /State assumptions and organize the response clearly/);
});

test("generated prompt uses the selected purpose instruction", () => {
  const result = improvePrompt("Summarize a report", "email");
  assert.match(result, /expert assistant for: email/);
  assert.match(result, /appropriate tone/);
});