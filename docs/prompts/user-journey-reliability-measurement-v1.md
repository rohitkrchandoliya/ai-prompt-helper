# User journey reliability measurement

## Purpose
Define reliability measurements around successful completion of key user journeys.

## Input checklist
- [ ] Journey steps
- [ ] event sources
- [ ] success criteria
- [ ] latency expectations
- [ ] partial failure semantics
- [ ] reporting windows.

## Prompt
> Act as a careful senior practitioner. Analyze supplied evidence, label assumptions, and make each recommendation verifiable. Define what counts as a started, successful, failed, and abandoned journey. Check retries, duplicate events, delayed events, partial success, and eligibility. Propose validation against known user-visible outcomes. Identify missing evidence that could materially change the result.

## Required output
- Metric definitions
- Event requirements
- Calculation examples
- Validation plan
- Exclusions
- Dashboard recommendations.

## Guardrails
- Do not label abandonment as service failure without evidence or hide partial failures inside aggregate success.
- State limitations and unresolved decisions explicitly.
- Prefer measurable checks and controlled validation over unsupported certainty.
