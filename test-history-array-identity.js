const test = require("node:test");
const assert = require("node:assert/strict");
const { getPromptHistory } = require("./script.js");

test("history reader preserves object entries and timestamps", () => {
  const history = [{prompt:"Explain gravity",createdAt:"2026-01-01T00:00:00.000Z"}];
  global.localStorage = { getItem: () => JSON.stringify(history) };
  assert.deepEqual(getPromptHistory(), history);
});