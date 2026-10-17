# Mobile permission prompt review

## Purpose
Improve the timing and clarity of permission requests in a mobile app.

## Input checklist
- [ ] Permission types
- [ ] feature entry points
- [ ] platform guidance
- [ ] denial behavior
- [ ] rationale copy
- [ ] analytics
- [ ] fallback UX.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, identify assumptions, and prioritize recommendations by impact and verifiability. Check whether each request is tied to a user-initiated need, explain value clearly, handle denial and restricted states, and avoid repeated or coercive prompts. Verify platform-specific behavior and alternatives. State what further evidence would change the conclusion.

## Required output
- Permission inventory
- Revised copy
- Request timing
- Denial-state UX
- Test cases
- Success measures.

## Guardrails
- Do not pressure users to grant optional permissions or imply functionality that is not actually required.
- Make each important recommendation testable.
- Separate confirmed facts from hypotheses and open decisions.
