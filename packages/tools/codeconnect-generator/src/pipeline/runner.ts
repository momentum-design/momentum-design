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
 * Pipeline Runner
 *
 * Orchestrates the connect pipeline using custom-elements.json manifest parsing.
 *
 * @module pipeline/runner
 */
import fs from 'node:fs';
import path from 'node:path';

import { PACKAGE_JSON } from '../core/constants';
import type { Logger } from '../core/logger';
import {
  createEmptyComponentResult,
  createEmptyReport,
  createReportTimer,
  reportReducer,
  type ReportTimer,
} from '../core/report';
import {
  applyAggregateDiagnostics,
  applyDiagnostics,
  createResult,
  createResultWithDiagnostics,
  type Diagnostics,
  map as mapResult,
  type Result,
} from '../core/result';
import type { ComponentModel, ComponentResult, ConnectOptions, GenerationReport } from '../core/types';
import { createEmitters } from '../emitters/factory';
import type { Emitter } from '../emitters/types';
import { nodeIoAdapter } from '../io/adapter';
import { findManifest, mapParsedComponents, parseManifest } from '../parsers/custom-elements';

import { processManifestBatch } from './manifest-batch';

/**
 * Walks up from a starting directory to find the nearest ancestor containing package.json.
 *
 * @param startDir - Directory to start searching from.
 * @returns The package root directory, or null if not found.
 */
function findPackageRoot(startDir: string): string | null {
  let dir = path.resolve(startDir);
  let parent = path.dirname(dir);

  while (dir !== parent) {
    if (fs.existsSync(path.join(dir, PACKAGE_JSON))) {
      return dir;
    }
    dir = parent;
    parent = path.dirname(dir);
  }

  return fs.existsSync(path.join(dir, PACKAGE_JSON)) ? dir : null;
}

/**
 * Determines the correct root directory for resolving manifest module paths.
 *
 * When the manifest lives in a subdirectory (e.g., dist/) and the CEM analyzer
 * has stripped a directory prefix from module paths, the manifest's parent directory
 * won't correctly resolve module paths to the source tree. This function uses the
 * inputPath (when provided) to detect and correct the misalignment.
 *
 * @param manifestPath - Absolute path to the manifest file.
 * @param inputPath - User-provided input path (--path option), if any.
 * @returns The root directory to use for resolving manifest module paths.
 */
function resolvePackageRoot(manifestPath: string, inputPath?: string): string {
  const manifestDir = path.dirname(manifestPath);
  const pkgRoot = findPackageRoot(manifestDir);

  // No package.json found or no input path provided — use manifest directory.
  if (!pkgRoot || !inputPath) {
    return pkgRoot ?? manifestDir;
  }

  // If the manifest is at the package root, use it directly.
  if (path.resolve(manifestDir) === path.resolve(pkgRoot)) {
    return pkgRoot;
  }

  // The manifest is in a subdirectory (e.g., dist/). Check if the inputPath
  // can help us resolve module paths. The inputPath typically points into the
  // source tree (e.g., 'src/components'). We use its parent as the resolution
  // root so that module paths like 'components/button/...' resolve correctly
  // under 'src/components/button/...'.
  const resolvedInput = path.resolve(inputPath);
  const inputBasename = path.basename(resolvedInput);

  // Walk up from inputPath to find an ancestor that is within the package root.
  // Use inputPath's parent as packageRoot when the inputPath directory name
  // matches a plausible first segment of module paths.
  if (resolvedInput.startsWith(pkgRoot) && inputBasename.length > 0) {
    const candidate = path.dirname(resolvedInput);
    return candidate;
  }

  return pkgRoot;
}

interface RunnerContext {
  readonly options: ConnectOptions;
  readonly logger: Logger;
  readonly timer: ReportTimer;
  readonly emitters: readonly Emitter[];
  readonly manifestModels: readonly ComponentModel[];
  readonly results: readonly ComponentResult[];
  readonly componentResults: readonly ComponentResult[];
  readonly stopEarly: boolean;
  readonly report?: GenerationReport;
}

type RunnerStep = (state: Result<RunnerContext>) => Result<RunnerContext>;

/**
 * Appends diagnostics to the runner results collection.
 *
 * @param state - Current runner state.
 * @param diagnostics - Diagnostics to append.
 * @returns Updated runner state.
 */
const appendDiagnosticResult = (state: Result<RunnerContext>, diagnostics: Diagnostics): Result<RunnerContext> => {
  const diagnosticResult = applyDiagnostics(createResultWithDiagnostics(createEmptyComponentResult(), diagnostics));
  return mapResult(state, (context) => ({
    ...context,
    results: [...context.results, diagnosticResult],
  }));
};

/**
 * Runs each pipeline step in order, short-circuiting when stopEarly is set.
 * Implements the Chain of Responsibility pattern — each step is skipped
 * automatically once any prior step signals early termination.
 *
 * @param state - Current runner state.
 * @param steps - Steps to execute.
 * @returns Updated runner state.
 */
const runSteps = (state: Result<RunnerContext>, steps: readonly RunnerStep[]): Result<RunnerContext> =>
  steps.reduce((current, step) => (current.value.stopEarly ? current : step(current)), state);

/**
 * Warns when no emitters are configured.
 *
 * @param state - Current runner state.
 * @returns Updated runner state.
 */
const warnOnMissingEmittersStep: RunnerStep = (state) => {
  if (state.value.emitters.length === 0) {
    return appendDiagnosticResult(state, {
      warnings: ['No emitters selected. Use --emit to specify targets.'],
    });
  }

  return state;
};

/**
 * Finalizes the generation report.
 *
 * @param state - Current runner state.
 * @returns Updated runner state.
 */
const finalizeReportStep: RunnerStep = (state) => {
  const { componentResults, manifestModels, results, timer } = state.value;
  const report = {
    ...results.reduce(reportReducer, createEmptyReport()),
    durationMs: timer.stop(),
  };
  const hasComponents = manifestModels.length > 0;
  const reportWithComponents = hasComponents ? { ...report, componentResults } : report;

  return mapResult(state, (context) => ({
    ...context,
    report: reportWithComponents,
  }));
};

// ============================================================================
// Manifest-Based Pipeline Steps
// ============================================================================

/**
 * Resolves the manifest path from options, auto-detecting when possible.
 *
 * @param state - Current runner state.
 * @returns Updated runner state with manifest path resolved.
 */
const resolveManifestStep: RunnerStep = (state) => {
  const { logger, options } = state.value;
  const manifestSource = options.manifestPath ?? options.inputPath;

  logger.info('Resolving custom-elements.json manifest...', {
    source: manifestSource,
  });

  const manifestPath = findManifest(manifestSource);

  if (!manifestPath) {
    const next = appendDiagnosticResult(state, {
      errors: [`custom-elements.json manifest not found. Searched from: ${manifestSource}`],
    });
    return mapResult(next, (context) => ({
      ...context,
      stopEarly: true,
    }));
  }

  logger.info('Manifest found.', { manifestPath });

  return mapResult(state, (context) => ({
    ...context,
    options: { ...context.options, manifestPath },
  }));
};

/**
 * Parses the manifest and maps entries to ComponentModels.
 *
 * @param state - Current runner state.
 * @returns Updated runner state with parsed component models.
 */
const parseManifestStep: RunnerStep = (state) => {
  const { logger, options } = state.value;
  const manifestPath = options.manifestPath!;

  // Determine the root directory for resolving manifest module paths.
  //
  // The manifest may live in an output directory (e.g., dist/) while module paths
  // are relative to the source tree. To correctly resolve paths, we:
  // 1. Find the nearest package root (directory with package.json) as the base.
  // 2. If an inputPath is provided, verify resolution against it. When the module
  //    paths don't align with the package root (e.g., because the CEM analyzer
  //    stripped a directory prefix like 'src/'), use the inputPath to infer the
  //    correct resolution root by matching the first module path segment.
  // 3. Fall back to the manifest's parent directory.
  const packageRoot = resolvePackageRoot(manifestPath, options.inputPath);

  logger.info('Parsing custom-elements.json manifest...');

  try {
    const parsed = parseManifest(manifestPath);

    if (parsed.length === 0) {
      const next = appendDiagnosticResult(state, {
        warnings: ['No custom element declarations found in manifest.'],
      });
      return mapResult(next, (context) => ({
        ...context,
        manifestModels: [],
        stopEarly: true,
      }));
    }

    const models = mapParsedComponents(parsed, { packageRoot });

    logger.info('Components parsed from manifest.', {
      count: models.length,
    });

    return mapResult(state, (context) => ({
      ...context,
      manifestModels: models,
    }));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const next = appendDiagnosticResult(state, {
      errors: [`Failed to parse manifest: ${message}`],
    });
    return mapResult(next, (context) => ({
      ...context,
      stopEarly: true,
    }));
  }
};

/**
 * Initializes emitters for manifest-based processing.
 *
 * @param state - Current runner state.
 * @returns Updated runner state with emitters.
 */
const initializeManifestEmittersStep: RunnerStep = (state) => {
  const { options } = state.value;
  const emitters = createEmitters({ targets: options.emitTargets });

  return mapResult(state, (context) => ({
    ...context,
    emitters,
  }));
};

/**
 * Runs the manifest batch processor over parsed component models.
 *
 * @param state - Current runner state.
 * @returns Updated runner state with component results.
 */
const runManifestBatchStep: RunnerStep = (state) => {
  const { emitters, manifestModels, options } = state.value;

  const aggregate = processManifestBatch(manifestModels, {
    emitters,
    dryRun: options.dryRun,
    force: options.force,
    io: nodeIoAdapter,
    baseImportPath: options.baseImportPath,
    continueOnError: options.continueOnError,
  });
  const componentResults: ComponentResult[] = applyAggregateDiagnostics(aggregate);

  return mapResult(state, (context) => ({
    ...context,
    componentResults,
    results: [...context.results, ...componentResults],
  }));
};

// ============================================================================
// Pipeline Orchestration
// ============================================================================

/**
 * Runs the connect pipeline using custom-elements.json manifest parsing.
 *
 * @param options - Connect pipeline options.
 * @param logger - Logger instance for pipeline output.
 * @returns Generation report for the pipeline run.
 */
export async function runConnectPipeline(options: ConnectOptions, logger: Logger): Promise<GenerationReport> {
  logger.info('Using custom-elements.json manifest for component discovery.');

  const initialContext: RunnerContext = {
    options,
    logger,
    timer: createReportTimer(),
    emitters: [],
    manifestModels: [],
    results: [],
    componentResults: [],
    stopEarly: false,
    report: undefined,
  };

  const steps: RunnerStep[] = [
    resolveManifestStep,
    parseManifestStep,
    initializeManifestEmittersStep,
    warnOnMissingEmittersStep,
    runManifestBatchStep,
    finalizeReportStep,
  ];

  const finalState = runSteps(createResult(initialContext), steps);

  if (finalState.value.report) {
    return finalState.value.report;
  }

  return {
    ...finalState.value.results.reduce(reportReducer, createEmptyReport()),
    durationMs: finalState.value.timer.stop(),
  };
}
// End AI-Assisted
