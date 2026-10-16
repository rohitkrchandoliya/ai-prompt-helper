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

test("getPromptHistory returns an empty array when storage reads throw", () => {
  global.localStorage.getItem = () => {
    throw new Error("Storage is unavailable");
  };

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

test("removePromptFromHistory does not throw when storage writes fail", () => {
  savePromptToHistory("first");
  savePromptToHistory("second");
  global.localStorage.setItem = () => {
    throw new Error("Storage is unavailable");
  };

  assert.doesNotThrow(() => removePromptFromHistory(0));
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

test("savePromptToHistory deduplicates existing entries with surrounding whitespace", () => {
  global.localStorage.setItem("promptHistory", JSON.stringify([
    { prompt: "  Keep this prompt  ", createdAt: "2025-01-01T00:00:00.000Z" },
    { prompt: "Another prompt", createdAt: "2025-01-02T00:00:00.000Z" }
  ]));

  savePromptToHistory("Keep this prompt");

  const history = getPromptHistory();
  assert.equal(history.filter((item) => item.prompt.trim() === "Keep this prompt").length, 1);
  assert.equal(history[0].prompt, "Keep this prompt");
});

test("savePromptToHistory deduplicates legacy string entries", () => {
  global.localStorage.setItem("promptHistory", JSON.stringify([
    "Old prompt",
    { prompt: "Another prompt", createdAt: "2025-01-01T00:00:00.000Z" }
  ]));

  savePromptToHistory("Old prompt");

  const history = getPromptHistory();
  assert.equal(history.filter((item) => {
    const savedPrompt = typeof item === "string" ? item : item.prompt;
    return savedPrompt === "Old prompt";
  }).length, 1);
  assert.equal(history[0].prompt, "Old prompt");
});

test("savePromptToHistory safely keeps malformed legacy records while deduplicating valid prompts", () => {
  global.localStorage.setItem("promptHistory", JSON.stringify([
    null,
    42,
    { other: "not a prompt" },
    { prompt: "Keep me", createdAt: "2025-01-01T00:00:00.000Z" }
  ]));

  assert.doesNotThrow(() => savePromptToHistory("Keep me"));

  const history = getPromptHistory();
  assert.equal(history[0].prompt, "Keep me");
  assert.equal(history.filter((item) => item && item.prompt === "Keep me").length, 1);
});

test("savePromptToHistory keeps the newest ten entries after a duplicate is moved to the top", () => {
  for (let index = 1; index <= 10; index += 1) {
    savePromptToHistory(`Prompt ${index}`);
  }

  savePromptToHistory("Prompt 5");

  const history = getPromptHistory();
  assert.equal(history.length, 10);
  assert.equal(history[0].prompt, "Prompt 5");
  assert.equal(history.some((item) => item.prompt === "Prompt 1"), true);
  assert.equal(history[1].prompt, "Prompt 10");
});

test("improvePrompt falls back to general for non-string purpose values", () => {
  for (const purpose of [null, undefined, 42, {}, []]) {
    const prompt = improvePrompt("Explain a concept", purpose);
    assert.match(prompt, /Act as an expert assistant for: general/);
    assert.match(prompt, /Give a clear, useful, well-structured response/);
  }
});

test("improvePrompt accepts ideas at the 2000-character limit", () => {
  const idea = "a".repeat(2000);
  assert.match(improvePrompt(idea), /Task: a{2000}/);
});

test("improvePrompt rejects ideas longer than 2000 characters", () => {
  assert.equal(
    improvePrompt("a".repeat(2001)),
    "Your idea must be 2000 characters or fewer."
  );
});

test("savePromptToHistory trims new prompts and deduplicates normalized variants", () => {
  savePromptToHistory("  Build a useful tool  ");
  savePromptToHistory("Build a useful tool");

  const history = getPromptHistory();
  assert.equal(history.length, 1);
  assert.equal(history[0].prompt, "Build a useful tool");
});

test("removePromptFromHistory returns safely when storage reads fail", () => {
  global.localStorage.getItem = () => {
    throw new Error("Storage is unavailable");
  };

  assert.doesNotThrow(() => removePromptFromHistory(0));
  assert.deepEqual(removePromptFromHistory(0), []);
});

test("savePromptToHistory can create an in-memory result when storage reads fail", () => {
  global.localStorage.getItem = () => {
    throw new Error("Storage is unavailable");
  };

  const history = savePromptToHistory("A prompt while storage is unavailable");
  assert.equal(history.length, 1);
  assert.equal(history[0].prompt, "A prompt while storage is unavailable");
});

test("savePromptToHistory retains only the ten newest unique prompts", () => {
  for (let index = 1; index <= 12; index += 1) {
    savePromptToHistory(`Unique prompt ${index}`);
  }

  const history = getPromptHistory();
  assert.equal(history.length, 10);
  assert.equal(history[0].prompt, "Unique prompt 12");
  assert.equal(history[9].prompt, "Unique prompt 3");
  assert.equal(history.some((item) => item.prompt === "Unique prompt 2"), false);
});

test("clearPromptHistory does not throw when storage removal fails", () => {
  global.localStorage.removeItem = () => {
    throw new Error("Storage is unavailable");
  };

  assert.doesNotThrow(() => clearPromptHistory());
});

test("getPromptHistory returns a fresh array without persisting caller mutations", () => {
  savePromptToHistory("Saved prompt");
  const firstRead = getPromptHistory();
  firstRead.push({ prompt: "Not saved" });

  const secondRead = getPromptHistory();
  assert.equal(secondRead.length, 1);
  assert.equal(secondRead[0].prompt, "Saved prompt");
});

test("clearPromptHistory leaves history empty after a normal clear", () => {
  savePromptToHistory("First saved prompt");
  savePromptToHistory("Second saved prompt");

  clearPromptHistory();

  assert.deepEqual(getPromptHistory(), []);
});

test("removePromptFromHistory rejects fractional and string indexes", () => {
  savePromptToHistory("First prompt");
  savePromptToHistory("Second prompt");
  const before = getPromptHistory();

  assert.deepEqual(removePromptFromHistory(0.5), before);
  assert.deepEqual(removePromptFromHistory("0"), before);
  assert.equal(getPromptHistory().length, 2);
});

test("savePromptToHistory keeps duplicate detection case-sensitive", () => {
  savePromptToHistory("Create Invoice");
  savePromptToHistory("create invoice");

  const history = getPromptHistory();
  assert.equal(history.length, 2);
  assert.equal(history[0].prompt, "create invoice");
  assert.equal(history[1].prompt, "Create Invoice");
});

test("removePromptFromHistory preserves remaining item order", () => {
  savePromptToHistory("First prompt");
  savePromptToHistory("Second prompt");
  savePromptToHistory("Third prompt");

  const before = getPromptHistory();
  const result = removePromptFromHistory(1);

  assert.equal(result.length, 2);
  assert.equal(result[0].prompt, before[0].prompt);
  assert.equal(result[1].prompt, before[2].prompt);
  assert.deepEqual(getPromptHistory(), result);
});

test("improvePrompt falls back to general for inherited purpose keys", () => {
  for (const purpose of ["constructor", "toString", "__proto__"]) {
    const prompt = improvePrompt("Explain a concept", purpose);
    assert.match(prompt, /Act as an expert assistant for: general/);
    assert.match(prompt, /Give a clear, useful, well-structured response/);
  }
});

test("planning purpose produces actionable steps, timelines, dependencies, and risks", () => {
  const prompt = improvePrompt("Organize a community event", "planning");
  assert.match(prompt, /Act as an expert assistant for: planning/);
  assert.match(prompt, /actionable steps/i);
  assert.match(prompt, /timelines/i);
  assert.match(prompt, /dependencies/i);
  assert.match(prompt, /risks and checkpoints/i);
});

test("data analysis purpose asks for methods, patterns, and limitations", () => {
  const prompt = improvePrompt("Analyze monthly sales", "dataAnalysis");
  assert.match(prompt, /Act as an expert assistant for: dataAnalysis/);
  assert.match(prompt, /data quality/i);
  assert.match(prompt, /key patterns/i);
  assert.match(prompt, /limitations/i);
  assert.match(prompt, /without overstating causation/i);
});

test("email writing purpose includes tailored writing guidance", () => {
  const prompt = improvePrompt("Write a follow-up email after a meeting", "email");
  assert.match(prompt, new RegExp("Act as an expert assistant for: email"));
  assert.match(prompt, /recipient and goal/i);
  assert.match(prompt, /appropriate tone/i);
  assert.match(prompt, /clear next step/i);
});

test("marketing purpose includes tailored campaign guidance", () => {
  const prompt = improvePrompt("Promote a new online course", "marketing");
  assert.match(prompt, /Act as an expert assistant for: marketing/);
  assert.match(prompt, /value proposition/i);
  assert.match(prompt, /call to action/i);
  assert.match(prompt, /unsupported claims/i);
});

test("teaching purpose supports structured, learner-centered lessons", () => {
  const prompt = improvePrompt("Create a beginner lesson on fractions", "teaching");
  assert.match(prompt, /Act as an expert assistant for: teaching/);
  assert.match(prompt, /learning objectives/i);
  assert.match(prompt, /checks for understanding/i);
  assert.match(prompt, /accessible alternatives/i);
});

test("interview preparation purpose includes tailored guidance", () => {
  const prompt = improvePrompt("Prepare for a junior developer interview", "interview");
  assert.match(prompt, /Act as an expert assistant for: interview/);
  assert.match(prompt, /role and seniority/i);
  assert.match(prompt, /strong answers/i);
  assert.match(prompt, /fabricated credentials/i);
});

test("product design purpose covers user needs and design validation", () => {
  const prompt = improvePrompt("Design a simple budgeting app", "productDesign");
  assert.match(prompt, /user needs and constraints/i);
  assert.match(prompt, /usability trade-offs/i);
  assert.match(prompt, /validate the design with users/i);
});

test("customer support purpose gives empathetic, actionable guidance", () => {
  const prompt = improvePrompt("Respond to a customer whose order is delayed", "customerSupport");
  assert.match(prompt, /acknowledge the customer's issue/i);
  assert.match(prompt, /diagnostic questions/i);
  assert.match(prompt, /clear steps/i);
  assert.match(prompt, /escalation/i);
});

test("security review purpose prioritizes threats and defensive mitigations", () => {
  const prompt = improvePrompt("Review my app's security", "securityReview");
  assert.match(prompt, /trust boundaries/i);
  assert.match(prompt, /realistic threats/i);
  assert.match(prompt, /defensive mitigations/i);
  assert.match(prompt, /verified findings from assumptions/i);
});

test("presentation purpose supports clear, audience-focused slide structure", () => {
  const prompt = improvePrompt("Create a presentation about renewable energy", "presentation");
  assert.match(prompt, /audience and objective/i);
  assert.match(prompt, /clear narrative/i);
  assert.match(prompt, /speaker notes/i);
  assert.match(prompt, /concise closing/i);
});

test("translation purpose preserves meaning and flags ambiguity", () => {
  const prompt = improvePrompt("Translate a product description into Spanish", "translation");
  assert.match(prompt, /preserve the original meaning/i);
  assert.match(prompt, /tone/i);
  assert.match(prompt, /flag ambiguous phrases/i);
  assert.match(prompt, /culturally specific wording/i);
});

test("personal finance purpose covers budgeting and avoids personalized advice claims", () => {
  const prompt = improvePrompt("Build a monthly budget on a limited income", "personalFinance");
  assert.match(prompt, /budgeting goals/i);
  assert.match(prompt, /income and expense categories/i);
  assert.match(prompt, /saving options/i);
  assert.match(prompt, /avoid presenting general information as personalized financial advice/i);
});

test("removePromptFromHistory rejects negative and out-of-range indexes without changing history", () => {
  savePromptToHistory("First prompt");
  savePromptToHistory("Second prompt");
  const before = getPromptHistory();

  assert.deepEqual(removePromptFromHistory(-1), before);
  assert.deepEqual(removePromptFromHistory(2), before);
  assert.deepEqual(getPromptHistory(), before);
});

test("getPromptHistory returns an empty list when stored JSON is malformed", () => {
  global.localStorage.setItem("promptHistory", "{not valid json");

  assert.deepEqual(getPromptHistory(), []);
});

test("getPromptHistory rejects valid JSON values that are not arrays", () => {
  for (const stored of ['null', '42', '"prompt"', '{"prompt":"value"}']) {
    global.localStorage.setItem("promptHistory", stored);
    assert.deepEqual(getPromptHistory(), []);
  }
});

test("improvePrompt trims surrounding whitespace from valid ideas", () => {
  const prompt = improvePrompt("  Explain renewable energy  ", "learning");
  assert.match(prompt, /Task: Explain renewable energy/);
  assert.doesNotMatch(prompt, /Task:  Explain renewable energy  /);
});

test("improvePrompt rejects ideas containing only whitespace", () => {
  for (const idea of [" ", "\n\t", "   \n  "]) {
    assert.equal(improvePrompt(idea), "Please enter an idea before generating a prompt.");
  }
});

test("savePromptToHistory ignores non-string and blank inputs", () => {
  savePromptToHistory("Existing prompt");
  const before = getPromptHistory();

  for (const value of [null, undefined, 42, {}, "", "   \n"]) {
    assert.deepEqual(savePromptToHistory(value), before);
  }
  assert.deepEqual(getPromptHistory(), before);
});

test("savePromptToHistory returns the updated list when storage writes fail", () => {
  global.localStorage.setItem = () => {
    throw new Error("Storage is unavailable");
  };

  const history = savePromptToHistory("Available in memory only");
  assert.equal(history.length, 1);
  assert.equal(history[0].prompt, "Available in memory only");
});

test("improvePrompt falls back to general guidance for unknown purposes", () => {
  const prompt = improvePrompt("Explain a useful concept", "unknown-purpose");
  assert.match(prompt, /Act as an expert assistant for: general/);
  assert.match(prompt, /Give a clear, useful, well-structured response/);
});

test("removePromptFromHistory returns the in-memory deletion when storage writes fail", () => {
  savePromptToHistory("Keep this prompt");
  savePromptToHistory("Remove this prompt");
  global.localStorage.setItem = () => {
    throw new Error("Storage is unavailable");
  };

  const remaining = removePromptFromHistory(0);
  assert.equal(remaining.length, 1);
  assert.equal(remaining[0].prompt, "Keep this prompt");
});
