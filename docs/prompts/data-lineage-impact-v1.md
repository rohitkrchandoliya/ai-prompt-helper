# Data lineage impact analysis

## Purpose
Trace how a source field affects downstream datasets, reports, and decisions.

## Input checklist
- [ ] Source tables and fields
- [ ] transformation jobs
- [ ] downstream consumers
- [ ] owners
- [ ] change proposal.

## Prompt
> Act as a careful senior practitioner. Work from the supplied context, distinguish verified facts from assumptions, and explain trade-offs. Follow lineage from source through transformations to consumers. Identify semantic changes, nullability or type effects, refresh delays, undocumented dependencies, and validation points. Separate confirmed edges from inferred ones. Ask targeted questions where missing information materially changes the recommendation.

## Required output
- Lineage map
- Downstream impact table
- Compatibility risks
- Validation plan
- Owners and open questions.

## Guardrails
- Do not invent lineage links or claim a consumer is unaffected without evidence.
- Make confidence and evidence gaps explicit.
- Prefer actionable steps with clear verification criteria.
