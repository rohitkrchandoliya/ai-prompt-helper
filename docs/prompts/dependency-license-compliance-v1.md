# Dependency license compliance review

## Purpose
Review software dependency license obligations and unresolved compliance questions.

## Input checklist
- [ ] Dependency inventory
- [ ] versions
- [ ] license metadata
- [ ] distribution model
- [ ] modifications
- [ ] policy constraints.

## Prompt
> Act as a careful senior practitioner. Work from the supplied context, distinguish verified facts from assumptions, and explain trade-offs. Identify missing or conflicting license metadata, transitive dependencies, notices, attribution, copyleft implications, and approval gaps. Separate automated detection from legal interpretation and suggest evidence collection. Ask targeted questions where missing information materially changes the recommendation.

## Required output
- Dependency findings
- License inventory gaps
- Obligations to verify
- Remediation options
- Approval checklist.

## Guardrails
- Do not make definitive legal conclusions from package names alone.
- Make confidence and evidence gaps explicit.
- Prefer actionable steps with clear verification criteria.
