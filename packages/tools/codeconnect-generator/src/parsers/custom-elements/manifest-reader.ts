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
 * Custom Elements Manifest Reader
 *
 * Reads and parses the custom-elements.json manifest file,
 * extracting component metadata for downstream mapping.
 *
 * @module parsers/custom-elements/manifest-reader
 */

import fs from 'node:fs';
import path from 'node:path';

import { CUSTOM_ELEMENTS_MANIFEST, DIST_DIR, NODE_MODULES_DIR } from '../../core/constants';

import type {
  CustomElementsManifest,
  ManifestAttribute,
  ManifestClassDeclaration,
  ManifestEvent,
  ManifestModule,
  ParsedAttribute,
  ParsedComponent,
  ParsedCSSProperty,
  ParsedEvent,
  ParsedSlot,
} from './types';

const CUSTOM_ELEMENTS_MANIFEST_FILE_NAME = CUSTOM_ELEMENTS_MANIFEST;

// ============================================================================
// Type Normalization
// ============================================================================

/** Common type aliases mapped to their canonical TypeScript equivalents. */
const TYPE_ALIASES: Readonly<Record<string, string>> = {
  string: 'string',
  boolean: 'boolean',
  number: 'number',
  String: 'string',
  Boolean: 'boolean',
  Number: 'number',
  undefined: 'undefined',
  null: 'null',
};

/**
 * Normalizes a type string from the manifest into a canonical TypeScript type.
 * Handles union types, aliases, and missing values.
 *
 * @param typeText - The raw type text from the manifest.
 * @returns Normalized type string.
 */
export const normalizeTypeString = (typeText: string | undefined): string => {
  if (!typeText) {
    return 'unknown';
  }

  if (typeText.includes('|')) {
    return typeText
      .split('|')
      .map((part) => part.trim())
      .map((part) => TYPE_ALIASES[part] ?? part)
      .join(' | ');
  }

  return TYPE_ALIASES[typeText] ?? typeText;
};

// ============================================================================
// Manifest Parsing
// ============================================================================

/**
 * Checks whether a declaration is a custom element class with a tag name.
 *
 * @param declaration - Manifest declaration to inspect.
 * @returns True if the declaration is a class with a tagName.
 */
const isCustomElementClass = (declaration: ManifestClassDeclaration): boolean =>
  declaration.kind === 'class' && Boolean(declaration.tagName);

/**
 * Maps a manifest attribute to a parsed attribute.
 *
 * @param attr - Manifest attribute entry.
 * @returns Parsed attribute with normalized type.
 */
const mapAttribute = (attr: ManifestAttribute): ParsedAttribute => ({
  name: attr.name,
  type: normalizeTypeString(attr.type?.text),
  default: attr.default,
  description: attr.description,
  fieldName: attr.fieldName,
  required: attr.default === undefined,
});

/**
 * Extracts a ParsedComponent from a manifest class declaration.
 *
 * @param declaration - The class declaration to extract from.
 * @param modulePath - The module path containing this declaration.
 * @returns Parsed component metadata.
 */
const extractComponent = (declaration: ManifestClassDeclaration, modulePath: string): ParsedComponent => ({
  className: declaration.name,
  tagName: declaration.tagName!,
  modulePath,
  description: declaration.description ?? '',
  attributes: (declaration.attributes ?? []).map(mapAttribute),
  events: (declaration.events ?? [])
    .filter((event): event is ManifestEvent & { name: string } => Boolean(event.name))
    .map(
      (event): ParsedEvent => ({
        name: event.name,
        type: normalizeTypeString(event.type?.text),
        description: event.description,
      }),
    ),
  slots: (declaration.slots ?? []).map(
    (slot): ParsedSlot => ({
      name: slot.name,
      description: slot.description,
    }),
  ),
  cssProperties: (declaration.cssProperties ?? []).map(
    (prop): ParsedCSSProperty => ({
      name: prop.name,
      default: prop.default,
      description: prop.description,
    }),
  ),
});

/**
 * Processes a single manifest module, extracting all custom element declarations.
 *
 * @param module - The manifest module to process.
 * @returns Array of parsed components found in the module.
 */
const processModule = (module: ManifestModule): ParsedComponent[] => {
  if (!module.declarations) {
    return [];
  }

  return module.declarations
    .filter((d): d is ManifestClassDeclaration => d.kind === 'class')
    .filter(isCustomElementClass)
    .map((declaration) => extractComponent(declaration, module.path));
};

/**
 * Parses a custom-elements.json manifest and extracts component information.
 *
 * @param manifestPath - Absolute path to the custom-elements.json file.
 * @returns Array of parsed components.
 * @throws Error if the file cannot be read or parsed.
 */
export const parseManifest = (manifestPath: string): ParsedComponent[] => {
  const content = fs.readFileSync(manifestPath, 'utf-8');
  const manifest: CustomElementsManifest = JSON.parse(content);

  return manifest.modules.flatMap(processModule);
};

// ============================================================================
// Manifest Discovery
// ============================================================================

/**
 * Attempts to find a custom-elements.json manifest file by searching
 * common locations relative to a given base path.
 *
 * Search order:
 * 1. Direct path (if baseOrFile is a .json file)
 * 2. `custom-elements.json` in the current directory and each parent directory
 * 3. `dist/custom-elements.json` in the current directory and each parent directory
 * 4. `node_modules/@momentum-design/components/custom-elements.json` in each parent directory
 *
 * @param baseOrFile - Base directory or explicit manifest file path.
 * @returns Absolute path to the manifest, or null if not found.
 */
export const findManifest = (baseOrFile: string): string | null => {
  const resolved = path.resolve(baseOrFile);

  // Direct file path
  if (resolved.endsWith('.json') && fs.existsSync(resolved)) {
    return resolved;
  }

  const resolvedExists = fs.existsSync(resolved);
  let startDir = resolved;
  if (resolvedExists && fs.statSync(resolved).isFile()) {
    startDir = path.dirname(resolved);
  }

  let searchDir = startDir;
  let shouldContinue = true;

  while (shouldContinue) {
    const localManifest = path.join(searchDir, CUSTOM_ELEMENTS_MANIFEST_FILE_NAME);
    if (fs.existsSync(localManifest)) {
      return localManifest;
    }

    const distManifest = path.join(searchDir, DIST_DIR, CUSTOM_ELEMENTS_MANIFEST_FILE_NAME);
    if (fs.existsSync(distManifest)) {
      return distManifest;
    }

    const dependencyManifest = path.join(
      searchDir,
      NODE_MODULES_DIR,
      '@momentum-design',
      'components',
      CUSTOM_ELEMENTS_MANIFEST_FILE_NAME,
    );
    if (fs.existsSync(dependencyManifest)) {
      return dependencyManifest;
    }

    const parent = path.dirname(searchDir);
    if (parent === searchDir) {
      shouldContinue = false;
    } else {
      searchDir = parent;
    }
  }

  return null;
};
// End AI-Assisted
