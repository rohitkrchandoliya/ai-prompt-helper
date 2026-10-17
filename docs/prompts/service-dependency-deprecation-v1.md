# Service dependency deprecation plan

## Purpose
Plan removal of a service dependency with minimal consumer disruption.

## Input checklist
- [ ] Dependency graph
- [ ] consumers
- [ ] replacement options
- [ ] usage data
- [ ] compatibility constraints
- [ ] owner contacts
- [ ] timeline.

## Prompt
> Act as a careful senior practitioner. Use supplied artifacts and measured evidence, distinguish hypotheses from confirmed facts, and prioritize by impact and confidence. Inventory direct and transitive consumers, verify telemetry coverage, sequence migration and dual-run checks, define communication and exception paths, and set removal criteria. Include fallback behavior and observability during transition. Identify what must be verified before execution.

## Required output
- Consumer register
- Migration sequence
- Compatibility risks
- Communication plan
- Exit criteria
- Fallback plan.

## Guardrails
- Do not assume an unobserved consumer does not exist or remove a dependency before migration evidence is complete.
- State assumptions, missing evidence, and measurable acceptance criteria.
- Prefer reversible steps and controlled validation where practical.
