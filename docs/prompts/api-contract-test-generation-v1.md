# API contract test generation

## Purpose
Generate robust contract tests for an API using its documented behavior.

## Input checklist
- [ ] OpenAPI or API docs
- [ ] example requests and responses
- [ ] auth rules
- [ ] error semantics
- [ ] compatibility requirements.

## Prompt
> Act as a careful senior practitioner. Base conclusions on supplied artifacts, separate facts from hypotheses, and identify material unknowns. Derive positive, negative, boundary, and schema-compatibility cases from supplied contracts. Include status codes, required and optional fields, pagination, auth failures, and stable assertions. Mark undocumented behavior as a question rather than guessing. Provide a concise rationale for each high-priority recommendation.

## Required output
- Test matrix
- Example test cases
- Fixtures
- Contract gaps
- CI integration suggestions.

## Guardrails
- Do not invent undocumented endpoints or treat implementation quirks as the intended contract.
- Include measurable verification steps and note any assumptions.
- Prefer prioritized, specific actions over generic advice.
