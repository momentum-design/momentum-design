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
 * Core Types Module
 *
 * This module defines the shared data models used throughout the codeconnect-generator
 * CLI tool. These types follow an immutable design pattern and provide
 * language-agnostic representations of component metadata.
 *
 * @module core/types
 */

// ============================================================================
// CLI Configuration Types
// ============================================================================

/**
 * Emit targets for code generation.
 * - `webcomponent`: Generates `*.webcomponent.figma.ts` files using `@figma/code-connect/html`
 * - `react`: Generates `*.react.figma.tsx` files using `@figma/code-connect`
 */
export enum EmitterTarget {
  WebComponent = 'webcomponent',
  React = 'react',
}

/**
 * String union of available emitter targets.
 * Useful for parsing CLI inputs before mapping to `EmitterTarget`.
 */
export type EmitTarget = `${EmitterTarget}`;

/**
 * Configuration options for the connect command.
 */
export interface ConnectOptions {
  /** Path to component source or output directory. */
  readonly inputPath: string;
  /** Preview changes without writing files. */
  readonly dryRun: boolean;
  /** Force replace existing connect files instead of section updates. */
  readonly force: boolean;
  /** Target formats to emit (webcomponent, react). */
  readonly emitTargets: readonly EmitterTarget[];
  /** Continue processing components when errors occur. */
  readonly continueOnError?: boolean;
  /** Override base import path for generated imports. */
  readonly baseImportPath?: string;
  /** Path to custom-elements.json manifest for JSON-driven parsing. */
  readonly manifestPath?: string;
}

// ============================================================================
// Component Model Types
// ============================================================================

/**
 * Normalized property type for Figma Code Connect mapping.
 */
export enum FigmaPropertyType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Enum = 'enum',
  Unknown = 'unknown',
}

/**
 * Visibility for a component property.
 */
export enum PropertyVisibility {
  Public = 'public',
  Protected = 'protected',
}

/**
 * Describes a property extracted from a Web Component's `@property` decorator.
 */
export interface PropertyDescriptor {
  /** The JavaScript property name. */
  readonly name: string;
  /** The HTML attribute name, or null if `attribute: false`. */
  readonly attribute: string | null;
  /** The normalized type for Figma mapping. */
  readonly type: FigmaPropertyType;
  /** TypeScript type string for documentation. */
  readonly tsType: string;
  /** Whether the property reflects to an attribute. */
  readonly reflect: boolean;
  /** Default value from initializer, if present. */
  readonly defaultValue: string | number | boolean | null;
  /** JSDoc summary for the property. */
  readonly doc: string | null;
  /** Visibility of the property within the class. */
  readonly visibility?: PropertyVisibility;
  /** Enum values if the type is 'enum'. */
  readonly enumValues?: readonly string[];
}

/**
 * Describes an HTML attribute derived from a component property.
 */
export interface AttributeDescriptor {
  /** The HTML attribute name (kebab-case). */
  readonly name: string;
  /** The property name that backs this attribute. */
  readonly propertyName: string;
  /** The normalized type for Figma mapping. */
  readonly type: FigmaPropertyType;
  /** Whether the attribute reflects from the property. */
  readonly reflect: boolean;
  /** Default value from initializer, if present. */
  readonly defaultValue: string | number | boolean | null;
  /** JSDoc summary for the attribute. */
  readonly doc: string | null;
}

/**
 * Describes an event dispatched by a Web Component.
 */
export interface EventDescriptor {
  /** The event name (e.g., 'shown'). */
  readonly name: string;
  /** The React event handler name (e.g., 'onShown'). */
  readonly reactHandler: string;
  /** The TypeScript type of the event detail, if any. */
  readonly detailType: string | null;
}

/**
 * The unified component model consumed by emitters.
 * This is the output of parsing and the input for code generation.
 */
export interface ComponentModel {
  /** The class name of the component (e.g., 'Accordion'). */
  readonly className: string;
  /** The custom element tag name (e.g., 'mdc-accordion'). */
  readonly tagName: string;
  /** The file path of the component source. */
  readonly filePath: string;
  /** The directory containing the component. */
  readonly componentDir: string;
  /** Properties extracted from `@property` decorators. */
  readonly props: readonly PropertyDescriptor[];
  /** Attributes derived from component properties. */
  readonly attributes: readonly AttributeDescriptor[];
  /** Events extracted from JSDoc or dispatchEvent calls. */
  readonly events: readonly EventDescriptor[];
  /** Import path for the component. */
  readonly importPath: string;
}

// ============================================================================
// Generation Report Types
// ============================================================================

/**
 * Status of the generation process.
 */
export enum GenerationStatus {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

/**
 * Report produced by the generation process.
 * Used for CLI output and CI integration.
 */
export interface GenerationReport {
  /** Overall status of the generation. */
  readonly status: GenerationStatus;
  /** Files that were created. */
  readonly created: readonly string[];
  /** Files that were updated. */
  readonly updated: readonly string[];
  /** Files that were unchanged. */
  readonly unchanged: readonly string[];
  /** Warning messages encountered during generation. */
  readonly warnings: readonly string[];
  /** Error messages encountered during generation. */
  readonly errors: readonly string[];
  /** Total duration of the generation process in milliseconds. */
  readonly durationMs: number;
  /** Optional per-component results for detailed reporting. */
  readonly componentResults?: readonly ComponentResult[];
}

/**
 * Status of a file change during generation.
 */
export enum FileChangeStatus {
  Created = 'created',
  Updated = 'updated',
  Unchanged = 'unchanged',
}

/**
 * Reason for a file change during generation.
 */
export enum FileChangeReason {
  NewFile = 'new file',
  SectionUpdated = 'section updated',
  ContentUpdated = 'content updated',
  Unchanged = 'unchanged',
}

/**
 * Details about a file change for reporting.
 */
export interface FileChangeDetail {
  /** Path to the affected file. */
  readonly filePath: string;
  /** Change status for the file. */
  readonly status: FileChangeStatus;
  /** Reason describing why the file changed. */
  readonly reason: FileChangeReason;
}

/**
 * Result of processing a single component.
 */
export interface ComponentResult {
  /** The component model, if parsing succeeded. */
  readonly model?: ComponentModel;
  /** The discovered component name, if available. */
  readonly componentName?: string;
  /** Files created for this component. */
  readonly created: readonly string[];
  /** Files updated for this component. */
  readonly updated: readonly string[];
  /** Files unchanged for this component. */
  readonly unchanged: readonly string[];
  /** Detailed change information for each emitted file. */
  readonly fileChanges?: readonly FileChangeDetail[];
  /** Warnings for this component. */
  readonly warnings: readonly string[];
  /** Errors for this component. */
  readonly errors: readonly string[];
}

/**
 * Metadata about the source of a parsed class.
 */
export interface ClassSource {
  /** How the class was discovered. */
  readonly discoveryMethod: 'default-export' | 'custom-element' | 'tagname-jsdoc' | 'first-class';
  /** The file path where the class was found. */
  readonly filePath: string;
}

/**
 * Source of a resolved tag name.
 */
export enum TagNameSource {
  JSDoc = 'jsdoc',
  IndexTs = 'index-ts',
  Filename = 'filename',
  Unknown = 'unknown',
}

/**
 * Result of resolving a component's tag name.
 */
export interface TagNameResult {
  /** The resolved tag name. */
  readonly tagName: string;
  /** How the tag name was resolved. */
  readonly source: TagNameSource;
}

// ============================================================================
// Emitter Types
// ============================================================================

/**
 * Options for emitter configuration.
 */
export interface EmitterOptions {
  /** Whether this is a dry run. */
  readonly dryRun: boolean;
  /** Base import path for components. */
  readonly baseImportPath?: string;
}

/**
 * Marker pair for generated sections.
 */
export interface GeneratedSectionMarkers {
  /** Marker indicating the start of a generated section. */
  readonly start: string;
  /** Marker indicating the end of a generated section. */
  readonly end: string;
}

/**
 * Named generated sections for partial updates.
 */
export enum GeneratedSectionName {
  Props = 'props',
  Example = 'example',
}

/**
 * Payload describing a generated section update.
 */
export interface GeneratedSectionPayload {
  /** Optional name for a targeted generated section. */
  readonly name?: GeneratedSectionName;
  /** The generated section content (without markers). */
  readonly content: string;
  /** Marker strings used to delimit the section. */
  readonly markers?: GeneratedSectionMarkers;
}

/**
 * Result of emitting a single file.
 */
export interface EmitResult {
  /** The file path that was or would be written. */
  readonly filePath: string;
  /** The generated content. */
  readonly content: string;
  /** Optional generated section payloads for partial updates. */
  readonly sections?: readonly GeneratedSectionPayload[];
  /** Warnings encountered during emission (e.g., unknown property types). */
  readonly warnings?: readonly string[];
}
// End AI-Assisted
