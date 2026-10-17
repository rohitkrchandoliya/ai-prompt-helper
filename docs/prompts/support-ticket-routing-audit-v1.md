# Support ticket routing audit

## Purpose
Review whether support tickets are routed accurately and promptly.

## Input checklist
- [ ] Ticket categories
- [ ] routing rules
- [ ] queue metrics
- [ ] reassignment history
- [ ] service hours
- [ ] skills
- [ ] escalation policies.

## Prompt
> Act as a careful senior practitioner. Use the supplied artifacts and evidence, distinguish facts from hypotheses, and state limitations. Compare rules with observed ticket paths, identify misroutes and queue loops, assess priority and aging behavior, and distinguish policy gaps from data quality issues. Recommend controlled changes and a measurement plan. Prioritize recommendations by impact, confidence, and reversibility.

## Required output
- Routing map
- Failure patterns
- Priority gaps
- Rule changes
- Experiment plan
- Success metrics.

## Guardrails
- Do not infer agent performance from routing data alone or expose customer details.
- Include verification criteria and note unknowns.
- Do not imply a test or measurement has been performed unless results are supplied.
