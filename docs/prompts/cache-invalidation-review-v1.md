# cache invalidation review

## Purpose
Review cache behavior for correctness, freshness, and operational safety.

## Input checklist
- [ ] System architecture
- [ ] cached objects and keys
- [ ] TTLs
- [ ] mutation paths
- [ ] invalidation events
- [ ] consistency requirements
- [ ] failure modes.

## Prompt
> Act as a careful senior practitioner. Use only the context provided below. First restate the objective and constraints, then analyze the evidence systematically. Trace how each cached value is created, refreshed, invalidated, and evicted. Check key collisions, stale reads, race conditions, negative caching, tenant isolation, stampedes, and outage behavior. Distinguish hard correctness requirements from acceptable staleness. Suggest measurable tests and rollback-safe changes. Make assumptions explicit and ask focused questions only when missing information materially changes the recommendation.

## Required output
- Cache inventory
- Risk table with scenario/evidence/severity
- Consistency contract
- Test cases
- Mitigations
- Monitoring signals.

## Guardrails
- Do not claim a bug without a reproducible path or clear code evidence. Avoid exposing sensitive cached values.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps over generic advice.
