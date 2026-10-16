
function improvePrompt(idea, purpose = "general") {
  const cleanIdea = idea.trim();

  if (!cleanIdea) {
    return "Please enter an idea before generating a prompt.";
  }

  const purposeInstructions = {
    general: "Give a clear, useful, well-structured response.",
    learning: "Explain step by step for a beginner and include examples.",
    coding: "Provide working code, explain how it works, and mention edge cases.",
    writing: "Use clear language, a suitable tone, and a logical structure.",
    research: "Compare reliable sources, explain the evidence, and distinguish facts from assumptions."
  };

  const instruction =
    purposeInstructions[purpose] || purposeInstructions.general;

  return [
    `Act as an expert assistant for: ${purpose}.`,
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
  const updatedHistory = [
    {
      prompt: prompt.trim(),
      createdAt: new Date().toISOString()
    },
    ...history
  ].slice(0, 10);

  try {
    localStorage.setItem(
      "promptHistory",
      JSON.stringify(updatedHistory)
    );
  } catch (error) {
    // Storage can be unavailable in private browsing or restricted contexts.
    // Return the generated history so the caller can still use the prompt.
  }

  return updatedHistory;
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
    clearPromptHistory
  };
}
