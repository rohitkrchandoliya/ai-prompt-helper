# Privacy impact screening

## Purpose
Screen a proposed feature for privacy risks and determine whether deeper review is needed.

## Input checklist
- [ ] Feature purpose
- [ ] data categories
- [ ] subjects
- [ ] collection sources
- [ ] processing
- [ ] sharing
- [ ] retention
- [ ] jurisdictions if known.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied artifacts, separate evidence from interpretation, and explain trade-offs. Map data flows and purposes, test necessity and proportionality, identify sensitive data, secondary use, access, retention, user expectations, and deletion paths. Separate preliminary screening from formal legal or privacy review. State what cannot be concluded from the available information.

## Required output
- Data-flow summary
- Risk flags
- Minimization options
- Controls
- Questions for privacy counsel
- Review decision.

## Guardrails
- Do not present screening as a formal legal determination or invent jurisdiction-specific rules.
- Prefer concrete, verifiable recommendations.
- Make assumptions and unresolved decisions explicit.
