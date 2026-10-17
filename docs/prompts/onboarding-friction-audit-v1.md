# onboarding friction audit

## Purpose
Identify avoidable friction in a new-user onboarding flow without assuming the cause.

## Input checklist
- [ ] Product and target users
- [ ] onboarding steps/screens
- [ ] activation definition
- [ ] analytics or research evidence
- [ ] platform constraints.

## Prompt
> Act as a careful senior practitioner. Use only the context provided below. First restate the objective and constraints, then analyze the evidence systematically. Map each step to user goal, required effort, uncertainty, and likely failure. Separate observed evidence from hypotheses. Identify confusing language, unnecessary fields, permission timing, recovery paths, and accessibility barriers. Rank issues by impact, confidence, and effort; propose tests before recommending large redesigns. Make assumptions explicit and ask focused questions only when missing information materially changes the recommendation.

## Required output
- Executive summary
- Step-by-step friction table
- Evidence versus hypotheses
- Ranked opportunities
- Experiment plan
- Open questions.

## Guardrails
- Do not invent user research or analytics. Label unsupported assumptions and preserve security, privacy, and consent requirements.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps over generic advice.
