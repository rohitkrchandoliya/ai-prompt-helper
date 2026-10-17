# backup policy review

## Purpose
Assess whether backup practices align with recovery objectives and data risk.

## Inputs to provide
- Data criticality
- backup schedules
- retention rules
- restore tests
- RPO/RTO targets

## Prompt
Produce an actionable review grounded in the supplied context. Be careful about uncertainty and operational consequences.

1. Compare backup coverage and frequency to recovery objectives, inspect retention and isolation, assess restore test evidence, and identify ownership gaps.
2. Cite the input evidence behind important findings.
3. Separate verified gaps from recommendations and questions.
4. Prioritize next actions and include a practical verification method.

## Required output
- Coverage matrix
- recovery gaps
- retention concerns
- restore test plan
- owners
- prioritized actions.

## Guardrails
Do not claim recoverability without restore evidence or assume backups are isolated from compromise.
- Keep sensitive details minimized and preserve the distinction between fact and inference.
