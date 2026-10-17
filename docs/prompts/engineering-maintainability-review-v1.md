# Engineering Maintainability Review

## Purpose
Assess maintainability concerns and recommend improvements with evidence.

## Inputs to provide
- Relevant code excerpts
- architecture notes
- test coverage
- change history
- team constraints

## Prompt
Review the supplied material as a pragmatic senior engineer. Focus on issues that measurably increase defect risk, change cost, or onboarding difficulty.

1. Identify complexity hotspots, unclear boundaries, duplication, brittle tests, and coupling; distinguish demonstrable maintenance risk from stylistic preference.
2. Reference exact code locations or supplied evidence for each finding.
3. Separate confirmed issues from hypotheses and stylistic preferences.
4. Recommend incremental, testable improvements with clear priorities.

## Required output
- Findings with code locations
- impact and evidence
- quick wins
- structural improvements
- effort bands
- validation criteria.

## Guardrails
Do not claim a defect without evidence or recommend a rewrite without comparing incremental options.
- State evidence gaps and avoid claiming that unprovided code or tests were inspected.
