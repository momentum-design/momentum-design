/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import winston from 'winston';
import { LoggerMetadata, TransportOptions, Transports } from '../common/types';

interface ExtendedLogInfo extends winston.Logform.TransformableInfo {
  metadata?: LoggerMetadata;
}

const generateMetadata = (pkg: string, file: string): LoggerMetadata => ({ pkg, file });

const LOGGER_FORMAT = winston.format.combine(
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
  winston.format.printf((logInfo: ExtendedLogInfo) => {
    return `${logInfo.level}|${logInfo.label}/${logInfo.metadata?.pkg || 'NA'}+${logInfo.metadata?.file || 'NA'}@${logInfo.timestamp}:${logInfo.ms}->${logInfo.message}};`;
  }),
);

const METRICS_FORMAT = winston.format.combine(
  winston.format.json(),
);

const LOGGER_TRANSPORTS: TransportOptions = [
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

export {
  LOGGER_FORMAT,
  LOGGER_TRANSPORTS,
  METRICS_FORMAT,
  generateMetadata,
};
