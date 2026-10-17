# flaky test investigation Prompt Template

Investigate the supplied intermittent test failures. Compare failure/pass logs, ordering, timing, shared state, network dependence, clock/randomness, concurrency, cleanup, and environment differences. Rank hypotheses with supporting and disconfirming evidence, propose deterministic reproduction steps, and recommend the smallest safe fix. Distinguish root cause from temporary quarantine.

## Reusable instruction

Use only the context provided. Ask clarifying questions when missing information changes the recommendation; otherwise state assumptions. Present findings in a structured format with priorities, rationale, risks, and actionable next steps. Mark any claim that requires external verification.
