# Customer consent state audit

## Purpose
Check whether consent states are represented, propagated, and honored consistently.

## Input checklist
- [ ] Consent categories
- [ ] collection points
- [ ] state model
- [ ] downstream systems
- [ ] withdrawal flow
- [ ] timestamps
- [ ] policy rules.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence, separate confirmed facts from hypotheses, and identify unknowns that materially affect the result. Trace consent capture, update, withdrawal, propagation, and downstream enforcement. Look for stale caches, ambiguous defaults, conflicting records, and missing evidence. Define tests for state transitions and delayed synchronization. Prioritize recommendations by risk, confidence, and reversibility.

## Required output
- Consent lifecycle map
- Inconsistencies
- Propagation tests
- Remediation priorities
- Audit evidence
- Unresolved policy questions.

## Guardrails
- Do not infer consent from silence or treat missing state as affirmative consent.
- Include explicit validation criteria and evidence required for sign-off.
- Do not imply that a proposed control has been tested unless results are supplied.
