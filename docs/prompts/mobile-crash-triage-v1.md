# Mobile crash triage

## Purpose
Prioritize mobile crash reports and organize reproducible investigation.

## Input checklist
- [ ] Crash traces
- [ ] app version
- [ ] OS/device matrix
- [ ] affected flows
- [ ] release timing
- [ ] frequency data
- [ ] recent changes.

## Prompt
> Act as a careful senior practitioner. Use supplied artifacts and measured evidence, distinguish hypotheses from confirmed facts, and prioritize by impact and confidence. Group crashes by signature, assess reach and task impact using available data, identify reproduction clues, and propose minimal diagnostic steps. Separate likely regression from correlation and include release containment criteria. Identify what must be verified before execution.

## Required output
- Clustered crash list
- Severity rationale
- Reproduction plan
- Hypotheses
- Telemetry gaps
- Fix verification.

## Guardrails
- Do not infer affected-user counts from incomplete telemetry or include personal data in public reports.
- State assumptions, missing evidence, and measurable acceptance criteria.
- Prefer reversible steps and controlled validation where practical.
