import Transport from 'winston-transport';
// TODO: probably not the best idea to log these metrics to amplitude, not the best use case
// so swap this out for a metrics endpoint at some point in time ...
import { createInstance, Types } from '@amplitude/analytics-browser';
import { randomUUID } from 'crypto';
import { LogMetric, MetricsTransportOptions } from '../../common/types';

export default class MetricsTransport extends Transport {
  private metricsInstance;

  constructor(opts?: MetricsTransportOptions) {
    super(opts);
    this.silent = process.env.MOMENTUM_TELEMETRY_LEVEL === 'silent';
    if (!this.silent && process.env.NODE_ENV !== 'test') {
      this.metricsInstance = createInstance();
      // TODO: inject this as environment variable
      if (process.env.MOMENTUM_METRICS_API_KEY) {
        this.metricsInstance.init(process.env.MOMENTUM_METRICS_API_KEY, undefined, {
          serverZone: Types.ServerZone.EU,
        });
      } else {
        console.error('No metrics Api Key configured, no events will be recorded.');
      }
    }
  }

  override log(info: LogMetric, next: () => void) {
    if (info.level === this.level) {
      const anonymousUniqueId = randomUUID();
      setImmediate(async () => {
        try {
          await this.metricsInstance?.track(
            info.message.eventInput,
            {
              anonymousUniqueId,
              pkg: info.pkg || 'NA',
              file: info.file || 'NA',
              ...info.message.eventProperties,
            },
          );
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(`Telemetry transport failed for ${anonymousUniqueId}, error: ${e}`);
        }
        this.emit('recorded', anonymousUniqueId);
      });
      next();
    } else {
      next();
    }
  }
}
