# Account recovery abuse review

## Purpose
Review account recovery flows for abuse resistance and legitimate-user recovery.

## Input checklist
- [ ] Recovery flow
- [ ] identity signals
- [ ] rate limits
- [ ] notification behavior
- [ ] support override
- [ ] threat model
- [ ] user research.

## Prompt
> Act as a careful senior practitioner. Base the review on supplied evidence, identify assumptions, and prioritize recommendations by impact and verifiability. Assess enumeration, takeover, replay, brute force, SIM or email compromise assumptions, and support-channel weaknesses. Balance abuse controls with recovery accessibility and define safe negative tests. State what further evidence would change the conclusion.

## Required output
- Threat scenarios
- Control gaps
- Rate-limit and notification checks
- User recovery edge cases
- Remediation plan.

## Guardrails
- Do not reveal whether a specific real account exists or weaken identity verification to reduce friction.
- Make each important recommendation testable.
- Separate confirmed facts from hypotheses and open decisions.
