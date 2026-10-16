const test = require("node:test");
const assert = require("node:assert/strict");

const {
  improvePrompt,
  getPromptHistory,
  savePromptToHistory,
  clearPromptHistory
} = require("./script.js");

function createStorage() {
  const values = new Map();
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    }
  };
}

test.beforeEach(() => {
  global.localStorage = createStorage();
});

test("improvePrompt explains when the idea is empty", () => {
  assert.equal(
    improvePrompt("   "),
    "Please enter an idea before generating a prompt."
  );
});

test("improvePrompt trims the idea and uses the selected purpose", () => {
  const prompt = improvePrompt("  Build a todo app  ", "coding");

  assert.match(prompt, /Task: Build a todo app/);
  assert.match(prompt, /working code/i);
  assert.match(prompt, /Act as an expert assistant for: coding/);
});

test("improvePrompt falls back to general instructions for unknown purposes", () => {
  const prompt = improvePrompt("Plan a trip", "unknown-purpose");

  assert.match(prompt, /Give a clear, useful, well-structured response/);
});

test("getPromptHistory returns an empty array when storage is empty", () => {
  assert.deepEqual(getPromptHistory(), []);
});

test("getPromptHistory safely handles invalid JSON and non-array data", () => {
  global.localStorage.setItem("promptHistory", "{invalid");
  assert.deepEqual(getPromptHistory(), []);

  global.localStorage.setItem("promptHistory", JSON.stringify({ prompt: "x" }));
  assert.deepEqual(getPromptHistory(), []);
});

test("savePromptToHistory adds new prompts first and limits history to ten items", () => {
  for (let index = 1; index <= 12; index += 1) {
    savePromptToHistory(`Prompt ${index}`);
  }

  const history = getPromptHistory();
  assert.equal(history.length, 10);
  assert.equal(history[0].prompt, "Prompt 12");
  assert.equal(history[9].prompt, "Prompt 3");
  assert.ok(history[0].createdAt);
});

test("savePromptToHistory ignores empty values", () => {
  savePromptToHistory("First prompt");

  assert.equal(savePromptToHistory("  ").length, 1);
  assert.equal(getPromptHistory().length, 1);
});

test("clearPromptHistory removes saved prompts", () => {
  savePromptToHistory("A prompt");
  clearPromptHistory();

  assert.deepEqual(getPromptHistory(), []);
});
