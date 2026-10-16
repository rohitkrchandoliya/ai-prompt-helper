function improvePrompt(idea, purpose = "general") {
  const cleanIdea = typeof idea === "string" ? idea.trim() : "";

  if (!cleanIdea) {
    return "Please enter an idea before generating a prompt.";
  }

  if (cleanIdea.length > 2000) {
    return "Your idea must be 2000 characters or fewer.";
  }

  const purposeInstructions = {
    general: "Give a clear, useful, well-structured response.",
    learning: "Explain step by step for a beginner and include examples.",
    coding: "Provide working code, explain how it works, and mention edge cases.",
    writing: "Use clear language, a suitable tone, and a logical structure.",
    research: "Compare reliable sources, explain the evidence, and distinguish facts from assumptions.",
    business: "Clarify the target audience, business objective, constraints, risks, and measurable success criteria.",
    creative: "Offer original ideas, explore distinct directions, and explain the creative choices.",
    resume: "Use concise, achievement-focused language, strong action verbs, and measurable results without inventing experience.",
    planning: "Break the goal into actionable steps, estimate timelines, identify dependencies, and include risks and checkpoints."
  };

  const normalizedPurpose = Object.hasOwn(purposeInstructions, purpose)
    ? purpose
    : "general";
  const instruction = purposeInstructions[normalizedPurpose];

  return [
    `Act as an expert assistant for: ${normalizedPurpose}.`,
    `Task: ${cleanIdea}`,
    `Instructions: ${instruction}`,
    "Ask clarifying questions if important details are missing.",
    "State assumptions and organize the response clearly."
  ].join("\n\n");
}

function getPromptHistory() {
  try {
    const history = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );

    return Array.isArray(history) ? history : [];
  } catch (error) {
    return [];
  }
}

function savePromptToHistory(prompt) {
  if (typeof prompt !== "string" || !prompt.trim()) {
    return getPromptHistory();
  }

  const history = getPromptHistory();
  const normalizedPrompt = prompt.trim();
  const withoutDuplicate = history.filter((item) => {
    const savedPrompt = typeof item === "string" ? item : item && item.prompt;
    return typeof savedPrompt !== "string" ||
      savedPrompt.trim() !== normalizedPrompt;
  });
  const updatedHistory = [
    {
      prompt: normalizedPrompt,
      createdAt: new Date().toISOString()
    },
    ...withoutDuplicate
  ].slice(0, 10);

  try {
    localStorage.setItem(
      "promptHistory",
      JSON.stringify(updatedHistory)
    );
  } catch (error) {
    // Storage can be unavailable in private browsing or restricted contexts.
  }

  return updatedHistory;
}

function removePromptFromHistory(index) {
  if (!Number.isInteger(index) || index < 0) return getPromptHistory();

  const history = getPromptHistory();
  if (index >= history.length) return history;
  history.splice(index, 1);

  try {
    localStorage.setItem("promptHistory", JSON.stringify(history));
  } catch (error) {
    // Keep the current in-memory result available when storage is unavailable.
  }
  return history;
}

function clearPromptHistory() {
  try {
    localStorage.removeItem("promptHistory");
  } catch (error) {
    // Clearing history should not crash the app if storage is unavailable.
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    improvePrompt,
    getPromptHistory,
    savePromptToHistory,
    removePromptFromHistory,
    clearPromptHistory
  };
}
