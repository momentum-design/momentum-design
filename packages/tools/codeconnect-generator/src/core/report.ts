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
 * Report Builder Module
 *
 * Provides immutable builders for constructing generation reports.
 * Follows functional patterns with no mutation of input data.
 *
 * @module core/report
 */

import type { ComponentResult, GenerationReport } from './types';
import { GenerationStatus } from './types';

/**
 * Timer helper for duration tracking.
 */
export interface ReportTimer {
  /** Time when the timer started. */
  readonly startTime: number;
  /** Stops the timer and returns elapsed milliseconds. */
  stop: () => number;
}

/**
 * Creates an empty generation report.
 *
 * @returns Empty report with success status.
 */
export function createEmptyReport(): GenerationReport {
  return {
    status: GenerationStatus.Success,
    created: [],
    updated: [],
    unchanged: [],
    warnings: [],
    errors: [],
    durationMs: 0,
  };
}

/**
 * Creates a timer for measuring report duration.
 *
 * @returns Report timer with a stop function.
 */
export function createReportTimer(): ReportTimer {
  const startTime = Date.now();
  return {
    startTime,
    /**
     * Stops the timer and returns elapsed time.
     *
     * @returns Elapsed time in milliseconds.
     */
    stop: () => Date.now() - startTime,
  };
}

/**
 * Creates an empty component result.
 *
 * @returns Empty component result object.
 */
export function createEmptyComponentResult(): ComponentResult {
  return {
    model: undefined,
    componentName: undefined,
    created: [],
    updated: [],
    unchanged: [],
    fileChanges: [],
    warnings: [],
    errors: [],
  };
}

/**
 * Formats a human-readable summary string for a report.
 *
 * @param report - Report to summarize.
 * @returns Summary string for display.
 */
export function formatReportSummary(report: GenerationReport): string {
  const lines = [
    `Status: ${report.status}`,
    `Duration: ${report.durationMs}ms`,
    `Created: ${report.created.length}`,
    `Updated: ${report.updated.length}`,
    `Unchanged: ${report.unchanged.length}`,
  ];

  if (report.warnings.length > 0) {
    lines.push(`Warnings: ${report.warnings.length}`);
  }

  if (report.errors.length > 0) {
    lines.push(`Errors: ${report.errors.length}`);
  }

  return lines.join('\n');
}

/**
 * Reducer that aggregates a component result into the report.
 *
 * @param report - Current report accumulator.
 * @param result - Component result to merge.
 * @returns Updated report accumulator.
 */
export function reportReducer(report: GenerationReport, result: ComponentResult): GenerationReport {
  const warnings = [...report.warnings, ...result.warnings];
  const errors = [...report.errors, ...result.errors];
  const created = [...report.created, ...result.created];
  const updated = [...report.updated, ...result.updated];
  const unchanged = [...report.unchanged, ...result.unchanged];
  const status = determineStatus(errors.length, warnings.length);

  return {
    ...report,
    status,
    created,
    updated,
    unchanged,
    warnings,
    errors,
  };
}

/**
 * Merges multiple component results into a single generation report.
 *
 * @param results - Array of component processing results.
 * @param durationMs - Total duration of the generation process.
 * @returns A merged generation report.
 */
export function mergeResults(results: readonly ComponentResult[], durationMs: number): GenerationReport {
  const report = results.reduce(reportReducer, createEmptyReport());
  return {
    ...report,
    durationMs,
  };
}

/**
 * Determines the overall status based on error and warning counts.
 *
 * @param errorCount - Number of errors in the report.
 * @param warningCount - Number of warnings in the report.
 * @returns Computed report status.
 */
function determineStatus(errorCount: number, warningCount: number): GenerationStatus {
  if (errorCount > 0) {
    return GenerationStatus.Error;
  }
  if (warningCount > 0) {
    return GenerationStatus.Warning;
  }
  return GenerationStatus.Success;
}

/**
 * Array-valued field keys of ComponentResult used for immutable append operations.
 */
enum AppendableField {
  Warnings = 'warnings',
  Errors = 'errors',
  Created = 'created',
  Updated = 'updated',
  Unchanged = 'unchanged',
}

interface AppendableFields {
  readonly warnings: readonly string[];
  readonly errors: readonly string[];
  readonly created: readonly string[];
  readonly updated: readonly string[];
  readonly unchanged: readonly string[];
}

/**
 * Appends a value to an array field of a ComponentResult immutably.
 * Generic helper that eliminates duplication across field-specific append functions.
 *
 * @param result - Component result to update.
 * @param field - Array field to append to.
 * @param value - Value to append.
 * @returns Updated component result.
 */
function appendToField(result: ComponentResult, field: AppendableField, value: string): ComponentResult {
  const fieldKey = field as keyof AppendableFields;
  const existing = result[fieldKey];

  return {
    ...result,
    [fieldKey]: [...existing, value],
  };
}

/**
 * Adds a warning to a component result.
 *
 * @param result - Component result to update.
 * @param warning - Warning message to append.
 * @returns Updated component result.
 */
export function addWarning(result: ComponentResult, warning: string): ComponentResult {
  return appendToField(result, AppendableField.Warnings, warning);
}

/**
 * Adds an error to a component result.
 *
 * @param result - Component result to update.
 * @param error - Error message to append.
 * @returns Updated component result.
 */
export function addError(result: ComponentResult, error: string): ComponentResult {
  return appendToField(result, AppendableField.Errors, error);
}

/**
 * Adds a created file to a component result.
 *
 * @param result - Component result to update.
 * @param filePath - Created file path.
 * @returns Updated component result.
 */
export function addCreatedFile(result: ComponentResult, filePath: string): ComponentResult {
  return appendToField(result, AppendableField.Created, filePath);
}

/**
 * Adds an updated file to a component result.
 *
 * @param result - Component result to update.
 * @param filePath - Updated file path.
 * @returns Updated component result.
 */
export function addUpdatedFile(result: ComponentResult, filePath: string): ComponentResult {
  return appendToField(result, AppendableField.Updated, filePath);
}

/**
 * Adds an unchanged file to a component result.
 *
 * @param result - Component result to update.
 * @param filePath - Unchanged file path.
 * @returns Updated component result.
 */
export function addUnchangedFile(result: ComponentResult, filePath: string): ComponentResult {
  return appendToField(result, AppendableField.Unchanged, filePath);
}
// End AI-Assisted
