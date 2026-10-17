# Database connection pool review

## Purpose
Diagnose connection pool exhaustion, contention, and sizing risks.

## Input checklist
- [ ] Pool configuration
- [ ] active and idle connections
- [ ] wait time
- [ ] request concurrency
- [ ] query latency
- [ ] timeout logs
- [ ] database limits.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, mark assumptions, and prioritize actionable improvements. Separate connection leaks, long transactions, slow queries, burst concurrency, and undersized pools. Compare pool behavior with database capacity and request lifecycle; recommend measured tests and safe limit changes. Define how each proposed change will be validated.

## Required output
- Likely causes ranked by evidence
- Metrics to collect
- Sizing considerations
- Mitigation steps
- Load-test plan
- Rollback signals.

## Guardrails
- Do not recommend increasing pool size without checking database limits and downstream saturation.
- Identify unresolved decisions and evidence gaps.
- Prefer specific, measurable recommendations over broad statements.
