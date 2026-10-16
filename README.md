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
