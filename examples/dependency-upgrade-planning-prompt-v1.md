# dependency upgrade planning Prompt Template

Create a dependency upgrade plan using the package manifests, current versions, target versions, runtime constraints, and known advisories. Prioritize security and compatibility, call out breaking changes that need verification, propose small upgrade batches, tests, lockfile handling, and rollback steps. Never claim an advisory or compatibility fact unless supported by provided evidence or a cited source.

## Reusable instruction

Use only the context provided. Ask clarifying questions when missing information changes the recommendation; otherwise state assumptions. Present findings in a structured format with priorities, rationale, risks, and actionable next steps. Mark any claim that requires external verification.
