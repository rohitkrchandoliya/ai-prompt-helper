const test = require("node:test");
const assert = require("node:assert/strict");
const { removePromptFromHistory } = require("./script.js");

test("removing the only history entry persists an empty array", () => {
  let saved;
  global.localStorage = {
    getItem: () => JSON.stringify([{prompt:"only item"}]),
    setItem: (_key, value) => { saved = value; }
  };
  assert.deepEqual(removePromptFromHistory(0), []);
  assert.equal(saved, "[]");
});