const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("translation purpose preserves meaning, tone, names, and formatting", () => {
  const result = improvePrompt("Translate a customer notice", "translation");
  assert.match(result, /Preserve the original meaning, tone, names, and formatting/);
  assert.match(result, /flag ambiguous phrases/);
});

test("presentation purpose focuses each slide on one idea", () => {
  const result = improvePrompt("Prepare a project update", "presentation");
  assert.match(result, /organize a clear narrative/);
  assert.match(result, /keep each slide focused on one idea/);
});