# Code Review Checklist Prompt Examples

## Review a change
"Review this diff for correctness, edge cases, readability, security implications, performance concerns, accessibility where relevant, and test coverage. Prioritize actionable findings and reference the affected code. If context is missing, ask rather than assume. Diff: [paste]."

## Check test coverage
"Compare this change with the supplied tests. Identify important behaviors, boundary conditions, failure paths, and regressions that may be untested. Suggest focused tests without claiming the current suite was executed. Change and tests: [paste]."

## Write constructive feedback
"Turn these review findings into concise, respectful comments. For each, state the issue, why it matters, and a suggested direction. Separate blocking defects from optional style suggestions. Findings: [paste]."