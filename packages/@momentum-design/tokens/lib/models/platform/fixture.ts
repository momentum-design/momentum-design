import File from '../file/fixture';

import Platform from './platform';
import type { Config } from './types';

const PLATFORM_FIXTURE_CONFIG = {
  files: [new File()],
  group: 'group',
  name: 'name',
};

class PlatformFixture extends Platform {
  constructor(config: Config = PLATFORM_FIXTURE_CONFIG) {
    super(config);
  }

  public static get CONFIG(): typeof PLATFORM_FIXTURE_CONFIG {
    return structuredClone(PLATFORM_FIXTURE_CONFIG);
  }
}

export default PlatformFixture;
