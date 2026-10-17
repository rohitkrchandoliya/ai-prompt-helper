# Localization release readiness

## Purpose
Check whether a localized release is ready for target locales.

## Input checklist
- [ ] Supported locales
- [ ] translated strings
- [ ] screenshots
- [ ] layouts
- [ ] date/number formats
- [ ] locale-specific features
- [ ] reviewer feedback.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence and constraints, clearly separate facts from assumptions, and explain trade-offs. Review string completeness, expansion and truncation, pluralization, text direction, formatting, cultural assumptions, fallback behavior, and untranslated errors. Separate linguistic review from functional testing. Ask targeted questions if key information is missing.

## Required output
- Locale coverage table
- Defects by severity
- Layout risks
- Functional test plan
- Sign-off criteria
- Unresolved questions.

## Guardrails
- Do not substitute machine translation confidence for qualified linguistic review.
- Provide concrete validation steps and identify responsible owners where known.
- Record unknowns rather than filling gaps with guesses.
