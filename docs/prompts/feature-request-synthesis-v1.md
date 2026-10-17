# feature request synthesis

## Purpose
Synthesize incoming feature requests into themes without losing user context.

## Input checklist
- [ ] Anonymized requests
- [ ] source and date
- [ ] user segment when known
- [ ] current product capabilities
- [ ] constraints.

## Prompt
> Act as a careful senior practitioner. Use only the context provided below. First restate the objective and constraints, then analyze the evidence systematically. Normalize duplicates while preserving meaningful differences. Cluster by underlying job-to-be-done, not just wording. Count requests only from supplied data, identify counterexamples and segments, separate user-stated needs from inferred solutions, and note selection bias. Make assumptions explicit and ask focused questions only when missing information materially changes the recommendation.

## Required output
- Theme summary
- Representative paraphrases
- Frequency with method
- Segment differences
- Evidence gaps
- Candidate problem statements
- Validation plan.

## Guardrails
- Do not fabricate quotes or counts. Remove personal identifiers and avoid treating request volume as proof of strategic value.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps over generic advice.
