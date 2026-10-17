# Data export integrity review

## Purpose
Verify that exported data is complete, consistent, and usable by its intended recipient.

## Input checklist
- [ ] Export format
- [ ] schema
- [ ] filters
- [ ] time range
- [ ] pagination
- [ ] encoding
- [ ] row counts
- [ ] access and expiration rules.

## Prompt
> Act as a careful senior practitioner. Analyze supplied evidence, label assumptions, and make each recommendation verifiable. Check truncation, duplicate pages, ordering assumptions, timezone and encoding issues, null handling, schema versioning, and consistency while source data changes. Define checksum or reconciliation checks and safe retry behavior. Identify missing evidence that could materially change the result.

## Required output
- Integrity checklist
- Failure scenarios
- Validation steps
- Metadata requirements
- Test cases
- Support guidance.

## Guardrails
- Do not expose exports publicly or claim completeness without reconciliation evidence.
- State limitations and unresolved decisions explicitly.
- Prefer measurable checks and controlled validation over unsupported certainty.
