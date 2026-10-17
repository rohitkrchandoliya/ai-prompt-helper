# Manual Testing Checklist

Use this checklist after changes to the UI, prompt generation, or prompt history. Run `npm test` as well when applicable.

## Prompt workflow

- [ ] Submit a non-empty prompt and confirm an improved result appears.
- [ ] Try an empty prompt and confirm the app gives a helpful validation message.
- [ ] Change the purpose selector and confirm the selected purpose is respected.
- [ ] Copy a result and verify the clipboard receives the expected text when browser permissions allow it.

## History workflow

- [ ] Save a prompt and confirm it appears in history.
- [ ] Reload the page and confirm history persists in the same browser profile.
- [ ] Remove one history item and confirm other items remain.
- [ ] Export history and confirm a file is downloaded.
- [ ] Import a valid export and confirm entries are restored.
- [ ] Test invalid JSON and confirm the app reports the problem without crashing.
- [ ] Clear history only after confirming the intended confirmation flow.

## Accessibility and privacy

- [ ] Complete the main workflow using only the keyboard.
- [ ] Confirm visible focus is easy to locate.
- [ ] Check labels and status messages with browser accessibility tools when available.
- [ ] Verify prompts or exported data do not appear in unexpected locations.
- [ ] Use test content only; do not put real passwords or API keys into prompts.
