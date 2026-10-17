# Experiment contamination check

## Purpose
Check whether an experiment's groups and measurements are contaminated or biased.

## Input checklist
- [ ] Assignment logic
- [ ] exposure events
- [ ] eligibility
- [ ] cross-device identity
- [ ] concurrent experiments
- [ ] metrics
- [ ] launch timeline.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, label assumptions, and explain material trade-offs. Review randomization, exposure logging, cross-group leakage, eligibility drift, interference, novelty, and concurrent treatments. Propose diagnostics and sensitivity checks before interpreting outcomes. Include objective criteria for deciding whether the plan or conclusion is adequate.

## Required output
- Contamination risks
- Diagnostic tests
- Bias direction where supportable
- Data gaps
- Mitigation options
- Analysis caveats.

## Guardrails
- Do not claim contamination or its effect without evidence; do not retrofit exclusions solely to improve results.
- State evidence gaps and define a safe validation method.
- Keep recommendations scoped and auditable.
