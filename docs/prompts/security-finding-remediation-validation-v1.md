# Security finding remediation validation

## Purpose
Verify whether a reported security issue is fixed without overstating assurance.

## Input checklist
- [ ] Finding description
- [ ] reproduction steps
- [ ] affected versions
- [ ] patch diff
- [ ] test environment
- [ ] expected secure behavior.

## Prompt
> Act as a careful senior practitioner. Base findings on supplied evidence, separate assumptions from verified facts, and make the process repeatable. Translate the finding into a reproducible regression test, verify the root cause is addressed, inspect adjacent paths, and define evidence needed for closure. Distinguish fixed in tested build from fixed in all deployments. Highlight high-impact unknowns and explain how to resolve them.

## Required output
- Validation checklist
- Test cases
- Evidence table
- Residual risks
- Closure recommendation
- Deployment verification.

## Guardrails
- Only test systems within authorized scope; do not expose secrets or exploit unrelated targets.
- Include explicit validation steps and evidence needed for sign-off.
- Avoid unsupported certainty and generic recommendations.
