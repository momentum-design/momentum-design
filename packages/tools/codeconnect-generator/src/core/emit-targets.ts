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
 * Emit Target Parsing Module
 *
 * Provides normalization for emit target strings.
 *
 * @module core/emit-targets
 */

import { EmitterTarget } from './types';

const ALL_TARGETS = Object.values(EmitterTarget);

/**
 * Returns all registered emit targets.
 *
 * @returns Array of supported emit targets.
 */
export const listEmitTargets = (): EmitterTarget[] => [...ALL_TARGETS];

/**
 * Formats the emit target list for CLI help text.
 *
 * @param targets - Emit targets to format for display.
 * @returns Comma-separated list of targets plus "all".
 */
export const formatEmitTargetOptions = (targets: readonly EmitterTarget[] = listEmitTargets()): string =>
  [...targets, 'all'].join(', ');

/**
 * Parses and validates emit targets from a comma-separated string.
 *
 * @param raw - The raw emit targets string (e.g., "webcomponent,react" or "all").
 * @param allowedTargets - Allowed emit targets to validate against.
 * @returns Array of validated emitter targets.
 * @throws Error if emit targets are empty or contain invalid values.
 */
export function parseEmitTargets(
  raw: string,
  allowedTargets: readonly EmitterTarget[] = listEmitTargets(),
): EmitterTarget[] {
  if (!raw || raw.trim().length === 0) {
    throw new Error('Emit targets cannot be empty.');
  }

  const normalizedTargets = Array.from(new Set(allowedTargets));
  if (normalizedTargets.length === 0) {
    throw new Error('No emit targets registered.');
  }

  const tokens = raw
    .split(',')
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean);

  if (tokens.includes('all')) {
    return normalizedTargets;
  }

  const allowed = new Set<string>(normalizedTargets);
  const invalid = tokens.filter((token) => !allowed.has(token));

  if (invalid.length > 0) {
    throw new Error(
      `Invalid emit targets: ${invalid.join(', ')}. Valid targets are: ${formatEmitTargetOptions(normalizedTargets)}.`,
    );
  }

  const unique = [...new Set(tokens)] as EmitterTarget[];
  if (unique.length === 0) {
    throw new Error('No valid emit targets found.');
  }

  return unique;
}
// End AI-Assisted
