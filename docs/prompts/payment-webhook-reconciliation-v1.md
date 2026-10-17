# Payment webhook reconciliation review

## Purpose
Verify that payment events and internal payment state remain consistent.

## Input checklist
- [ ] Provider event docs
- [ ] webhook logs
- [ ] payment state machine
- [ ] idempotency store
- [ ] reconciliation jobs
- [ ] exception queue.

## Prompt
> Act as a careful senior practitioner. Ground conclusions in the supplied evidence, label assumptions, and explain uncertainty. Trace event receipt through validation, deduplication, state transitions, ledger updates, and retries. Identify out-of-order events, missing callbacks, duplicates, and reconciliation blind spots. Define safe replay and mismatch resolution. Recommend only actions that can be checked against explicit acceptance criteria.

## Required output
- Event-to-state map
- Mismatch categories
- Reconciliation controls
- Tests
- Alert thresholds
- Operator runbook.

## Guardrails
- Do not treat webhook delivery as proof of final settlement or modify financial state without authorization.
- Keep facts, hypotheses, and decisions clearly separated.
- Include a practical verification method for every high-priority recommendation.
