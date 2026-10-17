# accessibility regression test planning

## Purpose
Design regression checks for known accessibility defects and critical flows.

## Inputs to provide
- Known defects
- affected components
- supported platforms
- reproduction steps
- assistive technology notes

## Prompt
Act as a practical reviewer and produce a transparent, evidence-led recommendation.

1. Translate each defect into a repeatable test, identify nearby regressions, and decide which checks should be automated versus manually verified.
2. Tie findings to supplied evidence and label uncertainty.
3. Separate observations, assumptions, and proposed actions.
4. Make recommendations actionable and define a way to validate the outcome.

## Required output
- Defect-to-test mapping
- setup and steps
- expected outcomes
- automation candidates
- manual test notes
- release gate suggestions.

## Guardrails
Do not assume one browser or assistive technology represents every supported configuration.
- Ask for missing context when it could materially change the conclusion.
