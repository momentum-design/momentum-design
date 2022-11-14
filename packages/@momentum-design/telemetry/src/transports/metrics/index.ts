import Transport from 'winston-transport';
// TODO: probably not the best idea to log these metrics to amplitude, not the best use case
// so swap this out for a metrics endpoint at some point in time ...
import { createInstance, Types } from '@amplitude/analytics-browser';
import { MetricsTransportOptions } from './types';

export default class MetricsTransport extends Transport {
  private metricsInstance;

  constructor(opts?: MetricsTransportOptions) {
    super(opts);
    this.silent = !!process.env.MOMENTUM_TELEMETRY_LEVEL;
    if (!this.silent) {
      this.metricsInstance = createInstance();
      this.metricsInstance.init('3b6442fae30189fd9cce1eb1534d35d1' || process.env.MOMENTUM_METRICS_API_KEY, undefined, {
        serverZone: Types.ServerZone.EU,
      });
    }
  }

  override log(info: any, next: () => void) {
    if (info.level === this.level) {
      setImmediate(() => {
        try {
          this.metricsInstance?.track('Test', { testProperty: true });
          console.log('I logged stuff !');
        } catch (e) {
          console.error('Transport failed', e);
        }
        this.emit('logged', info);
      });
      next();
    } else {
      next();
    }
  }
}
