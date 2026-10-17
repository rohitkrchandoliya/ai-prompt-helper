# Data contract review

## Purpose
Review a data producer-consumer contract for compatibility and operational clarity.

## Input checklist
- [ ] Schema
- [ ] producer and consumer owners
- [ ] field semantics
- [ ] nullability
- [ ] freshness
- [ ] quality expectations
- [ ] change history.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied artifacts, separate evidence from interpretation, and explain trade-offs. Clarify field meaning, units, keys, allowed values, null semantics, freshness and delivery expectations. Identify breaking changes and define validation, ownership, alerting, and deprecation rules. State what cannot be concluded from the available information.

## Required output
- Contract summary
- Schema concerns
- Compatibility matrix
- Quality checks
- Ownership
- Rollout plan.

## Guardrails
- Do not infer field semantics from names alone. Flag undocumented assumptions.
- Prefer concrete, verifiable recommendations.
- Make assumptions and unresolved decisions explicit.
