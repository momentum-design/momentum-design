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
 * Emitter Factory Module
 *
 * Registry-based factory for emitter strategies.
 * Uses a metadata-enriched registry to eliminate branching logic.
 *
 * To add a new emitter target:
 * 1. Implement the Emitter interface
 * 2. Add an entry to EMITTER_REGISTRY with metadata
 * 3. No changes needed in pipeline/orchestration code
 *
 * @module emitters/factory
 */

import { EmitterTarget } from '../core/types';

import { FigmaReactEmitter } from './figma-react';
import { FigmaWebComponentEmitter } from './figma-webcomponent';
import type { Emitter } from './types';

/**
 * Options for selecting emitter targets from the registry.
 */
export interface EmitterFactoryOptions {
  readonly targets: readonly EmitterTarget[];
}

/**
 * Metadata describing an emitter's capabilities and configuration.
 */
export interface EmitterMetadata {
  /** File extension for emitted files (e.g., '.figma.ts' or '.figma.tsx') */
  readonly fileExtension: string;
  /** Display name for CLI/logging */
  readonly displayName: string;
  /** Description of what this emitter generates */
  readonly description: string;
}

/**
 * Registry entry combining factory and metadata.
 */
interface EmitterRegistryEntry {
  readonly factory: () => Emitter;
  readonly metadata: EmitterMetadata;
}

/**
 * Creates a Web Component emitter instance.
 *
 * @returns Web Component emitter.
 */
const createWebComponentEmitter = (): Emitter => new FigmaWebComponentEmitter();

/**
 * Creates a React emitter instance.
 *
 * @returns React emitter.
 */
const createReactEmitter = (): Emitter => new FigmaReactEmitter();

/**
 * Central registry mapping targets to emitter factories and metadata.
 * All emitter selection logic flows through this registry.
 * Mutable to support plugin registration.
 */
const EMITTER_REGISTRY = new Map<EmitterTarget, EmitterRegistryEntry>([
  [
    EmitterTarget.WebComponent,
    {
      factory: createWebComponentEmitter,
      metadata: {
        fileExtension: '.webcomponent.figma.ts',
        displayName: 'Web Component',
        description: 'Figma Code Connect for HTML/Web Components',
      },
    },
  ],
  [
    EmitterTarget.React,
    {
      factory: createReactEmitter,
      metadata: {
        fileExtension: '.react.figma.tsx',
        displayName: 'React',
        description: 'Figma Code Connect for React components',
      },
    },
  ],
]);

/**
 * Plugin registration options for emitters.
 */
export interface EmitterPluginOptions {
  readonly target: EmitterTarget;
  readonly factory: () => Emitter;
  readonly metadata: EmitterMetadata;
}

/**
 * Registers a new emitter plugin at runtime.
 * Allows external packages to extend emitter support without modifying this file.
 *
 * @param options - Plugin configuration.
 * @throws Error if target is already registered.
 *
 * @example
 * ```typescript
 * import { registerEmitterPlugin } from '@momentum-design/codeconnect-generator/emitters/factory';
 *
 * registerEmitterPlugin({
 *   target: EmitterTarget.MyCustomTarget,
 *   factory: () => new MyCustomEmitter(),
 *   metadata: {
 *     fileExtension: '.custom.figma.ts',
 *     displayName: 'My Custom Target',
 *     description: 'Custom emitter for specialized components',
 *   },
 * });
 * ```
 */
export const registerEmitterPlugin = (options: EmitterPluginOptions): void => {
  if (EMITTER_REGISTRY.has(options.target)) {
    throw new Error(`Emitter plugin already registered for target: ${options.target}`);
  }
  EMITTER_REGISTRY.set(options.target, {
    factory: options.factory,
    metadata: options.metadata,
  });
};

/**
 * Checks if an emitter target is registered.
 *
 * @param target - Target to check.
 * @returns True if registered.
 */
export const hasEmitterPlugin = (target: EmitterTarget): boolean => EMITTER_REGISTRY.has(target);

/**
 * Returns the list of registered emitter targets.
 *
 * @returns Array of registered emitter targets.
 */
export const listEmitterTargets = (): EmitterTarget[] => [...EMITTER_REGISTRY.keys()];

/**
 * Gets metadata for a specific emitter target.
 *
 * @param target - Emitter target to query.
 * @returns Metadata for the target.
 */
export const getEmitterMetadata = (target: EmitterTarget): EmitterMetadata => {
  const entry = EMITTER_REGISTRY.get(target);
  if (!entry) {
    throw new Error(`No emitter registered for target: ${target}`);
  }
  return entry.metadata;
};

/**
 * Gets metadata for all registered emitters.
 *
 * @returns Map of targets to their metadata.
 */
export const getAllEmitterMetadata = (): ReadonlyMap<EmitterTarget, EmitterMetadata> =>
  new Map(Array.from(EMITTER_REGISTRY, ([target, entry]) => [target, entry.metadata]));

/**
 * Creates a single emitter instance for the requested target.
 *
 * @param target - Emitter target to instantiate.
 * @returns Emitter instance for the target.
 */
export const createEmitter = (target: EmitterTarget): Emitter => {
  const entry = EMITTER_REGISTRY.get(target);
  if (!entry) {
    throw new Error(`No emitter registered for target: ${target}`);
  }
  return entry.factory();
};

/**
 * Creates emitter instances for the requested targets.
 * Uses only targets that exist in the registry (silently skips unknown targets).
 *
 * @param options - Factory options including target list.
 * @returns Array of emitter instances in registry order.
 */
export const createEmitters = (options: EmitterFactoryOptions): Emitter[] => {
  const targets = new Set(options.targets);

  // Iterate in registry order to ensure consistent output
  return Array.from(EMITTER_REGISTRY)
    .filter(([target]) => targets.has(target))
    .map(([, entry]) => entry.factory());
};
// End AI-Assisted
