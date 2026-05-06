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
 * CLI Types Module
 *
 * Defines interfaces and types for CLI options and utilities.
 *
 * @module cli/types
 */

/**
 * Global CLI options available across all commands.
 */
export interface GlobalCliOptions {
  /** Enable verbose/debug logging. */
  readonly verbose?: boolean;
  /** Suppress non-error output. */
  readonly quiet?: boolean;
  /** Preview changes without writing files. */
  readonly dryRun?: boolean;
}

/**
 * Interface for terminal progress indicators.
 */
export interface ProgressIndicator {
  /**
   * Starts the progress indicator with a label.
   * @param label - The label to display.
   */
  start(label: string): void;

  /**
   * Updates the progress indicator label.
   * @param label - The new label to display.
   */
  update(label: string): void;

  /**
   * Stops the progress indicator.
   * @param label - Optional final label to display.
   * @param status - The completion status ('success' or 'error').
   */
  stop(label?: string, status?: 'success' | 'error'): void;
}

/**
 * Configuration options for creating a progress indicator.
 */
export interface ProgressIndicatorOptions {
  /** Whether the progress indicator is enabled. Defaults to TTY detection. */
  readonly enabled?: boolean;
  /** Animation frame interval in milliseconds. Defaults to 100. */
  readonly intervalMs?: number;
  /** Output stream for the progress indicator. Defaults to stdout. */
  readonly stream?: NodeJS.WriteStream;
}
// End AI-Assisted
