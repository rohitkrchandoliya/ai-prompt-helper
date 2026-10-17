# Backup and restore integrity review

## Purpose
Assess whether backups can restore complete, consistent, usable data.

## Input checklist
- [ ] Backup scope
- [ ] schedules
- [ ] encryption
- [ ] retention
- [ ] restore logs
- [ ] dependencies
- [ ] RPO/RTO
- [ ] last test results.

## Prompt
> Act as a careful senior practitioner. Work from the provided evidence and document assumptions explicitly. Review backup coverage, immutability, access separation, key recovery, point-in-time consistency, and restore dependencies. Define a restore drill that validates application-level integrity, not merely successful file retrieval. Identify the evidence needed to validate each conclusion and prioritize high-impact gaps.

## Required output
- Coverage gaps
- Restore test plan
- Integrity checks
- Recovery dependencies
- Evidence checklist
- Corrective actions.

## Guardrails
- Do not claim recoverability from backup job success alone; avoid exposing backup credentials.
- Do not claim controls are effective without test evidence.
- Make proposed steps specific, testable, and appropriately scoped.
