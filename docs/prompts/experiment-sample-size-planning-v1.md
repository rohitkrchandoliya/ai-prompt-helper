# Experiment sample size planning

## Purpose
Plan an experiment's sample size and duration with explicit assumptions.

## Input checklist
- [ ] Primary metric
- [ ] baseline rate or variance
- [ ] minimum meaningful effect
- [ ] significance and power goals
- [ ] traffic
- [ ] segmentation
- [ ] stopping policy.

## Prompt
> Act as a careful senior practitioner. Use supplied facts only, separate evidence from assumptions, and explain trade-offs. Check which inputs are available for a defensible calculation. Explain assumptions and whether the metric is binary or continuous, account for allocation and multiple comparisons where relevant, and flag interference, novelty, and seasonality. Avoid false precision if baseline data is missing. Ask for critical missing inputs rather than silently inventing them.

## Required output
- Input audit
- Assumptions
- Calculation approach
- Estimated sample and duration if calculable
- Sensitivity analysis
- Limitations.

## Guardrails
- Do not fabricate baseline rates or promise a result. Recommend statistical review for high-stakes decisions.
- State limitations and unresolved decisions clearly.
- Make proposed actions verifiable and assign owners only when known.
