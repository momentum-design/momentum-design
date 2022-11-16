---
package: @momentum-design/telemetry
---

# @momentum-design/telemetry
## Overview

This component package was generated with a script, please report any issues.

## Anonymity
There is absolutely no PII telemetry sent. We track only aggregate data, and send nothing about your project. All of our data is sent using anonymous UUIDs. You can turn off telemetry by setting ```MOMENTUM_TELEMETRY_LEVEL='silent'``` as an environment variable.

## Platforms

### Amplitude

Recorded usage metrics are sent to amplitude.

[Momentum Design Space](https://analytics.eu.amplitude.com/cisco-cross-project/space/e-2a4u7ne/all)

Prerequisites:
1. ```MOMENTUM_METRICS_API_KEY``` must be set as an environment variable
2. ```MOMENTUM_TELEMETRY_LEVEL``` cannot be set to the value 'silent'

How to use telemetry in your packages
```code
import { Logger, generateMetadata, RecordEventProperties, RecordContextPrefix, RecordBusinessPrefix, RecordSourcePrefix, RecordEventName } from '@momentum-design/telemetry';

const logger = Logger.child(generateMetadata('<packageName>', path.basename(__filename)));
...
logger.record({
  eventInput: `${RecordSourcePrefix}_${RecordBusinessPrefix}_${PACKAGE}_${RecordContextPrefix}_${RecordEventName}`,
  eventProperties: {
    [RecordEventProperties.<Key>]: <value>
    [RecordEventProperties.<Key>]: <value>
  },
});
```

## Contributing

See [our contributing guide](./CONTRIBUTING.md)


### Logging

Logs are sent to console via winston, and print in the following format:
```code
<level>|@momentum-design/<package>+<file>@<timestamp>:<ms>->"<message>";
```

How to use logs in your packages
```code
import { Logger, generateMetadata } from '@momentum-design/telemetry';

const logger = Logger.child(generateMetadata('<packageName>', path.basename(__filename)));
...
logger.info('<message>');
```

Logs are purely used for relaying information to the user and for debugging. No logs will be recorded or stored.

### npm

[Tokens](https://www.npmjs.com/package/@momentum-design/tokens)

The metrics we pay attention to are
1. Weekly Downloads
2. Dependents (tab)

### github

The metrics we pay attention to are
1. [Pushes to the main branch](https://github.com/momentum-design/momentum-design/commits/main)
2. [Pushes to the design token branch from designers](https://github.com/momentum-design/momentum-design/tree/design-token-updates)
