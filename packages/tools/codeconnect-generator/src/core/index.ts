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
 * Core Module Index
 *
 * Re-exports all core types, utilities, and classes.
 *
 * @module core
 */
// End AI-Assisted
export {
  buildGeneratedSectionMarkers,
  DEFAULT_CONNECT_OPTIONS,
  DEFAULT_IMPORT_BASE,
  GENERATED_SECTION_MARKERS,
} from './constants';
export { formatEmitTargetOptions, listEmitTargets, parseEmitTargets } from './emit-targets';
export type { LogContext, LoggerOptions } from './logger';
export { createScopedLogger, Logger, LogLevel, resolveLogLevel } from './logger';
export type { ReportTimer } from './report';
export {
  addCreatedFile,
  addError,
  addUnchangedFile,
  addUpdatedFile,
  addWarning,
  createEmptyComponentResult,
  createEmptyReport,
  createReportTimer,
  formatReportSummary,
  mergeResults,
  reportReducer,
} from './report';
export type { AggregateResult, Diagnostics, Result } from './result';
export {
  aggregateResults,
  applyAggregateDiagnostics,
  applyDiagnostics,
  chain,
  createResult,
  map as mapResult,
  mergeDiagnostics,
  mergeErrors,
  mergeWarnings,
} from './result';
export type {
  AttributeDescriptor,
  ClassSource,
  ComponentModel,
  ComponentResult,
  ConnectOptions,
  EmitResult,
  EmitTarget,
  EmitterOptions,
  EventDescriptor,
  FigmaPropertyType,
  GeneratedSectionMarkers,
  GeneratedSectionName,
  GeneratedSectionPayload,
  GenerationReport,
  GenerationStatus,
  PropertyDescriptor,
  PropertyVisibility,
  TagNameResult,
} from './types';
export { EmitterTarget } from './types';
