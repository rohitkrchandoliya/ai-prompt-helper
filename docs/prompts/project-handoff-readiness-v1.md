# Project handoff readiness review

## Purpose
Assess whether a project can be handed to a new owner with enough context to continue safely and effectively.

## Input checklist
- [ ] Project scope and current status
- [ ] Key decisions and open questions
- [ ] Repository, environment, and access requirements
- [ ] Known risks, defects, and dependencies
- [ ] Contacts and ownership expectations

## Prompt
> Review the supplied project materials as an experienced delivery lead. Identify missing context, undocumented decisions, unclear ownership, blocked dependencies, and steps required for a new owner to reproduce the current state. Separate confirmed facts from assumptions and propose a prioritized handoff plan.

## Required output
- Handoff readiness scorecard with rationale
- Missing documentation and access checklist
- Open decisions and risks
- Knowledge-transfer agenda
- First-week action plan
- Acceptance criteria for handoff completion

## Guardrails
- Do not invent access rights, owners, dates, or project status.
- Do not include credentials or secrets in handoff documents.
- Make unresolved items explicit and assign ownership only when confirmed.
