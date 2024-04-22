import CONFIG_FIXTURE from '../../common/config.fixture';

import TokenBuilder from './token-builder';
import type { Config } from './types';

const FIXTURE_CONFIG: Config = {
  config: structuredClone(CONFIG_FIXTURE),
  input: 'token-builder-input',
  output: 'token-builder-output',
};

class TokenBuilderFixture extends TokenBuilder {
  public constructor(config: Config = FIXTURE_CONFIG) {
    super(config);
  }

  public static get FIXTURE_CONFIG(): typeof FIXTURE_CONFIG {
    return structuredClone(FIXTURE_CONFIG);
  }
}

export default TokenBuilderFixture;
