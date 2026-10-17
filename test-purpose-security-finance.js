const test = require("node:test");
const assert = require("node:assert/strict");
const { improvePrompt } = require("./script.js");

test("security review purpose prioritizes defensive mitigations and evidence", () => {
  const result = improvePrompt("Review an authentication flow", "securityReview");
  assert.match(result, /trust boundaries/);
  assert.match(result, /defensive mitigations/);
  assert.match(result, /verified findings from assumptions/);
});

test("personal finance purpose states assumptions and limits advice claims", () => {
  const result = improvePrompt("Plan a monthly budget", "personalFinance");
  assert.match(result, /state assumptions/);
  assert.match(result, /personalized financial advice/);
});