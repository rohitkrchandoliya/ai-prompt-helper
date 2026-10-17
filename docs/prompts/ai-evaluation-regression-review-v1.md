# AI evaluation regression review

## Purpose
Investigate a regression in an AI system's evaluation results.

## Input checklist
- [ ] Evaluation dataset/version
- [ ] metric definitions
- [ ] prior and current results
- [ ] model/prompt/config changes
- [ ] segment breakdowns.

## Prompt
> Act as a careful senior practitioner. Use supplied artifacts and measured evidence, distinguish hypotheses from confirmed facts, and prioritize by impact and confidence. Verify comparability of runs, inspect metric movement and confidence limits where available, slice by relevant categories, and identify data leakage or evaluation-set changes. Separate measurement noise from confirmed regressions. Identify what must be verified before execution.

## Required output
- Run comparability checklist
- Regression summary
- Segment findings
- Follow-up experiments
- Release recommendation criteria.

## Guardrails
- Do not claim statistical significance without suitable evidence or tune solely to a leaked evaluation set.
- State assumptions, missing evidence, and measurable acceptance criteria.
- Prefer reversible steps and controlled validation where practical.
