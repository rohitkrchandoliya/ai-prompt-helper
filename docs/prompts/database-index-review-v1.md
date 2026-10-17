# Database index review

## Purpose
Evaluate whether database indexes match observed query patterns and write costs.

## Input checklist
- [ ] Query plans
- [ ] query frequency and latency
- [ ] table sizes
- [ ] existing indexes
- [ ] write rates
- [ ] database engine.

## Prompt
> Act as a careful senior practitioner. Use supplied artifacts and measured evidence, distinguish hypotheses from confirmed facts, and prioritize by impact and confidence. Use actual query plans and workload data to identify missing, redundant, or poorly selective indexes. Consider write amplification, storage, lock and migration risks, and validate with representative benchmarks. Identify what must be verified before execution.

## Required output
- Candidate index changes
- Supporting query evidence
- Expected trade-offs
- Benchmark plan
- Deployment and rollback steps.

## Guardrails
- Do not prescribe indexes from query text alone or run production changes without authorization.
- State assumptions, missing evidence, and measurable acceptance criteria.
- Prefer reversible steps and controlled validation where practical.
