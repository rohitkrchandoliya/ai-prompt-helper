
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

if (typeof module !== "undefined") {
  module.exports = { improvePrompt };
}
