# Deprecation readiness review

## Purpose
Determine whether a feature or API is ready to enter a deprecation process.

## Input checklist
- [ ] Usage evidence
- [ ] consumer list
- [ ] replacement path
- [ ] support obligations
- [ ] security concerns
- [ ] target timeline
- [ ] communication channels.

## Prompt
> Act as a careful senior practitioner. Use supplied facts only, separate evidence from assumptions, and explain trade-offs. Verify usage coverage, identify high-dependency consumers, test migration guidance, define notice and support windows, and set exit criteria. Include exception handling and a rollback or extension decision where feasible. Ask for critical missing inputs rather than silently inventing them.

## Required output
- Readiness scorecard
- Affected consumers
- Migration blockers
- Communications
- Timeline gates
- Approval criteria.

## Guardrails
- Do not infer zero usage from incomplete telemetry or disregard contractual commitments.
- State limitations and unresolved decisions clearly.
- Make proposed actions verifiable and assign owners only when known.
