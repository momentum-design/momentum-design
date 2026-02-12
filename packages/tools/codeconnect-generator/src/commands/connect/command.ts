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
import { Command } from 'commander';

import { DEFAULT_CONNECT_OPTIONS } from '../../core/constants';

import { EMIT_TARGET_OPTIONS } from './constants';
import { runConnectCommand } from './handler';

/**
 * Connect Command
 *
 * Generates or updates Figma Code Connect files for Web Components.
 */
export const connectCommand = new Command('connect')
  .description('Generate Figma Code Connect files from custom-elements.json manifest')
  .requiredOption('-p, --path <path>', 'Base path used for manifest discovery')
  .option('-m, --manifest <path>', 'Path to custom-elements.json manifest (auto-detected if omitted)')
  .option('-d, --dry-run', 'Preview changes without writing files')
  .option('-e, --emit <targets>', `Emit targets: ${EMIT_TARGET_OPTIONS}`, DEFAULT_CONNECT_OPTIONS.emit)
  .option(
    '--continue-on-error',
    'Continue processing components when errors occur',
    DEFAULT_CONNECT_OPTIONS.continueOnError,
  )
  .option('--no-continue-on-error', 'Stop processing on first error')
  .option('--base-import-path <path>', 'Override base import path for generated imports')
  .option('--force', 'Force replacement of files instead of updating', DEFAULT_CONNECT_OPTIONS.force)
  .action(runConnectCommand);
// End AI-Assisted
