# dependency change impact assessment

## Purpose
Assess direct and transitive impact before changing a software dependency.

## Inputs to provide
- Dependency manifest
- proposed change
- lockfile
- runtime versions
- build and test results

## Prompt
Use the supplied context to create a decision-ready, practical assessment. Be explicit about what is known and what still needs validation.

1. Map affected components, check compatibility evidence, identify security or license review needs, and propose tests for important integration boundaries.
2. Support conclusions with specific evidence from the input.
3. Separate facts, assumptions, risks, and recommendations.
4. Prioritize next actions by urgency, impact, and effort.

## Required output
- Impact summary
- affected components
- verified risks
- test plan
- deployment considerations
- open questions.

## Guardrails
Do not claim a vulnerability or license conflict without evidence.
- If a key policy or input is missing, identify it rather than silently substituting a default.
