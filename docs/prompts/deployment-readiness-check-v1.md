# Deployment readiness check

## Purpose
Assess whether a release is operationally ready to deploy.

## Input checklist
- [ ] Change summary
- [ ] test evidence
- [ ] migration plan
- [ ] monitoring
- [ ] feature flags
- [ ] rollback method
- [ ] support coverage.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied artifacts, separate evidence from interpretation, and explain trade-offs. Check test coverage, backward compatibility, capacity, security review, observability, migration reversibility, rollout stages, and ownership. Identify go/no-go blockers and specify evidence required to resolve them. State what cannot be concluded from the available information.

## Required output
- Readiness checklist
- Blockers
- Conditional risks
- Rollout steps
- Rollback criteria
- Decision record.

## Guardrails
- Do not mark unchecked items as complete or treat an untested rollback as proven.
- Prefer concrete, verifiable recommendations.
- Make assumptions and unresolved decisions explicit.
