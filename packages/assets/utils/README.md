# @momentum-design/utils/temp

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE) ![State](https://img.shields.io/badge/State-Stable-limegreen?style=flat-square) [![NPM Version](https://img.shields.io/npm/v/%40momentum-design%2Futils)](https://www.npmjs.com/package/@momentum-design/utils)

## Overview

This package distributes Javascript utilities, related to the use of the Momentum Design System.

## Consumption

Import a utility with:

```javascript
import {UTILITY_NAME} from '@momentum-design/utils'
```

Currently exported utilities:

- `calculateForegroundColor`: Determines the appropriate foreground color based on a given background color. This function returns the [Token](https://www.npmjs.com/package/@momentum-design/tokens) which should be used to color the Foreground color based on the given background.
