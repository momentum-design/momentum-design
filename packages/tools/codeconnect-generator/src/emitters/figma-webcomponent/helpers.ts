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
 * Figma WebComponent Emitter - Helper Functions
 *
 * @module emitters/figma-webcomponent/helpers
 */
import { DEFAULT_IMPORT_BASE } from '../../core/constants';
import type { ComponentModel, EmitterOptions } from '../../core/types';

/**
 * Builds the imports line for the figma.connect call.
 *
 * @param model - The component model.
 * @param options - The emitter options.
 * @returns The imports line.
 */
export const buildImportsLine = (model: ComponentModel, options: EmitterOptions): string => {
  const baseImportPath = options.baseImportPath ?? DEFAULT_IMPORT_BASE;
  const importPath = `${baseImportPath}/${model.importPath}`;
  return `imports: ["import '${importPath}';"],`;
};
// End AI-Assisted
