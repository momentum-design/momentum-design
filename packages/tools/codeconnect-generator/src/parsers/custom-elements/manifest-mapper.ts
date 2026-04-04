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
 * Manifest Mapper Module
 *
 * Maps parsed custom-elements.json component metadata
 * into the ComponentModel consumed by emitters.
 *
 * @module parsers/custom-elements/manifest-mapper
 */

import path from 'node:path';

import {
  type AttributeDescriptor,
  type ComponentModel,
  type EventDescriptor,
  FigmaPropertyType,
  type PropertyDescriptor,
  PropertyVisibility,
} from '../../core/types';
import { mapPropertiesToAttributes } from '../../mappers/attribute-mapper';
import { deriveImportPath } from '../../mappers/component-model';

import type { ParsedAttribute, ParsedComponent } from './types';

// ============================================================================
// Type Mapping
// ============================================================================

/**
 * Extracts enum values from a union type string.
 * Handles patterns like `'primary' | 'secondary' | 'tertiary'`.
 *
 * @param typeStr - The type string to extract values from.
 * @returns Array of enum values, or undefined if not an enum type.
 */
const extractEnumValues = (typeStr: string): readonly string[] | undefined => {
  if (!typeStr.includes('|')) {
    return undefined;
  }

  const parts = typeStr.split('|').map((p) => p.trim());
  const literals = parts.filter((p) => /^['"]/.test(p)).map((p) => p.replaceAll(/(?:^['"])|(?:['"]$)/g, ''));

  return literals.length > 0 ? literals : undefined;
};

/**
 * Maps a parsed attribute type string to FigmaPropertyType.
 *
 * @param typeStr - Normalized type string from the manifest.
 * @returns The corresponding FigmaPropertyType.
 */
const mapFigmaType = (typeStr: string): FigmaPropertyType => {
  const lower = typeStr.toLowerCase().trim();

  if (lower === 'boolean') {
    return FigmaPropertyType.Boolean;
  }
  if (lower === 'number') {
    return FigmaPropertyType.Number;
  }
  if (lower === 'string') {
    return FigmaPropertyType.String;
  }

  // Union types with literal values are enums.
  if ((extractEnumValues(typeStr)?.length ?? 0) > 0) {
    return FigmaPropertyType.Enum;
  }

  if (typeStr.includes('|')) {
    const normalizedParts = typeStr
      .split('|')
      .map((part) => part.trim().toLowerCase())
      .filter((part) => part.length > 0 && part !== 'undefined' && part !== 'null');
    const uniqueParts = [...new Set(normalizedParts)];

    if (uniqueParts.length === 1) {
      if (uniqueParts[0] === 'boolean') {
        return FigmaPropertyType.Boolean;
      }
      if (uniqueParts[0] === 'number') {
        return FigmaPropertyType.Number;
      }
      if (uniqueParts[0] === 'string') {
        return FigmaPropertyType.String;
      }
    }
  }

  return FigmaPropertyType.Unknown;
};

/**
 * Parses a default value string into a typed default.
 *
 * @param value - Raw default value string from the manifest.
 * @param type - The Figma property type.
 * @returns Parsed default value.
 */
const parseDefault = (value: string | undefined, type: FigmaPropertyType): string | number | boolean | null => {
  if (value === undefined || value === 'undefined') {
    return null;
  }

  if (type === FigmaPropertyType.Boolean) {
    return value === 'true';
  }

  if (type === FigmaPropertyType.Number) {
    const num = Number(value);
    return Number.isNaN(num) ? null : num;
  }

  // Strip surrounding quotes for string/enum defaults
  const unquoted = value.replaceAll(/(?:^['"])|(?:['"]$)/g, '');
  return unquoted || null;
};

// ============================================================================
// Property Mapping
// ============================================================================

/**
 * Converts an attribute name to its corresponding property name.
 * Handles kebab-case to camelCase conversion.
 *
 * @param attrName - The HTML attribute name.
 * @param fieldName - Optional explicit field name from the manifest.
 * @returns The JavaScript property name.
 */
const toPropertyName = (attrName: string, fieldName?: string): string => {
  if (fieldName) {
    return fieldName;
  }
  return attrName.replaceAll(/-([a-z])/g, (_, c: string) => c.toUpperCase());
};

/**
 * Maps a parsed attribute to a PropertyDescriptor.
 *
 * @param attr - Parsed attribute from the manifest.
 * @returns PropertyDescriptor for the attribute.
 */
const mapToPropertyDescriptor = (attr: ParsedAttribute): PropertyDescriptor => {
  const figmaType = mapFigmaType(attr.type);
  const propName = toPropertyName(attr.name, attr.fieldName);

  return {
    name: propName,
    attribute: attr.name,
    type: figmaType,
    tsType: attr.type,
    reflect: true,
    defaultValue: parseDefault(attr.default, figmaType),
    doc: attr.description ?? null,
    visibility: PropertyVisibility.Public,
    enumValues: extractEnumValues(attr.type),
  };
};

// ============================================================================
// Event Mapping
// ============================================================================

/**
 * Converts an event name to a React handler name.
 * E.g., 'click' → 'onClick', 'value-change' → 'onValueChange'.
 *
 * @param eventName - The DOM event name.
 * @returns React-style handler name.
 */
const toReactHandler = (eventName: string): string => {
  if (!eventName) {
    return 'onUnknownEvent';
  }
  const camel = eventName
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
  return `on${camel}`;
};

/**
 * Maps a parsed event to an EventDescriptor.
 *
 * @param event - Parsed event from the manifest.
 * @param event.name - Event name.
 * @param event.type - Event type string.
 * @param event.description - Event description.
 * @returns EventDescriptor for the event.
 */
const mapToEventDescriptor = (event: { name: string; type: string; description?: string }): EventDescriptor => ({
  name: event.name,
  reactHandler: toReactHandler(event.name),
  detailType: event.type === 'unknown' ? null : event.type,
});

// ============================================================================
// Component Model Mapping
// ============================================================================

/**
 * Options for mapping parsed components to ComponentModel.
 */
export interface ManifestMapperOptions {
  /** Root directory of the components package (parent of custom-elements.json). */
  readonly packageRoot: string;
}

/**
 * Maps a single ParsedComponent to a ComponentModel.
 *
 * @param parsed - Parsed component from the manifest.
 * @param options - Mapper options including package root.
 * @returns ComponentModel for emitters.
 */
export const mapParsedComponent = (parsed: ParsedComponent, options: ManifestMapperOptions): ComponentModel => {
  const filePath = path.resolve(options.packageRoot, parsed.modulePath);
  const componentDir = path.dirname(filePath);

  const props: readonly PropertyDescriptor[] = parsed.attributes.map(mapToPropertyDescriptor);
  const attributes: readonly AttributeDescriptor[] = mapPropertiesToAttributes(props);
  const events: readonly EventDescriptor[] = parsed.events.map(mapToEventDescriptor);

  return {
    className: parsed.className,
    tagName: parsed.tagName,
    filePath,
    componentDir,
    props,
    attributes,
    events,
    importPath: deriveImportPath(componentDir),
  };
};

/**
 * Maps an array of parsed components to ComponentModels.
 *
 * @param parsed - Array of parsed components from the manifest.
 * @param options - Mapper options including package root.
 * @returns Array of ComponentModel for emitters.
 */
export const mapParsedComponents = (
  parsed: readonly ParsedComponent[],
  options: ManifestMapperOptions,
): ComponentModel[] => parsed.map((component) => mapParsedComponent(component, options));
// End AI-Assisted
