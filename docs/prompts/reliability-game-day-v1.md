# reliability game day planning

## Purpose
Plan a controlled resilience exercise to validate failure handling.

## Inputs to provide
- Service dependencies
- reliability goals
- test environment
- failure scenarios
- stop conditions

## Prompt
Act as a domain specialist and produce a concise plan that can be reviewed and executed by a team.

1. Choose a bounded scenario, define hypotheses and blast-radius controls, identify observers and telemetry, and set abort criteria and recovery checks.
2. Ground findings and recommendations in supplied evidence.
3. Separate confirmed facts, assumptions, and unresolved questions.
4. Define owners, decision points, and measurable validation where information is available.

## Required output
- Exercise charter
- scenario
- safeguards
- timeline
- expected signals
- abort conditions
- recovery verification
- debrief actions.

## Guardrails
Prefer isolated environments and approved scopes. Do not propose uncontrolled production fault injection.
- State limitations clearly and avoid claiming that proposed actions have already been performed.
