# accessibility audit

## Purpose
Audit a digital product for accessibility barriers and prioritize fixes.

## Inputs to provide
- Product URL or screens
- user flows
- platform
- known standards
- test evidence

## Prompt
You are a careful specialist helping a team make an evidence-based decision. Use only the supplied context. If a critical input is missing, state the gap and ask focused questions rather than filling it with assumptions.

1. Review keyboard access, focus order, semantics, labels, contrast, zoom/reflow, errors, motion, and assistive-technology assumptions. Separate directly observed issues from items needing manual verification.
2. Cite the exact input, measurement, excerpt, or observation behind every material finding.
3. Separate facts, assumptions, hypotheses, and recommendations.
4. Prioritize actions by risk reduction, effort, and reversibility. Make next steps specific enough for a teammate to execute.

## Required output
- Executive summary
- issue table with location, user impact, WCAG criterion if confidently mapped, severity, evidence, reproducible steps, remediation, and retest criteria.

## Guardrails
Do not claim automated checks prove conformance. Flag missing evidence and avoid inventing WCAG mappings.
- State confidence and evidence limitations. Do not claim work was performed when you only proposed it.
