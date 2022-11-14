import winston, { createLogger, Logform } from 'winston';
import transports, { ConsoleTransportOptions } from 'winston/lib/winston/transports';
import { MetricsTransport, MetricsTransportOptions } from '../transports';
import { Transports } from './enums';
import { ExtendedLogger, TransportOptions } from './types';
import { ExtendedLevels } from './config';

const createMetricsTransport = (options: MetricsTransportOptions) => {
  const opts = options || {};
  opts.level = 'record';

  return new MetricsTransport(options);
};

const createConsoleTransport = (options: ConsoleTransportOptions) => new transports.Console(options);

const getLoggerTransports = (transportOptions: TransportOptions) => transportOptions.map((transportOption) => {
  const { key, options } = transportOption;

  switch (key) {
    case Transports.Console:
      return createConsoleTransport(options);
    case Transports.Metrics:
      return createMetricsTransport(options);
    default:
      throw new Error('Unsupported transport type');
  }
});

export const create = (options: {transports: TransportOptions; format?: Logform.Format}): ExtendedLogger => {
  const logger: ExtendedLogger = <ExtendedLogger>createLogger({
    level: process.env.MOMENTUM_TELEMETRY_LEVEL || 'record',
    levels: { ...winston.config.npm.levels, ...ExtendedLevels },
    transports: getLoggerTransports(options.transports),
  });
  winston.addColors({ ...winston.config.npm.colors, record: 'blue' });
  return logger;
};
