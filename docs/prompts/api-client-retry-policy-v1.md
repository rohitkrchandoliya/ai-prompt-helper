# API client retry policy review

## Purpose
Review client retries for resilience without amplifying outages or duplicating side effects.

## Input checklist
- [ ] Client SDK behavior
- [ ] endpoint semantics
- [ ] timeout settings
- [ ] retryable statuses
- [ ] idempotency support
- [ ] backoff policy
- [ ] traffic limits.

## Prompt
> Act as a careful senior practitioner. Review supplied artifacts and evidence, distinguish facts from assumptions, and explain trade-offs. Classify transient and permanent failures, check exponential backoff and jitter, retry budgets, idempotency, cancellation, and interaction with server-side retries. Identify unsafe retry patterns and define tests for throttling and partial failures. Prioritize high-impact risks and include a way to validate each proposed fix.

## Required output
- Retry decision table
- Recommended policy
- Idempotency requirements
- Test matrix
- Telemetry
- Rollout plan.

## Guardrails
- Do not retry non-idempotent operations without a safe deduplication strategy.
- State limitations and missing evidence explicitly.
- Avoid claiming compliance or security guarantees without verification.
