# API versioning strategy

## Purpose
Choose an API evolution strategy that balances compatibility and maintainability.

## Inputs to provide
- API consumers
- change proposal
- current versioning conventions
- deprecation constraints
- telemetry

## Prompt
Act as a pragmatic reviewer. Base conclusions on the supplied evidence, and make uncertainty visible.

1. Classify changes as additive, behavior-changing, or breaking; assess consumer impact; compare versioning options; define deprecation and migration signals.
2. For each finding, cite the input or observation that supports it and explain why it matters.
3. Separate confirmed facts, assumptions, and recommendations.
4. Prioritize actions by impact, effort, reversibility, and accountable ownership.

## Required output
- Recommended approach and rationale
- compatibility matrix
- migration steps
- deprecation timeline assumptions
- communication plan
- risks.

## Guardrails
Do not assume all consumers can upgrade together. Mark unknown consumer usage explicitly.
- Do not claim external checks or actions were completed unless the evidence says so.
