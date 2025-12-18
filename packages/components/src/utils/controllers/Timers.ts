import { ReactiveController, type ReactiveControllerHost } from 'lit';

/**
 * Handle setTimeout and setInterval timers for a host, automatically clearing them on disconnect.
 */
export class Timers implements ReactiveController {
  /**
   * Set of active interval IDs set by setInterval
   */
  private intervalIds: Set<number> = new Set();

  /**
   * Set of active timeout IDs set by setTimeout
   */
  private timeoutIds: Set<number> = new Set();

  constructor(host: ReactiveControllerHost) {
    host.addController(this);
  }

  hostDisconnected(): void {
    this.intervalIds.forEach(clearInterval);
    this.intervalIds.clear();

    this.timeoutIds.forEach(clearTimeout);
    this.timeoutIds.clear();
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval}
   */
  public setInterval<TArgs extends any[]>(handler: (...args: TArgs) => void, ms?: number, ...args: TArgs): number {
    const id = window.setInterval(handler, ms, ...args);
    this.intervalIds.add(id);
    return id;
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval}
   */
  public clearInterval(id: number): void {
    this.intervalIds.delete(id);
    clearInterval(id);
  }

  /**
   * Calls setTimeout and tracks the timeout ID for cleanup on disconnect.
   * When the handler is called, the timeout ID is automatically cleared from tracking.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout}
   */
  public setTimeout<TArgs extends any[]>(handler: (...args: TArgs) => void, ms?: number, ...args: TArgs): number {
    const id = window.setTimeout(
      (...args: TArgs) => {
        handler(...args);
        this.timeoutIds.delete(id);
      },
      ms,
      ...args,
    );
    this.timeoutIds.add(id);
    return id;
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout}
   */
  public clearTimeout(id: number): void {
    this.timeoutIds.delete(id);
    clearTimeout(id);
  }
}
