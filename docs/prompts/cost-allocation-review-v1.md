# cloud cost allocation review

## Purpose
Improve the explainability and usefulness of cloud cost allocation.

## Input checklist
- [ ] Billing export
- [ ] resource inventory
- [ ] tags or labels
- [ ] shared services
- [ ] allocation policy
- [ ] business units
- [ ] time window.

## Prompt
> Act as a careful senior practitioner. Use only the supplied context. State the objective and constraints, distinguish evidence from assumptions, and analyze the problem systematically. Check coverage, missing identifiers, inconsistent tags, shared-cost treatment, credits, amortization, and time alignment. Separate directly attributable cost from allocated estimates. Propose owner accountability and reconciliation checks; quantify gaps only from provided data. Ask focused questions only if missing information materially affects the recommendation.

## Required output
- Coverage summary
- Allocation method
- Exception list
- Sample calculations
- Recommended tagging standards
- Monthly reconciliation plan.

## Guardrails
- Do not invent billing values or imply allocated costs are directly metered. Avoid including credentials or sensitive billing details.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps over generic advice.
