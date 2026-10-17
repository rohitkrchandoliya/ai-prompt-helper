# Production data sampling plan

## Purpose
Design a privacy-aware sample for production diagnostics or quality review.

## Input checklist
- [ ] Question to answer
- [ ] available fields
- [ ] population size
- [ ] sampling frame
- [ ] sensitivity
- [ ] access policy
- [ ] retention
- [ ] analysis method.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence, identify uncertainty, and prioritize safe, testable recommendations. Choose the smallest representative sample that can answer the question, document selection bias, remove or mask unnecessary identifiers, and define access, retention, and deletion controls. Explain limits to generalization. Ask for missing context if it changes the conclusion materially.

## Required output
- Sampling method
- Required fields
- Minimization plan
- Access safeguards
- Analysis limitations
- Deletion steps.

## Guardrails
- Do not copy production data into unapproved environments or include sensitive records in prompt examples.
- Clearly separate observed facts, hypotheses, and decisions requiring approval.
- Include verification steps and limitations.
