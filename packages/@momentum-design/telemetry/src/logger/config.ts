/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import winston from 'winston';
import { AbstractConfigSetLevels } from 'winston/lib/winston/config';
import { LoggerMetadata, TransportOptions, Transports } from '../common/types';

export const generateMetadata = (pkg: string, file: string): LoggerMetadata => ({ pkg, file });

export const LOGGER_FORMAT = winston.format.combine(
  winston.format.colorize(),
  winston.format.label({
    label: '@momentum-design',
  }),
  winston.format.metadata({
    fillExcept: ['message', 'label', 'timestamp', 'level'],
  }),
  winston.format.timestamp({
    format: 'YYYY-MM-DD_HH:mm:ss:SSS',
  }),
  winston.format.errors({ stack: true }),
  winston.format.ms(),
  winston.format.printf((logInfo: winston.Logform.TransformableInfo) => {
    return `${logInfo.level}|${logInfo.label}/${logInfo.metadata?.pkg || 'NA'}+${logInfo.metadata?.file || 'NA'}@${logInfo.timestamp}:${logInfo.ms}->${JSON.stringify(logInfo.message)};`;
  }),
);

export const METRICS_FORMAT = winston.format.combine(
  winston.format.json(),
);

export const ExtendedLevels: AbstractConfigSetLevels = {
  record: 8,
};

export const LOGGER_TRANSPORTS: TransportOptions = [
  {
    key: Transports.Console,
    options: {
      format: LOGGER_FORMAT,
    },
  },
  {
    key: Transports.Metrics,
    options: {
      format: METRICS_FORMAT,
    },
  },
];
