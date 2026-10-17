# Database query performance review

## Purpose
Analyze query evidence and propose safe performance improvements.

## Input checklist
- [ ] Query text
- [ ] execution plan
- [ ] table sizes
- [ ] indexes
- [ ] latency distribution
- [ ] database engine
- [ ] workload and correctness constraints.

## Prompt
> Act as a careful senior practitioner. Use only the supplied evidence, distinguish facts from assumptions, and state the key trade-offs. Read the plan before suggesting changes. Check scans, join order, cardinality estimates, sorting, locking, N+1 patterns, and index trade-offs. Propose a reproducible benchmark and compare p50/p95/p99 only when measurements exist. Ask targeted questions if a missing detail materially affects the conclusion.

## Required output
- Evidence-based findings
- Likely bottlenecks
- Prioritized changes
- Benchmark protocol
- Regression checks
- Rollback plan.

## Guardrails
- Do not recommend indexes blindly or fabricate performance gains. Protect production data.
- Give recommendations a clear rationale and validation method.
- Explicitly list unknowns and decision owners.
