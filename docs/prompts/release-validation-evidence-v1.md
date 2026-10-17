# Release validation evidence checklist

## Purpose
Standardize the evidence needed to approve a software release.

## Input checklist
- [ ] Release scope
- [ ] changed components
- [ ] test results
- [ ] known issues
- [ ] migration steps
- [ ] rollback plan
- [ ] approvers.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence, identify assumptions, and map recommendations to verifiable outcomes. Map each change and risk to relevant automated and manual evidence. Check test environment parity, critical-path coverage, security and accessibility considerations, monitoring readiness, and rollback validation. Identify missing sign-offs. Clearly separate blockers from follow-up improvements.

## Required output
- Evidence checklist
- Risk-to-test mapping
- Outstanding gaps
- Release gates
- Approval record
- Post-release checks.

## Guardrails
- Do not claim tests passed or approvals exist unless the supplied evidence confirms them.
- Do not invent test results, owners, dates, or approvals.
- State uncertainty and evidence gaps plainly.
