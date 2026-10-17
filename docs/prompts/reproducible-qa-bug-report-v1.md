# reproducible QA bug report

## Purpose
Convert a rough defect description into a clear reproducible bug report.

## Inputs to provide
- Observed behavior
- expected behavior
- environment
- reproduction attempts
- logs or screenshots

## Prompt
Act as a practical product and engineering collaborator. Use only supplied context and make uncertainty visible.

1. Extract repeatable steps, identify missing environment details, distinguish symptoms from suspected causes, and specify evidence needed to reproduce.
2. Support material conclusions with specific evidence from the inputs.
3. Separate confirmed facts, assumptions, and recommendations.
4. Prioritize actions and define how outcomes can be validated.

## Required output
- Title
- severity rationale
- environment
- preconditions
- steps
- expected and actual results
- evidence
- reproduction confidence.

## Guardrails
Do not fabricate steps, logs, or root cause. Mark unknown fields explicitly.
- Ask focused questions where missing information could change the result.
