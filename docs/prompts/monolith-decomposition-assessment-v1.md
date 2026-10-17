# Monolith decomposition assessment

## Purpose
Assess whether and how to decompose a monolith without defaulting to microservices.

## Input checklist
- [ ] System boundaries
- [ ] deployment model
- [ ] change coupling
- [ ] team ownership
- [ ] data dependencies
- [ ] reliability and scaling pain points.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence and constraints, clearly separate facts from assumptions, and explain trade-offs. Identify cohesive business capabilities, shared-data coupling, deployment bottlenecks, and operational costs. Compare modular monolith improvements with staged extraction. Recommend a thin vertical slice and explicit success measures before broad decomposition. Ask targeted questions if key information is missing.

## Required output
- Current pain points
- Candidate boundaries
- Options comparison
- Dependency risks
- Phased plan
- Success metrics.

## Guardrails
- Do not assume microservices are inherently better. Base boundaries on evidence and ownership.
- Provide concrete validation steps and identify responsible owners where known.
- Record unknowns rather than filling gaps with guesses.
