import Platform from '../platform/fixture';

import Scope from './scope';
import type { Config } from './types';

const SCOPE_FIXTURE_CONFIG = {
  filters: ['filter'],
  name: 'name',
  platforms: [new Platform()],
  type: 'type',
};

class ScopeFixture extends Scope {
  constructor(config: Config = SCOPE_FIXTURE_CONFIG) {
    super(config);
  }

  public static get CONFIG(): typeof SCOPE_FIXTURE_CONFIG {
    return structuredClone(SCOPE_FIXTURE_CONFIG);
  }
}

export default ScopeFixture;
