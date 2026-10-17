# API error taxonomy design

## Purpose
Design consistent API error categories and client-facing behavior.

## Inputs to provide
- API contracts
- existing error responses
- client needs
- security constraints
- retry behavior

## Prompt
Act as an experienced engineering and operations reviewer. Focus on clear evidence, safe execution, and measurable outcomes.

1. Separate validation, authentication, authorization, conflict, throttling, and server failures; align status codes and stable machine-readable codes; assess information leakage.
2. Link each recommendation to an observed gap or stated requirement.
3. Separate confirmed issues from risks that need validation.
4. Prioritize remediation and include a way to verify each important fix.

## Required output
- Error taxonomy
- response examples
- retry guidance
- compatibility notes
- logging requirements
- test cases.

## Guardrails
Do not expose stack traces, secrets, or internal details in public error responses.
- Make unknowns explicit rather than filling them with guesses.
