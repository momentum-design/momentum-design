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
 * Manifest Batch Processor
 *
 * Processes ComponentModels parsed from a custom-elements.json manifest,
 * running each through the configured emitters without requiring
 * a TypeScript program or AST parsing.
 *
 * @module pipeline/manifest-batch
 */

import { DEFAULT_CONNECT_OPTIONS } from '../core/constants';
import { addCreatedFile, addUnchangedFile, addUpdatedFile, createEmptyComponentResult } from '../core/report';
import {
  addError,
  addWarnings,
  type AggregateResult,
  aggregateResults,
  createResult,
  type Result,
} from '../core/result';
import type { ComponentModel, ComponentResult, EmitResult, FileChangeDetail } from '../core/types';
import { FileChangeReason, FileChangeStatus } from '../core/types';
import type { Emitter } from '../emitters/types';
import { type IoAdapter, nodeIoAdapter } from '../io/adapter';
import { type FileWriteResult, writeFile, WriteStatus } from '../io/file-writer';
import { applyGeneratedSectionUpdates } from '../io/section-updater';

// ============================================================================
// Types
// ============================================================================

/**
 * Options for manifest batch processing.
 */
export interface ManifestBatchOptions {
  /** Emitters to run for each component. */
  readonly emitters: readonly Emitter[];
  /** Whether this is a dry run. */
  readonly dryRun: boolean;
  /** Force replacement of files. */
  readonly force: boolean;
  /** IO adapter for file operations. */
  readonly io?: IoAdapter;
  /** Base import path override. */
  readonly baseImportPath?: string;
  /** Continue processing on error. */
  readonly continueOnError?: boolean;
}

interface WriteContext {
  readonly dryRun: boolean;
  readonly force: boolean;
  readonly io: IoAdapter;
}

interface WriteOutcome {
  readonly result: FileWriteResult;
  readonly warning?: string;
  readonly change?: FileChangeDetail;
}

/**
 * Prefixes diagnostics with component identity for easier triage in batch output.
 *
 * @param model - Component model context.
 * @param message - Raw diagnostic message.
 * @returns Prefixed diagnostic string.
 */
const withComponentContext = (model: ComponentModel, message: string): string => `[${model.tagName}] ${message}`;

// ============================================================================
// Write Helpers
// ============================================================================

/**
 * Writes an emission to disk, respecting generated section markers.
 *
 * @param emission - Emitter result to write.
 * @param writeContext - Write configuration.
 * @returns Write outcome.
 */
function writeEmission(emission: EmitResult, writeContext: WriteContext): WriteOutcome {
  const { dryRun, force, io } = writeContext;
  const sections = emission.sections ?? null;
  const exists = io.exists(emission.filePath);

  // Consolidate Conditional: force-overwrite, no-sections, and new-file
  // all produce a full-content write — only the change reason varies.
  if (force && exists) {
    const result = writeFile(emission.filePath, emission.content, { dryRun, io });
    return {
      result,
      change: buildFileChange(result.status, FileChangeReason.ContentUpdated, emission.filePath),
    };
  }

  if (!sections || !exists) {
    const reason = exists ? FileChangeReason.ContentUpdated : FileChangeReason.NewFile;
    const result = writeFile(emission.filePath, emission.content, { dryRun, io });
    return {
      result,
      change: buildFileChange(result.status, reason, emission.filePath),
    };
  }

  // Section-based update on an existing file
  const existingContent = io.readFile(emission.filePath);
  const updatedContent = applyGeneratedSectionUpdates(existingContent, sections);

  if (!updatedContent) {
    const result = { filePath: emission.filePath, status: WriteStatus.Unchanged } as const;
    return {
      result,
      warning: `Generated section markers not found in ${emission.filePath}. Skipping update to preserve manual edits.`,
      change: buildFileChange(result.status, FileChangeReason.SectionUpdated, emission.filePath),
    };
  }

  const result = writeFile(emission.filePath, updatedContent, { dryRun, io });
  return {
    result,
    change: buildFileChange(result.status, FileChangeReason.SectionUpdated, emission.filePath),
  };
}

/**
 * Builds a file change detail entry.
 *
 * @param status - Write status from the file writer.
 * @param existed - Whether the file existed before writing.
 * @param updateReason - Reason for the change.
 * @param filePath - File path being written.
 * @returns File change detail.
 */
function buildFileChange(
  status: WriteStatus,
  updateReason: FileChangeReason,
  filePath: string,
): FileChangeDetail {
  if (status === WriteStatus.Created) {
    return { filePath, status: FileChangeStatus.Created, reason: FileChangeReason.NewFile };
  }
  if (status === WriteStatus.Unchanged) {
    return { filePath, status: FileChangeStatus.Unchanged, reason: FileChangeReason.Unchanged };
  }
  return { filePath, status: FileChangeStatus.Updated, reason: updateReason };
}

/**
 * Applies write status to a component result.
 *
 * @param component - Component result to update.
 * @param writeResult - Write result payload.
 * @returns Updated component result.
 */
function applyWriteResult(component: ComponentResult, writeResult: FileWriteResult): ComponentResult {
  if (writeResult.status === WriteStatus.Created) {
    return addCreatedFile(component, writeResult.filePath);
  }
  if (writeResult.status === WriteStatus.Updated) {
    return addUpdatedFile(component, writeResult.filePath);
  }
  return addUnchangedFile(component, writeResult.filePath);
}

/**
 * Adds a file change detail to a component result.
 *
 * @param result - Component result to update.
 * @param change - File change detail to add.
 * @returns Updated component result.
 */
function addFileChange(result: ComponentResult, change: FileChangeDetail): ComponentResult {
  const existingChanges = result.fileChanges as readonly FileChangeDetail[];
  return {
    ...result,
    fileChanges: [...existingChanges, change],
  };
}

// ============================================================================
// Batch Processing
// ============================================================================

/**
 * Processes a single component model through all emitters.
 *
 * @param model - Component model parsed from the manifest.
 * @param emitters - Emitters to run.
 * @param writeContext - Write configuration.
 * @param baseImportPath - Optional import path override.
 * @returns Processing result for the component.
 */
function processManifestComponent(
  model: ComponentModel,
  emitters: readonly Emitter[],
  writeContext: WriteContext,
  baseImportPath?: string,
): Result<ComponentResult> {
  const emitterOptions = {
    dryRun: writeContext.dryRun,
    baseImportPath,
  };

  let componentResult: ComponentResult = {
    ...createEmptyComponentResult(),
    model,
    componentName: model.tagName,
  };

  const warnings: string[] = [];

  for (const emitter of emitters) {
    let emission: EmitResult;
    try {
      emission = emitter.emit({ model, options: emitterOptions });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return addError(createResult(componentResult), withComponentContext(model, `${emitter.target}: ${message}`));
    }

    const writeOutcome = writeEmission(emission, writeContext);

    const emissionWarnings = (emission.warnings ?? []).map((warning) => withComponentContext(model, warning));
    const writeWarnings = writeOutcome.warning ? [withComponentContext(model, writeOutcome.warning)] : [];
    warnings.push(...emissionWarnings, ...writeWarnings);

    if (writeOutcome.change) {
      componentResult = addFileChange(componentResult, writeOutcome.change);
    }

    componentResult = applyWriteResult(componentResult, writeOutcome.result);
  }

  let state = createResult(componentResult);
  if (warnings.length > 0) {
    state = addWarnings(state, warnings);
  }

  return state;
}

/**
 * Processes a batch of ComponentModels from a custom-elements.json manifest.
 *
 * @param models - Component models parsed from the manifest.
 * @param options - Batch processing options.
 * @returns Aggregate component results.
 */
export function processManifestBatch(
  models: readonly ComponentModel[],
  options: ManifestBatchOptions,
): AggregateResult<ComponentResult> {
  const continueOnError = options.continueOnError ?? DEFAULT_CONNECT_OPTIONS.continueOnError;
  const writeContext: WriteContext = {
    dryRun: options.dryRun,
    force: options.force,
    io: options.io ?? nodeIoAdapter,
  };

  const batchState = models.reduce(
    (acc, model) => {
      if (!acc.shouldContinue) {
        return acc;
      }

      const result = processManifestComponent(model, options.emitters, writeContext, options.baseImportPath);

      const hasErrors = result.errors.length > 0;
      return {
        results: [...acc.results, result],
        shouldContinue: hasErrors ? continueOnError : true,
      };
    },
    { results: [] as Result<ComponentResult>[], shouldContinue: true },
  );

  return aggregateResults(batchState.results);
}
// End AI-Assisted
