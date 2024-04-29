import { CONSTANTS, Format } from '../../common';
import CONFIG_FILE_FIXTURE from '../../common/config-file.fixture';

import Platform from './platform';
import type { Config } from './types';

const FIXTURE_CONFIG: Config = {
  file: structuredClone(CONFIG_FILE_FIXTURE),
  format: Object.keys(CONSTANTS.FORMATS).pop() as Format,
  output: 'platform-output',
  prefix: 'platform-prefix',
};

class PlatformFixture extends Platform {
  public constructor(config: Config = FIXTURE_CONFIG) {
    super(config);
  }

  public static get FIXTURE_CONFIG(): typeof FIXTURE_CONFIG {
    return structuredClone(FIXTURE_CONFIG);
  }
}

export default PlatformFixture;
