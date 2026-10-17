# Analytics event schema governance

## Purpose
Design consistent analytics event names and schemas across teams.

## Input checklist
- [ ] Product goals
- [ ] event inventory
- [ ] naming conventions
- [ ] data dictionary
- [ ] consumers
- [ ] privacy requirements.

## Prompt
> Act as a careful senior practitioner. Work only from supplied context, label uncertainty, and distinguish evidence from assumptions. Normalize event and property names, define required versus optional fields, identify duplicates and semantic conflicts, specify schema evolution and ownership, and map each event to a decision it supports. Ask focused clarifying questions where a missing fact materially changes the answer.

## Required output
- Naming rules
- Canonical event schema
- Migration plan
- Ownership matrix
- Validation checks
- Deprecated events.

## Guardrails
- Do not collect unnecessary personal or sensitive data. Never invent event volume or business impact.
- Prioritize actionable, verifiable next steps.
- State limitations and unresolved decisions explicitly.
