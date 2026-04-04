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
 * Custom Elements Manifest Types
 *
 * Type definitions for the custom-elements.json schema
 * used by @momentum-design/components.
 *
 * @see https://github.com/webcomponents/custom-elements-manifest
 * @module parsers/custom-elements/types
 */

// ============================================================================
// Custom Elements Manifest JSON Schema Types
// ============================================================================

/**
 * A type reference within the manifest.
 */
export interface ManifestTypeReference {
  readonly text: string;
}

/**
 * A declaration reference within the manifest.
 */
export interface ManifestDeclarationReference {
  readonly name: string;
  readonly module?: string;
  readonly package?: string;
}

/**
 * An attribute on a custom element.
 */
export interface ManifestAttribute {
  readonly name: string;
  readonly type?: ManifestTypeReference;
  readonly default?: string;
  readonly description?: string;
  readonly fieldName?: string;
}

/**
 * An event dispatched by a custom element.
 */
export interface ManifestEvent {
  readonly name: string;
  readonly type?: ManifestTypeReference;
  readonly description?: string;
}

/**
 * A slot exposed by a custom element.
 */
export interface ManifestSlot {
  readonly name: string;
  readonly description?: string;
}

/**
 * A CSS custom property exposed by a custom element.
 */
export interface ManifestCSSProperty {
  readonly name: string;
  readonly default?: string;
  readonly description?: string;
}

/**
 * A class member field in the manifest.
 */
export interface ManifestClassField {
  readonly kind: 'field';
  readonly name: string;
  readonly type?: ManifestTypeReference;
  readonly default?: string;
  readonly description?: string;
  readonly privacy?: 'public' | 'protected' | 'private';
  readonly attribute?: string;
  readonly reflects?: boolean;
}

/**
 * A class member method in the manifest.
 */
export interface ManifestClassMethod {
  readonly kind: 'method';
  readonly name: string;
  readonly description?: string;
  readonly privacy?: 'public' | 'protected' | 'private';
}

/**
 * Union of class member types.
 */
export type ManifestClassMember = ManifestClassField | ManifestClassMethod;

/**
 * A class declaration within a module.
 */
export interface ManifestClassDeclaration {
  readonly kind: 'class';
  readonly name: string;
  readonly tagName?: string;
  readonly description?: string;
  readonly attributes?: readonly ManifestAttribute[];
  readonly members?: readonly ManifestClassMember[];
  readonly events?: readonly ManifestEvent[];
  readonly slots?: readonly ManifestSlot[];
  readonly cssProperties?: readonly ManifestCSSProperty[];
  readonly superclass?: ManifestDeclarationReference;
}

/**
 * A variable declaration within a module.
 */
export interface ManifestVariableDeclaration {
  readonly kind: 'variable';
  readonly name: string;
  readonly type?: ManifestTypeReference;
  readonly description?: string;
}

/**
 * A mixin declaration within a module.
 */
export interface ManifestMixinDeclaration {
  readonly kind: 'mixin';
  readonly name: string;
  readonly description?: string;
}

/**
 * Union of all declaration types.
 */
export type ManifestDeclaration = ManifestClassDeclaration | ManifestVariableDeclaration | ManifestMixinDeclaration;

/**
 * An export from a module.
 */
export interface ManifestExport {
  readonly kind: string;
  readonly name: string;
  readonly declaration: ManifestDeclarationReference;
}

/**
 * A JavaScript module in the manifest.
 */
export interface ManifestModule {
  readonly kind: 'javascript-module';
  readonly path: string;
  readonly declarations?: readonly ManifestDeclaration[];
  readonly exports?: readonly ManifestExport[];
}

/**
 * Root custom-elements.json manifest schema.
 */
export interface CustomElementsManifest {
  readonly schemaVersion: string;
  readonly readme?: string;
  readonly modules: readonly ManifestModule[];
}

// ============================================================================
// Parsed Component Types
// ============================================================================

/**
 * A parsed attribute from the manifest, ready for mapping.
 */
export interface ParsedAttribute {
  readonly name: string;
  readonly type: string;
  readonly default?: string;
  readonly description?: string;
  readonly fieldName?: string;
  readonly required: boolean;
}

/**
 * A parsed event from the manifest, ready for mapping.
 */
export interface ParsedEvent {
  readonly name: string;
  readonly type: string;
  readonly description?: string;
}

/**
 * A parsed slot from the manifest.
 */
export interface ParsedSlot {
  readonly name: string;
  readonly description?: string;
}

/**
 * A parsed CSS custom property from the manifest.
 */
export interface ParsedCSSProperty {
  readonly name: string;
  readonly default?: string;
  readonly description?: string;
}

/**
 * Parsed component information extracted from the manifest.
 */
export interface ParsedComponent {
  /** Component class name (e.g., 'MdcButton'). */
  readonly className: string;
  /** Custom element tag name (e.g., 'mdc-button'). */
  readonly tagName: string;
  /** Module path in the manifest (e.g., 'src/components/button/button.component.ts'). */
  readonly modulePath: string;
  /** Component description. */
  readonly description: string;
  /** Component attributes/props. */
  readonly attributes: readonly ParsedAttribute[];
  /** Component events. */
  readonly events: readonly ParsedEvent[];
  /** Component slots. */
  readonly slots: readonly ParsedSlot[];
  /** CSS custom properties. */
  readonly cssProperties: readonly ParsedCSSProperty[];
}
// End AI-Assisted
