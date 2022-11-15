import { Types } from '@amplitude/analytics-browser';
import { Logger } from 'winston';
import Transport from 'winston-transport';
import { ConsoleTransportOptions } from 'winston/lib/winston/transports';

export type LoggerMetadata = {
  pkg: string;
  file: string;
}

export type LoggerInfo = {
  level: string;
  message: any;
  metadata: LoggerMetadata;
  [key: string]: any;
}

export enum RecordEvents {
  TokenBuilderUsage = 'TokenBuilderUsage',
}

export enum RecordEventProperties {
  TimeSaved = 'timeSaved',
  ChangeSize = 'changeSize',
}

export type MappedRecordEventProperties = {
  [RecordEventProperties.TimeSaved]?: number; // measured in minutes
  [RecordEventProperties.ChangeSize]?: number; // measured in number of dictionaries run
}

export type Metric = {
  eventInput: Types.BaseEvent | RecordEvents;
  eventProperties?: MappedRecordEventProperties;
  eventOptions?: Types.EventOptions
}

interface RecordLeveledLogMethod {
  (meta: Metric): Logger; // TODO: type meta
}

export interface ExtendedLogger extends Logger {
  record: RecordLeveledLogMethod;
  child: (options: Object) => ExtendedLogger;
}

export enum Transports {
  Console = 'console',
  Metrics = 'metrics'
}

export interface MetricsTransportOptions extends Transport.TransportStreamOptions {}

export type TransportOptions = Array<
  {key: Transports.Console; options: ConsoleTransportOptions}
  |
  {key: Transports.Metrics; options: MetricsTransportOptions}
>

export type LogMetric = LoggerInfo & Metric;
