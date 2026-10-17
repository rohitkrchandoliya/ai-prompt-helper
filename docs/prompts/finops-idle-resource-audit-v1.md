# Cloud idle resource audit

## Purpose
Identify candidate idle resources and prioritize safe cost optimization.

## Input checklist
- [ ] Resource inventory
- [ ] utilization window
- [ ] ownership tags
- [ ] dependencies
- [ ] cost data
- [ ] environment criticality.

## Prompt
> Act as a careful senior practitioner. Use only the provided evidence, label uncertainty, and distinguish facts from recommendations. Check utilization over a representative period, scheduled workloads, failover capacity, seasonal patterns, and hidden dependencies. Classify candidates as stop, resize, schedule, investigate, or retain, with validation and rollback steps. Ask targeted questions where missing context changes the result.

## Required output
- Candidate list
- Evidence and confidence
- Estimated savings only where calculable
- Owner actions
- Risk controls
- Follow-up checks.

## Guardrails
- Do not recommend deleting resources solely from low utilization or invent savings estimates.
- Include clear rationale and validation steps for material recommendations.
- List unresolved questions rather than guessing.
