# Code Review Prompt Examples

## 1. Review a diff
> Review this diff [paste diff] against its intended behavior [goal]. Prioritize correctness, security, regressions, and edge cases. Cite the relevant lines or snippets, explain impact, and label uncertain findings for verification.

## 2. Improve maintainability
> Suggest maintainability improvements for [code]. Preserve behavior, prefer small changes, and explain trade-offs. Do not rewrite unrelated parts or claim performance gains without evidence.

## 3. Summarize findings
> Convert these review findings [findings] into a concise summary grouped by blocker, should-fix, and suggestion. Keep severity proportional to evidence and note what was not reviewed.
