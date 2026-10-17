# Accessibility regression triage

## Purpose
Triage accessibility regressions with consistent severity and repair criteria.

## Input checklist
- [ ] Affected flow
- [ ] reproduction steps
- [ ] user impact
- [ ] assistive technology
- [ ] platform
- [ ] target criteria
- [ ] release timing.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence only. Separate facts from hypotheses, explain trade-offs, and prioritize actions by impact and confidence. Assess task blockage, scope, available workaround, and affected interaction patterns. Identify reproducibility and likely component-level cause without guessing. Define a fix acceptance test and check for related regressions. Call out unknowns that need owner confirmation.

## Required output
- Triage summary
- Severity rationale
- Reproduction details
- Owner
- Acceptance tests
- Related areas to inspect.

## Guardrails
- Do not downgrade barriers because a workaround exists or rely solely on automated scan results.
- Include a way to verify each important recommendation.
- Avoid unsupported claims and generic action items.
