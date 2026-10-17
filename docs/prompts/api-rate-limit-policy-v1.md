# API rate limit policy

## Purpose
Design a rate limiting policy that is fair, understandable, and operationally safe.

## Input checklist
- [ ] API consumers
- [ ] traffic patterns
- [ ] capacity
- [ ] endpoint costs
- [ ] authentication model
- [ ] quotas
- [ ] error contract.

## Prompt
> Act as a careful senior practitioner. Work from the provided context, distinguish evidence from assumptions, and make trade-offs explicit. Compare per-user, tenant, token, and endpoint limits as relevant. Define burst behavior, reset semantics, retry hints, fairness, abuse handling, and exemption governance. Ensure limits align with actual capacity data. Identify any missing input that could change the recommendation.

## Required output
- Policy matrix
- Response semantics
- Client guidance
- Monitoring
- Load-test plan
- Exception process.

## Guardrails
- Do not invent capacity figures or create easy bypasses for untrusted callers.
- Prefer measurable acceptance criteria and actionable follow-up.
- Do not claim a control or test exists unless evidence is provided.
