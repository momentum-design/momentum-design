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
 * Base Emitter Module (GoF Template Method)
 *
 * Provides an abstract base class for Figma Code Connect emitters.
 * Concrete emitters override the varying template steps while the
 * shared emit skeleton remains in the base class.
 *
 * @module emitters/base-emitter
 */

import path from 'node:path';

import { CODE_CONNECT_DIR } from '../core/constants';
import { type EmitResult, type EmitterTarget, GeneratedSectionName } from '../core/types';

import type { Emitter, EmitterContext } from './types';
import {
  buildFilePayload,
  buildGeneratedSectionMarkers,
  buildPropsSection,
  createFilePayload,
  type FilePayloadBuilder,
  getComponentBaseName,
  withExample,
  withImports,
  withProps,
  withSections,
  withWarnings,
} from './utils';

/**
 * Abstract base emitter implementing the Template Method pattern.
 *
 * The `emit()` method defines a fixed algorithm skeleton:
 * 1. Derive component name, file name, file path, and Figma URL
 * 2. Build props section with warning collection
 * 3. Build import lines (abstract — varies by target)
 * 4. Build example section (abstract — varies by target)
 * 5. Build trailing sections (hook — optional per target)
 * 6. Compose via `buildFilePayload`
 *
 * Concrete subclasses implement only the varying steps.
 */
export abstract class BaseEmitter implements Emitter {
  abstract readonly target: EmitterTarget;

  /**
   * File extension suffix for emitted files (e.g., '.webcomponent.figma.ts').
   */
  protected abstract readonly fileSuffix: string;

  /**
   * Builds the import lines for the file header.
   *
   * @param context - Emitter context with model and options.
   * @returns Array of import line strings.
   */
  protected abstract buildImportLines(context: EmitterContext): string[];

  /**
   * Builds the example section content string.
   *
   * @param context - Emitter context with model and options.
   * @returns Example section content for the figma.connect call.
   */
  protected abstract buildExampleContent(context: EmitterContext): string;

  /**
   * Hook for appending additional builders after the example section.
   * Default implementation returns an empty array.
   *
   * @param _context - Emitter context with model and options.
   * @returns Additional payload builders to apply.
   */
  protected buildTrailingBuilders(_context: EmitterContext): FilePayloadBuilder[] {
    return [];
  }

  /**
   * Template method that emits a Figma Code Connect file.
   * Subclasses customize behavior by overriding the abstract/hook methods,
   * not by overriding emit() itself.
   *
   * @param emitterContext - Context containing model and emitter options.
   * @returns Emit result containing file content and metadata.
   */
  emit(emitterContext: EmitterContext): EmitResult {
    const { model } = emitterContext;
    const componentName = getComponentBaseName(model);
    const fileName = `${componentName}${this.fileSuffix}`;
    const filePath = path.join(model.componentDir, CODE_CONNECT_DIR, fileName);
    const figmaUrl = `<FIGMA_${componentName.toUpperCase()}_URL>`;

    const { lines: propsLines, warnings } = buildPropsSection(model.props, 0);
    const propsSection = propsLines.join('\n');
    const propsMarkers = buildGeneratedSectionMarkers(GeneratedSectionName.Props);
    const exampleMarkers = buildGeneratedSectionMarkers(GeneratedSectionName.Example);

    const importLines = this.buildImportLines(emitterContext);
    const exampleContent = this.buildExampleContent(emitterContext);
    const trailingBuilders = this.buildTrailingBuilders(emitterContext);

    return buildFilePayload(
      createFilePayload(filePath),
      withImports(importLines),
      withSections({ lines: [`figma.connect('${figmaUrl}', {`] }),
      withProps({ content: propsSection, markers: propsMarkers, name: GeneratedSectionName.Props, depth: 1 }),
      withExample({ content: exampleContent, markers: exampleMarkers, name: GeneratedSectionName.Example, depth: 1 }),
      ...trailingBuilders,
      withSections({ lines: ['});', ''] }),
      withWarnings(warnings),
    );
  }
}
// End AI-Assisted
