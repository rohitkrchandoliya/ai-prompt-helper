# Service capacity headroom review

## Purpose
Estimate service headroom and identify capacity risks before growth or peak events.

## Input checklist
- [ ] Traffic profiles
- [ ] latency and saturation metrics
- [ ] resource limits
- [ ] dependency limits
- [ ] load tests
- [ ] growth assumptions.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence, distinguish facts from hypotheses, and state limitations. Compare observed peaks and load-test results against explicit capacity limits. Inspect CPU, memory, connection pools, queues, storage, and downstream bottlenecks. Explain uncertainty in extrapolations and propose staged load tests. Prioritize recommendations by impact, confidence, and reversibility.

## Required output
- Headroom summary
- Bottleneck hypotheses
- Assumptions
- Test scenarios
- Scaling options
- Alerts and decision thresholds.

## Guardrails
- Do not extrapolate beyond evidence without labeling assumptions or recommend load tests that could harm production.
- Include verification criteria and note unknowns.
- Do not imply a test or measurement has been performed unless results are supplied.
