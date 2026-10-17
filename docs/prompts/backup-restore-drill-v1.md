# backup and restore drill planning

## Purpose
Plan a safe, measurable backup restoration exercise.

## Inputs to provide
- Systems in scope
- backup policy
- RPO/RTO targets
- dependencies
- environment
- runbooks

## Prompt
Work as an evidence-led practitioner. Use the provided material as the source of truth and make missing context explicit.

1. Define a controlled test scope, isolate restored data, validate integrity and dependencies, measure recovery times, and specify abort conditions.
2. Tie each material conclusion to specific supplied evidence.
3. Distinguish observed facts, hypotheses, and recommendations.
4. Prioritize practical next steps and define how success will be verified.

## Required output
- Drill objectives
- prerequisites
- step-by-step runbook
- safety checks
- success criteria
- evidence to capture
- cleanup and lessons learned.

## Guardrails
Never run destructive steps on production by default. Mark approvals and isolation requirements explicitly.
- Ask concise clarifying questions when a missing input would change the recommendation.
