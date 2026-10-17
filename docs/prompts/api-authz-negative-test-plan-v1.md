# API authorization negative-test plan

## Purpose
Build tests that verify users cannot access resources or actions beyond their permissions.

## Input checklist
- [ ] API routes
- [ ] role and ownership rules
- [ ] auth mechanism
- [ ] resource relationships
- [ ] admin paths
- [ ] expected denial behavior.

## Prompt
> Act as a careful senior practitioner. Work from the provided evidence and document assumptions explicitly. Enumerate role-resource-action combinations, test horizontal and vertical privilege boundaries, include guessed identifiers, tenant boundaries, and state-changing methods. Specify expected denials and audit behavior. Identify the evidence needed to validate each conclusion and prioritize high-impact gaps.

## Required output
- Authorization test matrix
- Test fixtures
- Negative cases
- Expected responses
- Coverage gaps
- CI recommendations.

## Guardrails
- Use only authorized test environments and synthetic accounts; never probe unrelated systems.
- Do not claim controls are effective without test evidence.
- Make proposed steps specific, testable, and appropriately scoped.
