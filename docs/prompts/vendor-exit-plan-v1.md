# Vendor exit plan

## Purpose
Plan a controlled exit from a vendor dependency while preserving service continuity.

## Input checklist
- [ ] Vendor capabilities
- [ ] contract and notice terms
- [ ] data formats
- [ ] integrations
- [ ] alternatives
- [ ] migration capacity
- [ ] recovery requirements.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence only. Separate facts from hypotheses, explain trade-offs, and prioritize actions by impact and confidence. Map technical and contractual dependencies, data portability, export and deletion, parallel run, migration validation, cutover, rollback, and termination tasks. Identify lock-in and unavailable evidence early. Call out unknowns that need owner confirmation.

## Required output
- Dependency inventory
- Exit milestones
- Migration and validation plan
- Risk register
- Ownership
- Termination checklist.

## Guardrails
- Do not invent contract terms or assume exported data is complete until verified.
- Include a way to verify each important recommendation.
- Avoid unsupported claims and generic action items.
