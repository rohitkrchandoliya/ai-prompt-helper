# Search indexing review

## Purpose
Review search indexing design for freshness, correctness, and operational stability.

## Input checklist
- [ ] Indexing pipeline
- [ ] source systems
- [ ] update frequency
- [ ] deletion semantics
- [ ] ranking needs
- [ ] failure logs.

## Prompt
> Act as a careful senior practitioner. Analyze only the provided context, label assumptions, and make recommendations traceable to evidence. Trace document creation, updates, deletions, retries, and reindexing. Check duplicate processing, stale documents, partial failures, schema changes, and reconciliation. Propose measurable freshness and correctness checks. Identify what should be validated before action.

## Required output
- Pipeline map
- Failure modes
- Freshness objectives
- Reconciliation plan
- Test cases
- Alerts.

## Guardrails
- Do not claim index freshness or completeness without measurements.
- Include validation steps and clearly named unknowns.
- Do not overstate confidence or imply a control has been tested when it has not.
