# Customer data access review

## Purpose
Review whether staff access to customer data is necessary, scoped, and auditable.

## Input checklist
- [ ] Roles
- [ ] access policies
- [ ] data categories
- [ ] access logs
- [ ] support workflows
- [ ] break-glass process
- [ ] retention.

## Prompt
> Act as a careful senior practitioner. Base conclusions on supplied artifacts, separate facts from hypotheses, and identify material unknowns. Map roles to data and purpose, identify broad or standing access, review exceptional access controls and audit trails, and propose least-privilege alternatives with usability trade-offs. Provide a concise rationale for each high-priority recommendation.

## Required output
- Role-data matrix
- Excessive access findings
- Exception controls
- Audit requirements
- Remediation plan.

## Guardrails
- Do not expose real customer records or infer permissions not present in the supplied policy.
- Include measurable verification steps and note any assumptions.
- Prefer prioritized, specific actions over generic advice.
