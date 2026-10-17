# Third-party SDK risk review

## Purpose
Evaluate risks and operational costs before adopting a third-party SDK.

## Input checklist
- [ ] SDK and version
- [ ] purpose
- [ ] data access
- [ ] permissions
- [ ] license
- [ ] maintenance history
- [ ] platform constraints.

## Prompt
> Act as a careful senior practitioner. Work only from supplied context, label uncertainty, and distinguish evidence from assumptions. Review data collection, permissions, dependency footprint, update cadence, transitive dependencies, failure behavior, lock-in, and removal cost. Separate verified facts from questions requiring vendor confirmation. Ask focused clarifying questions where a missing fact materially changes the answer.

## Required output
- Decision matrix
- Risk register
- Due-diligence questions
- Integration safeguards
- Monitoring
- Exit plan.

## Guardrails
- Do not assert vendor practices without evidence. Avoid sharing proprietary code or secrets with external services.
- Prioritize actionable, verifiable next steps.
- State limitations and unresolved decisions explicitly.
