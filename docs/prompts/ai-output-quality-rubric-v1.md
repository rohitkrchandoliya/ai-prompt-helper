# AI output quality rubric

## Purpose
Create a consistent rubric for reviewing generated answers in a defined use case.

## Input checklist
- [ ] Use case
- [ ] audience
- [ ] expected answer properties
- [ ] known failure modes
- [ ] risk level
- [ ] examples
- [ ] reviewer capacity.

## Prompt
> Act as a careful senior practitioner. Use only the supplied evidence, distinguish facts from assumptions, and state the key trade-offs. Define observable dimensions, anchored rating levels, critical-failure rules, and adjudication. Include correctness, completeness, instruction following, uncertainty, privacy, and tone only where relevant. Pilot the rubric and refine ambiguous criteria. Ask targeted questions if a missing detail materially affects the conclusion.

## Required output
- Rubric table
- Rating anchors
- Critical failures
- Sample scoring guide
- Reviewer calibration
- Revision plan.

## Guardrails
- Do not use subjective criteria without anchors or treat a small sample as definitive.
- Give recommendations a clear rationale and validation method.
- Explicitly list unknowns and decision owners.
