# Reliability test coverage map

## Purpose
Map reliability risks to tests and identify gaps in failure-mode coverage.

## Input checklist
- [ ] Architecture
- [ ] failure modes
- [ ] runbooks
- [ ] existing tests
- [ ] SLOs
- [ ] dependencies
- [ ] recovery requirements.

## Prompt
> Act as a careful senior practitioner. Base findings on supplied evidence, separate assumptions from verified facts, and make the process repeatable. Map each critical failure mode to unit, integration, resilience, recovery, or game-day coverage. Identify untested boundaries, define observable pass/fail conditions, and prioritize tests by impact and likelihood. Highlight high-impact unknowns and explain how to resolve them.

## Required output
- Risk-to-test matrix
- Coverage gaps
- Test scenarios
- Acceptance criteria
- Execution order
- Ownership suggestions.

## Guardrails
- Do not equate test existence with demonstrated resilience; distinguish simulated from production-tested behavior.
- Include explicit validation steps and evidence needed for sign-off.
- Avoid unsupported certainty and generic recommendations.
