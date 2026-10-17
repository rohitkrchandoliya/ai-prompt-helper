# Customer identity merge review

## Purpose
Review duplicate customer identity resolution for correctness and reversibility.

## Input checklist
- [ ] Identity matching rules
- [ ] data sources
- [ ] confidence thresholds
- [ ] merge history
- [ ] false-merge examples
- [ ] unmerge process
- [ ] privacy rules.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence, identify uncertainty, and prioritize safe, testable recommendations. Assess deterministic and probabilistic match signals, false-positive and false-negative risks, confidence thresholds, human review, audit trails, and unmerge recovery. Define test cases for near-matches and shared contact details. Ask for missing context if it changes the conclusion materially.

## Required output
- Matching-rule review
- Risk matrix
- Threshold validation plan
- Review workflow
- Audit and unmerge requirements.

## Guardrails
- Do not merge identities based solely on shared devices or ambiguous identifiers; minimize exposure of personal data.
- Clearly separate observed facts, hypotheses, and decisions requiring approval.
- Include verification steps and limitations.
