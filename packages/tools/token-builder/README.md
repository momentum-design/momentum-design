# @momentum-design/token-builder

[![license](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/design-token-updates/LICENSE)
![State](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

This package is used to build tokens generate via the [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) Figma plugin into consumable platform-specific tokens using [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

## Usage

### Requirements

This project has the following requirements for operation:

* **Node** `v18`
* **NPM** `v8`

### Installation

To install this project for usage, the following commands can be use to ammend it to an existing project:

```bash
# using npm
npm install --dev @momentum-design/token-builder

# using yarn
yarn add --dev @momentum-design/token-builder
```

Alternatively, this package can be installed globally:

```bash
# using npm (recommended)
npm install --global @momentum-design/token-builder
```

## Configuration

When utilizing the functionality of this project as either a JavaScript module or CLI script, a configuration file is necessary. Below is an example configuration file:

```json
{
  "files": [
    {
      "destination": "{file-path/file-name}",
      "filters": {
        "categories": ["{category-a}", "{category-b}"],
        "items": ["{item-a}", "{item-b}"],
        "types": ["{type-a}", "{type-b}"]
      },
      "targets": ["{absolute-file-definition}", "{glob-file-definition}"]
    }
  ],
  "formats": ["{format-a}", "{format-b}"],
  "prefix": "{prefix}",
  "outputReferences": true,
}
```

In order to provide a better understanding of each key and its relative value within the configuration file example provided above, we have defined each section in the list below:

* **files** `Array<ConfigFile>` - A list of file configuration objects, each resulting in a built token file. (See [the **ConfigFile** interface](https://github.com/momentum-design/momentum-design/blob/design-token-updates/packages/%40momentum-design/token-builder/src/common/types.ts))
  * **destination** `string` - The destination path and file name (without extension) for the built token file.
  * **filters** `Filters` - Inclusive CTI model filters to apply when generating the built token file. (See [the **Filters** interface](https://github.com/momentum-design/momentum-design/blob/design-token-updates/packages/%40momentum-design/token-builder/src/common/types.ts))
    * **categories** `Array<string>` - Categories within the CTI model to filter for. This is the first tier within the token object.
    * **items** `Array<string>` - Items within the CTI model to filter for. This is the third tier within the token object.
    * **types** `Array<string>` - Types within the CTI model to filter for. this is the second tier within the token object.
  * **targets** `Array<string>` - Absolute or glob pattern file selectors to use when retreiving source tokens from the target input directory.
* **formats** `Array<Format>` - Array of supported formats to build source tokens into. (See [the **Format** interface](https://github.com/momentum-design/momentum-design/blob/design-token-updates/packages/%40momentum-design/token-builder/src/common/types.ts))
* **prefix** `string` - Prefix to prepend to variable names within supporting formats.
* **outputReferences** `boolean` - If to output references when possible.
* **cssSelector** `string` - Text that overrides the root css selector.
* **showFileHeader** `boolean` - Whether or not to include a comment that has the build date (by default). Default: true.
* **scssThemeable** `boolean` - Whether or not to add the !default keywords to variables.
* **iosAccessControl** `string` - Level of [access](https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html) of the generated swift object. Default: 'public'.
* **iosImport** `string` - Modules to import. Can be a string or array of string. Default: 'UIKit'.
* **iosObjectType** `string` - The type of the object in the final file. Could be a class, enum, struct, etc. Default: 'class'.

Note that the **formats** key Array can only contain one or more of this tool's supported formats. These can be found as keys of `CONSTANTS.FORMATS` within [this file](https://github.com/momentum-design/momentum-design/blob/design-token-updates/packages/%40momentum-design/token-builder/src/common/constants.ts).

### Tokens

All tokens consumed as input within this project should be formatted in a way that [Style Dictionary](https://amzn.github.io/style-dictionary/#/) can consume. The standard format that we recommend using when building input tokens is as follows:

```json
{
  "{category}": {
    "{type}": {
      "{item}": {
        "{...any...}"
      }
    }
  }
}
```

To further assist users in the consumption of this project, we have provided a list of the above terms with descriptors below:

* **category** - Category of this token, e.g. `color`, `size`, `border-radius`, ...etc.
* **type** - Type of this token, e.g. `core`, `theme`, `component`, ...etc.
* **item** - Item within the above category and type, e.g. `orange`, `primary`, `button`, ...etc.

### CLI

This package can be consumed as a CLI application by using the `md-token-builder` command, along with the required arguments:

```bash
md-token-builder --config \"{config-path}\" --input \"{input-tokens-directory}\" --output \"{output-tokens-directory}\"
```

The above command requires `md-token-builder` to be installed globally with npm.

Alternatively, when this package is installed to a project locally, it can be ammended to the `package.json` `scripts` object for execution:

**package.json**:

```json
{
  /* ... */
  "scripts": {
    /* ... */
    "{script-name}": "md-token-builder --config \"{config-path}\" --input \"{input-tokens-directory}\" --output \"{output-tokens-directory}\""
  }
}
```

### Module

This package also supports module usage. See the below example:

```js
import { TokenBuilder } from '@momentum-design/token-builder';
import config from './path/to/config';

// Module builder configuration.
const builderConfig = {
  config: config || './path/to/config';
  input: './input/tokens/directory',
  output: './output/tokens/directory',
};

// As a class Object.
const builder = new TokenBuilder(builderConfig);
await builder.build();

// As a static method.
await TokenBuilder.build(builderConfig);
```

## Contributing

See [our contributing guide](./CONTRIBUTING.md)

## Scripts

See [our script documentation](./SCRIPTS.md)
