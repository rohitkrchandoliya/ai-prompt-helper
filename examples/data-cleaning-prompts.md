# Data Cleaning Prompt Examples

Reusable prompts for preparing datasets responsibly. Replace bracketed text with your context.

## 1. Profile a dataset
> Review this dataset description: [columns, types, sample rows]. Identify likely quality issues, missingness, inconsistent formats, duplicates, and outliers. Distinguish observed facts from hypotheses and suggest checks before changing data.

## 2. Plan a cleaning workflow
> Propose a reproducible cleaning workflow for [dataset and goal]. For each step, state the rule, rationale, possible information loss, and validation check. Do not silently drop records or invent values.

## 3. Validate transformed data
> Given these transformation rules [rules] and summary results [results], design checks for row counts, uniqueness, ranges, referential integrity, and before/after differences. Flag assumptions that need confirmation.
