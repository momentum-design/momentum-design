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
import path from 'node:path';

import { CODE_CONNECT_DIR, DIST_DIR, SRC_PATH_SEGMENT } from '../../core/constants';
import { EmitterTarget } from '../../core/types';
import { normalizePath } from '../../utils/paths';
import { BaseEmitter } from '../base-emitter';
import type { EmitterContext } from '../types';
import { buildReactExampleSection } from '../utils';

/**
 * Emitter for generating Figma Code Connect files for React components.
 * Produces `*.react.figma.tsx` files using `@figma/code-connect`.
 *
 * Extends BaseEmitter (GoF Template Method) — only the varying steps
 * (imports, example) are implemented here.
 */
export class FigmaReactEmitter extends BaseEmitter {
  readonly target = EmitterTarget.React;

  protected readonly fileSuffix = '.react.figma.tsx';

  /**
   * Resolves the component import path for React Code Connect output.
   *
   * @param componentDir - Absolute component directory path.
   * @param baseImportPath - Optional override for component import base.
   * @returns Import path string for the React component.
   */
  private resolveReactImportPath(componentDir: string, baseImportPath?: string): string {
    if (baseImportPath) {
      return `${baseImportPath}/${DIST_DIR}/react`;
    }

    const normalizedComponentDir = normalizePath(componentDir);
    const markerIndex = normalizedComponentDir.lastIndexOf(SRC_PATH_SEGMENT);
    let rootCandidate = path.posix.dirname(normalizedComponentDir);
    if (markerIndex >= 0) {
      rootCandidate = normalizedComponentDir.slice(0, markerIndex);
    }
    const packageRoot = rootCandidate || path.posix.parse(normalizedComponentDir).root;
    const distReactPath = path.posix.join(packageRoot, DIST_DIR, 'react');
    const codeConnectDir = path.posix.join(normalizedComponentDir, CODE_CONNECT_DIR);
    let relativePath = path.posix.relative(codeConnectDir, distReactPath);
    if (!relativePath.startsWith('.')) {
      relativePath = `./${relativePath}`;
    }
    return relativePath;
  }

  /**
   * Builds import lines for the React connect file.
   *
   * @param context - Emitter context with model and options.
   * @returns Ordered import lines.
   */
  protected buildImportLines(context: EmitterContext): string[] {
    const importPath = this.resolveReactImportPath(context.model.componentDir, context.options.baseImportPath);
    return [
      `import { ${context.model.className} } from '${importPath}';`,
      // eslint-disable-next-line @typescript-eslint/quotes
      "import figma from '@figma/code-connect';",
      '',
    ];
  }

  /**
   * Builds the React example section body for `figma.connect`.
   *
   * @param context - Emitter context with model and options.
   * @returns Example section string.
   */
  protected buildExampleContent(context: EmitterContext): string {
    return buildReactExampleSection(context.model.className);
  }
}
// End AI-Assisted
