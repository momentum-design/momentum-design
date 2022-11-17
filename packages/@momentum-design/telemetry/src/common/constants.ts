import winston from 'winston';

import { AbstractConfigSetLevels } from 'winston/lib/winston/config';

const ExtendedLevels: AbstractConfigSetLevels = {
  // set record to the lowest possible priority, which will be at the end of the npm array
  record: Object.keys(winston.config.npm.levels).length + 1,
};

const CONSTANTS = {
  ExtendedLevels,
};

export default CONSTANTS;
