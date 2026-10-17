# code-to-documentation drafting

## Purpose
Draft maintainable technical documentation grounded in source code and tests.

## Inputs to provide
- Source files
- public interfaces
- tests
- configuration examples
- intended audience

## Prompt
Act as a senior engineer reviewing a proposed change. Produce a practical plan based only on supplied evidence.

1. Extract observable behavior, prerequisites, configuration, errors, examples, and limitations; compare claims against tests and public interfaces.
2. Identify assumptions and evidence gaps before giving a final recommendation.
3. For each major risk, describe likelihood/impact qualitatively and name a concrete mitigation.
4. Make the sequence actionable, reversible where possible, and verifiable.

## Required output
- Proposed documentation
- source-to-claim evidence map
- examples
- caveats
- missing information
- review checklist.

## Guardrails
Do not invent supported options, outputs, guarantees, or performance claims. Mark behavior not verified by tests.
- Keep recommendations proportional to the stated environment and constraints.
