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
 * CLI Program Module
 *
 * Provides the main CLI program factory and configuration utilities.
 *
 * @module cli/program
 */

import fs from 'node:fs';
import path from 'node:path';

import { Command } from 'commander';

import { registerCommands } from '../commands/registry';
import { DEFAULT_CONNECT_OPTIONS } from '../core/constants';

/** Commander Command instance type. */
type CommandInstance = InstanceType<typeof Command>;

/** Package metadata loaded from package.json */
interface PackageJson {
  description?: string;
  version?: string;
}

/**
 * Reads package.json from the package root.
 * @returns Package metadata.
 */
function getPackageMetadata(): PackageJson {
  try {
    // When built, this file is at dist/src/cli/program.js
    // package.json is at the package root (../../.. from dist/src/cli/)
    const packageJsonPath = path.resolve(__dirname, '../../../package.json');
    const content = fs.readFileSync(packageJsonPath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return { description: 'Figma connect management tool', version: '1.0.0' };
  }
}

const { description = 'Figma connect management tool', version = '1.0.0' } = getPackageMetadata();

/**
 * Creates and configures the main CLI program.
 *
 * Sets up the program with name, description, version, global options,
 * and help formatting. Commands are registered from the command registry.
 *
 * @returns The configured Commander program instance.
 */
export function createProgram(): CommandInstance {
  const program = new Command();

  program.name('codeconnect-generator').description(description).version(version);

  addGlobalOptions(program);
  applyHelpFormatting(program);
  registerCommands(program);

  return program;
}

/**
 * Main entry point for the CLI.
 *
 * Parses command-line arguments and executes the appropriate command.
 *
 * @param argv - Command-line arguments. Defaults to process.argv.
 */
export async function run(argv: string[] = process.argv): Promise<void> {
  const program = createProgram();
  await program.parseAsync(argv);
}

/**
 * Adds global options shared across all commands.
 *
 * @param program - The Commander program instance.
 */
export function addGlobalOptions(program: CommandInstance): void {
  program
    .option('-v, --verbose', 'Enable verbose logging', false)
    .option('-q, --quiet', 'Suppress non-error output', false)
    .option('-d, --dry-run', 'Preview changes without writing files', DEFAULT_CONNECT_OPTIONS.dryRun);
}

/**
 * Applies consistent help formatting for better readability.
 *
 * Configures option display formatting and adds usage examples.
 *
 * @param program - The Commander program instance.
 */
export function applyHelpFormatting(program: CommandInstance): void {
  program.configureHelp({
    sortSubcommands: true,
    sortOptions: false,
    /**
     * Formats the option flags for help output.
     *
     * @param option - Commander option metadata.
     * @returns Formatted option display string.
     */
    optionTerm: (option) => {
      const flags = option.flags.replace(', ', ' | ');
      const required = option.mandatory ? ' (required)' : '';
      return `${flags}${required}`;
    },
  });

  program.addHelpText(
    'afterAll',
    [
      '',
      'Examples:',
      '  codeconnect-generator connect --path ./packages/components/src/components/accordion',
      '  codeconnect-generator connect --path ./packages/components',
      '  codeconnect-generator connect --path ./packages/components --manifest ./custom-elements.json',
      '  codeconnect-generator connect --path ./packages/components/src/components --emit webcomponent',
    ].join('\n'),
  );
}

// End AI-Assisted
