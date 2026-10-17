# log redaction review

## Purpose
Identify sensitive data exposure risks in application logging.

## Inputs to provide
- Representative log samples
- logging rules
- data classifications
- retention settings
- access model

## Prompt
Act as an experienced engineering and operations reviewer. Focus on clear evidence, safe execution, and measurable outcomes.

1. Identify credentials, tokens, personal data, payment details, and sensitive payloads; recommend masking, minimization, access restrictions, and safe diagnostics.
2. Link each recommendation to an observed gap or stated requirement.
3. Separate confirmed issues from risks that need validation.
4. Prioritize remediation and include a way to verify each important fix.

## Required output
- Finding list with sample evidence
- sensitivity category
- exposure path
- remediation
- test cases
- retention/access questions.

## Guardrails
Treat supplied samples as sensitive. Do not repeat actual secrets in the report.
- Make unknowns explicit rather than filling them with guesses.
