# Technical decision record quality review

## Purpose
Improve decision records so future teams can understand context and trade-offs.

## Input checklist
- [ ] Existing decision records
- [ ] architecture context
- [ ] constraints
- [ ] alternatives
- [ ] outcomes
- [ ] review conventions.

## Prompt
> Act as a careful senior practitioner. Analyze only the supplied evidence, mark assumptions, and state confidence and limitations. Check whether each record states context, decision drivers, alternatives, trade-offs, consequences, reversibility, and revisit triggers. Identify missing rationale and distinguish original facts from retrospective interpretation. Ask clarifying questions when missing details could change the recommendation materially.

## Required output
- Record-by-record gaps
- Improved outline
- Prioritized edits
- Decision links to verify
- Maintenance guidance.

## Guardrails
- Do not fabricate historical reasoning or rewrite uncertainty as an established fact.
- Make recommendations actionable and independently verifiable.
- Keep examples synthetic when real customer or security data is involved.
