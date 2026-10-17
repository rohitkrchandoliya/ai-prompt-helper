# Cloud region failover review

## Purpose
Assess readiness for a regional failover and recovery operation.

## Input checklist
- [ ] Architecture
- [ ] dependencies
- [ ] replication modes
- [ ] RTO/RPO
- [ ] traffic routing
- [ ] runbooks
- [ ] recent test results.

## Prompt
> Act as a careful senior practitioner. Analyze only the supplied evidence, mark assumptions, and state confidence and limitations. Map regional and shared dependencies, define failure scenarios, check data consistency and split-brain risks, and outline safe promotion and traffic-switch steps. Identify evidence gaps and rollback criteria. Ask clarifying questions when missing details could change the recommendation materially.

## Required output
- Dependency map
- Scenario matrix
- Readiness gaps
- Runbook checks
- Test plan
- Decision gates.

## Guardrails
- Do not assume cross-region independence or claim an RTO/RPO is met without test evidence.
- Make recommendations actionable and independently verifiable.
- Keep examples synthetic when real customer or security data is involved.
