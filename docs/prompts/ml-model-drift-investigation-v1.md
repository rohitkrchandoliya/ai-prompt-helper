# ML model drift investigation

## Purpose
Investigate a potential model performance or data drift signal.

## Input checklist
- [ ] Model task
- [ ] reference and current data
- [ ] feature distributions
- [ ] outcome labels
- [ ] deployment changes
- [ ] segment metrics.

## Prompt
> Act as a careful senior practitioner. Use only supplied information, identify assumptions and evidence gaps, and distinguish analysis from decisions. Distinguish data drift, concept drift, label delay, pipeline changes, and measurement artifacts. Compare overall and segment-level evidence, assess practical impact, and propose validation and response thresholds based on known baselines. Request clarification where missing facts materially change the outcome.

## Required output
- Hypothesis tree
- Diagnostic checks
- Segment analysis
- Impact assessment
- Monitoring improvements
- Retraining decision criteria.

## Guardrails
- Do not infer model degradation from distribution shift alone or claim causation without validation.
- Make the reasoning traceable to provided evidence.
- Give recommendations measurable verification criteria where possible.
