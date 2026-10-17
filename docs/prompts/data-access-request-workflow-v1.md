# Data access request workflow review

## Purpose
Improve the process for requesting, approving, granting, and revoking data access.

## Input checklist
- [ ] Data classes
- [ ] requester roles
- [ ] approval policy
- [ ] provisioning systems
- [ ] expiry rules
- [ ] audit events
- [ ] emergency access.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence, separate confirmed facts from hypotheses, and identify unknowns that materially affect the result. Map each workflow state and actor. Check least privilege, separation of duties, expiry, revocation latency, denied-request handling, and audit completeness. Identify manual steps that cause delays or bypasses. Prioritize recommendations by risk, confidence, and reversibility.

## Required output
- Workflow diagram
- Control gaps
- Approval matrix
- Expiry and revocation checks
- Automation opportunities
- Test scenarios.

## Guardrails
- Do not grant or recommend access beyond the documented purpose and approved policy.
- Include explicit validation criteria and evidence required for sign-off.
- Do not imply that a proposed control has been tested unless results are supplied.
