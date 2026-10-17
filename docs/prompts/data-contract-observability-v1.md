# Data contract observability plan

## Purpose
Monitor producer-consumer data contracts for schema and semantic violations.

## Input checklist
- [ ] Contract definitions
- [ ] producer versions
- [ ] consumer list
- [ ] validation points
- [ ] incident history
- [ ] alert routing.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, identify assumptions, and prioritize recommendations by impact and verifiability. Choose checks for schema compatibility, required fields, valid ranges, semantic invariants, and freshness. Specify where checks run, how violations are sampled or quarantined, and how consumers are notified. State what further evidence would change the conclusion.

## Required output
- Contract SLI candidates
- Validation rules
- Alert matrix
- Owner routing
- Dashboards
- Rollout plan.

## Guardrails
- Do not silently drop invalid records or claim semantic correctness from schema validation alone.
- Make each important recommendation testable.
- Separate confirmed facts from hypotheses and open decisions.
