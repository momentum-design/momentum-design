# @momentum-design/token-builder - Contribution Guide

This document serves as a guide to assist potential contributors in creating valid changes to this package. All changes must align with our [project contribution guide](../../../CONTRIBUTING.md) in order to be accepted as valid changes to this package.

## Requirements

Requirements for contribution vary slightly from the requirements for consumption:

* **Node** `v18`
* **NPM** `v8`
* **Yarn** `v3`

## Project Structure

Below is an example:

```bash
./dist/ # all distributable files.
./src/ # all pre-distributable files.
  ./common/ # Shared constants, types, and fixtures for this project.
  ./models/ # Class Models and all their respective resources.
  ./index.ts # Entry point for this module.
  ./main.ts # Entry point for this CLI interface.
```

## Tooling

The following tools are used within this project:

* [**ESLint**](https://eslint.org/) - Validating code style and static analysis.
* [**Jest**](https://jestjs.io/) - Unit testing.
* [**rimraf**](https://github.com/isaacs/rimraf#readme) - Cleaning artifacts.
* [**TypeScript**](https://www.typescriptlang.org/) - Transpiling ESM TypeScript and static analysis.

## Dependencies

* [**Styledictionary**](https://amzn.github.io/style-dictionary/#/) - Transpiling [Figma Tokens](https://www.figmatokens.com/) into distributable tokens.
* [**yargs**](http://yargs.js.org/) - Interpretation of command line arguements through CLI consumption.
