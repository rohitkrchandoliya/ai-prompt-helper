# Data backfill planning

## Purpose
Plan a safe, observable backfill for historical data.

## Input checklist
- [ ] Data range and volume
- [ ] schema
- [ ] transformation logic
- [ ] write targets
- [ ] rate limits
- [ ] consistency constraints
- [ ] rollback options.

## Prompt
> Act as a careful senior practitioner. Work from the supplied context, distinguish verified facts from assumptions, and explain trade-offs. Break work into bounded batches, estimate only from measurements, define idempotency, checkpoints, throttling, validation, restart behavior, and interaction with live writes. Include dry-run and abort criteria. Ask targeted questions where missing information materially changes the recommendation.

## Required output
- Execution plan
- Batch strategy
- Validation queries
- Monitoring
- Recovery procedure
- Go/no-go gates.

## Guardrails
- Do not run destructive changes without authorization or assume a backfill is reversible.
- Make confidence and evidence gaps explicit.
- Prefer actionable steps with clear verification criteria.
