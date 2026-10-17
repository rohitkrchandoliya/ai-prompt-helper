# API deprecation usage telemetry

## Purpose
Assess whether API usage telemetry is sufficient to guide a safe deprecation.

## Input checklist
- [ ] Endpoint logs
- [ ] client identifiers
- [ ] sampling
- [ ] version distribution
- [ ] privacy policy
- [ ] known consumers
- [ ] time window.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence, identify uncertainty, and prioritize safe, testable recommendations. Evaluate coverage, sampling bias, anonymous or unrecognized clients, batch usage, and long-tail activity. Define the minimum observation period and independent consumer outreach needed before decisions. Ask for missing context if it changes the conclusion materially.

## Required output
- Telemetry coverage assessment
- Blind spots
- Consumer discovery plan
- Deprecation evidence threshold
- Monitoring requirements.

## Guardrails
- Do not treat missing telemetry as proof of non-use or collect unnecessary personal identifiers.
- Clearly separate observed facts, hypotheses, and decisions requiring approval.
- Include verification steps and limitations.
