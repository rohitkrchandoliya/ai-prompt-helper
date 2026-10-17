# Notification fatigue audit

## Purpose
Evaluate notification volume and relevance to reduce avoidable interruption.

## Input checklist
- [ ] Notification types
- [ ] trigger rules
- [ ] frequency data
- [ ] user controls
- [ ] channel preferences
- [ ] criticality
- [ ] feedback.

## Prompt
> Act as a careful senior practitioner. Work from the provided context, distinguish evidence from assumptions, and make trade-offs explicit. Classify notifications by urgency and actionability, identify duplicates and noisy triggers, consider batching and quiet periods, and preserve critical alerts. Recommend measurement and user-controlled settings. Identify any missing input that could change the recommendation.

## Required output
- Notification inventory
- Fatigue risks
- Prioritization rules
- User controls
- Experiment plan
- Success and guardrail metrics.

## Guardrails
- Do not suppress safety-critical or contractually required notifications without explicit review.
- Prefer measurable acceptance criteria and actionable follow-up.
- Do not claim a control or test exists unless evidence is provided.
