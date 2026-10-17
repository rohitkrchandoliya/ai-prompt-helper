# Experiment guardrail metrics

## Purpose
Choose safety metrics that prevent an experiment from harming core outcomes.

## Input checklist
- [ ] Hypothesis
- [ ] primary metric
- [ ] target population
- [ ] duration
- [ ] known risks
- [ ] baseline data
- [ ] rollout constraints.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence only, identify assumptions, and explain trade-offs. Select metrics that detect adverse effects on reliability, user trust, accessibility, support burden, and key segments. Define metric formulas, measurement windows, alert thresholds based on supplied baselines, and stop/rollback rules before launch. Ask concise clarifying questions if critical inputs are missing.

## Required output
- Guardrail metric table
- Formulas
- Segmentation
- Alert/stop rules
- Ownership
- Launch checklist.

## Guardrails
- Do not invent baselines or thresholds. Account for low sample sizes and avoid over-interpreting noisy results.
- Distinguish verified facts from estimates and hypotheses.
- Recommend practical validation steps and record unresolved questions.
