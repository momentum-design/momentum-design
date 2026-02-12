// AI-Assisted
/**
 * @fileoverview Tests for connect command handler.
 */

import { Command } from 'commander';

import { runConnectCommand } from '../../../src/commands/connect/handler';
import type { ConnectCommandOptions } from '../../../src/commands/connect/types';

/** Helper to create a Command instance compatible with handler signatures. */
const createTestCommand = (name: string) => new Command(name) as any;

const mockGetGlobalOptions = jest.fn();
const mockValidateGlobalOptions = jest.fn();
const mockValidatePathOption = jest.fn();
const mockParseEmitTargets = jest.fn();
const mockRunConnectPipeline = jest.fn();
const mockFormatReportSummary = jest.fn();
const mockCreateProgressIndicator = jest.fn();

jest.mock('../../../src/cli/options', () => ({
  getGlobalOptions: (...args: unknown[]) => mockGetGlobalOptions(...args),
}));

jest.mock('../../../src/cli/validators', () => ({
  validateGlobalOptions: (...args: unknown[]) => mockValidateGlobalOptions(...args),
  validatePathOption: (...args: unknown[]) => mockValidatePathOption(...args),
}));

jest.mock('../../../src/cli/progress', () => ({
  createProgressIndicator: (...args: unknown[]) => mockCreateProgressIndicator(...args),
}));

jest.mock('../../../src/core/emit-targets', () => {
  const actual = jest.requireActual('../../../src/core/emit-targets');
  return {
    ...actual,
    parseEmitTargets: (...args: unknown[]) => mockParseEmitTargets(...args),
  };
});

jest.mock('../../../src/pipeline', () => ({
  runConnectPipeline: (...args: unknown[]) => mockRunConnectPipeline(...args),
}));

jest.mock('../../../src/core/report', () => ({
  formatReportSummary: (...args: unknown[]) => mockFormatReportSummary(...args),
}));

jest.mock('../../../src/core/logger', () => {
  const actual = jest.requireActual('../../../src/core/logger');
  return {
    ...actual,
    Logger: jest.fn().mockImplementation(() => ({
      info: jest.fn(),
      debug: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    })),
  };
});

describe('runConnectCommand', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should run the connect pipeline and log diagnostics', async () => {
    const progress = { start: jest.fn(), stop: jest.fn(), update: jest.fn() };
    mockCreateProgressIndicator.mockReturnValue(progress);
    mockGetGlobalOptions.mockReturnValue({ verbose: false, quiet: false, config: undefined });
    mockValidatePathOption.mockReturnValue('/tmp/components');
    mockParseEmitTargets.mockReturnValue(['webcomponent']);
    mockFormatReportSummary.mockReturnValue('Summary line');

    mockRunConnectPipeline.mockResolvedValue({
      status: 'error',
      warnings: ['warn'],
      errors: ['err'],
      componentResults: [
        {
          componentName: 'Demo',
          created: ['file-a'],
          updated: [],
          unchanged: [],
          fileChanges: [{ filePath: '/tmp/file-a', status: 'created', reason: 'new file' }],
        },
      ],
    });

    const options: ConnectCommandOptions = {
      path: './components',
      dryRun: true,
      emit: 'webcomponent',
      continueOnError: true,
    };

    const previousExitCode = process.exitCode;
    process.exitCode = 0;

    await runConnectCommand(options, createTestCommand('connect'));

    expect(mockRunConnectPipeline).toHaveBeenCalledWith(
      expect.objectContaining({
        inputPath: '/tmp/components',
        dryRun: true,
        emitTargets: ['webcomponent'],
        continueOnError: true,
      }),
      expect.any(Object),
    );

    const { Logger } = jest.requireMock('../../../src/core/logger');
    const loggerInstance = Logger.mock.results[0]?.value as { info: jest.Mock; warn: jest.Mock; error: jest.Mock };

    expect(loggerInstance.info).toHaveBeenCalledWith('=== Generation Summary ===');
    expect(loggerInstance.warn).toHaveBeenCalledWith('Warnings: 1');
    expect(loggerInstance.error).toHaveBeenCalledWith('Errors: 1');

    expect(progress.start).toHaveBeenCalledWith('Validating options');
    expect(progress.stop).toHaveBeenCalledWith('Options validated');
    expect(progress.start).toHaveBeenCalledWith('Running connect pipeline');
    expect(progress.stop).toHaveBeenCalledWith('Connect pipeline complete', 'error');

    expect(process.exitCode).toBe(1);
    process.exitCode = previousExitCode;
  });

  it('should stop progress and rethrow when pipeline fails', async () => {
    const progress = { start: jest.fn(), stop: jest.fn(), update: jest.fn() };
    mockCreateProgressIndicator.mockReturnValue(progress);
    mockGetGlobalOptions.mockReturnValue({ verbose: false, quiet: false, config: undefined });
    mockValidatePathOption.mockReturnValue('/tmp/components');
    mockParseEmitTargets.mockReturnValue(['webcomponent']);

    const error = new Error('Pipeline failed');
    mockRunConnectPipeline.mockRejectedValue(error);

    const options: ConnectCommandOptions = {
      path: './components',
      dryRun: false,
      emit: 'webcomponent',
      continueOnError: false,
    };

    await expect(runConnectCommand(options, createTestCommand('connect'))).rejects.toThrow('Pipeline failed');

    expect(progress.stop).toHaveBeenCalledWith('Connect failed', 'error');
  });

  it('should honor global dry-run when command option is undefined', async () => {
    const progress = { start: jest.fn(), stop: jest.fn(), update: jest.fn() };
    mockCreateProgressIndicator.mockReturnValue(progress);
    mockGetGlobalOptions.mockReturnValue({
      verbose: false,
      quiet: false,
      dryRun: true,
      config: undefined,
    });
    mockValidatePathOption.mockReturnValue('/tmp/components');
    mockParseEmitTargets.mockReturnValue(['webcomponent']);
    mockFormatReportSummary.mockReturnValue('Summary line');

    mockRunConnectPipeline.mockResolvedValue({
      status: 'success',
      warnings: [],
      errors: [],
      componentResults: [],
    });

    const options: ConnectCommandOptions = {
      path: './components',
      emit: 'webcomponent',
      continueOnError: false,
    };

    await runConnectCommand(options, createTestCommand('connect'));

    expect(mockRunConnectPipeline).toHaveBeenCalledWith(
      expect.objectContaining({
        inputPath: '/tmp/components',
        dryRun: true,
      }),
      expect.any(Object),
    );

    const { Logger } = jest.requireMock('../../../src/core/logger');
    const loggerInstance = Logger.mock.results[0]?.value as { info: jest.Mock };

    expect(loggerInstance.info).toHaveBeenCalledWith('Dry run enabled. No files will be written.');
  });

  it('should skip dry-run details when dryRun is false', async () => {
    const progress = { start: jest.fn(), stop: jest.fn(), update: jest.fn() };
    mockCreateProgressIndicator.mockReturnValue(progress);
    mockGetGlobalOptions.mockReturnValue({ verbose: false, quiet: false, config: undefined });
    mockValidatePathOption.mockReturnValue('/tmp/components');
    mockParseEmitTargets.mockReturnValue(['webcomponent']);
    mockFormatReportSummary.mockReturnValue('Summary line');

    mockRunConnectPipeline.mockResolvedValue({
      status: 'success',
      warnings: [],
      errors: [],
      componentResults: [],
    });

    const options: ConnectCommandOptions = {
      path: './components',
      dryRun: false,
      emit: 'webcomponent',
      continueOnError: false,
    };

    await runConnectCommand(options, createTestCommand('connect'));

    const { Logger } = jest.requireMock('../../../src/core/logger');
    const loggerInstance = Logger.mock.results[0]?.value as { info: jest.Mock };

    expect(loggerInstance.info).not.toHaveBeenCalledWith('=== Dry Run Details ===');
  });

  it('should log dry-run details with fallback names and relative paths', async () => {
    const progress = { start: jest.fn(), stop: jest.fn(), update: jest.fn() };
    mockCreateProgressIndicator.mockReturnValue(progress);
    mockGetGlobalOptions.mockReturnValue({ verbose: false, quiet: false, config: undefined });
    mockValidatePathOption.mockReturnValue('/tmp/components');
    mockParseEmitTargets.mockReturnValue(['webcomponent']);
    mockFormatReportSummary.mockReturnValue('Summary line');

    mockRunConnectPipeline.mockResolvedValue({
      status: 'success',
      warnings: [],
      errors: [],
      componentResults: [
        {
          componentName: undefined,
          model: { className: 'FallbackComponent' } as any,
          created: [],
          updated: [],
          unchanged: [],
          fileChanges: [{ filePath: process.cwd(), status: 'updated', reason: 'manual edit' }],
        },
        {
          componentName: undefined,
          model: undefined,
          created: [],
          updated: [],
          unchanged: [],
          fileChanges: [],
        },
      ],
    });

    const options: ConnectCommandOptions = {
      path: './components',
      dryRun: true,
      emit: 'webcomponent',
      continueOnError: false,
    };

    await runConnectCommand(options, createTestCommand('connect'));

    const { Logger } = jest.requireMock('../../../src/core/logger');
    const loggerInstance = Logger.mock.results[0]?.value as { info: jest.Mock };

    expect(loggerInstance.info).toHaveBeenCalledWith('=== Dry Run Details ===');
    expect(loggerInstance.info).toHaveBeenCalledWith('FallbackComponent: created 0, updated 0, unchanged 0');
    expect(loggerInstance.info).toHaveBeenCalledWith(`  - ${process.cwd()}: updated (manual edit)`);
    expect(loggerInstance.info).toHaveBeenCalledWith('UnknownComponent: created 0, updated 0, unchanged 0');
  });

  it('should skip dry-run details when component results are missing', async () => {
    const progress = { start: jest.fn(), stop: jest.fn(), update: jest.fn() };
    mockCreateProgressIndicator.mockReturnValue(progress);
    mockGetGlobalOptions.mockReturnValue({ verbose: false, quiet: false, config: undefined });
    mockValidatePathOption.mockReturnValue('/tmp/components');
    mockParseEmitTargets.mockReturnValue(['webcomponent']);
    mockFormatReportSummary.mockReturnValue('Summary line');

    mockRunConnectPipeline.mockResolvedValue({
      status: 'success',
      warnings: [],
      errors: [],
    });

    const options: ConnectCommandOptions = {
      path: './components',
      dryRun: true,
      emit: 'webcomponent',
      continueOnError: false,
    };

    await runConnectCommand(options, createTestCommand('connect'));

    const { Logger } = jest.requireMock('../../../src/core/logger');
    const loggerInstance = Logger.mock.results[0]?.value as { info: jest.Mock };

    expect(loggerInstance.info).not.toHaveBeenCalledWith('=== Dry Run Details ===');
  });
});
// End AI-Assisted
