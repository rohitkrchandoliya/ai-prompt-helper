# Design system token audit

## Purpose
Audit design tokens for consistency, accessibility, and maintainability.

## Input checklist
- [ ] Token definitions
- [ ] component usage
- [ ] naming conventions
- [ ] themes
- [ ] accessibility targets
- [ ] migration constraints.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied artifacts, separate evidence from interpretation, and explain trade-offs. Find duplicate or conflicting tokens, inconsistent semantic naming, hard-coded values, theme gaps, and likely contrast risks. Propose a migration sequence and identify changes requiring visual regression checks. State what cannot be concluded from the available information.

## Required output
- Token inventory
- Inconsistency table
- Naming recommendations
- Migration plan
- Regression checklist.

## Guardrails
- Do not assert contrast compliance without actual color values and relevant calculations.
- Prefer concrete, verifiable recommendations.
- Make assumptions and unresolved decisions explicit.
