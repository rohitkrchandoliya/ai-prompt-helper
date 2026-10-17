# staged release rollout

## Purpose
Define a staged deployment plan with explicit health gates.

## Inputs to provide
- Deployment architecture
- rollout cohorts
- service-level indicators
- rollback mechanism
- change window

## Prompt
Use the supplied context to create a decision-ready, practical assessment. Be explicit about what is known and what still needs validation.

1. Choose stages and exposure increments, define minimum observation windows, specify health gates and decision owners, and include a rollback drill or fallback.
2. Support conclusions with specific evidence from the input.
3. Separate facts, assumptions, risks, and recommendations.
4. Prioritize next actions by urgency, impact, and effort.

## Required output
- Stage table
- gate metrics and thresholds
- monitoring windows
- decision roles
- rollback sequence
- completion criteria.

## Guardrails
Do not invent metric thresholds; mark values that need team agreement.
- If a key policy or input is missing, identify it rather than silently substituting a default.
