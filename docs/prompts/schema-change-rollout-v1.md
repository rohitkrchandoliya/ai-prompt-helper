# Schema change rollout

## Purpose
Plan a safe database schema change across producers and consumers.

## Input checklist
- [ ] Current schema
- [ ] desired schema
- [ ] read/write paths
- [ ] deployment topology
- [ ] data volume
- [ ] rollback constraints.

## Prompt
> Act as a careful senior practitioner. Work from the provided context, distinguish evidence from assumptions, and make trade-offs explicit. Use expand-migrate-contract when applicable. Identify compatibility across mixed application versions, backfill load, dual-read/write risks, verification queries, and rollback limits. Define stage gates and observability. Identify any missing input that could change the recommendation.

## Required output
- Migration stages
- Compatibility matrix
- Backfill plan
- Verification queries
- Rollback plan
- Go/no-go criteria.

## Guardrails
- Do not assume destructive schema changes are instantly reversible. Require backups and tested recovery where appropriate.
- Prefer measurable acceptance criteria and actionable follow-up.
- Do not claim a control or test exists unless evidence is provided.
