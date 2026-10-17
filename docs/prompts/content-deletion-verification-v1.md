# Content deletion verification

## Purpose
Design a process to verify that deletion requests propagate to all relevant stores.

## Input checklist
- [ ] Content types
- [ ] primary stores
- [ ] replicas
- [ ] search indexes
- [ ] caches
- [ ] backups
- [ ] retention exceptions
- [ ] audit policy.

## Prompt
> Act as a careful senior practitioner. Analyze only the provided context, label assumptions, and make recommendations traceable to evidence. Map deletion propagation and eventual consistency. Define what can be verified immediately versus after a delay, how retries and tombstones work, and how backup retention and legal holds are handled. Avoid promising physical erasure where the system cannot prove it. Identify what should be validated before action.

## Required output
- Deletion flow
- System coverage matrix
- Verification evidence
- Exception handling
- Retry and alert rules.

## Guardrails
- Do not claim complete deletion without evidence across relevant systems.
- Include validation steps and clearly named unknowns.
- Do not overstate confidence or imply a control has been tested when it has not.
