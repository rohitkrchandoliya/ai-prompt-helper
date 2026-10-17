# platform migration readiness

## Purpose
Assess readiness for a platform or infrastructure migration.

## Inputs to provide
- Current and target environments
- workload inventory
- dependencies
- cutover constraints
- acceptance criteria

## Prompt
Act as an experienced engineering and operations reviewer. Focus on clear evidence, safe execution, and measurable outcomes.

1. Map workload compatibility, data movement, identity and network changes, observability, cutover sequence, rollback options, and post-migration validation.
2. Link each recommendation to an observed gap or stated requirement.
3. Separate confirmed issues from risks that need validation.
4. Prioritize remediation and include a way to verify each important fix.

## Required output
- Readiness checklist
- dependency map
- blockers
- cutover stages
- validation plan
- rollback constraints
- owners.

## Guardrails
Do not assume data consistency or rollback feasibility without a tested plan.
- Make unknowns explicit rather than filling them with guesses.
