# @momentum-design/components

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE)
![State](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

## Overview

This package is WIP - there is no guarantee for consistency, stability till properly released.

## Steps to run this package

- Follow the steps mentioned in the [first time setup](https://github.com/momentum-design/momentum-design/blob/main/CONTRIBUTING.md#first-time-setup).
- Build all dependencies to run components package
    ```
    yarn workspace @momentum-design/telemetry build
    yarn workspace @momentum-design/token-builder build
    yarn workspace @momentum-design/tokens build
    yarn workspace @momentum-design/common build
    yarn workspace @momentum-design/builder build
    yarn workspace @momentum-design/fonts build
    yarn workspace @momentum-design/icons build
    ```
- Navigate to components package
    ```
    cd packages/@momentum-design/components
    ```
- Run yarn in the components package
    ```
    yarn
    ```
- Run this to start storybook and develop components
    ```
    yarn workspace @momentum-design/components dev
    ```

## Contributing

See [our contributing guide](./CONTRIBUTING.md)

## Scripts

See [our script documentation](./SCRIPTS.md)

## Testing

See [our testing documentation](./TESTING.md)
