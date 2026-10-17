# Data quality rule prioritization

## Purpose
Prioritize data quality rules by downstream impact and operational value.

## Input checklist
- [ ] Datasets
- [ ] consumers
- [ ] current checks
- [ ] known defects
- [ ] failure costs
- [ ] alert volume
- [ ] owners.

## Prompt
> Act as a careful senior practitioner. Work from the provided evidence and document assumptions explicitly. Classify rules by correctness, completeness, uniqueness, freshness, and validity as appropriate. Rank by downstream impact and detectability, specify thresholds from evidence, and avoid noisy duplicate alerts. Identify the evidence needed to validate each conclusion and prioritize high-impact gaps.

## Required output
- Prioritized rule backlog
- Rule definitions
- Severity rationale
- Ownership
- Monitoring plan
- Tuning process.

## Guardrails
- Do not invent acceptable thresholds or suppress failures solely to reduce alert volume.
- Do not claim controls are effective without test evidence.
- Make proposed steps specific, testable, and appropriately scoped.
