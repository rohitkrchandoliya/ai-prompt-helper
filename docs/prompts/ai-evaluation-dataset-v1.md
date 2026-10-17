# AI evaluation dataset design

## Purpose
Design a dataset that tests a defined AI capability and its failure modes.

## Input checklist
- [ ] Task definition
- [ ] target users
- [ ] known risks
- [ ] available examples
- [ ] privacy constraints
- [ ] evaluation budget.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, state constraints, and separate observations from assumptions. Define coverage dimensions, representative and edge cases, labels and adjudication rules, holdout strategy, and dataset versioning. Include counterexamples and avoid leakage between development and evaluation sets. Ask focused questions if missing information changes the recommendation.

## Required output
- Dataset schema
- Sampling plan
- Annotation guide
- Quality checks
- Leakage controls
- Limitations.

## Guardrails
- Do not fabricate examples from real users or expose personal data. Document representativeness limits.
- Include evidence and confidence for material findings.
- Prefer specific, testable recommendations over generic advice.
