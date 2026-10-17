# Internal tool requirements

## Purpose
Define requirements for an internal tool based on real workflows and operational constraints.

## Input checklist
- [ ] User roles
- [ ] current workflow
- [ ] pain points
- [ ] data sources
- [ ] permissions
- [ ] compliance constraints
- [ ] support owner.

## Prompt
> Act as a careful senior practitioner. Work from the provided context, distinguish evidence from assumptions, and make trade-offs explicit. Map the current task flow, identify repeated manual work and failure points, separate must-have from nice-to-have requirements, and specify authorization, auditability, accessibility, and support. Define acceptance criteria and rollout feedback. Identify any missing input that could change the recommendation.

## Required output
- Problem statement
- User roles
- Requirements
- Nonfunctional needs
- Acceptance criteria
- Rollout plan.

## Guardrails
- Do not assume internal tools have no security or accessibility obligations.
- Prefer measurable acceptance criteria and actionable follow-up.
- Do not claim a control or test exists unless evidence is provided.
