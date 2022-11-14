import { LeveledLogMethod, Logger } from 'winston';
import { ConsoleTransportOptions } from 'winston/lib/winston/transports';
import { MetricsTransportOptions } from '../transports';
import { Transports } from './enums';

export type TransportOptions = Array<
  {key: Transports.Console; options: ConsoleTransportOptions}
  |
  {key: Transports.Metrics; options: MetricsTransportOptions}
>

export type LoggerInfo = {
  level: string;
  message: any;
  metadata: {
    pkg: string;
    file: string;
  };
  [key: string]: any;
}

export interface ExtendedLogger extends Logger {
  record: LeveledLogMethod;
  child: (options: Object) => ExtendedLogger;
}
