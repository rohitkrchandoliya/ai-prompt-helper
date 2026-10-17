# lightweight threat modeling

## Purpose
Build a focused threat model for a feature or service.

## Inputs to provide
- Architecture sketch
- assets
- trust boundaries
- data flows
- actors
- deployment context

## Prompt
Work as an evidence-led practitioner. Use the provided material as the source of truth and make missing context explicit.

1. Identify assets, entry points, trust boundaries, attacker goals, and plausible abuse cases; map mitigations to specific risks and call out assumptions.
2. Tie each material conclusion to specific supplied evidence.
3. Distinguish observed facts, hypotheses, and recommendations.
4. Prioritize practical next steps and define how success will be verified.

## Required output
- System scope
- assets and trust boundaries
- prioritized threat table
- existing controls
- gaps
- mitigation owners
- validation questions.

## Guardrails
Keep scenarios realistic and defensive. Do not invent architecture details absent from the inputs.
- Ask concise clarifying questions when a missing input would change the recommendation.
