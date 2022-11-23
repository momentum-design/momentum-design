# Get Started

We publish a package named  `momentum-abstract`. It's a package contains the min unit of Momentum Design.
This package is mainly used to generated theme files for all kinds of project.
## Install

`npm i momentum-abstract`

## Usage

`const core = require('momentum-abstract/color/core.json')`;

# Tokens

## Color

### core color tokens
@`./color/core.json`

### theme color tokens
@`./color/theme.json`

### addition color tokens
@`./color/additional.json`

## Icon

@`./icon`

### nameing rule

`Icon name = $component-set-name_$component-name`

All icons comes from Figma componentSet's components.

1. use ‘_’ to connect componentSet name and component name.

2. use ‘-’ to split the words inside componentSet or and component name.

3. component name comes from its variants. We have a logic to generate the component name.

# Version

The version number will be `major.minor.patch`.

### patch

`momentum-abstract`  will publish a new patch version(patch+1), if there ar.e some small updates. A script runs on 1:01 UTC and 17:01 UTC everyday.
        
### minor

If there are some new feature (new token type), a new minor version will be published. The version number will be updated in a PR.

### major

If Momentum published a new year version, a major minor version will be published. The version number will be updated in a PR.


