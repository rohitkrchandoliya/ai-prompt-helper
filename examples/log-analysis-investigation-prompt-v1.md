# log analysis investigation Prompt Template

Analyze the provided sanitized logs for patterns relevant to the stated question. Normalize timestamps where possible, cluster repeated errors, correlate events only when evidence supports it, note sampling gaps, and propose next diagnostic queries. Redact secrets and personal data. Output observations, hypotheses with confidence, counter-evidence, and next checks without asserting unsupported root causes.

## Reusable instruction

Use only the context provided. Ask clarifying questions when missing information changes the recommendation; otherwise state assumptions. Present findings in a structured format with priorities, rationale, risks, and actionable next steps. Mark any claim that requires external verification.
