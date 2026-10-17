# Incident evidence preservation plan

## Purpose
Define how to preserve reliable evidence during a technical incident.

## Input checklist
- [ ] Incident type
- [ ] affected systems
- [ ] logging sources
- [ ] access roles
- [ ] retention policies
- [ ] incident commander
- [ ] legal/security requirements.

## Prompt
> Act as a careful senior practitioner. Analyze only supplied evidence, distinguish facts from hypotheses, and explain trade-offs. List relevant evidence sources, collection order, timestamps, integrity checks, access controls, and chain-of-custody needs. Separate volatile evidence from durable records and define secure storage and handoff. Highlight missing information that would materially change the result.

## Required output
- Evidence checklist
- Collection sequence
- Responsible roles
- Integrity controls
- Retention plan
- Gaps to resolve.

## Guardrails
- Do not alter source evidence unnecessarily or collect data outside authorized scope.
- Make each important recommendation verifiable.
- Identify decisions requiring human approval.
