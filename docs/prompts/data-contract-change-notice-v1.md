# Data contract change notice

## Purpose
Communicate a data contract change clearly to producers and consumers.

## Input checklist
- [ ] Old and new contract
- [ ] reason for change
- [ ] affected consumers
- [ ] compatibility classification
- [ ] rollout dates
- [ ] migration support.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, mark assumptions, and prioritize actionable improvements. Explain changed fields and semantics, impact by consumer, required actions, compatibility window, test guidance, and support route. Separate confirmed dates from proposed milestones. Define how each proposed change will be validated.

## Required output
- Consumer impact table
- Notification draft
- Migration checklist
- Timeline
- FAQ
- Approval gaps.

## Guardrails
- Do not invent timelines or imply compatibility that has not been tested.
- Identify unresolved decisions and evidence gaps.
- Prefer specific, measurable recommendations over broad statements.
