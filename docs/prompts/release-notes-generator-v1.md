# release notes generation

## Purpose
Turn verified changes into clear release notes for the intended audience.

## Input checklist
- [ ] Merged change summaries
- [ ] user-visible behavior
- [ ] migration requirements
- [ ] known issues
- [ ] supported versions
- [ ] audience and tone.

## Prompt
> Act as a careful senior practitioner. Use only the context provided below. First restate the objective and constraints, then analyze the evidence systematically. Group changes into features, improvements, fixes, and breaking changes. Translate implementation details into user impact, state prerequisites and migration steps, and exclude internal-only changes unless relevant. Flag missing evidence rather than infer outcomes. Make assumptions explicit and ask focused questions only when missing information materially changes the recommendation.

## Required output
- Release title
- Concise highlights
- Detailed changes
- Breaking changes and migration
- Known issues
- Internal reviewer checklist.

## Guardrails
- Only describe verified changes. Do not claim performance, security, or compatibility benefits without evidence.
- Distinguish facts, inferences, and recommendations.
- Prefer actionable, testable next steps over generic advice.
