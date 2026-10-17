# Queue latency diagnosis

## Purpose
Diagnose queue delays and identify bottlenecks across producers, brokers, and consumers.

## Input checklist
- [ ] Queue depth and age
- [ ] throughput
- [ ] retry counts
- [ ] consumer concurrency
- [ ] payload sizes
- [ ] deployment timeline
- [ ] SLOs.

## Prompt
> Act as a careful senior practitioner. Base conclusions on supplied artifacts, separate facts from hypotheses, and identify material unknowns. Separate enqueue delay, queue wait, processing time, and retry amplification. Compare arrival and service rates, identify partitions or hot keys, and recommend tests that distinguish competing hypotheses. Provide a concise rationale for each high-priority recommendation.

## Required output
- Latency breakdown
- Likely causes with confidence
- Metrics to collect
- Safe experiments
- Mitigations
- Validation criteria.

## Guardrails
- Do not infer root cause from queue depth alone or propose unbounded concurrency as a default fix.
- Include measurable verification steps and note any assumptions.
- Prefer prioritized, specific actions over generic advice.
