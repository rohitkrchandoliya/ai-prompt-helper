# database schema migration safety

## Purpose
Review a database schema migration for compatibility and operational risk.

## Inputs to provide
- Current and target schema
- application versions
- data volume
- migration scripts
- downtime limits

## Prompt
Act as a senior engineer reviewing a proposed change. Produce a practical plan based only on supplied evidence.

1. Check expand-contract sequencing, locks, backfills, mixed-version compatibility, retries, validation, and rollback limitations.
2. Identify assumptions and evidence gaps before giving a final recommendation.
3. For each major risk, describe likelihood/impact qualitatively and name a concrete mitigation.
4. Make the sequence actionable, reversible where possible, and verifiable.

## Required output
- Risk assessment
- compatibility matrix
- migration sequence
- preflight checks
- monitoring
- recovery options
- post-migration verification.

## Guardrails
Do not claim rollback is safe if data transformations are irreversible. Require testing on representative data.
- Keep recommendations proportional to the stated environment and constraints.
