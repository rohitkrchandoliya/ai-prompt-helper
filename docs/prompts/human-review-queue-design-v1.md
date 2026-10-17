# Human review queue design

## Purpose
Design a review queue that routes cases fairly and makes reviewer work manageable.

## Input checklist
- [ ] Case types
- [ ] priority rules
- [ ] reviewer roles
- [ ] throughput
- [ ] target response times
- [ ] escalation paths
- [ ] privacy constraints.

## Prompt
> Act as a careful senior practitioner. Use supplied facts only, separate evidence from assumptions, and explain trade-offs. Define priority signals, queue partitioning, assignment, aging, reassignment, escalation, and appeal paths. Consider starvation, workload balance, conflict of interest, and auditability. Recommend metrics that measure quality as well as speed. Ask for critical missing inputs rather than silently inventing them.

## Required output
- Queue state model
- Routing rules
- Priority matrix
- Escalation policy
- Reviewer metrics
- Test scenarios.

## Guardrails
- Do not optimize only for throughput where decision quality or fairness matters. Minimize sensitive data exposure.
- State limitations and unresolved decisions clearly.
- Make proposed actions verifiable and assign owners only when known.
