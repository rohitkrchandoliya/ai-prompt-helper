const test = require("node:test");
const assert = require("node:assert/strict");
const { savePromptToHistory } = require("./script.js");

test("save returns updated history when localStorage write throws", () => {
  global.localStorage = {
    getItem: () => "[]",
    setItem: () => { throw new Error("quota exceeded"); }
  };
  const result = savePromptToHistory("A useful prompt");
  assert.equal(result.length, 1);
  assert.equal(result[0].prompt, "A useful prompt");
});