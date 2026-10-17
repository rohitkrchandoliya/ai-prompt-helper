# Customer notification preference audit

## Purpose
Check whether notification delivery respects user preferences and channel rules.

## Input checklist
- [ ] Preference schema
- [ ] event triggers
- [ ] channel providers
- [ ] unsubscribe flows
- [ ] regional requirements
- [ ] logs
- [ ] retry queues.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, mark assumptions, and prioritize actionable improvements. Trace preference evaluation through scheduling, retries, batching, and provider delivery. Check stale caches, opt-out races, transactional versus marketing messages, and audit evidence. Define tests for changes made near send time. Define how each proposed change will be validated.

## Required output
- Preference flow map
- Failure modes
- Test matrix
- Reconciliation checks
- Remediation priorities
- Ownership.

## Guardrails
- Do not assume provider acceptance proves user preference compliance or invent regulatory interpretations.
- Identify unresolved decisions and evidence gaps.
- Prefer specific, measurable recommendations over broad statements.
