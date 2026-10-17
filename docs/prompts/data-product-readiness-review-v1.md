# Data product readiness review

## Purpose
Evaluate whether a dataset or data product is ready for consumers.

## Input checklist
- [ ] Data contract
- [ ] owner
- [ ] schema
- [ ] quality metrics
- [ ] freshness
- [ ] access model
- [ ] documentation
- [ ] support process.

## Prompt
> Act as a careful senior practitioner. Analyze only supplied evidence, distinguish facts from hypotheses, and explain trade-offs. Assess discoverability, definitions, quality, freshness, access approval, lineage, change policy, and incident ownership. Score readiness only against explicit criteria and identify release blockers. Highlight missing information that would materially change the result.

## Required output
- Readiness scorecard
- Blocking gaps
- Owner actions
- Consumer guidance
- Monitoring requirements
- Go/no-go criteria.

## Guardrails
- Do not claim data quality or freshness guarantees without measured evidence.
- Make each important recommendation verifiable.
- Identify decisions requiring human approval.
