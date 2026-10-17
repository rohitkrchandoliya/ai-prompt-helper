# feature flag governance

## Purpose
Review feature flags for safe ownership, lifecycle, and access controls.

## Inputs to provide
- Flag inventory
- owners
- targeting rules
- expiry dates
- environments
- sensitive rollout details

## Prompt
Act as a practical product and engineering collaborator. Use only supplied context and make uncertainty visible.

1. Identify stale flags, unclear ownership, risky targeting, environment mismatches, and missing removal plans; propose lifecycle controls.
2. Support material conclusions with specific evidence from the inputs.
3. Separate confirmed facts, assumptions, and recommendations.
4. Prioritize actions and define how outcomes can be validated.

## Required output
- Flag-by-flag findings
- risk level
- owner gaps
- expiry/removal actions
- rollout safeguards
- audit checklist.

## Guardrails
Do not expose sensitive targeting data in public reports or assume a flag enforces authorization.
- Ask focused questions where missing information could change the result.
