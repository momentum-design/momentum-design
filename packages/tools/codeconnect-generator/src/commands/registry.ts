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
 * Command Registry
 *
 * Manages registration and retrieval of CLI commands.
 *
 * @module commands/registry
 */
import { Command } from 'commander';

import { connectCommand } from './connect';

type CommandInstance = InstanceType<typeof Command>;
const COMMANDS: readonly CommandInstance[] = [connectCommand];

/**
 * Returns the list of registered command names.
 *
 * @returns Array of command names in registry order.
 */
export const listCommandNames = (): string[] => COMMANDS.map((command) => command.name());

/**
 * Registers all commands with the Commander program instance.
 *
 * @param program - Commander program instance to register commands with.
 * @returns Nothing.
 */
export function registerCommands(program: CommandInstance): void {
  COMMANDS.forEach((command) => program.addCommand(command));
}
// End AI-Assisted
