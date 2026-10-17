const test = require("node:test");
const assert = require("node:assert/strict");
const { getPromptHistory } = require("./script.js");

test("history reader returns an empty array when storage read throws", () => {
  global.localStorage = {
    getItem: () => { throw new Error("storage blocked"); }
  };
  assert.deepEqual(getPromptHistory(), []);
});