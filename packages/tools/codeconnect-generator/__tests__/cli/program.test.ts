// AI-Assisted
/**
 * @fileoverview Tests for CLI program helpers.
 */

import { Command } from 'commander';

import * as optionsModule from '../../src/cli/options';
import * as programModule from '../../src/cli/program';

describe('cli program', () => {
  it('should register the connect command and help text', () => {
    const program = programModule.createProgram();
    const commandNames = program.commands.map((command) => command.name());

    expect(commandNames).toContain('connect');

    const helpText = program.helpInformation();
    expect(helpText).toContain('Usage: codeconnect-generator');
    expect(helpText).toContain('connect [options]');
  });

  it('should resolve global options with parent fallback', () => {
    const command = {
      opts: () => ({ verbose: true, dryRun: true }),
      parent: {
        opts: () => ({ quiet: false, dryRun: false }),
      },
    } as unknown as Parameters<typeof optionsModule.getGlobalOptions>[0];

    const options = optionsModule.getGlobalOptions(command);
    expect(options.verbose).toBe(true);
    expect(options.quiet).toBe(false);
    expect(options.dryRun).toBe(true);
  });

  it('should return false for missing parent options', () => {
    const command = {
      opts: () => ({}),
      parent: undefined,
    } as unknown as Parameters<typeof optionsModule.getGlobalOptions>[0];

    const options = optionsModule.getGlobalOptions(command);
    expect(options.verbose).toBe(false);
    expect(options.quiet).toBe(false);
    expect(options.dryRun).toBe(false);
  });

  it('should prefer local false values over parent true values', () => {
    const command = {
      opts: () => ({ verbose: false, quiet: false, dryRun: false }),
      parent: {
        opts: () => ({ verbose: true, quiet: true, dryRun: true }),
      },
    } as unknown as Parameters<typeof optionsModule.getGlobalOptions>[0];

    const options = optionsModule.getGlobalOptions(command);
    expect(options.verbose).toBe(false);
    expect(options.quiet).toBe(false);
    expect(options.dryRun).toBe(false);
  });

  it('should add global options to the program', () => {
    const program = new Command();
    programModule.addGlobalOptions(program);

    const optionFlags = (program as any).options.map((option: any) => option.flags);
    expect(optionFlags).toContain('-v, --verbose');
    expect(optionFlags).toContain('-q, --quiet');
    expect(optionFlags).toContain('-d, --dry-run');
  });

  it('should format help output with required option markers', () => {
    const program = new Command('test');
    program.requiredOption('-p, --path <path>', 'Path to input');
    program.option('-v, --verbose', 'Verbose output');

    programModule.applyHelpFormatting(program);

    const helpText = program.helpInformation();
    expect(helpText).toContain('-p | --path <path> (required)');
    expect(helpText).toContain('-v | --verbose');
  });

  it('should run the CLI program parser', async () => {
    const parseSpy = jest.spyOn(Command.prototype, 'parseAsync').mockResolvedValue(undefined as unknown as Command);

    await programModule.run(['node', 'codeconnect-generator']);

    expect(parseSpy).toHaveBeenCalled();

    parseSpy.mockRestore();
  });

  it('should run with default argv when none is provided', async () => {
    const parseSpy = jest.spyOn(Command.prototype, 'parseAsync').mockResolvedValue(undefined as unknown as Command);

    await programModule.run();

    expect(parseSpy).toHaveBeenCalled();

    parseSpy.mockRestore();
  });

  it('should load package metadata when available', () => {
    const packageJson = JSON.stringify({
      description: 'Custom CLI',
      version: '9.9.9',
    });

    jest.resetModules();
    jest.doMock('node:fs', () => ({
      readFileSync: jest.fn(() => packageJson),
    }));

    jest.isolateModules(() => {
      const { createProgram } = require('../../src/cli/program') as typeof programModule;
      const program = createProgram();

      expect(program.description()).toBe('Custom CLI');
      expect((program as any).version()).toBe('9.9.9');
    });

    jest.dontMock('node:fs');
  });

  it('should fall back to default metadata when package.json cannot be read', () => {
    jest.resetModules();
    jest.doMock('node:fs', () => ({
      readFileSync: jest.fn(() => {
        throw new Error('ENOENT');
      }),
    }));

    jest.isolateModules(() => {
      const { createProgram } = require('../../src/cli/program') as typeof programModule;
      const program = createProgram();

      expect(program.description()).toBe('Figma connect management tool');
      expect((program as any).version()).toBe('1.0.0');
    });

    jest.dontMock('node:fs');
  });

  it('should use default values for missing metadata fields', () => {
    const packageJson = JSON.stringify({
      description: 'Only Description',
    });

    jest.resetModules();
    jest.doMock('node:fs', () => ({
      readFileSync: jest.fn(() => packageJson),
    }));

    jest.isolateModules(() => {
      const { createProgram } = require('../../src/cli/program') as typeof programModule;
      const program = createProgram();

      expect(program.description()).toBe('Only Description');
      expect((program as any).version()).toBe('1.0.0');
    });

    jest.dontMock('node:fs');
  });

  it('should use default description when description is missing', () => {
    const packageJson = JSON.stringify({
      version: '2.0.0',
    });

    jest.resetModules();
    jest.doMock('node:fs', () => ({
      readFileSync: jest.fn(() => packageJson),
    }));

    jest.isolateModules(() => {
      const { createProgram } = require('../../src/cli/program') as typeof programModule;
      const program = createProgram();

      expect(program.description()).toBe('Figma connect management tool');
      expect((program as any).version()).toBe('2.0.0');
    });

    jest.dontMock('node:fs');
  });
});
// End AI-Assisted
