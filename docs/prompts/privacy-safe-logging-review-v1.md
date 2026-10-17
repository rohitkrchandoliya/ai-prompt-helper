# Privacy-safe logging review

## Purpose
Reduce sensitive data in logs while preserving diagnostic value.

## Input checklist
- [ ] Log schemas
- [ ] sample sanitized events
- [ ] data classification
- [ ] access controls
- [ ] retention
- [ ] incident needs
- [ ] redaction rules.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, label assumptions, and explain material trade-offs. Identify direct identifiers, tokens, secrets, sensitive query strings, and high-risk combinations. Recommend structured fields, allowlists, redaction at source, retention limits, and tests proving sensitive values do not leak. Include objective criteria for deciding whether the plan or conclusion is adequate.

## Required output
- Finding inventory
- Revised logging schema
- Redaction rules
- Test cases
- Retention recommendations
- Rollout plan.

## Guardrails
- Do not paste live secrets or identifiable records into the review. Redaction must not replace fixing unsafe collection at source.
- State evidence gaps and define a safe validation method.
- Keep recommendations scoped and auditable.
