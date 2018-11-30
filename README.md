# Quid UI

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This is the home of the front-end technologies that compose the awesome
products we build at Quid!

## Committing and publishing

This repository follows the [conventional commits][conventional-commits] convention,
in addition with the Lerna `publish` command.

This means that the package versions will automatically bump accordingly to the commit
messages that you write. Also, CHANGELOG files will get automatically updated.

If you edit a file in `packages/test` and commit the change with:

```bash
git commit -m 'fix: now it works'
```

When the deploy will occur, the `test` package version will get automatically bumped
by one patch version. Also, any package depending on `test` will automatically get the
new version (if matching the semver ranges defined) and will get a version bump as well.

This means the whole publishing process is completely automated and you don't have to worry
about manual version bumps anymore.

The allowed commit prefixes are:

- `chore` _(updating build tasks etc; no production code change)_
- `docs` _(changes to documentation)_
- `feat` _(new feature)_
- `fix` _(bug fix)_
- `perf` _(code performance improvements)_
- `refactor` _(refactoring production code)_
- `revert` _(git reverts)_
- `style` _(formatting, missing semi colons, etc; no code change)_
- `test` _(adding missing tests, refactoring tests; no production code change)_

## Running the playground

You can run our style guide playground by running `yarn start` on the root
of this repository.

[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0-beta.2/
