# accessible interface language audit

## Purpose
Audit interface strings for clarity, assistive use, and recovery guidance.

## Input checklist
- [ ] UI strings in context
- [ ] user goal
- [ ] validation and error states
- [ ] locale requirements
- [ ] design constraints.

## Prompt
> Act as a careful senior practitioner. Use only the supplied context. Separate facts from assumptions, identify risks and trade-offs, and make recommendations traceable to evidence. Check labels, instructions, link text, error identification, and recovery steps. Evaluate strings in their interaction context, flag ambiguous abbreviations and localization risks, and propose concise alternatives with rationale. Ask focused questions only where missing information materially changes the outcome.

## Required output
- String review table
- Recommended wording
- Severity
- Rationale
- Localization notes
- Validation checklist.

## Guardrails
- Copy review alone does not prove accessibility conformance. Preserve legal disclosures and consent meaning.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps.
