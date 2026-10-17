# Customer journey drop-off review

## Purpose
Analyze where users leave a journey and develop testable explanations.

## Input checklist
- [ ] Journey steps
- [ ] event definitions
- [ ] funnel data
- [ ] cohorts
- [ ] device and locale
- [ ] latency
- [ ] experiment history.

## Prompt
> Act as a careful senior practitioner. Work from the provided evidence and document assumptions explicitly. Validate event coverage and denominator consistency, segment the funnel, check instrumentation changes and time-window effects, and develop competing hypotheses. Recommend experiments that separate friction from intentional exits. Identify the evidence needed to validate each conclusion and prioritize high-impact gaps.

## Required output
- Funnel diagnosis
- Data-quality caveats
- Segment findings
- Hypotheses
- Experiment plan
- Success metrics.

## Guardrails
- Do not interpret every exit as a failure or infer individual intent from aggregate behavior.
- Do not claim controls are effective without test evidence.
- Make proposed steps specific, testable, and appropriately scoped.
