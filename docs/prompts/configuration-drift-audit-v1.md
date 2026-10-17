# Configuration drift audit

## Purpose
Find risky differences between declared and deployed configuration.

## Input checklist
- [ ] Desired configuration
- [ ] environment snapshots
- [ ] policy baseline
- [ ] deployment process
- [ ] exceptions
- [ ] owners.

## Prompt
> Act as a careful senior practitioner. Use only supplied evidence, state constraints, and separate observations from assumptions. Compare equivalent settings, separate intentional differences from drift, assess security and reliability impact, and recommend detection, approval, remediation, and exception expiry. Prioritize reversible changes. Ask focused questions if missing information changes the recommendation.

## Required output
- Drift inventory
- Risk ranking
- Approved exceptions
- Remediation plan
- Continuous checks.

## Guardrails
- Do not assume environments should be identical where separation is intentional. Never expose credentials.
- Include evidence and confidence for material findings.
- Prefer specific, testable recommendations over generic advice.
