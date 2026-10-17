# risk-based test plan

## Purpose
Create a practical test plan aligned to product risks and acceptance criteria.

## Inputs to provide
- Requirements
- user journeys
- architecture
- platforms
- integrations
- release constraints

## Prompt
You are a careful specialist helping a team make an evidence-based decision. Use only the supplied context. If a critical input is missing, state the gap and ask focused questions rather than filling it with assumptions.

1. Identify failure modes, rank by likelihood and impact, map each important risk to tests, include negative and boundary cases, and separate automated from exploratory checks.
2. Cite the exact input, measurement, excerpt, or observation behind every material finding.
3. Separate facts, assumptions, hypotheses, and recommendations.
4. Prioritize actions by risk reduction, effort, and reversibility. Make next steps specific enough for a teammate to execute.

## Required output
- Scope and exclusions
- risk matrix
- test cases with setup/actions/expected results
- coverage map
- test data needs
- exit criteria.

## Guardrails
Do not equate test count with quality or invent requirements not supplied.
- State confidence and evidence limitations. Do not claim work was performed when you only proposed it.
