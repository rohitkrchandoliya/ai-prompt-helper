const test = require("node:test");
const assert = require("node:assert/strict");
const { removePromptFromHistory } = require("./script.js");

test("invalid indices do not write to localStorage", () => {
  let writes = 0;
  global.localStorage = {
    getItem: () => JSON.stringify([{prompt:"keep"}]),
    setItem: () => { writes += 1; }
  };
  assert.deepEqual(removePromptFromHistory(-1), [{prompt:"keep"}]);
  assert.deepEqual(removePromptFromHistory(0.5), [{prompt:"keep"}]);
  assert.equal(writes, 0);
});