# Data schema compatibility review

## Purpose
Assess whether a schema change is compatible with producers and consumers.

## Input checklist
- [ ] Current and proposed schema
- [ ] producer versions
- [ ] consumer inventory
- [ ] contract rules
- [ ] rollout process
- [ ] sample payloads.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence, distinguish facts from hypotheses, and state limitations. Classify additive, breaking, and semantic changes. Check required fields, nullability, enum evolution, field meaning, unknown-field behavior, and mixed-version rollout. Define compatibility tests and sequencing. Prioritize recommendations by impact, confidence, and reversibility.

## Required output
- Compatibility matrix
- Impacted consumers
- Breaking-change risks
- Migration order
- Contract tests
- Rollback options.

## Guardrails
- Do not treat a syntactically additive change as semantically safe without checking consumer assumptions.
- Include verification criteria and note unknowns.
- Do not imply a test or measurement has been performed unless results are supplied.
