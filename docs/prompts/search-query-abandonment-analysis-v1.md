# Search query abandonment analysis

## Purpose
Investigate why users abandon search without selecting a result.

## Input checklist
- [ ] Query logs
- [ ] result impressions
- [ ] clicks
- [ ] zero-result rate
- [ ] latency
- [ ] filters
- [ ] device and locale breakdowns
- [ ] privacy rules.

## Prompt
> Act as a careful senior practitioner. Analyze only supplied evidence, distinguish facts from hypotheses, and explain trade-offs. Define abandonment consistently, segment by query intent and result availability, examine latency and ranking signals, and distinguish successful no-click sessions from failed searches. Recommend tests tied to measurable hypotheses. Highlight missing information that would materially change the result.

## Required output
- Metric definition
- Segmented patterns
- Candidate causes
- Experiment ideas
- Instrumentation gaps
- Success metrics.

## Guardrails
- Do not infer user intent from a single event or retain raw queries containing personal data unnecessarily.
- Make each important recommendation verifiable.
- Identify decisions requiring human approval.
