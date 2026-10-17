# Mobile offline mode review

## Purpose
Review offline behavior for a mobile workflow with intermittent connectivity.

## Input checklist
- [ ] User flow
- [ ] local data model
- [ ] sync rules
- [ ] conflict policy
- [ ] security constraints
- [ ] supported platforms.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence only, identify assumptions, and explain trade-offs. Map online/offline transitions, queued writes, retries, stale data indicators, conflict resolution, storage limits, and logout behavior. Define user-visible states and tests for interrupted sync and device restart. Ask concise clarifying questions if critical inputs are missing.

## Required output
- State transition table
- Edge cases
- Conflict rules
- UX recommendations
- Test matrix
- Telemetry plan.

## Guardrails
- Do not assume all data can safely be stored locally. Protect sensitive data and honor user consent.
- Distinguish verified facts from estimates and hypotheses.
- Recommend practical validation steps and record unresolved questions.
