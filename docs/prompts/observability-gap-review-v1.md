# observability gap review

## Purpose
Assess whether telemetry can detect and diagnose important service failures.

## Inputs to provide
- Service objectives
- incident history
- logs
- metrics
- traces
- alert rules
- runbooks

## Prompt
Act as a senior engineer reviewing a proposed change. Produce a practical plan based only on supplied evidence.

1. Map failure modes to signals and alerts, assess actionable context and noise, and identify blind spots in detection and diagnosis.
2. Identify assumptions and evidence gaps before giving a final recommendation.
3. For each major risk, describe likelihood/impact qualitatively and name a concrete mitigation.
4. Make the sequence actionable, reversible where possible, and verifiable.

## Required output
- Failure-mode-to-signal matrix
- alert gaps
- noisy alerts
- recommended instrumentation
- runbook links needed
- validation plan.

## Guardrails
Do not suggest collecting secrets or unnecessary personal data in telemetry.
- Keep recommendations proportional to the stated environment and constraints.
