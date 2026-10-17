# Subscription billing edge-case review

## Purpose
Find billing scenarios that can create incorrect charges, credits, or subscription states.

## Input checklist
- [ ] Plan rules
- [ ] invoice lifecycle
- [ ] proration policy
- [ ] trials
- [ ] refunds
- [ ] tax handling
- [ ] currency rules
- [ ] payment events.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence, separate confirmed facts from hypotheses, and identify unknowns that materially affect the result. Build cases for upgrades, downgrades, failed payments, retries, cancellations, refunds, time zones, and duplicate provider events. Trace expected state and ledger changes for each case. Prioritize recommendations by risk, confidence, and reversibility.

## Required output
- Edge-case matrix
- Expected outcomes
- Invariant checks
- Regression cases
- Unresolved policy questions.

## Guardrails
- Do not invent tax or contract rules; route ambiguous billing policy to the accountable owner.
- Include explicit validation criteria and evidence required for sign-off.
- Do not imply that a proposed control has been tested unless results are supplied.
