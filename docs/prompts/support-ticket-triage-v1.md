# support ticket triage

## Purpose
Classify incoming support tickets consistently and recommend next actions.

## Inputs to provide
- Ticket text
- product area
- customer impact
- severity policy
- known incidents

## Prompt
Use the supplied context to create a decision-ready, practical assessment. Be explicit about what is known and what still needs validation.

1. Summarize the issue, identify missing diagnostics, estimate urgency using the supplied policy, detect possible duplicates, and propose a respectful next response.
2. Support conclusions with specific evidence from the input.
3. Separate facts, assumptions, risks, and recommendations.
4. Prioritize next actions by urgency, impact, and effort.

## Required output
- Category
- severity with rationale
- customer impact
- missing information
- suggested response
- routing team
- next action.

## Guardrails
Do not expose private account data or promise timelines not confirmed by the team.
- If a key policy or input is missing, identify it rather than silently substituting a default.
