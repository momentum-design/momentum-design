# @momentum-design/token-builder - Proposal

## Module Consumption

### Class Flow

```js
import { TokenBuilder } from '@momentum-design/token-builder';
import config from './path/to/config.json';

const builder = new TokenBuilder({
  config: config || 'path/to/config/file';
  input: 'path/to/input/files',
  output: 'path/to/output/files',
});

builder.build();
```

### Functional Flow

```js
import { TokenBuilder } from '@momentum-design/token-builder';
import config from './path/to/config.json';

TokenBuilder.build({
  config: config || 'path/to/config/file';
  input: 'path/to/input/files',
  output: 'path/to/output/files',
});
```

### CLI Flow

```bash
npx @momentum-design/token-builder --config "path/to/config" --input "path/to/input/files" --output "path/to/output"
```

## Configuration File Definition

### Simple

**TODO**

```json
{
  "files": [
    {
      "destination": "{file-path/file-name}",
      "filters": {
        "categories": ["{category}"],
        "items": ["{item}"],
        "types": ["{type}"]
      },
      "targets": ["{absolute-file-definition}", "{glob-file-definition}"]
    }
  ],
  "formats": ["{format}"],
  "prefix": "{prefix}"
}
```

## Token File Definition

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

## Formats to Support

* `CSS_VARIABLES`
* `SCSS_VARIABLES`
* `WEB_JSON`
