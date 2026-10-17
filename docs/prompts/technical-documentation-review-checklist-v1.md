# Technical documentation review checklist

## Purpose
Review technical documentation for accuracy, completeness, and maintainability.

## Input checklist
- [ ] Document and intended audience
- [ ] Related implementation or authoritative reference
- [ ] Setup, usage, and troubleshooting workflows
- [ ] Version and ownership information
- [ ] Known user questions or support issues

## Prompt
> Act as a technical editor and subject-matter reviewer. Compare each factual claim with the supplied authoritative references. Check prerequisites, examples, terminology, version applicability, links, expected results, and failure recovery. Identify ambiguous steps and propose edits that a reader can verify independently.

## Required output
- Findings ranked by user impact
- Proposed edits with rationale
- Claims needing subject-matter confirmation
- Broken or missing workflow steps
- Example validation checklist
- Suggested owner and review cadence fields

## Guardrails
- Do not invent product behavior, commands, or configuration values.
- Mark unverified claims rather than presenting them as facts.
- Preserve essential warnings and security guidance.
