# Data classification policy review

## Purpose
Check whether a data classification scheme is understandable and usable in practice.

## Input checklist
- [ ] Existing labels
- [ ] data examples
- [ ] handling rules
- [ ] user roles
- [ ] storage and sharing systems
- [ ] exception process.

## Prompt
> Act as a careful senior practitioner. Review supplied artifacts and evidence, distinguish facts from assumptions, and explain trade-offs. Assess whether categories are mutually understandable, map each class to concrete handling rules, and test borderline examples. Identify missing labels, over-classification, under-classification, and ownership gaps. Prioritize high-impact risks and include a way to validate each proposed fix.

## Required output
- Classification definitions
- Examples
- Handling matrix
- Ambiguity log
- Training needs
- Policy change proposals.

## Guardrails
- Do not include real sensitive records in examples; send legal or regulatory interpretations to qualified owners.
- State limitations and missing evidence explicitly.
- Avoid claiming compliance or security guarantees without verification.
