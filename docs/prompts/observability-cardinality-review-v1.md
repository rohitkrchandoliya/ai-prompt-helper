# Observability cardinality review

## Purpose
Find high-cardinality telemetry risks and improve signal usefulness.

## Input checklist
- [ ] Metrics and labels
- [ ] tracing attributes
- [ ] log fields
- [ ] backend limits
- [ ] query patterns
- [ ] retention costs.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence only. Separate facts from hypotheses, explain trade-offs, and prioritize actions by impact and confidence. Identify unbounded identifiers, sensitive labels, duplicate signals, and dimensions that inflate storage or query cost. Recommend bounded alternatives while preserving diagnostic value. Define before/after checks and sampling caveats. Call out unknowns that need owner confirmation.

## Required output
- Risk inventory
- Label alternatives
- Cost and diagnostic trade-offs
- Migration steps
- Validation queries
- Ownership.

## Guardrails
- Do not remove dimensions needed for security or incident diagnosis without a replacement.
- Include a way to verify each important recommendation.
- Avoid unsupported claims and generic action items.
