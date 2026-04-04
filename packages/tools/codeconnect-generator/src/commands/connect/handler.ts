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
 * Connect Command Handler
 *
 * Handles execution of the connect command.
 *
 * @module commands/connect/handler
 */
import path from 'node:path';

import { Command } from 'commander';

import type { GlobalCliOptions, ProgressIndicator } from '../../cli';
import { getGlobalOptions } from '../../cli/options';
import { createProgressIndicator } from '../../cli/progress';
import { validateGlobalOptions, validatePathOption } from '../../cli/validators';
import { DEFAULT_CONNECT_OPTIONS } from '../../core/constants';
import { parseEmitTargets } from '../../core/emit-targets';
import { Logger, resolveLogLevel } from '../../core/logger';
import { formatReportSummary } from '../../core/report';
import { hasErrors, hasWarnings } from '../../core/result';
import type { ConnectOptions, EmitterTarget, GenerationReport } from '../../core/types';
import { runConnectPipeline } from '../../pipeline';

import { EMIT_TARGETS } from './constants';
import type { ConnectCommandOptions } from './types';

type PipelineReport = GenerationReport;

interface ConnectCommandContext {
  readonly options: ConnectCommandOptions;
  readonly globalOptions: GlobalCliOptions;
  readonly logger: Logger;
  readonly progress: ProgressIndicator;
  readonly inputPath: string;
  readonly emitTargets: readonly EmitterTarget[];
  readonly dryRun: boolean;
  readonly connectOptions: ConnectOptions;
}

interface BuildConnectOptionsInput {
  readonly options: ConnectCommandOptions;
  readonly inputPath: string;
  readonly emitTargets: readonly EmitterTarget[];
  readonly dryRun: boolean;
}

/**
 * Executes the connect command logic with logging and progress reporting.
 *
 * @param options - Parsed command options.
 * @param command - Commander command instance.
 * @returns Nothing.
 */
export async function runConnectCommand(options: ConnectCommandOptions, command: Command): Promise<void> {
  const context = createConnectContext(options, command);

  try {
    context.progress.start('Running connect pipeline');
    const report = await runConnectPipeline(context.connectOptions, context.logger);
    context.progress.stop('Connect pipeline complete', report.status === 'error' ? 'error' : 'success');

    logReportSummary(context.logger, report);
    logDryRunDetails(context.logger, report, context.dryRun);
    logReportDiagnostics(context.logger, report);

    if (report.status === 'error') {
      process.exitCode = 1;
    }
  } catch (error) {
    context.progress.stop('Connect failed', 'error');
    throw error;
  }
}

/**
 * Resolves and validates inputs for the connect command.
 *
 * @param options - Parsed command options.
 * @param command - Commander command instance.
 * @returns Resolved inputs and helpers for command execution.
 */
function createConnectContext(options: ConnectCommandOptions, command: Command): ConnectCommandContext {
  const globalOptions = getGlobalOptions(command);
  validateGlobalOptions(globalOptions);
  const logger = new Logger(resolveLogLevel(globalOptions));
  const progress = createProgressIndicator({ enabled: !globalOptions.quiet });
  const dryRun = resolveDryRun(options, globalOptions);

  progress.start('Validating options');
  const inputPath = validatePathOption(options.path);
  const emitTargets = parseEmitTargets(options.emit, EMIT_TARGETS);
  progress.stop('Options validated');

  logger.info('Connect command initialized.');
  logger.debug('Resolved options', {
    inputPath,
    dryRun,
    emitTargets,
    continueOnError: options.continueOnError,
    baseImportPath: options.baseImportPath,
    force: options.force === true,
    manifest: options.manifest,
  });

  if (dryRun) {
    logger.info('Dry run enabled. No files will be written.');
  }
  if (options.force) {
    logger.info('Force enabled. Connect files will be fully rewritten.');
  }

  return {
    options,
    globalOptions,
    inputPath,
    emitTargets,
    dryRun,
    logger,
    progress,
    connectOptions: buildConnectOptions({
      options,
      inputPath,
      emitTargets,
      dryRun,
    }),
  };
}

/**
 * Resolves the dryRun flag from command options and global options.
 *
 * @param options - Command-specific options.
 * @param globalOptions - Global CLI options.
 * @returns The resolved dryRun boolean value.
 */
function resolveDryRun(options: ConnectCommandOptions, globalOptions: GlobalCliOptions): boolean {
  return options.dryRun ?? globalOptions.dryRun ?? DEFAULT_CONNECT_OPTIONS.dryRun;
}

/**
 * Builds the connect options payload for the pipeline.
 *
 * @param context - Resolved connect command context.
 * @returns Connect pipeline options.
 */
function buildConnectOptions(context: BuildConnectOptionsInput): ConnectOptions {
  const { options, inputPath, emitTargets, dryRun } = context;
  return {
    inputPath,
    dryRun,
    emitTargets,
    continueOnError: options.continueOnError,
    baseImportPath: options.baseImportPath,
    force: options.force ?? DEFAULT_CONNECT_OPTIONS.force,
    manifestPath: options.manifest,
  };
}

/**
 * Logs the summary block for a generation report.
 *
 * @param logger - Logger instance for output.
 * @param report - Generation report to summarize.
 * @returns Nothing.
 */
function logReportSummary(logger: Logger, report: PipelineReport): void {
  logger.info('');
  logger.info('=== Generation Summary ===');
  formatReportSummary(report)
    .split('\n')
    .forEach((line) => logger.info(line));
}

/**
 * Logs dry-run details for each component when enabled.
 *
 * @param logger - Logger instance for output.
 * @param report - Generation report to inspect.
 * @param dryRun - Whether dry-run mode is enabled.
 * @returns Nothing.
 */
function logDryRunDetails(logger: Logger, report: PipelineReport, dryRun: boolean): void {
  if (!dryRun || !report.componentResults?.length) {
    return;
  }

  logger.info('');
  logger.info('=== Dry Run Details ===');

  for (const component of report.componentResults) {
    const name = component.componentName ?? component.model?.className ?? 'UnknownComponent';
    const created = component.created.length;
    const updated = component.updated.length;
    const unchanged = component.unchanged.length;

    logger.info(`${name}: created ${created}, updated ${updated}, unchanged ${unchanged}`);

    if (component.fileChanges && component.fileChanges.length > 0) {
      for (const change of component.fileChanges) {
        const relative = path.relative(process.cwd(), change.filePath) || change.filePath;
        logger.info(`  - ${relative}: ${change.status} (${change.reason})`);
      }
    }
  }
}

/**
 * Logs warnings and errors from the report.
 *
 * @param logger - Logger instance for output.
 * @param report - Generation report to inspect.
 * @returns Nothing.
 */
function logReportDiagnostics(logger: Logger, report: PipelineReport): void {
  if (hasWarnings(report)) {
    logger.warn(`Warnings: ${report.warnings.length}`);
    report.warnings.forEach((warning) => logger.warn(`  - ${warning}`));
  }
  if (hasErrors(report)) {
    logger.error(`Errors: ${report.errors.length}`);
    report.errors.forEach((error) => logger.error(`  - ${error}`));
  }
}
// End AI-Assisted
