# Webhook delivery reliability

## Purpose
Review webhook delivery behavior under transient and permanent failures.

## Input checklist
- [ ] Webhook contract
- [ ] retry policy
- [ ] timeout
- [ ] signature method
- [ ] event identifiers
- [ ] consumer expectations
- [ ] logs.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, state constraints, and separate observations from assumptions. Trace delivery, acknowledgement, retry, ordering, deduplication, dead-letter handling, and replay. Analyze duplicate and delayed events, signature verification, and backpressure. Define operational signals and recovery tests. Ask focused questions if missing information changes the recommendation.

## Required output
- Failure-mode table
- Delivery guarantees
- Retry recommendations
- Security checks
- Test matrix
- Monitoring plan.

## Guardrails
- Do not promise exactly-once delivery unless architecture supports it. Keep secrets out of examples.
- Include evidence and confidence for material findings.
- Prefer specific, testable recommendations over generic advice.
