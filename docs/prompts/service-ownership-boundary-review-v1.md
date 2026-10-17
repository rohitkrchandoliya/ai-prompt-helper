# Service ownership boundary review

## Purpose
Clarify service boundaries, accountability, and handoffs across teams.

## Input checklist
- [ ] Service catalog
- [ ] architecture diagram
- [ ] on-call ownership
- [ ] deploy permissions
- [ ] data ownership
- [ ] incident history
- [ ] team responsibilities.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, label assumptions, and explain material trade-offs. Map who owns runtime health, code changes, data contracts, security, and consumer communication. Identify shared components without clear accountability and propose explicit interfaces and escalation rules. Include objective criteria for deciding whether the plan or conclusion is adequate.

## Required output
- Ownership matrix
- Boundary gaps
- Handoff risks
- Proposed responsibility changes
- Decision list
- Review cadence.

## Guardrails
- Do not assign accountability to specific people without evidence or approval.
- State evidence gaps and define a safe validation method.
- Keep recommendations scoped and auditable.
