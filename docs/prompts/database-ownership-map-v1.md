# Database ownership mapping

## Purpose
Clarify ownership for schemas, tables, data quality, and operational response.

## Input checklist
- [ ] Database inventory
- [ ] schemas and tables
- [ ] teams
- [ ] producer/consumer links
- [ ] support rota
- [ ] criticality
- [ ] governance rules.

## Prompt
> Act as a careful senior practitioner. Use only supplied information, identify assumptions and evidence gaps, and distinguish analysis from decisions. Assign accountable owners for definitions, quality, access, lifecycle, and incidents. Flag orphaned objects, ambiguous shared responsibility, and owner changes. Propose a review cadence and escalation for unowned critical data. Request clarification where missing facts materially change the outcome.

## Required output
- Ownership matrix
- Orphan inventory
- Responsibility definitions
- Escalation path
- Review cadence
- Transition tasks.

## Guardrails
- Do not assign real people or teams without supplied evidence or approval.
- Make the reasoning traceable to provided evidence.
- Give recommendations measurable verification criteria where possible.
