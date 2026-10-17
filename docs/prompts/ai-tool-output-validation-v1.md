# AI tool output validation

## Purpose
Design checks that validate AI tool results before downstream actions.

## Input checklist
- [ ] Tool schema
- [ ] expected invariants
- [ ] failure cases
- [ ] permissions
- [ ] downstream effects
- [ ] retry behavior
- [ ] audit requirements.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, mark assumptions, and prioritize actionable improvements. Define schema, range, provenance, authorization, and cross-field checks. Cover malformed, incomplete, stale, contradictory, and adversarial outputs. Specify safe failure behavior and human approval for consequential actions. Define how each proposed change will be validated.

## Required output
- Validation layers
- Test cases
- Rejection and retry rules
- Audit events
- Human-review gates
- Acceptance criteria.

## Guardrails
- Do not trust model-generated values as authoritative or let unvalidated output trigger destructive actions.
- Identify unresolved decisions and evidence gaps.
- Prefer specific, measurable recommendations over broad statements.
