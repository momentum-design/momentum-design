import CONSTANTS from './constants';
import CONFIG_FILE_FIXTURE from './config-file.fixture';
import type { Config, Format } from './types';

const CONFIG_FIXTURE: Config = {
  files: [
    structuredClone(CONFIG_FILE_FIXTURE),
    structuredClone(CONFIG_FILE_FIXTURE),
  ],
  formats: Object.keys(CONSTANTS.FORMATS) as Array<Format>,
  prefix: 'config-prefix',
};

export default CONFIG_FIXTURE;
