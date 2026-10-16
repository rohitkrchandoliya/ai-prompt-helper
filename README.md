# AI Prompt Helper

A beginner-friendly project that helps users turn simple ideas into clearer, more useful AI prompts.

## Project Goal

Make prompt writing easier for students, developers, creators, and everyday users.

## Features

- Simple prompt input form
- Prompt improvement suggestions
- Reusable prompt templates
- Copy improved prompts
- Search saved prompt history and see the total/matching prompt count
- Select a saved prompt to load it into the improved-prompt area
- Delete individual entries or clear saved prompt history
- Export and import prompt history as JSON
- Download the currently displayed prompt as a text file
- Beginner-friendly interface

## Prompt History Guide

Prompt History helps users revisit prompts they have previously generated.

### How to use Prompt History

1. Enter an idea and generate an improved prompt.
2. Use the Prompt History section to review previously saved prompts.
3. Select a saved prompt to load it into the improved-prompt area; then copy or download it as needed.
4. Use **Search saved prompts** to filter history by prompt text. The count shows matches and total saved prompts while searching.
5. Select **Clear search** to return to the full history.
6. Use **Delete this prompt** to remove one entry or **Clear History** to remove all saved history.


### Export and import history

- Select **Export history (.json)** to download your saved prompts as a JSON file.
- Select a previously exported prompt-history JSON file in **Import prompt history (.json)** to restore it.
- Import replaces the current history and keeps at most ten valid, non-empty prompts.
- If you want to keep the current history, export it before importing another file; import does not merge the two histories.
- Review the file before importing it. Imported content is displayed as text; do not import files from sources you do not trust.

### Manage individual prompts

- Use **Delete this prompt** to remove one saved entry without clearing the rest.
- Use **Clear History** only when you want to remove all saved prompt history; the app asks for confirmation.
- Use **Download prompt (.txt)** to save the currently displayed prompt separately.
- Use **Select prompt text** to highlight the displayed prompt for manual copying.

### Troubleshooting

**My saved prompts are missing**
- Check whether you are using the same browser and browser profile.
- Check whether the website's local storage or site data was cleared.
- Generate a prompt and check whether it appears in the history section.

**Will my history appear on another device?**
- Browser local storage is normally specific to that browser profile and device. It is not automatically synced across devices.

**What happens when I clear history?**
- The saved prompt history is removed using the application's clear-history feature.

### Privacy

Prompt history is stored in the browser's local storage. Avoid storing passwords, private information, or other sensitive data in prompts. Clearing browser site data may remove saved history.

## Team

- Rohit — project owner and development
- Karn — prompt design and feature collaboration
- Ajay — testing, documentation, and improvements

## How to Contribute

1. Pick a feature or improvement.
2. Discuss the change with the team.
3. Make and test the change.
4. Submit a pull request for review.

## Status

Features are being added incrementally. Check the application to see which features are currently available.


## Browser Compatibility and Limitations

- Prompt history requires browser JavaScript and local storage to be available.
- Private browsing modes or browser settings may restrict local storage.
- Clearing the browser's site data may delete saved prompts.
- Prompt history is stored separately in each browser profile and is not automatically shared across devices.
- If history does not appear, check that JavaScript is enabled and refresh the application.

## Run tests locally

The project includes automated tests for prompt generation and prompt-history behavior. You need Node.js 18 or newer.

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Run the test suite:

   ```bash
   npm test
   ```

The tests use Node.js's built-in test runner, so no additional test dependencies need to be installed. A failing test prints details in the terminal; fix the issue and run `npm test` again before submitting a pull request.

### Can I recover history after clearing it?

The app does not provide a server-side backup or an undo feature for cleared history. If you need to keep prompts, export your history to JSON before clearing it or changing browser data. Importing a backup replaces the currently saved history, so export the current version first if you want to keep it too.

### Why did importing a file change my history?

Import is a restore operation, not a merge operation. It replaces the saved list with valid imported prompts, limited to ten entries. Keep a separate exported backup when you need to preserve multiple lists.

### Keyboard shortcut

While the idea field is focused, press **Ctrl+Enter** on Windows/Linux or **Command+Enter** on macOS to generate a prompt without clicking the Generate button.

### Import file limits

Prompt-history JSON imports are limited to 1 MB. If an export is larger, open it in a text editor and keep only the prompts you want to restore, then save it as a smaller JSON file. The app keeps at most ten valid prompts in history.


### Where saved prompts are stored

Prompt history is stored in this browser's local storage on this device. It is not automatically synced to another browser or device. Clearing site data or using a different browser profile can remove or hide the saved history, so export a JSON backup if you need to keep it.


### Troubleshooting: history does not persist

If saved prompts disappear after closing the page, check whether the browser blocks site storage, runs in private browsing mode, or clears site data on exit. Export your prompt history before clearing browser data. If storage is unavailable, history may not persist between sessions.

### Before resetting your browser

If you plan to reset your browser, clear site data, or move to another device, export your prompt history JSON first and keep the file somewhere safe. The app stores history locally and cannot recover data after browser storage is deleted.

### Prompt history retention

The app keeps up to ten saved prompts. Saving another prompt moves it to the top, and duplicate prompt text is not stored as a second history entry. Export important prompts if you need a longer-term archive.

### Keyboard navigation

You can use Tab and Shift+Tab to move between the idea field, purpose selector, prompt actions, and history controls. Use Enter or Space to activate focused buttons. The prompt generation shortcut is Ctrl+Enter on Windows/Linux or Command+Enter on macOS while the idea field is focused.

## Manual smoke-test checklist

After changing the interface or prompt-history behavior, open the app in a browser and verify the main user flows:

- Generate a prompt from a short idea and confirm the selected purpose is reflected in the result.
- Try an empty idea and an idea at the 2,000-character limit.
- Copy, select, and download the generated prompt.
- Save several prompts, search for one, load it again, and delete an individual entry.
- Export history, then import the exported JSON and confirm the expected prompts appear.
- Import an invalid JSON file and confirm the page remains usable and displays a helpful message.
- Clear history and confirm the app asks for confirmation before removing saved entries.
- Reload the page and confirm saved history remains available in the same browser profile.

Automated tests (`npm test`) should still pass before submitting changes. Manual checks complement automated tests; they do not replace them.

### Supported import JSON format

The importer expects a JSON array. Each entry may be a prompt string or an object with a `prompt` string and an optional `createdAt` date string. For example:

```json
[
  { "prompt": "Explain photosynthesis to a beginner", "createdAt": "2026-01-15T10:30:00.000Z" },
  "Draft a friendly project update email"
]
```

Blank entries and duplicate prompt text are skipped. Imported prompts are trimmed, and at most ten valid prompts are retained. If no valid prompts remain, the import is rejected and the existing history is left unchanged.

### Prompt-history search keyboard support

- Type in **Search saved prompts** to filter the visible history as you go.
- Press **Escape** while the search field is focused to clear the query.
- Select **Clear search** to remove the filter with the mouse or keyboard.
- The saved-prompt count shows the number of matches and the total number of valid saved prompts while filtering.

### Recommended history backup workflow

1. Select **Export history (.json)** before importing another list or clearing history.
2. Store the downloaded JSON file somewhere you control, outside the browser's site data.
3. Before restoring, confirm the file is a prompt-history JSON export or follows the supported array format above.
4. Import the backup and review the resulting prompt count.
5. Keep more than one dated backup if you need to recover earlier versions; import replaces the current list rather than merging it.

The application stores history locally and cannot recover a file that was never exported.
