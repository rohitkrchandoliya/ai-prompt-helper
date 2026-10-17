# Data anonymization review

## Purpose
Review whether an anonymization approach reduces re-identification risk for a defined dataset.

## Input checklist
- [ ] Dataset schema
- [ ] intended release
- [ ] recipient capabilities
- [ ] quasi-identifiers
- [ ] threat model
- [ ] utility needs
- [ ] applicable policy.

## Prompt
> Act as a careful senior practitioner. Use only supplied information, identify assumptions and evidence gaps, and distinguish analysis from decisions. Assess direct identifiers, quasi-identifiers, linkage risk, rare combinations, and utility trade-offs. Compare suppression, generalization, aggregation, or other methods where appropriate. Define empirical re-identification tests and access restrictions. Request clarification where missing facts materially change the outcome.

## Required output
- Threat assumptions
- Risk analysis
- Transformation options
- Utility impact
- Validation protocol
- Residual risks.

## Guardrails
- Do not claim data is anonymous solely because names were removed. Avoid reproducing sensitive records.
- Make the reasoning traceable to provided evidence.
- Give recommendations measurable verification criteria where possible.
