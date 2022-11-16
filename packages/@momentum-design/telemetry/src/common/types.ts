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

export enum RecordBusinessPrefix {
  Design = 'Design',
  Engineering = 'Engineering'
}

export enum RecordSourcePrefix {
  Calculated = 'Calculated',
  Raw = 'Raw'
}

export enum RecordContextPrefix {
  Automation = 'Automation',
  Usage = 'Usage',
}

export enum RecordEventName {
  Build = 'Build',
  Git = 'Git',
}

/**
 * Source_Business_<packageName>_Context_Event
* */
export type RecordEvents = `${RecordSourcePrefix}_${RecordBusinessPrefix}_${string}_${RecordContextPrefix}_${RecordEventName}`; // eslint-disable-line max-len

export enum RecordEventProperties {
  OutputFormat = 'OutputFormat',
  FileCount = 'FileCount',
  SecondsSaved = 'SecondsSaved',
  LineCount_Changed = 'LineCount_Changed',
  LineCount_Added = 'LineCount_Added',
  LineCount_Removed = 'LineCount_Removed',
}

export type MappedRecordEventProperties = {
  [RecordEventProperties.SecondsSaved]?: number; // seconds
  [RecordEventProperties.LineCount_Changed]?: number;
  [RecordEventProperties.LineCount_Added]?: number;
  [RecordEventProperties.LineCount_Removed]?: number;
  [RecordEventProperties.OutputFormat]?: string; // format === platform === output i.e., JSON, or SWIFT, etc
  [RecordEventProperties.FileCount]?: number; // number of files
}

export type Metric = {
  eventInput: Types.BaseEvent | RecordEvents;
  eventProperties?: MappedRecordEventProperties;
  eventOptions?: Types.EventOptions
}

interface RecordLeveledLogMethod {
  (meta: Metric): Logger;
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
