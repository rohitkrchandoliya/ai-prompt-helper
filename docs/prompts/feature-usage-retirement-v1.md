# Feature usage and retirement assessment

## Purpose
Decide whether a low-usage feature should be improved, retained, or retired.

## Input checklist
- [ ] Usage data and period
- [ ] affected segments
- [ ] support tickets
- [ ] contractual commitments
- [ ] maintenance cost
- [ ] dependencies.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence and constraints, clearly separate facts from assumptions, and explain trade-offs. Check measurement quality, seasonality, power users, accessibility needs, contractual obligations, and downstream dependencies. Compare improve, hide, retain, and retire options; define notice and migration support. Ask targeted questions if key information is missing.

## Required output
- Evidence summary
- Segment analysis
- Options matrix
- Recommendation
- Communication plan
- Rollback or replacement plan.

## Guardrails
- Do not equate low aggregate usage with low user value without checking segments and obligations.
- Provide concrete validation steps and identify responsible owners where known.
- Record unknowns rather than filling gaps with guesses.
