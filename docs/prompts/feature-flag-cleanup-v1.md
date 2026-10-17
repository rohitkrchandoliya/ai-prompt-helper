# Feature flag cleanup

## Purpose
Identify stale feature flags and plan safe removal.

## Input checklist
- [ ] Flag inventory
- [ ] creation dates
- [ ] owners
- [ ] evaluation paths
- [ ] rollout history
- [ ] dependencies
- [ ] metrics.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence only. Separate facts from hypotheses, explain trade-offs, and prioritize actions by impact and confidence. Classify flags by release, experiment, operational kill switch, or permission role. Verify current behavior and all code paths before removal. Define tests, cleanup order, and a separate review for flags that remain operationally critical. Call out unknowns that need owner confirmation.

## Required output
- Flag register
- Keep/remove decisions
- Owner actions
- Test plan
- Staged cleanup
- Safeguards.

## Guardrails
- Do not remove kill switches or security controls merely because they are old.
- Include a way to verify each important recommendation.
- Avoid unsupported claims and generic action items.
