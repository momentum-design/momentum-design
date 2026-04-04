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
 * CLI Validators Module
 *
 * Provides validation functions for CLI options and arguments.
 *
 * @module cli/validators
 */

import fs from 'node:fs';
import path from 'node:path';

import type { GlobalCliOptions } from './types';

/**
 * Validates global options for incompatible combinations.
 *
 * @param options - The global CLI options to validate.
 * @throws Error if options contain incompatible combinations.
 */
export function validateGlobalOptions(options: GlobalCliOptions): void {
  if (options.verbose && options.quiet) {
    throw new Error('Cannot use --verbose and --quiet together.');
  }
}

/**
 * Resolves a relative path to absolute and verifies it exists on disk.
 * Shared helper that eliminates duplication between path validators (Fowler: Extract Method).
 *
 * @param value - The raw path value.
 * @param errorLabel - Label for error messages (e.g., the option name or "Config file").
 * @returns The resolved absolute path.
 * @throws Error if the path does not exist.
 */
function resolveAndVerify(value: string, errorLabel: string): string {
  const resolved = path.resolve(process.cwd(), value);

  if (!fs.existsSync(resolved)) {
    throw new Error(`${errorLabel} not found: ${value}`);
  }

  return resolved;
}

/**
 * Validates and resolves the path option.
 *
 * @param value - The path value to validate.
 * @param optionName - The option name for error messages.
 * @returns The resolved absolute path.
 * @throws Error if the path is empty or does not exist.
 */
export function validatePathOption(value: string, optionName = '--path'): string {
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required value for ${optionName}.`);
  }

  return resolveAndVerify(value, 'Path');
}
// Emit target parsing lives in core to avoid duplicate logic.
// End AI-Assisted
