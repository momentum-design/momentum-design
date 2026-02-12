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
 * Emitter Utilities Module
 *
 * Shared helper functions for code generation emitters.
 * These utilities handle formatting, prop mapping, and code structure.
 *
 * @module emitters/utils
 */

import path from 'node:path';

import { buildGeneratedSectionMarkers, GENERATED_SECTION_MARKERS } from '../core/constants';
import {
  type AttributeDescriptor,
  type ComponentModel,
  type EmitResult,
  type GeneratedSectionMarkers,
  GeneratedSectionName,
  type GeneratedSectionPayload,
  type PropertyDescriptor,
} from '../core/types';
import { normalizePath } from '../utils/paths';

// ============================================================================
// Constants
// ============================================================================

export { buildGeneratedSectionMarkers, GENERATED_SECTION_MARKERS };

// ============================================================================
// String Formatting
// ============================================================================

/**
 * Converts a string to Title Case.
 * Handles camelCase, kebab-case, and snake_case inputs.
 *
 * @param value - The string to convert.
 * @returns The title-cased string (e.g., 'primary' → 'Primary').
 *
 * @example
 * ```typescript
 * toTitleCase('primary'); // 'Primary'
 * toTitleCase('dark-mode'); // 'Dark Mode'
 * ```
 */
export const toTitleCase = (value: string): string =>
  value
    .replaceAll(/[_-]+/g, ' ')
    .replaceAll(/([a-z0-9])([A-Z])/g, '$1 $2')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1).toLowerCase())
    .join(' ');

/**
 * Creates indentation string for the given depth.
 *
 * @param depth - The indentation level (0 = no indent).
 * @returns A string of spaces for indentation.
 */
export const indent = (depth: number): string => '  '.repeat(depth);

/**
 * Indents each line of a content block.
 *
 * @param content - The content to indent.
 * @param depth - The indentation level.
 * @returns Array of indented lines.
 */
export const indentBlock = (content: string, depth: number): string[] => {
  const prefix = indent(depth);
  return content.split('\n').map((line) => `${prefix}${line}`);
};

// ============================================================================
// Identifier Handling
// ============================================================================

/**
 * Checks if a string is a valid JavaScript identifier.
 *
 * @param value - The string to check.
 * @returns True if the string is a valid identifier.
 */
export const isValidIdentifier = (value: string): boolean => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value);

/**
 * Formats a property key for object literal syntax.
 * Returns the key as-is if it's a valid identifier, otherwise quotes it.
 *
 * @param value - The property key.
 * @returns The formatted key (e.g., 'disabled' or "'data-value'").
 */
export const formatPropKey = (value: string): string => (isValidIdentifier(value) ? value : `'${value}'`);

/**
 * Formats a property accessor for template literals.
 *
 * @param value - The property name.
 * @returns The accessor expression (e.g., 'props.disabled' or "props['data-value']").
 */
export const formatPropAccessor = (value: string): string =>
  isValidIdentifier(value) ? `props.${value}` : `props['${value}']`;

// ============================================================================
// Component Naming
// ============================================================================

/**
 * Extracts the base component name from a ComponentModel.
 * Uses the filename pattern `*.component.ts` or falls back to directory name.
 *
 * @param model - The component model.
 * @returns The base name (e.g., 'button' from 'button.component.ts').
 */
export const getComponentBaseName = (model: ComponentModel): string => {
  const fileName = path.posix.basename(normalizePath(model.filePath));
  const pattern = /^(.*)\.component\.[tj]sx?$/i;
  const match = pattern.exec(fileName);
  if (match?.[1]) {
    return match[1];
  }
  return path.posix.basename(normalizePath(model.componentDir));
};

// ============================================================================
// Figma Prop Mapping
// ============================================================================

/**
 * Result of mapping a property to Figma syntax.
 */
export interface FigmaPropMapping {
  /** Lines of code for the Figma mapping expression. */
  readonly lines: string[];
  /** Warning message if the type couldn't be mapped cleanly. */
  readonly warning?: string;
}

/**
 * Strategy lookup table mapping property types to Figma expression builders.
 * Each entry is a function that takes a display label and returns the expression string.
 * Add new entries here to support additional property types without modifying mapPropToFigma.
 */
/**
 * Builds `figma.string(...)` mapping for string properties.
 *
 * @param label - Display label for the property.
 * @returns Figma mapping expression.
 */
const mapStringPropertyType = (label: string): string => `figma.string('${label}')`;

/**
 * Builds `figma.string(...)` mapping for number properties.
 *
 * @param label - Display label for the property.
 * @returns Figma mapping expression.
 */
const mapNumberPropertyType = (label: string): string => `figma.string('${label}')`;

/**
 * Builds `figma.boolean(...)` mapping for boolean properties.
 *
 * @param label - Display label for the property.
 * @returns Figma mapping expression.
 */
const mapBooleanPropertyType = (label: string): string => `figma.boolean('${label}')`;

const FIGMA_TYPE_STRATEGIES: Readonly<Record<string, (label: string) => string>> = {
  string: mapStringPropertyType,
  number: mapNumberPropertyType,
  boolean: mapBooleanPropertyType,
};

/**
 * Maps a property descriptor to Figma Code Connect syntax.
 * Uses a Strategy lookup table for scalar types and specialized handling for enums.
 *
 * @param prop - The property descriptor to map.
 * @returns The Figma mapping expression lines and optional warning.
 *
 * @example
 * ```typescript
 * mapPropToFigma({ name: 'disabled', type: 'boolean' });
 * // { lines: ["figma.boolean('Disabled')"] }
 *
 * mapPropToFigma({ name: 'variant', type: 'enum', enumValues: ['primary', 'secondary'] });
 * // { lines: ["figma.enum('Variant', {", "'Primary': \"primary\",", ...] }
 * ```
 */
export const mapPropToFigma = (prop: PropertyDescriptor): FigmaPropMapping => {
  const label = toTitleCase(prop.name);

  // Handle enum types with values
  if (prop.type === 'enum' && prop.enumValues && prop.enumValues.length > 0) {
    const sorted = [...prop.enumValues].sort((a, b) => a.localeCompare(b));
    const lines = [
      `figma.enum('${label}', {`,
      ...sorted.map((value) => {
        const key = toTitleCase(value);
        return `'${key}': ${JSON.stringify(value)},`;
      }),
      '})',
    ];
    return { lines };
  }

  // Strategy lookup for scalar types
  const strategy = FIGMA_TYPE_STRATEGIES[prop.type];
  if (strategy) {
    return { lines: [strategy(label)] };
  }

  // Unknown type - emit as string with warning
  return {
    lines: [`figma.string('${label}')`],
    warning: `Property '${prop.name}' has unknown type '${prop.type}'. Emitting as figma.string().`,
  };
};

// ============================================================================
// Sorting Helpers
// ============================================================================

/**
 * Sorts items by their name field using localeCompare.
 *
 * @param items - Items with name fields to sort.
 * @returns Sorted array copy.
 */
export const sortByName = <T extends { name: string }>(items: readonly T[]): T[] =>
  [...items].sort((a, b) => a.name.localeCompare(b.name));

/**
 * Builds the props section of a Figma connect call.
 *
 * @param props - The property descriptors to include.
 * @param depth - The indentation depth.
 * @returns Object with lines and any warnings encountered.
 */
export const buildPropsSection = (
  props: readonly PropertyDescriptor[],
  depth = 1,
): { lines: string[]; warnings: string[] } => {
  if (props.length === 0) {
    return {
      lines: [`${indent(depth)}props: {},`],
      warnings: [],
    };
  }

  // Sort deterministically by name
  const sorted = sortByName(props);
  const initial = {
    lines: [`${indent(depth)}props: {`],
    warnings: [] as string[],
  };

  const aggregated = sorted.reduce((acc, prop) => {
    const figmaMapping = mapPropToFigma(prop);
    const propKey = formatPropKey(prop.name);
    const warnings = figmaMapping.warning ? acc.warnings.concat(figmaMapping.warning) : acc.warnings;

    if (figmaMapping.lines.length === 1) {
      return {
        warnings,
        lines: acc.lines.concat(`${indent(depth + 1)}${propKey}: ${figmaMapping.lines[0]},`),
      };
    }

    // Multi-line (enum) handling
    const innerLines = figmaMapping.lines.slice(1, -1).map((innerLine) => `${indent(depth + 2)}${innerLine}`);
    const lastLine = figmaMapping.lines.at(-1);
    const multiLine = [
      `${indent(depth + 1)}${propKey}: ${figmaMapping.lines[0]}`,
      ...innerLines,
      `${indent(depth + 1)}${lastLine},`,
    ];

    return {
      warnings,
      lines: acc.lines.concat(multiLine),
    };
  }, initial);

  return {
    lines: aggregated.lines.concat(`${indent(depth)}},`),
    warnings: aggregated.warnings,
  };
};

// ============================================================================
// Attribute & Event Formatting
// ============================================================================

/**
 * Result of building a web component example template.
 */
export interface ExampleTemplate {
  /** Example function string for figma.connect. */
  readonly example: string;
}

/**
 * Builds the HTML example template for a web component.
 * Uses lit-html template syntax with property bindings.
 *
 * @param tagName - The custom element tag name.
 * @param attributes - The attributes to bind in the template.
 * @returns The example function string and whether it uses props.
 */
export const buildExampleTemplate = (tagName: string, attributes: readonly AttributeDescriptor[]): ExampleTemplate => {
  if (attributes.length === 0) {
    return {
      example: `() => html\`<${tagName}></${tagName}>\``,
    };
  }

  const sorted = sortByName(attributes);
  const bindings = sorted.map((attribute) => {
    const binding = `${attribute.name}=\${${formatPropAccessor(attribute.propertyName)}}`;
    return `${indent(1)}${binding}`;
  });

  const lines = [`<${tagName}`, ...bindings, `></${tagName}>`];
  return {
    example: `props => html\`${lines.join('\n')}\``,
  };
};

/**
 * Builds the example section for React connect files.
 *
 * @param className - Component class name.
 * @returns Formatted example section string.
 */
export const buildReactExampleSection = (className: string): string =>
  ['example: props => {', `${indent(1)}return <${className} {...props} />;`, '},'].join('\n');

/**
 * Wraps content with generated section markers.
 *
 * @param content - The content to wrap.
 * @param markers - Marker strings used to delimit the section.
 * @param depth - The indentation depth for markers.
 * @returns Array of lines with markers.
 */
export const wrapGeneratedSection = (
  content: string,
  markers: GeneratedSectionMarkers = GENERATED_SECTION_MARKERS,
  depth = 1,
): string[] => [`${indent(depth)}${markers.start}`, ...indentBlock(content, depth), `${indent(depth)}${markers.end}`];

// ============================================================================
// File Payload Builders
// ============================================================================

/**
 * Draft state for building an emitter file payload.
 */
export interface FilePayloadDraft {
  /** File path for the emitted payload. */
  readonly filePath: string;
  /** Accumulated file content lines. */
  readonly contentLines: readonly string[];
  /** Accumulated generated section metadata. */
  readonly sections: readonly GeneratedSectionPayload[];
  /** Accumulated warnings. */
  readonly warnings: readonly string[];
}

/**
 * Functional builder for updating a file payload draft.
 */
export type FilePayloadBuilder = (draft: FilePayloadDraft) => FilePayloadDraft;

/**
 * Creates a new file payload draft with default empty values.
 *
 * @param filePath - Target file path.
 * @returns Initialized file payload draft.
 */
export const createFilePayload = (filePath: string): FilePayloadDraft => ({
  filePath,
  contentLines: [],
  sections: [],
  warnings: [],
});

/**
 * Builds a finalized emit result from a draft and builder functions.
 *
 * @param draft - Base payload draft.
 * @param builders - Builder functions to apply in order.
 * @returns Emit result payload.
 */
export const buildFilePayload = (draft: FilePayloadDraft, ...builders: FilePayloadBuilder[]): EmitResult => {
  const built = builders.reduce((acc, builder) => builder(acc), draft);
  return {
    filePath: built.filePath,
    content: built.contentLines.join('\n'),
    sections: built.sections.length > 0 ? built.sections : undefined,
    warnings: built.warnings,
  };
};

/**
 * Adds import lines to a payload draft.
 *
 * @param lines - Import lines to append.
 * @returns File payload builder.
 */
export const withImports = (lines: readonly string[]): FilePayloadBuilder =>
  (draft) => ({
    ...draft,
    contentLines: draft.contentLines.concat(lines),
  });

interface SectionBuilderInput {
  /** The generated section content (without markers). */
  readonly content: string;
  /** Marker strings used to delimit the section. */
  readonly markers: GeneratedSectionMarkers;
  /** Optional name to attach to the generated section metadata. */
  readonly name?: GeneratedSectionName;
  /** Optional indentation depth for the wrapped section. */
  readonly depth?: number;
}

interface SectionBlock {
  /** Lines to append to content. */
  readonly lines: readonly string[];
  /** Optional sections metadata to append. */
  readonly sections?: readonly GeneratedSectionPayload[];
}

/**
 * Adds arbitrary content lines and optional section metadata.
 *
 * @param block - Section block containing lines and optional metadata.
 * @returns File payload builder.
 */
export const withSections = (block: SectionBlock): FilePayloadBuilder =>
  (draft) => ({
    ...draft,
    contentLines: draft.contentLines.concat(block.lines),
    sections: block.sections ? draft.sections.concat(block.sections) : draft.sections,
  });

/**
 * Adds a generated props section to the payload.
 *
 * @param input - Section builder input for props.
 * @returns File payload builder.
 */
export const withProps = (input: SectionBuilderInput): FilePayloadBuilder => {
  const { content, markers, name = GeneratedSectionName.Props, depth = 1 } = input;
  return withSections({
    lines: wrapGeneratedSection(content, markers, depth),
    sections: [{ name, content, markers }],
  });
};

/**
 * Adds a generated example section to the payload.
 *
 * @param input - Section builder input for example.
 * @returns File payload builder.
 */
export const withExample = (input: SectionBuilderInput): FilePayloadBuilder => {
  const { content, markers, name = GeneratedSectionName.Example, depth = 1 } = input;
  return withSections({
    lines: wrapGeneratedSection(content, markers, depth),
    sections: [{ name, content, markers }],
  });
};

/**
 * Adds warnings to the payload.
 *
 * @param warnings - Warning messages to append.
 * @returns File payload builder.
 */
export const withWarnings = (warnings: readonly string[] = []): FilePayloadBuilder =>
  (draft) => ({
    ...draft,
    warnings: draft.warnings.concat(warnings),
  });
// End AI-Assisted
