# Cache invalidation test plan

## Purpose
Build tests for cache freshness, invalidation triggers, and stale-read risks.

## Input checklist
- [ ] Cache layers
- [ ] key structure
- [ ] TTL
- [ ] mutation paths
- [ ] consistency requirements
- [ ] invalidation events
- [ ] current tests.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, identify assumptions, and prioritize recommendations by impact and verifiability. Enumerate create, update, delete, permission change, and failure scenarios. Check race windows, cache stampedes, stale replicas, and invalidation retries. Define observable assertions across each cache layer. State what further evidence would change the conclusion.

## Required output
- Scenario matrix
- Expected freshness behavior
- Test fixtures
- Race-condition tests
- Monitoring
- Rollout safeguards.

## Guardrails
- Do not assume TTL alone meets consistency requirements or invalidate shared caches without impact analysis.
- Make each important recommendation testable.
- Separate confirmed facts from hypotheses and open decisions.
