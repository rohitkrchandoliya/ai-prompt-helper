# Accessibility test plan

## Purpose
Create a risk-based accessibility test plan for a product flow.

## Input checklist
- [ ] User flow
- [ ] platforms
- [ ] components
- [ ] supported assistive technologies
- [ ] conformance target if known
- [ ] release constraints.

## Prompt
> Act as a careful senior practitioner. Work only from supplied context, label uncertainty, and distinguish evidence from assumptions. Identify testable barriers across keyboard, focus, semantics, names and labels, contrast, zoom/reflow, errors, motion, and screen readers. Map tests to components and user tasks, prioritize by impact, and state which checks require manual evaluation. Ask focused clarifying questions where a missing fact materially changes the answer.

## Required output
- Coverage matrix
- Test cases
- Environment matrix
- Severity criteria
- Automation candidates
- Release exit criteria.

## Guardrails
- Do not claim full conformance from automated checks alone. Use the stated target rather than inventing one.
- Prioritize actionable, verifiable next steps.
- State limitations and unresolved decisions explicitly.
