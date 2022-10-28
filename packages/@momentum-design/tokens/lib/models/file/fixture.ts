import File from './file';
import type { Config } from './types';

const FILE_FIXTURE_CONFIG = {
  categories: ['category'],
  extension: 'ext',
  format: 'format',
  items: ['item'],
  name: 'name',
  types: ['types'],
};

class FileFixture extends File {
  constructor(config: Config = FILE_FIXTURE_CONFIG) {
    super(config);
  }

  public static get CONFIG(): typeof FILE_FIXTURE_CONFIG {
    return structuredClone(FILE_FIXTURE_CONFIG);
  }
}

export default FileFixture;
