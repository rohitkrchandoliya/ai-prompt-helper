# release readiness assessment

## Purpose
Assess whether a release has sufficient evidence to ship safely.

## Inputs to provide
- Release scope
- acceptance criteria
- test results
- known issues
- rollback plan
- monitoring plan

## Prompt
Act as a pragmatic reviewer. Base conclusions on the supplied evidence, and make uncertainty visible.

1. Check requirement coverage, unresolved high-risk defects, migration compatibility, operational ownership, rollback feasibility, and post-release signals.
2. For each finding, cite the input or observation that supports it and explain why it matters.
3. Separate confirmed facts, assumptions, and recommendations.
4. Prioritize actions by impact, effort, reversibility, and accountable ownership.

## Required output
- Go/conditional-go/no-go recommendation
- evidence by criterion
- blockers
- accepted risks and approvers needed
- launch checklist.

## Guardrails
Do not convert missing evidence into a pass. State any release criteria that were not provided.
- Do not claim external checks or actions were completed unless the evidence says so.
