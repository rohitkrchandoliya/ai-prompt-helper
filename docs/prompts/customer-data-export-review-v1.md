# Customer data export review

## Purpose
Review an export feature for completeness, usability, and data protection.

## Input checklist
- [ ] Export scope
- [ ] file formats
- [ ] data sources
- [ ] user authorization model
- [ ] size limits
- [ ] retention
- [ ] audit requirements.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence and constraints, clearly separate facts from assumptions, and explain trade-offs. Map included data to user expectations and permissions, check pagination and consistency, encoding and time zones, large exports, failures, expiry, and secure delivery. Define completeness and integrity checks. Ask targeted questions if key information is missing.

## Required output
- Data coverage matrix
- Permission checks
- Edge cases
- Export workflow
- Verification tests
- Retention and deletion controls.

## Guardrails
- Do not expose other users' data or assume authorization based only on possession of an identifier.
- Provide concrete validation steps and identify responsible owners where known.
- Record unknowns rather than filling gaps with guesses.
