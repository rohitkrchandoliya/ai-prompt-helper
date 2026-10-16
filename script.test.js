const test = require("node:test");
const assert = require("node:assert/strict");

const {
  improvePrompt,
  getPromptHistory,
  savePromptToHistory,
  removePromptFromHistory,
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

test("improvePrompt safely handles non-string ideas", () => {
  assert.equal(
    improvePrompt(null),
    "Please enter an idea before generating a prompt."
  );
  assert.equal(
    improvePrompt(undefined),
    "Please enter an idea before generating a prompt."
  );
});

test("improvePrompt trims the idea and uses the selected purpose", () => {
  const prompt = improvePrompt("  Build a todo app  ", "coding");

  assert.match(prompt, /Task: Build a todo app/);
  assert.match(prompt, /working code/i);
  assert.match(prompt, /Act as an expert assistant for: coding/);
});

test("improvePrompt normalizes unsupported purposes to general", () => {
  const prompt = improvePrompt("Plan a trip", "unknown-purpose");

  assert.match(prompt, /Give a clear, useful, well-structured response/);
  assert.match(prompt, /Act as an expert assistant for: general/);
  assert.doesNotMatch(prompt, /unknown-purpose/);
});

test("improvePrompt does not accept inherited object properties as purposes", () => {
  const prompt = improvePrompt("Write a summary", "constructor");

  assert.match(prompt, /Act as an expert assistant for: general/);
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

test("savePromptToHistory returns the new prompt when storage writes fail", () => {
  global.localStorage.setItem = () => {
    throw new Error("Storage is unavailable");
  };

  const history = savePromptToHistory("A prompt that can still be used");
  assert.equal(history.length, 1);
  assert.equal(history[0].prompt, "A prompt that can still be used");
});

test("clearPromptHistory does not throw when storage removal fails", () => {
  global.localStorage.removeItem = () => {
    throw new Error("Storage is unavailable");
  };

  assert.doesNotThrow(() => clearPromptHistory());
});

test("clearPromptHistory removes saved prompts", () => {
  savePromptToHistory("A prompt");
  clearPromptHistory();

  assert.deepEqual(getPromptHistory(), []);
});

test("business purpose includes objective and success criteria guidance", () => {
  const prompt = improvePrompt("Launch a local service", "business");
  assert.match(prompt, /target audience/i);
  assert.match(prompt, /success criteria/i);
});

test("creative purpose encourages original directions", () => {
  const prompt = improvePrompt("Write a fantasy opening", "creative");
  assert.match(prompt, /original ideas/i);
  assert.match(prompt, /creative choices/i);
});

test("resume purpose avoids invented experience", () => {
  const prompt = improvePrompt("Improve my project description", "resume");
  assert.match(prompt, /action verbs/i);
  assert.match(prompt, /without inventing experience/i);
});

test("removePromptFromHistory deletes only the selected item", () => {
  savePromptToHistory("first");
  savePromptToHistory("second");
  const history = removePromptFromHistory(0);
  assert.equal(history.length, 1);
  assert.equal(history[0].prompt, "first");
  assert.equal(getPromptHistory().length, 1);
});

test("removePromptFromHistory safely ignores invalid indexes", () => {
  savePromptToHistory("keep me");
  assert.equal(removePromptFromHistory(-1).length, 1);
  assert.equal(removePromptFromHistory(99).length, 1);
  assert.equal(removePromptFromHistory(1.5).length, 1);
});

test("savePromptToHistory moves an exact duplicate to the top instead of storing it twice", () => {
  savePromptToHistory("First prompt");
  savePromptToHistory("Second prompt");
  savePromptToHistory("First prompt");

  const history = getPromptHistory();
  assert.equal(history.length, 2);
  assert.equal(history[0].prompt, "First prompt");
  assert.equal(history[1].prompt, "Second prompt");
});

test("savePromptToHistory only deduplicates exact matches", () => {
  savePromptToHistory("Build a todo app");
  savePromptToHistory("Build a notes app");

  assert.equal(getPromptHistory().length, 2);
});
