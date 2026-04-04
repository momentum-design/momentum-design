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

import { EmitterTarget } from '../../core/types';
import { BaseEmitter } from '../base-emitter';
import type { EmitterContext } from '../types';
import { buildExampleTemplate, type FilePayloadBuilder, indent, withSections } from '../utils';

import { buildImportsLine } from './helpers';

/**
 * Emitter for generating Figma Code Connect files for Web Components.
 * Produces `*.webcomponent.figma.ts` files using `@figma/code-connect/html`.
 *
 * Extends BaseEmitter (GoF Template Method) — only the varying steps
 * (imports, example, trailing sections) are implemented here.
 */
export class FigmaWebComponentEmitter extends BaseEmitter {
  readonly target = EmitterTarget.WebComponent;

  protected readonly fileSuffix = '.webcomponent.figma.ts';

  /**
   * Builds import lines for the web component connect file.
   *
   * @returns Ordered import lines.
   */
  protected buildImportLines(): string[] {
    return ['import figma, { html } from \'@figma/code-connect/html\';', ''];
  }

  /**
   * Builds the HTML example section body for `figma.connect`.
   *
   * @param context - Emitter context with model and options.
   * @returns Example section string.
   */
  protected buildExampleContent(context: EmitterContext): string {
    const example = buildExampleTemplate(context.model.tagName, context.model.attributes);
    return `example: ${example.example},`;
  }

  /**
   * Builds trailing sections appended after props/example blocks.
   *
   * @param context - Emitter context with model and options.
   * @returns Additional payload builders.
   */
  protected buildTrailingBuilders(context: EmitterContext): FilePayloadBuilder[] {
    const importsLine = buildImportsLine(context.model, context.options);
    return [withSections({ lines: [`${indent(1)}${importsLine}`] })];
  }
}
// End AI-Assisted
