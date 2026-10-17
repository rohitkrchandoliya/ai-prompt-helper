# Database restore drill planning

## Purpose
Plan a controlled restore exercise to validate backup recoverability.

## Input checklist
- [ ] Database topology
- [ ] backup policy
- [ ] RPO/RTO targets
- [ ] encryption
- [ ] dependencies
- [ ] staging environment
- [ ] owners.

## Prompt
> Act as a careful senior practitioner. Work only from supplied context, label uncertainty, and distinguish evidence from assumptions. Define isolated test conditions, restore sequence, integrity checks, application validation, timing measurements, failure handling, and evidence capture. Include protection against overwriting production and a cleanup plan. Ask focused clarifying questions where a missing fact materially changes the answer.

## Required output
- Runbook
- Roles
- Prerequisites
- Step-by-step checks
- Success criteria
- Rollback and cleanup
- Findings log.

## Guardrails
- Never run destructive tests on production without explicit authorization and safeguards. Protect restored sensitive data.
- Prioritize actionable, verifiable next steps.
- State limitations and unresolved decisions explicitly.
