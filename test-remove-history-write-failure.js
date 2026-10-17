const test = require("node:test");
const assert = require("node:assert/strict");
const { removePromptFromHistory } = require("./script.js");

test("remove returns updated history when localStorage write throws", () => {
  global.localStorage = {
    getItem: () => JSON.stringify([{prompt:"keep"},{prompt:"remove"}]),
    setItem: () => { throw new Error("storage blocked"); }
  };
  assert.deepEqual(removePromptFromHistory(1), [{prompt:"keep"}]);
});