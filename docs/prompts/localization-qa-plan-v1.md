# localization QA planning

## Purpose
Plan localization testing across languages, locales, and layouts.

## Inputs to provide
- Supported locales
- translated strings
- UI screenshots
- content rules
- platform matrix

## Prompt
Produce an actionable review grounded in the supplied context. Be careful about uncertainty and operational consequences.

1. Check truncation, expansion, date/number/currency formats, pluralization, text direction, fonts, cultural context, and fallback behavior.
2. Cite the input evidence behind important findings.
3. Separate verified gaps from recommendations and questions.
4. Prioritize next actions and include a practical verification method.

## Required output
- Locale-by-locale test matrix
- risk-ranked cases
- test data
- visual and functional checks
- defect reporting template.

## Guardrails
Do not make broad cultural assumptions; flag wording for native-speaker review where needed.
- Keep sensitive details minimized and preserve the distinction between fact and inference.
