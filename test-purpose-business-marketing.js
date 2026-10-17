const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("business purpose includes objectives, constraints, risks, and success criteria", () => {
  const result = improvePrompt("Plan a subscription service", "business");
  assert.match(result, /target audience, business objective, constraints, risks, and measurable success criteria/);
});

test("marketing purpose includes channel fit and avoids unsupported claims", () => {
  const result = improvePrompt("Promote a new app", "marketing");
  assert.match(result, /match the channel/);
  assert.match(result, /avoid unsupported claims/);
});