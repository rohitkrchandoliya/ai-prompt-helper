# Security exception review

## Purpose
Review a proposed security control exception and make its risk explicit.

## Input checklist
- [ ] Control requirement
- [ ] business justification
- [ ] affected assets
- [ ] exposure
- [ ] compensating controls
- [ ] requested duration
- [ ] approver.

## Prompt
> Act as a careful senior practitioner. Use only the supplied evidence, distinguish facts from assumptions, and state the key trade-offs. Verify the scope is narrow, explain the threat enabled by the exception, assess compensating controls, define monitoring and expiration, and require a named risk owner. Identify evidence still needed before approval. Ask targeted questions if a missing detail materially affects the conclusion.

## Required output
- Decision summary
- Risk assessment
- Compensating controls
- Monitoring
- Expiry and renewal criteria
- Approval checklist.

## Guardrails
- Do not normalize permanent exceptions or claim compliance without evidence.
- Give recommendations a clear rationale and validation method.
- Explicitly list unknowns and decision owners.
