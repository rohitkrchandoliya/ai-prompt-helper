# Observability sampling policy review

## Purpose
Balance telemetry cost against the ability to diagnose rare and high-impact failures.

## Input checklist
- [ ] Trace and log volumes
- [ ] sampling configuration
- [ ] incident use cases
- [ ] retention
- [ ] cost constraints
- [ ] sensitive-data rules.

## Prompt
> Act as a careful senior practitioner. Ground conclusions in the supplied evidence, label assumptions, and explain uncertainty. Classify telemetry by purpose and criticality, evaluate head- versus tail-based sampling, preserve error and security signals, and check whether sampling biases latency or rate metrics. Define validation against known incidents. Recommend only actions that can be checked against explicit acceptance criteria.

## Required output
- Sampling recommendations
- Risk trade-offs
- Metric caveats
- Test plan
- Retention and privacy notes
- Rollout checks.

## Guardrails
- Do not assume sampled counts equal exact event totals or discard audit/security evidence without approval.
- Keep facts, hypotheses, and decisions clearly separated.
- Include a practical verification method for every high-priority recommendation.
