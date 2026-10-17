# Technical Debt Review Prompt Examples

## Inventory technical debt
"Review this supplied code or architecture summary and identify potential technical debt. For each item, describe evidence, likely impact, maintenance cost, risk, and what further inspection is needed. Distinguish observed issues from hypotheses. Context: [paste]."

## Prioritize remediation
"Rank these debt items using user impact, incident risk, change frequency, effort, and dependencies. Explain the scoring and uncertainty; do not treat rough estimates as measured facts. Items: [paste]."

## Plan a safe refactor
"Propose a staged refactoring plan for [component]. Include behavior-preserving checks, tests, rollback points, dependencies, and measurable completion criteria. Avoid recommending a rewrite unless the evidence supports it."