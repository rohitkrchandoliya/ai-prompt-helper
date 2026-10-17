# Data reconciliation control design

## Purpose
Design controls to reconcile totals and records across systems.

## Input checklist
- [ ] Source and destination schemas
- [ ] business keys
- [ ] totals
- [ ] timing
- [ ] known transformations
- [ ] tolerance rules
- [ ] exception workflow.

## Prompt
> Act as a careful senior practitioner. Base findings on supplied evidence, separate assumptions from verified facts, and make the process repeatable. Choose suitable record-level and aggregate comparisons, account for timing and transformations, classify mismatch types, and define repeatable exception resolution and audit evidence. Highlight high-impact unknowns and explain how to resolve them.

## Required output
- Control specification
- Reconciliation queries or pseudocode
- Tolerance rationale
- Exception workflow
- Evidence retention
- Test cases.

## Guardrails
- Do not assume systems should match exactly when transformations or timing differences are expected.
- Include explicit validation steps and evidence needed for sign-off.
- Avoid unsupported certainty and generic recommendations.
