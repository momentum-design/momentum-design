// AI-Assisted
/**
 * Copyright (c) 2022 Momentum Design
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * CLI Progress Module
 *
 * Provides terminal progress indicator functionality for long-running operations.
 *
 * @module cli/progress
 */

import type { ProgressIndicator, ProgressIndicatorOptions } from './types';

/** Animation frames for the spinner. */
const SPINNER_FRAMES = ['-', '\\', '|', '/'];

/** Default animation interval in milliseconds. */
const DEFAULT_INTERVAL_MS = 100;

/**
 * Creates a no-op progress indicator for non-TTY environments.
 *
 * @returns A progress indicator that does nothing.
 */
function createNoOpIndicator(): ProgressIndicator {
  return {
    /**
     * Starts the no-op indicator.
     *
     * @returns Nothing.
     */
    start: () => undefined,
    /**
     * Updates the no-op indicator label.
     *
     * @returns Nothing.
     */
    update: () => undefined,
    /**
     * Stops the no-op indicator.
     *
     * @returns Nothing.
     */
    stop: () => undefined,
  };
}

/**
 * Creates a simple terminal progress indicator with a spinner animation.
 *
 * The indicator automatically detects TTY and disables animation for non-interactive
 * environments. When enabled, it displays a spinning animation with a label that
 * can be updated during long-running operations.
 *
 * @param options - Configuration options for the progress indicator.
 * @returns A progress indicator instance.
 *
 * @example
 * ```typescript
 * const progress = createProgressIndicator();
 * progress.start('Processing files...');
 * // ... do work ...
 * progress.update('Processing file 5 of 10...');
 * // ... do more work ...
 * progress.stop('Complete!', 'success');
 * ```
 */
export function createProgressIndicator(options: ProgressIndicatorOptions = {}): ProgressIndicator {
  const stream = options.stream ?? process.stdout;
  const enabled = options.enabled ?? stream.isTTY;

  if (!enabled) {
    return createNoOpIndicator();
  }

  const intervalMs = options.intervalMs ?? DEFAULT_INTERVAL_MS;
  let timer: NodeJS.Timeout | number | undefined;
  let frameIndex = 0;
  let label = '';

  /**
   * Renders the spinner frame and current label.
   *
   * @returns Nothing.
   */
  const render = (): void => {
    const frame = SPINNER_FRAMES[frameIndex % SPINNER_FRAMES.length];
    frameIndex += 1;
    stream.write(`\r${frame} ${label}`);
    // Clear to end of line
    stream.write('\x1b[0K');
  };

  return {
    /**
     * Starts the spinner with a label.
     *
     * @param nextLabel - Label to display while running.
     * @returns Nothing.
     */
    start(nextLabel: string): void {
      label = nextLabel;
      if (timer) {
        return;
      }
      render();
      timer = setInterval(render, intervalMs);
    },

    /**
     * Updates the label for the running indicator.
     *
     * @param nextLabel - Updated label to display.
     * @returns Nothing.
     */
    update(nextLabel: string): void {
      label = nextLabel;
      if (!timer) {
        render();
      }
    },

    /**
     * Stops the spinner with an optional final label and status.
     *
     * @param finalLabel - Final label to display before stopping.
     * @param status - Final status label for success or error output.
     * @returns Nothing.
     */
    stop(finalLabel?: string, status: 'success' | 'error' = 'success'): void {
      if (timer) {
        clearInterval(timer);
        timer = undefined;
      }
      if (finalLabel) {
        label = finalLabel;
      }
      const prefix = status === 'error' ? 'x' : 'ok';
      stream.write(`\r${prefix} ${label}\n`);
    },
  };
}
// End AI-Assisted
