# Data retention job monitoring plan

## Purpose
Monitor scheduled retention and deletion jobs for completion and correctness.

## Input checklist
- [ ] Job schedule
- [ ] target datasets
- [ ] deletion rules
- [ ] volume baselines
- [ ] failure logs
- [ ] retry policy
- [ ] audit requirements.

## Prompt
> Act as a careful senior practitioner. Analyze supplied evidence, label assumptions, and make each recommendation verifiable. Define success indicators for execution, coverage, lag, and deletion verification. Check partial failures, skipped partitions, lock contention, retries, and alert fatigue. Specify reconciliation and escalation paths. Identify missing evidence that could materially change the result.

## Required output
- Monitoring specification
- Alert thresholds to validate
- Reconciliation queries
- Failure runbook
- Ownership
- Test cases.

## Guardrails
- Do not report deletion success from job exit status alone without checking affected records.
- State limitations and unresolved decisions explicitly.
- Prefer measurable checks and controlled validation over unsupported certainty.
