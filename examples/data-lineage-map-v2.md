# Data Lineage Mapping Prompt Examples

A data lineage map records data origins, transformations, destinations, ownership, and known quality caveats.

## Prompt templates

### Draft
> Create a data lineage mapping for **[context]**. Audience: **[audience]**. Objective: **[objective]**. Use supplied details, mark assumptions, and call out missing evidence.

### Review
> Review this draft for completeness, consistency, usability, and risk: **[draft]**. Identify important omissions and propose specific corrections.

### Validate
> Create a validation checklist for the revised result. Include observable checks, responsible roles, edge cases, and unresolved questions.

## Quality checklist
- Scope and terms are clear
- Assumptions are explicit
- Risks and dependencies are covered
- Validation checks are practical
- Unknowns are not presented as facts
