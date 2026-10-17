# Search index rebuild runbook

## Purpose
Plan a safe full or partial search index rebuild with measurable validation.

## Input checklist
- [ ] Index size
- [ ] source-of-truth store
- [ ] mapping versions
- [ ] write traffic
- [ ] alias strategy
- [ ] resource limits
- [ ] recovery constraints.

## Prompt
> Act as a careful senior practitioner. Use the supplied evidence, separate confirmed facts from hypotheses, and identify unknowns that materially affect the result. Define snapshot or checkpoint strategy, build isolation, incremental catch-up, validation samples, cutover, rollback, and cleanup. Include resource guardrails and behavior if the source changes during the rebuild. Prioritize recommendations by risk, confidence, and reversibility.

## Required output
- Stepwise runbook
- Preflight checks
- Progress metrics
- Cutover criteria
- Rollback steps
- Post-rebuild audit.

## Guardrails
- Do not switch production traffic before consistency and relevance checks pass.
- Include explicit validation criteria and evidence required for sign-off.
- Do not imply that a proposed control has been tested unless results are supplied.
