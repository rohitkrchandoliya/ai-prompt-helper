# AI prompt version governance

## Purpose
Create a controlled process for changing prompts without losing reproducibility.

## Input checklist
- [ ] Prompt inventory
- [ ] owners
- [ ] versions
- [ ] evaluation datasets
- [ ] deployment environments
- [ ] approval rules
- [ ] rollback process.

## Prompt
> Act as a careful senior practitioner. Work from the provided evidence and document assumptions explicitly. Define version identifiers, change rationale, compatibility notes, evaluation gates, staged rollout, monitoring, and rollback criteria. Include how to distinguish prompt changes from model, tool, or data changes. Identify the evidence needed to validate each conclusion and prioritize high-impact gaps.

## Required output
- Versioning policy
- Change template
- Evaluation gates
- Rollout process
- Audit trail
- Rollback checklist.

## Guardrails
- Do not treat a prompt revision as safe without relevant regression testing.
- Do not claim controls are effective without test evidence.
- Make proposed steps specific, testable, and appropriately scoped.
