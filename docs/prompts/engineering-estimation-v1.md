# engineering estimation

## Purpose
Create a transparent engineering estimate with uncertainty and dependencies.

## Inputs to provide
- Scope
- acceptance criteria
- architecture
- known unknowns
- team capacity
- external dependencies

## Prompt
Use the supplied context to create a decision-ready, practical assessment. Be explicit about what is known and what still needs validation.

1. Break work into deliverables, surface integration and validation effort, identify assumptions, and provide a range with confidence drivers rather than false precision.
2. Support conclusions with specific evidence from the input.
3. Separate facts, assumptions, risks, and recommendations.
4. Prioritize next actions by urgency, impact, and effort.

## Required output
- Work breakdown
- estimate range
- assumptions
- dependencies
- risks
- confidence level
- discovery tasks
- re-estimation triggers.

## Guardrails
Do not present estimates as commitments or use unsupported precision.
- If a key policy or input is missing, identify it rather than silently substituting a default.
