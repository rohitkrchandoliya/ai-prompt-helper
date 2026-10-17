# Incident action effectiveness review

## Purpose
Determine whether post-incident actions reduced the targeted risk.

## Input checklist
- [ ] Incident record
- [ ] action items
- [ ] due dates
- [ ] owner updates
- [ ] baseline metrics
- [ ] recurrence data
- [ ] verification evidence.

## Prompt
> Act as a careful senior practitioner. Ground conclusions in the supplied evidence, label assumptions, and explain uncertainty. Map each action to its intended failure mode, inspect completion evidence, compare relevant metrics before and after, and distinguish implementation from effectiveness. Reopen actions where the risk remains or evidence is insufficient. Recommend only actions that can be checked against explicit acceptance criteria.

## Required output
- Action effectiveness table
- Evidence gaps
- Residual risks
- Follow-up experiments
- Revised ownership and due dates where confirmed.

## Guardrails
- Do not equate a ticket marked complete with a demonstrated reduction in risk.
- Keep facts, hypotheses, and decisions clearly separated.
- Include a practical verification method for every high-priority recommendation.
