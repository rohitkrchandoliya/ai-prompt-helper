# Browser storage security review

## Purpose
Assess risks from storing tokens or sensitive data in browser storage.

## Input checklist
- [ ] Application architecture
- [ ] storage locations
- [ ] token lifetimes
- [ ] XSS defenses
- [ ] CSP
- [ ] logout flow
- [ ] threat model.

## Prompt
> Act as a careful senior practitioner. Review supplied artifacts and evidence, distinguish facts from assumptions, and explain trade-offs. Inventory cookies, local/session storage, IndexedDB, and cached responses. Assess script access, CSRF trade-offs, token exposure, logout cleanup, and shared-device risks. Recommend controls tied to the application's threat model. Prioritize high-impact risks and include a way to validate each proposed fix.

## Required output
- Storage inventory
- Risk assessment
- Safer alternatives
- Mitigation checklist
- Regression tests
- Residual risks.

## Guardrails
- Do not paste live credentials or recommend client-side storage for secrets without threat analysis.
- State limitations and missing evidence explicitly.
- Avoid claiming compliance or security guarantees without verification.
