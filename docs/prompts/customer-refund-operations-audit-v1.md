# Customer refund operations audit

## Purpose
Review refund handling for correctness, consistency, and traceability.

## Input checklist
- [ ] Refund policy
- [ ] payment provider events
- [ ] case workflow
- [ ] ledger entries
- [ ] approvals
- [ ] exception logs
- [ ] customer communications.

## Prompt
> Act as a careful senior practitioner. Review supplied artifacts and evidence, distinguish facts from assumptions, and explain trade-offs. Trace request to decision, provider action, ledger update, and customer notification. Check duplicates, partial refunds, reversals, failed provider calls, approval boundaries, and reconciliation. Prioritize high-impact risks and include a way to validate each proposed fix.

## Required output
- Process map
- Failure modes
- Reconciliation controls
- Exception handling
- Audit fields
- Test cases.

## Guardrails
- Do not issue refunds or change financial records; identify actions that require authorized operators.
- State limitations and missing evidence explicitly.
- Avoid claiming compliance or security guarantees without verification.
