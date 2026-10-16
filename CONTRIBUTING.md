# Contributing to AI Prompt Helper

Thanks for helping improve AI Prompt Helper. Contributions of all sizes are welcome, including bug fixes, documentation improvements, accessibility fixes, and tests.

## Before you start

1. Read the README and check existing issues and pull requests.
2. For large changes, open an issue or discussion first so the scope can be agreed on.
3. Keep changes focused. Avoid mixing unrelated refactors into one pull request.

## Local setup

- Install Node.js 18 or newer.
- Clone the repository and open its directory.
- Run the automated tests with:

```sh
npm test
```

The test suite uses Node.js's built-in `node:test` runner, so no third-party test framework is required.

## Making a change

1. Create a branch with a descriptive name, such as `fix/history-empty-state`.
2. Make the smallest change that solves the problem.
3. Add or update tests when behavior changes.
4. Run `npm test` before opening a pull request.
5. Update documentation if the user-facing behavior or setup instructions change.

## Pull request checklist

- [ ] The purpose and user impact are explained.
- [ ] Tests pass locally, or any limitation is clearly noted.
- [ ] Tests cover new behavior or the bug being fixed when practical.
- [ ] No API keys, credentials, personal data, or unrelated generated files are included.
- [ ] Documentation is updated when needed.

## Reporting security issues

Do not publish secrets or exploit details in a public issue. Contact the repository maintainer privately through an available GitHub contact method.
