# Warehouse partition strategy review

## Purpose
Assess partitioning choices for query performance, cost, and maintainability.

## Input checklist
- [ ] Table sizes
- [ ] query patterns
- [ ] partition keys
- [ ] retention
- [ ] late-arriving data
- [ ] engine constraints
- [ ] current query plans.

## Prompt
> Act as a careful senior practitioner. Analyze supplied evidence, label assumptions, and make each recommendation verifiable. Evaluate pruning effectiveness, partition skew, small-file overhead, retention operations, and write patterns. Compare alternatives using representative workloads and define measurable acceptance criteria. Identify missing evidence that could materially change the result.

## Required output
- Partition options
- Workload evidence
- Cost-performance trade-offs
- Migration risks
- Benchmark plan
- Maintenance tasks.

## Guardrails
- Do not recommend partitioning solely from table size without considering actual query patterns.
- State limitations and unresolved decisions explicitly.
- Prefer measurable checks and controlled validation over unsupported certainty.
