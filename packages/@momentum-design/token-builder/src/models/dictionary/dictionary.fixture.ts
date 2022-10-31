import { CONSTANTS, Format } from '../../common';
import CONFIG_FILE_FIXTURE from '../../common/config-file.fixture';

import Dictionary from './dictionary';
import type { Config } from './types';

const FIXTURE_CONFIG: Config = {
  file: structuredClone(CONFIG_FILE_FIXTURE),
  formats: Object.keys(CONSTANTS.FORMATS) as Array<Format>,
  input: 'dictionary-input',
  output: 'dictionary-output',
  prefix: 'dictionary-prefix',
};

class DictionaryFixture extends Dictionary {
  public constructor(config: Config = FIXTURE_CONFIG) {
    super(config);
  }

  public static get FIXTURE_CONFIG(): typeof FIXTURE_CONFIG {
    return structuredClone(FIXTURE_CONFIG);
  }
}

export default DictionaryFixture;
