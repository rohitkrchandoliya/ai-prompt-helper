# Incident Action Item Follow-up

## Purpose
Turn incident review actions into owned, verifiable improvements and reduce the chance that corrective work stalls.

## Input checklist
- [ ] Incident summary and confirmed timeline
- [ ] Findings and contributing factors
- [ ] Proposed corrective actions
- [ ] Owners, deadlines, and dependencies
- [ ] Risk acceptance and escalation policy

## Prompt
> Act as an incident-learning facilitator. Use only supplied evidence. Convert each proposed action into a concrete outcome with one accountable owner, measurable completion criteria, a realistic due date or explicit scheduling dependency, and a verification method. Separate immediate containment from long-term prevention. Identify duplicate actions, actions that merely say “be more careful,” missing system-level fixes, and work that requires risk acceptance. Do not infer blame or invent root causes. Suggest a review cadence and an escalation path for overdue or blocked work.

## Required output
- Action register with description, owner, priority, due date, dependencies, and status
- Acceptance criteria and evidence required to close each action
- Mapping from contributing factor to corrective action
- Blockers and decisions required
- Follow-up cadence and escalation triggers
- Residual risks and actions requiring formal acceptance

## Guardrails
- Keep the review blameless and focused on system improvement.
- Do not mark actions complete without evidence.
- Clearly label missing owners, dates, or verification criteria rather than inventing them.
- Prefer a small set of high-impact actions over a long list of vague tasks.
