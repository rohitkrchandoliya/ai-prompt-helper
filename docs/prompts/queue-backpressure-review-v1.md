# Queue backpressure review

## Purpose
Evaluate queue behavior under overload and downstream slowdown.

## Input checklist
- [ ] Queue technology
- [ ] producers and consumers
- [ ] throughput
- [ ] message sizes
- [ ] retry policy
- [ ] capacity limits
- [ ] service objectives.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence only, identify assumptions, and explain trade-offs. Trace backlog growth, concurrency, rate limiting, retries, poison messages, ordering, and recovery after downstream outage. Identify feedback controls and overload shedding options; estimate only when measurements are available. Ask concise clarifying questions if critical inputs are missing.

## Required output
- Capacity assumptions
- Failure-mode table
- Control recommendations
- Alert thresholds
- Load-test plan
- Recovery criteria.

## Guardrails
- Do not invent throughput or promise lossless processing without evidence. Distinguish delivery semantics.
- Distinguish verified facts from estimates and hypotheses.
- Recommend practical validation steps and record unresolved questions.
