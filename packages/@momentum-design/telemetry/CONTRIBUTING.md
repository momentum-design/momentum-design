# @momentum-design/telemetry - Contribution Guide

This document serves as a guide to assist potential contributors in creating valid changes to this package. All changes must align with our [project contribution guide](../../../CONTRIBUTING.md) in order to be accepted as valid changes to this package.

## Requirements

Requirements for contribution vary slightly from the requirements for consumption:

* **Node** `v18`
* **NPM** `v8`
* **Yarn** `v3`

## Tooling

The following tools are used within this project:

* [**ESLint**](https://eslint.org/) - Validating code style and static analysis.
* [**rimraf**](https://github.com/isaacs/rimraf#readme) - Cleaning artifacts.
* [**TypeScript**](https://www.typescriptlang.org/) - Transpiling ESM TypeScript and static analysis.

## Dependencies

* [**yargs**](http://yargs.js.org/) - Interpretation of command line arguements through CLI consumption.
* [**Amplitude**](https://amplitude.com/) - Metrics
* [**winston**](https://github.com/winstonjs/winston) - Logging interface

## How to

### How to add a new typed metric
1. See ./common/types.ts
2. Add an event key or reuse an existing one for the `RecordEventName`, `RecordBusinessPrefix`, `RecordSourcePrefix`, `RecordContextPrefix`
3. Add event properties to the `RecordEventProperties` enum
4. Add event property mappings to the `MappedRecordEventProperties` type

