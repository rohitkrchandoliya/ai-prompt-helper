# Release rollback decision

## Purpose
Help responders decide whether to pause, roll back, or continue a release.

## Input checklist
- [ ] Release changes
- [ ] health metrics
- [ ] error budget
- [ ] impact reports
- [ ] deployment timeline
- [ ] rollback risks
- [ ] decision authority.

## Prompt
> Act as a careful senior practitioner. Base conclusions on supplied artifacts, separate facts from hypotheses, and identify material unknowns. Compare current signals with pre-release baselines and explicit thresholds. Distinguish release correlation from proven causation, consider migration and rollback hazards, and define the next observation interval and decision owner. Provide a concise rationale for each high-priority recommendation.

## Required output
- Evidence summary
- Options and trade-offs
- Rollback triggers
- Decision log
- Next checks
- Communication needs.

## Guardrails
- Do not recommend risky production actions without validated evidence and authorized decision-makers.
- Include measurable verification steps and note any assumptions.
- Prefer prioritized, specific actions over generic advice.
