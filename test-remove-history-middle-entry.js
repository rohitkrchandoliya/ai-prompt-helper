const test = require("node:test");
const assert = require("node:assert/strict");
const { removePromptFromHistory } = require("./script.js");

test("removing a middle entry preserves remaining order", () => {
  let saved;
  global.localStorage = {
    getItem: () => JSON.stringify([{prompt:"one"},{prompt:"two"},{prompt:"three"}]),
    setItem: (_key, value) => { saved = value; }
  };
  const result = removePromptFromHistory(1);
  assert.deepEqual(result, [{prompt:"one"},{prompt:"three"}]);
  assert.deepEqual(JSON.parse(saved), result);
});