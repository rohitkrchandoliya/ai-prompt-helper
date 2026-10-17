# Data quality incident review

## Purpose
Analyze a data quality incident and design prevention and detection actions.

## Input checklist
- [ ] Incident timeline
- [ ] affected datasets
- [ ] consumers
- [ ] quality checks
- [ ] pipeline logs
- [ ] impact evidence
- [ ] recovery steps.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence only. Separate facts from hypotheses, explain trade-offs, and prioritize actions by impact and confidence. Establish what changed and when, trace propagation, distinguish detection gap from root cause, assess downstream decisions, and evaluate recovery completeness. Recommend layered checks and ownership changes. Call out unknowns that need owner confirmation.

## Required output
- Timeline
- Impact statement
- Contributing factors
- Detection gaps
- Corrective actions
- Recovery verification.

## Guardrails
- Do not infer business impact or root cause without evidence. Preserve data lineage and auditability.
- Include a way to verify each important recommendation.
- Avoid unsupported claims and generic action items.
