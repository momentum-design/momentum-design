import { LOGGER_FORMAT, LOGGER_TRANSPORTS, generateMetadata } from './config';
import { create } from './factory';
import { ExtendedLogger } from './types';

const Logger: ExtendedLogger = create({ transports: LOGGER_TRANSPORTS, format: LOGGER_FORMAT });

export { generateMetadata };

export { Logger };
