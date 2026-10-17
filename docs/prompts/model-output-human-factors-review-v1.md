# AI output human-factors review

## Purpose
Assess whether AI-generated output encourages overreliance or causes avoidable user confusion.

## Input checklist
- [ ] Use case
- [ ] sample outputs
- [ ] user decisions
- [ ] uncertainty behavior
- [ ] interface presentation
- [ ] failure examples
- [ ] user research.

## Prompt
> Act as a careful senior practitioner. Use the provided evidence, identify uncertainty, and prioritize safe, testable recommendations. Inspect ambiguity, confidence cues, provenance, correction affordances, automation bias, and how users respond to errors. Recommend interface and workflow changes plus usability tests that measure calibrated reliance. Ask for missing context if it changes the conclusion materially.

## Required output
- Risk scenarios
- Output and UI issues
- Mitigation options
- Test protocol
- Success measures
- Residual limitations.

## Guardrails
- Do not imply the model is reliable merely because outputs sound confident; preserve user agency for consequential decisions.
- Clearly separate observed facts, hypotheses, and decisions requiring approval.
- Include verification steps and limitations.
