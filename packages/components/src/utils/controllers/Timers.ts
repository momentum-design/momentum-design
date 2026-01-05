import { ReactiveController, type ReactiveControllerHost } from 'lit';

/**
 * Handle setTimeout and setInterval timers for a host, automatically clearing them on disconnect.
 */
export class Timers implements ReactiveController {
  private nameToIntervalId: Map<string, number> = new Map();

  private nameToTimeoutId: Map<string, number> = new Map();

  constructor(host: ReactiveControllerHost) {
    host.addController(this);
  }

  hostDisconnected(): void {
    [...this.nameToIntervalId.values()].forEach(clearInterval);
    this.nameToIntervalId.clear();

    [...this.nameToTimeoutId.values()].forEach(clearTimeout);
    this.nameToTimeoutId.clear();
  }

  /**
   * Wrapper around `window.setInterval` that tracks the interval ID for cleanup on disconnect.
   * If an interval with the same name already exists, it is cleared before setting the new one.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval}
   * @param name - Name to identify the interval timer
   * @param handler - Function that is called every `ms` milliseconds
   * @param ms - Delay in milliseconds between each call to `handler`
   * @param args - Additional arguments passed to `handler`
   * @returns The interval ID returned by `window.setInterval`
   */
  public setInterval<TArgs extends any[]>(
    name: string,
    handler: (...args: TArgs) => void,
    ms?: number,
    ...args: TArgs
  ): number {
    if (this.nameToIntervalId.has(name)) {
      clearInterval(this.nameToIntervalId.get(name)!);
    }

    const id = window.setInterval(handler, ms, ...args);
    this.nameToIntervalId.set(name, id);

    return id;
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval}
   * @param id - The name or ID of the interval to clear
   */
  public clearInterval(id: string | number): void {
    const [intervalName, intervalId] = this.getNameAndIdFromIdentifier(this.nameToIntervalId, id);

    if (intervalId !== undefined) {
      clearInterval(intervalId);
    }
    if (intervalName) {
      this.nameToIntervalId.delete(intervalName);
    }
  }

  /**
   * Wrapper around `window.setTimeout` that tracks the timeout ID for cleanup on disconnect.
   * If a timeout with the same name already exists, it is cleared before setting the new one.
   * When the timeout executes, it removes itself from the tracking map.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout}
   * @param name - Name to identify the timeout
   * @param handler - Function that is called after `ms` milliseconds
   * @param ms - Delay in milliseconds before calling `handler`
   * @param args - Additional arguments passed to `handler`
   * @returns The timeout id returned by `window.setTimeout`
   */
  public setTimeout<TArgs extends any[]>(
    name: string,
    handler: (...args: TArgs) => void,
    ms?: number,
    ...args: TArgs
  ): number {
    if (this.nameToTimeoutId.has(name)) {
      clearTimeout(this.nameToTimeoutId.get(name)!);
    }

    const id = window.setTimeout(
      (...args: TArgs) => {
        handler(...args);
        this.nameToTimeoutId.delete(name);
      },
      ms,
      ...args,
    );
    this.nameToTimeoutId.set(name, id);

    return id;
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout}
   * @param id - The name or ID of the timeout to clear
   */
  public clearTimeout(id: string | number): void {
    const [timeoutName, timeoutId] = this.getNameAndIdFromIdentifier(this.nameToTimeoutId, id);

    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }
    if (timeoutName) {
      this.nameToTimeoutId.delete(timeoutName);
    }
  }

  /**
   * @internal
   */
  private getNameAndIdFromIdentifier(
    map: Map<string, number>,
    id: string | number,
  ): [string, number | undefined] | [string | undefined, number] {
    if (typeof id === 'number') {
      const timerId = id;
      const timerName = [...map.entries()].find(([, value]) => value === id)?.[0];

      return [timerName, timerId];
    }

    return [id, map.get(id)];
  }
}
