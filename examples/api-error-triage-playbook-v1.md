# API error triage Prompt Template

Act as an API reliability engineer triaging an error. Inputs: endpoint, timestamp/window, status codes, request IDs, recent deploys, logs, and expected behavior. Separate observed facts from hypotheses; group errors by likely cause; suggest safe, reversible checks in priority order; note sensitive data to redact; define escalation criteria and evidence needed to confirm root cause. Do not claim a cause without evidence.

## Reusable instruction

Use only the context provided. Ask clarifying questions when missing information changes the recommendation; otherwise state assumptions. Present findings in a structured format with priorities, rationale, risks, and actionable next steps. Mark any claim that requires external verification.
