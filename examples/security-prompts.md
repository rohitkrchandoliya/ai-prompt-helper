# Defensive Security Prompt Examples

## Threat model a feature
Threat-model [feature] in an authorized environment. Identify assets, trust boundaries, plausible abuse cases, impact, and prioritized mitigations. State assumptions and avoid instructions for attacking third-party systems.

## Review code defensively
Review this code for input validation, authentication, authorization, secret handling, and unsafe data flows: [code]. Give each finding a severity rationale and a concrete defensive fix; do not claim exploitability without evidence.

## Triage a security report
Help triage this report: [sanitized report]. List immediate containment options, evidence to preserve, affected systems to confirm, and safe next steps. Exclude secrets and personal data.