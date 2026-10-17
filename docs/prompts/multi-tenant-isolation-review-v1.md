# Multi-tenant isolation review

## Purpose
Assess whether tenant boundaries hold across data, APIs, caches, and background jobs.

## Input checklist
- [ ] Tenant model
- [ ] auth flow
- [ ] data access paths
- [ ] cache keys
- [ ] queues
- [ ] storage
- [ ] test evidence.

## Prompt
> Act as a careful senior practitioner. Analyze only the provided context, label assumptions, and make recommendations traceable to evidence. Trace tenant identity from authentication to every read/write and asynchronous task. Check missing tenant filters, cross-tenant cache collisions, object-level authorization, exports, logs, and admin paths. Suggest negative tests. Identify what should be validated before action.

## Required output
- Trust-boundary map
- Risk findings
- Cross-tenant test matrix
- Remediation priorities
- Verification plan.

## Guardrails
- Do not use real tenant data in test examples. Treat isolation failures as high impact until scoped.
- Include validation steps and clearly named unknowns.
- Do not overstate confidence or imply a control has been tested when it has not.
