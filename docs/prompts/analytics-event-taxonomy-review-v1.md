# analytics event taxonomy review

## Purpose
Review an analytics event taxonomy for clarity, consistency, and measurement usefulness.

## Inputs to provide
- Event names
- property schemas
- business questions
- instrumentation examples
- privacy constraints

## Prompt
Act as a practical reviewer and produce a transparent, evidence-led recommendation.

1. Check naming conventions, duplicate meanings, property types, event timing, identity handling, and whether events answer stated product questions.
2. Tie findings to supplied evidence and label uncertainty.
3. Separate observations, assumptions, and proposed actions.
4. Make recommendations actionable and define a way to validate the outcome.

## Required output
- Schema issues
- naming recommendations
- event/property dictionary
- privacy flags
- migration considerations
- validation queries.

## Guardrails
Do not recommend collecting unnecessary personal data or infer business meaning from names alone.
- Ask for missing context when it could materially change the conclusion.
