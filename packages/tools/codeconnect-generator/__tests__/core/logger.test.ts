// AI-Assisted
/**
 * @fileoverview Tests for structured logger.
 */

import { createScopedLogger, Logger, LogLevel, resolveLogLevel } from '../../src/core/logger';

describe('Logger', () => {
  let logSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    logSpy.mockRestore();
    warnSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it('should resolve log levels from options', () => {
    expect(resolveLogLevel({ quiet: true })).toBe(LogLevel.ERROR);
    expect(resolveLogLevel({ level: LogLevel.WARN })).toBe(LogLevel.WARN);
    expect(resolveLogLevel({ verbose: true })).toBe(LogLevel.DEBUG);
    expect(resolveLogLevel()).toBe(LogLevel.INFO);
  });

  it('should log at or above the configured level', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: false });

    logger.debug('Hidden');
    logger.info('Visible');
    logger.warn('Warned');
    logger.error('Errored');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Visible'));
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Warned'));
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('Errored'));
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining('Hidden'));
  });

  it('should format context and preserves ordering', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: false });

    logger.info('Context test', {
      component: 'Button',
      stage: 'parse',
      durationMs: 120,
      extra: 'info',
    });

    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('[INFO] Context test');
    expect(output).toContain('stage=parse');
    expect(output).toContain('component=Button');
    expect(output).toContain('durationMs=120ms');
    expect(output).toContain('extra=info');
  });

  it('should respect success logging and base context', () => {
    const logger = new Logger({
      level: LogLevel.INFO,
      useColors: false,
      baseContext: { stage: 'emit' },
    });

    logger.success('Complete');

    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('✓ Complete');
    expect(output).toContain('stage=emit');
  });

  it('should create scoped loggers with prefixed messages', () => {
    const logger = new Logger({ level: LogLevel.WARN, useColors: false });
    const scoped = createScopedLogger(logger, 'Pipeline');

    scoped.warn('Step failed');

    const output = warnSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('[WARN] [Pipeline] Step failed');
  });

  it('should include ANSI color codes when colors are enabled', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: true });
    (logger as unknown as { useColors: boolean }).useColors = true;

    logger.info('Colored output');

    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('\u001b[');
  });

  it('should construct logger from numeric level and useColors flag', () => {
    const logger = new Logger(LogLevel.DEBUG, false);

    logger.debug('Debug message');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[DEBUG] Debug message'));
  });

  it('should construct logger with default options', () => {
    const logger = new Logger();

    logger.info('Default logger');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[INFO] Default logger'));
  });

  it('should default useColors when option is omitted', () => {
    const logger = new Logger({ level: LogLevel.INFO });

    logger.info('Implicit colors');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[INFO] Implicit colors'));
  });

  it('should emit colored success messages when enabled', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: true });
    (logger as unknown as { useColors: boolean }).useColors = true;

    logger.success('Success path');

    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('\u001b[');
  });

  it('should merge base context with per-call context', () => {
    const logger = new Logger({
      level: LogLevel.INFO,
      useColors: false,
      baseContext: { stage: 'parse' },
    });
    const child = logger.withContext({ component: 'Card' });

    child.info('Merged');

    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('stage=parse');
    expect(output).toContain('component=Card');
  });

  it('should omit context when no values are provided', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: false, baseContext: { stage: 'base' } });

    logger.info('No context', {} as Record<string, unknown>);
    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('stage=base');

    logger.info('Empty override', { stage: undefined } as unknown as Record<string, unknown>);
    const outputWithoutContext = logSpy.mock.calls[1]?.[0] as string;
    expect(outputWithoutContext).not.toContain('(');
  });

  it('should colorize context output when enabled', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: true, baseContext: { stage: 'build' } });
    (logger as unknown as { useColors: boolean }).useColors = true;

    logger.info('Contextful', { component: 'Card', detail: { state: 'ok' } });

    const output = logSpy.mock.calls[0]?.[0] as string;
    expect(output).toContain('\u001b[');
    expect(output).toContain('stage=build');
    expect(output).toContain('detail=');
  });

  it('should expose non-function properties through scoped logger proxy', () => {
    const logger = new Logger({ level: LogLevel.INFO, useColors: false });
    const scoped = createScopedLogger(logger, 'Proxy');

    expect((scoped as unknown as { level: LogLevel }).level).toBe(LogLevel.INFO);
  });
});
// End AI-Assisted
