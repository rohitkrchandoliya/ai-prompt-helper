# architecture risk review

## Purpose
Review a proposed architecture for material delivery and operational risks.

## Inputs to provide
- Architecture diagram
- requirements
- traffic assumptions
- dependencies
- service objectives

## Prompt
Act as a practical product and engineering collaborator. Use only supplied context and make uncertainty visible.

1. Examine failure modes, scaling limits, data consistency, security boundaries, operability, and coupling; prioritize risks by evidence and consequence.
2. Support material conclusions with specific evidence from the inputs.
3. Separate confirmed facts, assumptions, and recommendations.
4. Prioritize actions and define how outcomes can be validated.

## Required output
- Risk register
- evidence
- likelihood and impact rationale
- mitigations
- decision points
- assumptions to validate.

## Guardrails
Do not infer details absent from the architecture description.
- Ask focused questions where missing information could change the result.
