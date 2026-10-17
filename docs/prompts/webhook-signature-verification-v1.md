# Webhook signature verification review

## Purpose
Review webhook authentication, replay resistance, and failure handling.

## Input checklist
- [ ] Signature scheme
- [ ] timestamp rules
- [ ] key rotation
- [ ] endpoint code
- [ ] retry behavior
- [ ] provider documentation
- [ ] logs.

## Prompt
> Act as a careful senior practitioner. Analyze only the supplied evidence, mark assumptions, and state confidence and limitations. Check raw-body canonicalization, constant-time comparison, timestamp tolerance, replay handling, key rotation, secret storage, and safe failure behavior. Include positive and negative tests for tampered payloads and stale requests. Ask clarifying questions when missing details could change the recommendation materially.

## Required output
- Threat checklist
- Findings with evidence
- Test cases
- Remediation order
- Operational considerations.

## Guardrails
- Do not expose signing secrets or recommend disabling signature checks to ease debugging.
- Make recommendations actionable and independently verifiable.
- Keep examples synthetic when real customer or security data is involved.
