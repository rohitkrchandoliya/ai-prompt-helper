# User permission model review

## Purpose
Review a product's permission model for least privilege and understandable access.

## Input checklist
- [ ] Roles
- [ ] resources
- [ ] actions
- [ ] sharing model
- [ ] tenant boundaries
- [ ] admin workflows
- [ ] audit requirements.

## Prompt
> Act as a careful senior practitioner. Use only the provided evidence, label uncertainty, and distinguish facts from recommendations. Build a role-resource-action matrix, identify implicit grants and privilege escalation paths, test default-deny behavior, and review invitation, revocation, and ownership transfer. Explain usability trade-offs and audit needs. Ask targeted questions where missing context changes the result.

## Required output
- Permission matrix
- Risky paths
- Least-privilege recommendations
- Test cases
- Audit events
- Migration concerns.

## Guardrails
- Do not assume UI hiding is authorization. Keep tenant isolation and server-side enforcement explicit.
- Include clear rationale and validation steps for material recommendations.
- List unresolved questions rather than guessing.
