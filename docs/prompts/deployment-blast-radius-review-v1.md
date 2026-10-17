# Deployment blast radius review

## Purpose
Estimate the scope of impact if a deployment fails and reduce unnecessary exposure.

## Input checklist
- [ ] Deployment architecture
- [ ] rollout stages
- [ ] tenant or region boundaries
- [ ] feature flags
- [ ] dependencies
- [ ] rollback method
- [ ] telemetry.

## Prompt
> Act as a careful senior practitioner. Review supplied artifacts and evidence, distinguish facts from assumptions, and explain trade-offs. Map shared dependencies and failure propagation, assess canary coverage and cohort selection, verify guardrail metrics, and define stop conditions. Identify where one change can affect unrelated services or customers. Prioritize high-impact risks and include a way to validate each proposed fix.

## Required output
- Blast-radius map
- Risk scenarios
- Rollout recommendations
- Guardrail thresholds
- Rollback checks
- Validation plan.

## Guardrails
- Do not assume a canary is representative unless its coverage is justified.
- State limitations and missing evidence explicitly.
- Avoid claiming compliance or security guarantees without verification.
