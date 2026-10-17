# API Documentation Prompt Examples

## Document an endpoint
"Draft documentation for [HTTP method] [endpoint]. Include purpose, authentication, parameters, request schema, response schema, status codes, errors, examples, and relevant limits. Use only the supplied specification; flag missing details rather than inventing behavior. Specification: [paste]."

## Explain an error response
"Explain this API error for a developer integrating the service. Describe likely meaning, safe troubleshooting steps, and what information is needed to diagnose it. Do not suggest exposing secrets or logging sensitive tokens. Error: [paste]."

## Review docs for completeness
"Check these API docs for unclear terms, missing examples, inconsistent field names, undocumented errors, and assumptions. Return a prioritized list with suggested edits and questions for the API owner. Docs: [paste]."