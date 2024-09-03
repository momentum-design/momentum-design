import MetricsTransport from './transports/metrics';

export { Logger, generateMetadata } from './logger';

export {
  CONSTANTS,
} from './common';

export {
  RecordContextPrefix,
  RecordSourcePrefix,
  RecordEventName,
  RecordBusinessPrefix,
  RecordEventProperties,
  Transports,
} from './common/types';

export type {
  LoggerMetadata,
  LoggerInfo,
  RecordEvents,
  MappedRecordEventProperties,
  Metric,
  ExtendedLogger,
  MetricsTransportOptions,
  TransportOptions,
  LogMetric,
} from './common/types';

export { MetricsTransport };

export {
  UNIT,
  BLOCKING_UNIT,
  calculateApproximateValue,
} from './calculator';
