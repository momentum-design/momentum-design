import { CONSTANTS, Format } from '../../common';
import CONFIG_FILE_FIXTURE from '../../common/config-file.fixture';

import File from './file';
import type { Config } from './types';

const FIXTURE_CONFIG: Config = {
  destination: CONFIG_FILE_FIXTURE.destination,
  filters: structuredClone(CONFIG_FILE_FIXTURE.filters),
  format: Object.keys(CONSTANTS.FORMATS).pop() as Format,
  outputReferences: true,
  cssSelector: CONFIG_FILE_FIXTURE.cssSelector,
  showFileHeader: CONFIG_FILE_FIXTURE.showFileHeader,
};

class FileFixture extends File {
  public constructor(config: Config = FIXTURE_CONFIG) {
    super(config);
  }

  public static get FIXTURE_CONFIG(): typeof FIXTURE_CONFIG {
    return structuredClone(FIXTURE_CONFIG);
  }
}

export default FileFixture;
