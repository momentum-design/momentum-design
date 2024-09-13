# @momentum-design/tokens

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE) ![State](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

## Overview

This package contains Momentum Design Tokens as JSON, distributed in the following formats:

* **css**
* **ios swift class**
* **json**
* **minimal json**
* **android xml**
* **scss**

At this time, the Momentum Design Engineering team is not taking external requests for additional formats.

## Installation

Installation within a NodeJS application using **yarn** or **npm** can be performed by executing the following commands relative to your workspace root.

```bash
# With yarn.
yarn add @momentum-design/tokens

# With npm.
npm i @momentum-design/tokens
```

If the distributables available in this application are to be consumed outside of a NodeJS application, please use use [unpkg](https://unpkg.com/) to acquire the package contents directly. All supported formats can be found by using the following routes:

```bash
https://unpkg.com/@momentum-design/tokens@0.0.32/dist/{format}/{...additional paths}
```

The following token distributables are available by providing the above-defined path with the following additional paths:

* **core color tokens** - `./core/complete.{extension}`
* **stable webex theme tokens** - `./theme/webex/{light|dark}-stable.{extesion}`
* **modern webex theme tokens** - `./theme/webex/{light|dark}-complete.{extension}`

## Usage

Run the `build` script to create the `dist` folder, which includes tokens in various formats, see [the "Overview" section](#overview) for the current list of output formats.

## Consumption

This package distributes transformed token assets for direct consumption within various formats and platforms. The way these are consumed can vary based on the format. Inspect the distributed contents to determine the best way to consume the artifacts based on your use case.

## Contributing

See [our contributing guide](./CONTRIBUTING.md)

## Scripts

See [our script documentation](./SCRIPTS.md)

test