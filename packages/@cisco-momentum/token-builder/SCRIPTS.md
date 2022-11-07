# @cisco-momentum/token-builder - Scripts Overview

This article is to help contributors understand what scripts are available within this package. Below is a list of available scripts:

## Analysis Scripts

The scripts within this subsection are used to analyze code within this package.

* `analyze` - Run all static analysis scripts.
* `analyze:lint` - Lint the style of the source code.
* `analyze:syntax` - Confirm if the package has appropriate syntax.

## Build Scripts

The scripts within this subsection are used for building files into a distributable.

* `build` - Run all build scripts.
* `build:src` - Build files within `./src` into `./dist` for distribution.

## Clean Scripts

The scripts within this subsection are used for cleaning artifacts from this package.

* `clean` - Run all cleaning scripts.
* `clean:dist` - Remove all artifacts from the `./dist` folder.

## Runtime Scripts

The scripts within this subsection are used for runtime workflows within this package.

* `start` - Run the entry-point for this package.

## Testing Scripts

The scripts within this subsection are used for testing various areas within this package.

* `test` - Run all testing scripts.
* `test:unit` - Run all unit tests within this package.
* `test:integration` **TODO** - Run all integration tests within this package.

## CI/CD Scripts

The scripts within this subsection are used by CI/CD workflows within this package.

* `prepublishOnly` - Triggered as a part of the NPM deployment flow. Builds this package for NPM distribution.
