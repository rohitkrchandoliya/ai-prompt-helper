# cloud cost optimization review

## Purpose
Find cloud cost reduction opportunities without undermining reliability or security.

## Inputs to provide
- Billing breakdown
- resource inventory
- utilization metrics
- service objectives
- traffic patterns

## Prompt
Act as a pragmatic reviewer. Base conclusions on the supplied evidence, and make uncertainty visible.

1. Separate waste from intentional headroom, examine idle and oversized resources, storage lifecycle, data transfer, and pricing commitments. Estimate savings only where inputs support it.
2. For each finding, cite the input or observation that supports it and explain why it matters.
3. Separate confirmed facts, assumptions, and recommendations.
4. Prioritize actions by impact, effort, reversibility, and accountable ownership.

## Required output
- Ranked opportunities
- current cost evidence
- estimated savings range and assumptions
- reliability/security trade-offs
- validation and rollback steps.

## Guardrails
Never invent savings figures or recommend removing redundancy without assessing service objectives.
- Do not claim external checks or actions were completed unless the evidence says so.
