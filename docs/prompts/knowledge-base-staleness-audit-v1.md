# Knowledge base staleness audit

## Purpose
Find outdated help content and define an evidence-based refresh queue.

## Input checklist
- [ ] Article inventory
- [ ] last-reviewed dates
- [ ] product changes
- [ ] search and support signals
- [ ] content owners
- [ ] accuracy requirements.

## Prompt
> Act as a careful senior practitioner. Use supplied facts only, separate evidence from assumptions, and explain trade-offs. Compare content claims with current product behavior, identify broken links and obsolete workflows, prioritize by user impact and traffic only where data exists, and assign review ownership. Distinguish stale evidence from merely old timestamps. Ask for critical missing inputs rather than silently inventing them.

## Required output
- Staleness inventory
- Priority rationale
- Owner queue
- Content fixes
- Verification sources
- Recurring review cadence.

## Guardrails
- Do not treat publication age alone as proof of inaccuracy or invent product behavior.
- State limitations and unresolved decisions clearly.
- Make proposed actions verifiable and assign owners only when known.
