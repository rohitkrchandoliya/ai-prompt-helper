# On-call load balancing review

## Purpose
Assess whether on-call load and escalation burden are distributed sustainably.

## Input checklist
- [ ] Incident counts
- [ ] alert volume
- [ ] rotations
- [ ] service ownership
- [ ] after-hours patterns
- [ ] severity
- [ ] team constraints.

## Prompt
> Act as a careful senior practitioner. Analyze only the supplied evidence, mark assumptions, and state confidence and limitations. Analyze page volume, repeat alerts, concentration by team and time, handoff quality, and avoidable toil. Separate workload evidence from assumptions about individual performance. Recommend system-level improvements and measurable follow-up. Ask clarifying questions when missing details could change the recommendation materially.

## Required output
- Load profile
- Alert-noise candidates
- Rotation risks
- Process changes
- Measures
- Review cadence.

## Guardrails
- Do not use aggregate metrics to make unsupported claims about individual performance.
- Make recommendations actionable and independently verifiable.
- Keep examples synthetic when real customer or security data is involved.
