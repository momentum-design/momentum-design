import { CDPSession, Page } from '@playwright/test';

type MetricKey =
  | 'Timestamp'
  | 'AudioHandlers'
  | 'AudioWorkletProcessors'
  | 'Documents'
  | 'Frames'
  | 'JSEventListeners'
  | 'LayoutObjects'
  | 'MediaKeySessions'
  | 'MediaKeys'
  | 'Nodes'
  | 'Resources'
  | 'ContextLifecycleStateObservers'
  | 'V8PerContextDatas'
  | 'WorkerGlobalScopes'
  | 'UACSSResources'
  | 'RTCPeerConnections'
  | 'ResourceFetchers'
  | 'AdSubframes'
  | 'DetachedScriptStates'
  | 'ArrayBufferContents'
  | 'LayoutCount'
  | 'RecalcStyleCount'
  | 'LayoutDuration'
  | 'RecalcStyleDuration'
  | 'DevToolsCommandDuration'
  | 'ScriptDuration'
  | 'V8CompileDuration'
  | 'TaskDuration'
  | 'TaskOtherDuration'
  | 'ThreadTime'
  | 'ProcessTime'
  | 'JSHeapUsedSize'
  | 'JSHeapTotalSize'
  | 'FirstMeaningfulPaint'
  | 'DomContentLoaded'
  | 'NavigationStart';

type CDPMetricsEntry = {
  name: MetricKey;
  value: number;
};
type CDPGetMetricsResult = {
  metrics: CDPMetricsEntry[];
};

type Metrics = Record<MetricKey, number>;

export class Performance {
  private readonly page: Page;

  private session: CDPSession | undefined;

  private detached = false;

  constructor(page: Page) {
    this.page = page;
  }

  public measure = async (gcBeforeMeasure = false): Promise<Metrics> => {
    if (this.detached) {
      throw new Error('Performance session has been detached');
    }
    const session = await this.getSession();

    if (gcBeforeMeasure) {
      await session.send('HeapProfiler.collectGarbage');
    }
    const metrics = (await session.send('Performance.getMetrics')) as CDPGetMetricsResult;
    return this.transformMetrics(metrics);
  };

  private transformMetrics(results: CDPGetMetricsResult): Metrics {
    return results.metrics.reduce((acc, metric) => {
      acc[metric.name] = metric.value;
      return acc;
    }, {} as Metrics);
  }

  private async getSession() {
    if (!this.session) {
      this.session = await this.page.context().newCDPSession(this.page);
      await this.session.send('Performance.enable');
      await this.session.send('HeapProfiler.enable');
    }
    return this.session;
  }

  async dispose() {
    if (this.session) {
      this.detached = true;
      await this.session.send('Performance.disable');
      await this.session.send('HeapProfiler.disable');
      await this.session?.detach();
    }
  }
}
