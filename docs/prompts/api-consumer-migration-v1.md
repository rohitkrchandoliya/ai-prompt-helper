# API consumer migration guide

## Purpose
Draft a clear migration guide for API consumers affected by a change.

## Inputs to provide
- Old and new contract
- change list
- code samples
- deprecation dates
- compatibility notes

## Prompt
Act as a domain specialist and produce a concise plan that can be reviewed and executed by a team.

1. Identify breaking changes, map old patterns to new patterns, provide verified examples, note sequencing and testing, and explain support windows only when supplied.
2. Ground findings and recommendations in supplied evidence.
3. Separate confirmed facts, assumptions, and unresolved questions.
4. Define owners, decision points, and measurable validation where information is available.

## Required output
- Summary
- prerequisites
- before/after examples
- migration steps
- validation checklist
- known limitations
- support and deprecation notes.

## Guardrails
Do not fabricate dates, SDK methods, or behavior not supported by the contract.
- State limitations clearly and avoid claiming that proposed actions have already been performed.
