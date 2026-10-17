# Authentication session lifecycle review

## Purpose
Review session creation, renewal, expiration, and revocation behavior.

## Input checklist
- [ ] Authentication architecture
- [ ] token types
- [ ] expiry settings
- [ ] refresh flow
- [ ] logout behavior
- [ ] device model
- [ ] threat requirements.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence, distinguish facts from hypotheses, and state limitations. Trace session lifecycle across browser, mobile, APIs, and identity provider. Check revocation, rotation, idle and absolute timeouts, stolen-token scenarios, and concurrent sessions. Identify tests that prove expected behavior. Prioritize recommendations by impact, confidence, and reversibility.

## Required output
- Lifecycle diagram
- Risk findings
- Secure defaults to consider
- Regression tests
- Rollout notes.

## Guardrails
- Do not disclose tokens or weaken session controls for convenience.
- Include verification criteria and note unknowns.
- Do not imply a test or measurement has been performed unless results are supplied.
