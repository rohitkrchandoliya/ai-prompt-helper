# data quality monitoring plan

## Purpose
Define data quality checks and alerting for a data pipeline or dataset.

## Inputs to provide
- Data schema
- business rules
- freshness needs
- historical failures
- consumers

## Prompt
Produce an actionable review grounded in the supplied context. Be careful about uncertainty and operational consequences.

1. Identify completeness, validity, uniqueness, consistency, timeliness, and distribution checks; define thresholds only from known requirements or baseline evidence.
2. Cite the input evidence behind important findings.
3. Separate verified gaps from recommendations and questions.
4. Prioritize next actions and include a practical verification method.

## Required output
- Check catalogue
- rationale
- severity
- owner
- alert route
- false-positive considerations
- remediation and verification steps.

## Guardrails
Do not invent expected distributions or thresholds without baseline evidence.
- Keep sensitive details minimized and preserve the distinction between fact and inference.
