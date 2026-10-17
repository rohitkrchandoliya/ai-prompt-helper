# Localization number and date review

## Purpose
Find locale-sensitive formatting and parsing defects in product workflows.

## Input checklist
- [ ] Supported locales
- [ ] UI examples
- [ ] storage formats
- [ ] timezone rules
- [ ] currency and unit handling
- [ ] test coverage.

## Prompt
> Act as a careful senior practitioner. Ground conclusions in the supplied evidence, label assumptions, and explain uncertainty. Check display versus canonical storage, daylight-saving transitions, ambiguous dates, decimal separators, grouping, pluralization, and currency rounding. Recommend locale-specific tests and migration checks for existing data. Recommend only actions that can be checked against explicit acceptance criteria.

## Required output
- Issue inventory
- Locale test matrix
- Corrected examples
- Parsing safeguards
- Regression criteria.

## Guardrails
- Do not reinterpret stored values without confirming their canonical format and business meaning.
- Keep facts, hypotheses, and decisions clearly separated.
- Include a practical verification method for every high-priority recommendation.
