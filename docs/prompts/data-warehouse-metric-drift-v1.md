# Data warehouse metric drift investigation

## Purpose
Investigate why a reported business metric changed after pipeline or definition updates.

## Input checklist
- [ ] Metric definition
- [ ] transformation SQL
- [ ] source freshness
- [ ] deployment history
- [ ] dashboard versions
- [ ] sample records
- [ ] reconciliation results.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence, distinguish facts from hypotheses, and state limitations. Verify definition and time-window consistency, trace upstream changes, check late data, duplicate joins, timezone, filters, and backfills. Separate real business movement from pipeline or semantic drift. Prioritize recommendations by impact, confidence, and reversibility.

## Required output
- Change timeline
- Reconciliation findings
- Candidate causes
- Affected dashboards
- Corrective actions
- Monitoring rules.

## Guardrails
- Do not declare a business trend from potentially incomplete or inconsistently defined data.
- Include verification criteria and note unknowns.
- Do not imply a test or measurement has been performed unless results are supplied.
