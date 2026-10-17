# database migration review Prompt Template

Review the proposed database migration for correctness and operational risk. Assess schema compatibility, locks, data backfill, null/default behavior, indexes, transaction strategy, deployment ordering, dual-read/write needs, rollback feasibility, data validation, and monitoring. Return blockers, recommended changes, a staged rollout plan, and verification queries. Do not assume database engine behavior unless specified.

## Reusable instruction

Use only the context provided. Ask clarifying questions when missing information changes the recommendation; otherwise state assumptions. Present findings in a structured format with priorities, rationale, risks, and actionable next steps. Mark any claim that requires external verification.
