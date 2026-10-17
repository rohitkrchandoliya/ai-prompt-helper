# Data Cleaning Plan Prompt Examples

Use these prompts to plan transparent, reproducible data-cleaning work.

## Audit a dataset
"Given this dataset schema and sample, propose a data-quality audit covering missing values, duplicates, inconsistent formats, invalid ranges, outliers, and conflicting categories. For each check, explain the rationale and how to report findings. Schema/sample: [paste]."

## Recommend transformations
"Create a conservative cleaning plan for [dataset purpose]. For every proposed transformation, state the rule, reason, risk of changing meaning, and how to preserve the original values. Flag decisions that require domain-owner approval."

## Document the process
"Draft a reproducible data-cleaning log template with fields for issue, detection method, affected rows, transformation, rationale, reviewer, and validation result. Do not assume any cleaning step has already been performed."