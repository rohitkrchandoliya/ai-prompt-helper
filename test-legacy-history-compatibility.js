const test = require("node:test");
const assert = require("node:assert/strict");
const { getPromptHistory, removePromptFromHistory } = require("./script.js");

test("history reader preserves legacy string entries", () => {
  global.localStorage = {
    getItem: () => JSON.stringify(["older prompt", "another prompt"])
  };
  assert.deepEqual(getPromptHistory(), ["older prompt", "another prompt"]);
});

test("removing an entry works with legacy string history", () => {
  let saved = "";
  global.localStorage = {
    getItem: () => JSON.stringify(["first", "second"]),
    setItem: (_key, value) => { saved = value; }
  };
  assert.deepEqual(removePromptFromHistory(0), ["second"]);
  assert.deepEqual(JSON.parse(saved), ["second"]);
});