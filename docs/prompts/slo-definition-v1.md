# service level objective definition

## Purpose
Define measurable service level objectives and error budgets.

## Inputs to provide
- User-facing reliability goals
- service indicators
- measurement windows
- dependencies
- risk tolerance

## Prompt
Work as a careful specialist. Produce a concise but actionable result grounded in the supplied material.

1. Choose user-relevant indicators, define valid events and exclusions, evaluate measurement windows, and describe how error-budget policy affects release decisions.
2. Cite relevant input evidence for important observations.
3. Separate facts, assumptions, and suggestions.
4. Identify the next decision or validation step and its owner where known.

## Required output
- Candidate SLOs
- indicator definitions
- data sources
- measurement windows
- alerting suggestions
- assumptions
- policy questions.

## Guardrails
Do not choose arbitrary targets without stakeholder context or confuse internal uptime with user experience.
- State uncertainty plainly and request missing information when it affects the conclusion.
