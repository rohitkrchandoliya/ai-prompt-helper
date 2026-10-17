# Search relevance evaluation

## Purpose
Evaluate whether search results satisfy the user's intent.

## Input checklist
- [ ] Queries
- [ ] result lists
- [ ] relevance rubric
- [ ] user intents
- [ ] current ranking signals
- [ ] known failure cases.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, state constraints, and separate observations from assumptions. Create intent categories and relevance grades. Examine exact-match bias, freshness, diversity, ambiguous queries, zero-result cases, and harmful or stale results. Suggest offline metrics and a human review protocol. Ask focused questions if missing information changes the recommendation.

## Required output
- Rubric
- Query taxonomy
- Scoring examples
- Metrics
- Failure analysis
- Experiment proposal.

## Guardrails
- Do not invent relevance judgments or claim metrics without data.
- Include evidence and confidence for material findings.
- Prefer specific, testable recommendations over generic advice.
