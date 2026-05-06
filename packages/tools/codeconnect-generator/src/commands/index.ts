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
 * Commands Index
 *
 * This module re-exports all CLI commands for easy registration
 * with the main program.
 *
 * @module commands
 *
 * ## Adding New Commands
 *
 * 1. Create a new folder under `./commands/<command-name>/`
 * 2. Create an `index.ts` file that exports a Commander `Command` instance
 * 3. Re-export the command from this file
 * 4. Register the command in `../cli/index.ts`
 *
 * ## Command Structure Convention
 *
 * ```
 * commands/
 *   <command-name>/
 *     index.ts        # Command definition and action handler
 *     types.ts        # Command-specific types (optional)
 *     helpers.ts      # Command-specific helpers (optional)
 * ```
 */
// End AI-Assisted
export * from './connect';
export { listCommandNames, registerCommands } from './registry';
