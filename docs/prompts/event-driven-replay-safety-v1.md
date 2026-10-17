# Event-driven replay safety review

## Purpose
Review replay and duplicate-delivery behavior in event-driven workflows.

## Input checklist
- [ ] Event schema
- [ ] delivery guarantees
- [ ] consumer logic
- [ ] idempotency keys
- [ ] retry policy
- [ ] ordering needs
- [ ] dead-letter handling.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence, separate confirmed facts from hypotheses, and identify unknowns that materially affect the result. Trace duplicate and out-of-order delivery through each consumer. Verify idempotency boundaries, side effects, retry exhaustion, replay tooling, and recovery from poison messages. Distinguish broker guarantees from application guarantees. Prioritize recommendations by risk, confidence, and reversibility.

## Required output
- Failure-mode matrix
- Idempotency gaps
- Replay test cases
- Dead-letter policy
- Recovery procedure
- Observability needs.

## Guardrails
- Do not assume exactly-once processing unless the end-to-end behavior is demonstrated.
- Include explicit validation criteria and evidence required for sign-off.
- Do not imply that a proposed control has been tested unless results are supplied.
