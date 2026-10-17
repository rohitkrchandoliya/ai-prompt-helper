# access control matrix review

## Purpose
Review role and permission assignments against least-privilege needs.

## Inputs to provide
- Roles
- permissions
- resources
- business responsibilities
- exception process

## Prompt
Produce an actionable review grounded in the supplied context. Be careful about uncertainty and operational consequences.

1. Identify excessive permissions, conflicting duties, orphaned roles, privilege escalation paths, and missing review evidence.
2. Cite the input evidence behind important findings.
3. Separate verified gaps from recommendations and questions.
4. Prioritize next actions and include a practical verification method.

## Required output
- Role-permission matrix
- excessive access findings
- justified exceptions
- remediation priorities
- validation and recertification plan.

## Guardrails
Do not recommend changes that could lock out critical operations without a controlled validation and recovery path.
- Keep sensitive details minimized and preserve the distinction between fact and inference.
