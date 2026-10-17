# Third-party outage contingency plan

## Purpose
Plan graceful behavior when an external provider becomes unavailable.

## Input checklist
- [ ] Provider dependencies
- [ ] critical user journeys
- [ ] timeout/retry policy
- [ ] fallback options
- [ ] contracts
- [ ] monitoring
- [ ] recovery expectations.

## Prompt
> Act as a careful senior practitioner. Analyze only supplied evidence, distinguish facts from hypotheses, and explain trade-offs. Map provider failure modes and blast radius. Define timeouts, retry budgets, circuit breakers, degraded modes, manual alternatives, and recovery checks. Evaluate stale or partial responses and duplicate side effects. Highlight missing information that would materially change the result.

## Required output
- Failure-mode table
- Fallback behavior
- Alert conditions
- Runbook
- Recovery test plan
- Owner decisions.

## Guardrails
- Do not recommend infinite retries or unsafe fallback behavior that corrupts state.
- Make each important recommendation verifiable.
- Identify decisions requiring human approval.
