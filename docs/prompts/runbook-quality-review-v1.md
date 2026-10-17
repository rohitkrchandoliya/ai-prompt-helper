# operational runbook quality review

## Purpose
Review a runbook for safe, complete, executable incident response.

## Inputs to provide
- Runbook text
- system context
- permissions
- dependencies
- escalation paths
- known failure scenarios

## Prompt
Act as an experienced engineering and operations reviewer. Focus on clear evidence, safe execution, and measurable outcomes.

1. Check prerequisites, diagnostic commands, decision points, expected outputs, escalation, recovery verification, and safety warnings.
2. Link each recommendation to an observed gap or stated requirement.
3. Separate confirmed issues from risks that need validation.
4. Prioritize remediation and include a way to verify each important fix.

## Required output
- Critical gaps
- ambiguous steps
- missing prerequisites
- verification steps
- escalation updates
- prioritized revisions.

## Guardrails
Do not invent commands or advise destructive actions without explicit safeguards.
- Make unknowns explicit rather than filling them with guesses.
