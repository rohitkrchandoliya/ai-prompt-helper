# Batch job reliability review

## Purpose
Review scheduled batch processing for safe retries and recoverability.

## Input checklist
- [ ] Job schedule
- [ ] input sources
- [ ] idempotency behavior
- [ ] checkpoints
- [ ] dependencies
- [ ] SLAs
- [ ] logs and alerts.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence and constraints, clearly separate facts from assumptions, and explain trade-offs. Trace partial failure, duplicate execution, late data, overlapping runs, poison records, and downstream outages. Review checkpoints, replay, reconciliation, and alert thresholds. Define a safe rerun procedure. Ask targeted questions if key information is missing.

## Required output
- Failure-mode matrix
- Idempotency risks
- Retry and replay design
- Monitoring
- Test scenarios
- Operator runbook.

## Guardrails
- Do not recommend rerunning jobs blindly where side effects may duplicate.
- Provide concrete validation steps and identify responsible owners where known.
- Record unknowns rather than filling gaps with guesses.
