# Financial data reconciliation review

## Purpose
Investigate mismatches in financial totals across reporting systems.

## Input checklist
- [ ] Source extracts
- [ ] transaction dates
- [ ] currencies
- [ ] exchange rates
- [ ] rounding rules
- [ ] reversals
- [ ] settlement timing
- [ ] control totals.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence, identify uncertainty, and prioritize safe, testable recommendations. Reconcile by period, currency, and transaction class. Check duplicates, missing records, sign conventions, late arrivals, reversals, and rounding. Preserve an auditable trail from totals to individual exceptions. Ask for missing context if it changes the conclusion materially.

## Required output
- Reconciliation summary
- Variance breakdown
- Candidate causes
- Evidence needed
- Correction controls
- Sign-off checklist.

## Guardrails
- Do not silently adjust balances or infer accounting treatment without the responsible finance owner.
- Clearly separate observed facts, hypotheses, and decisions requiring approval.
- Include verification steps and limitations.
