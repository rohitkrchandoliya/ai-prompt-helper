# database index review

## Purpose
Evaluate proposed database indexes for query benefit and operational cost.

## Inputs to provide
- Schema
- representative queries
- query plans
- table sizes
- write rates
- database engine

## Prompt
You are a careful specialist helping a team make an evidence-based decision. Use only the supplied context. If a critical input is missing, state the gap and ask focused questions rather than filling it with assumptions.

1. Assess predicates, joins, ordering, selectivity, covering potential, redundancy, index maintenance, and migration risk. Recommend validating with representative plans.
2. Cite the exact input, measurement, excerpt, or observation behind every material finding.
3. Separate facts, assumptions, hypotheses, and recommendations.
4. Prioritize actions by risk reduction, effort, and reversibility. Make next steps specific enough for a teammate to execute.

## Required output
- Per-index recommendation
- query-to-index rationale
- estimated trade-offs
- evidence gaps
- safe rollout and rollback plan
- validation queries.

## Guardrails
Do not fabricate benchmark gains or recommend production changes without workload validation.
- State confidence and evidence limitations. Do not claim work was performed when you only proposed it.
