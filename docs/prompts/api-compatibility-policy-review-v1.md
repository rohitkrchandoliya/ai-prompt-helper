# API compatibility policy review

## Purpose
Set clear rules for evolving APIs while protecting existing consumers.

## Input checklist
- [ ] API schema
- [ ] known consumers
- [ ] release cadence
- [ ] compatibility guarantees
- [ ] deprecation constraints
- [ ] telemetry.

## Prompt
> Act as a careful senior practitioner. Use only the supplied context. Separate facts from assumptions, identify risks and trade-offs, and make recommendations traceable to evidence. Classify proposed changes by compatibility risk. Define versioning and deprecation rules, consumer notice, overlap period, usage measurement, and removal gates. Compare options against actual constraints and identify migration tests. Ask focused questions only where missing information materially changes the outcome.

## Required output
- Compatibility principles
- Change classification table
- Deprecation policy
- Rollout timeline
- Test checklist
- Open decisions.

## Guardrails
- Do not assume consumers can migrate instantly or invent usage data.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps.
