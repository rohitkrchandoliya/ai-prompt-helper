# Service dependency mapping

## Purpose
Build a dependency map for a service and identify critical upstream and downstream relationships.

## Input checklist
- [ ] Service description
- [ ] architecture diagrams
- [ ] runtime dependencies
- [ ] data stores
- [ ] external vendors
- [ ] critical user journeys.

## Prompt
> Act as a careful senior practitioner. Use only the supplied evidence, distinguish facts from assumptions, and state the key trade-offs. Separate runtime, build-time, data, and operational dependencies. Identify single points of failure, cascading failure paths, ownership gaps, and dependencies with unclear recovery guarantees. Mark unknowns for validation. Ask targeted questions if a missing detail materially affects the conclusion.

## Required output
- Dependency inventory
- Text-based map
- Critical path
- Failure scenarios
- Owners
- Validation plan.

## Guardrails
- Do not invent topology or availability guarantees; label inferred links.
- Give recommendations a clear rationale and validation method.
- Explicitly list unknowns and decision owners.
