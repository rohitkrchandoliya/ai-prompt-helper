# database data dictionary

## Purpose
Document database entities and fields for reliable shared understanding.

## Inputs to provide
- Schema definitions
- field descriptions
- constraints
- example values
- data owners

## Prompt
Work as a careful specialist. Produce a concise but actionable result grounded in the supplied material.

1. Describe entities, relationships, nullability, units, allowed values, provenance, and lifecycle; flag ambiguous names and undocumented assumptions.
2. Cite relevant input evidence for important observations.
3. Separate facts, assumptions, and suggestions.
4. Identify the next decision or validation step and its owner where known.

## Required output
- Table and field dictionary
- relationship notes
- constraints
- owner list
- ambiguity log
- review questions.

## Guardrails
Do not infer meanings or units from field names alone. Avoid reproducing sensitive example records.
- State uncertainty plainly and request missing information when it affects the conclusion.
