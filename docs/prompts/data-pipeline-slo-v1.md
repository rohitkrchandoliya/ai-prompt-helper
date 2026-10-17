# Data pipeline SLO design

## Purpose
Define measurable reliability objectives for a data pipeline.

## Input checklist
- [ ] Pipeline purpose
- [ ] freshness needs
- [ ] completeness expectations
- [ ] consumers
- [ ] historical measurements
- [ ] incident tolerance.

## Prompt
> Act as a careful senior practitioner. Use supplied facts only, separate evidence from assumptions, and explain trade-offs. Define indicators for freshness, completeness, correctness, and availability as relevant. Specify numerator, denominator, time window, exclusions, and consumer impact. Use historical evidence to propose targets and error-budget responses. Ask for critical missing inputs rather than silently inventing them.

## Required output
- SLI definitions
- Candidate SLOs
- Measurement plan
- Alerting policy
- Consumer communication
- Open assumptions.

## Guardrails
- Do not invent historical performance or set targets without business and operational agreement.
- State limitations and unresolved decisions clearly.
- Make proposed actions verifiable and assign owners only when known.
