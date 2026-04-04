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
 * File Writer Module
 *
 * Writes generated output to disk with support for dry-run and
 * section-based updates.
 *
 * @module io/file-writer
 */

import { type IoAdapter, nodeIoAdapter } from './adapter';
import { DEFAULT_SECTION_MARKERS, replaceGeneratedSection, type SectionMarkers } from './section-updater';

/** Status of a write operation. */
export enum WriteStatus {
  Created = 'created',
  Updated = 'updated',
  Unchanged = 'unchanged',
}

/** Result of a write operation. */
export interface FileWriteResult {
  readonly filePath: string;
  readonly status: WriteStatus;
}

/** Options for write operations. */
export interface FileWriteOptions {
  /** Preview changes without writing. */
  readonly dryRun?: boolean;
  /** IO adapter for file operations. */
  readonly io?: IoAdapter;
  /** Optional section update configuration. */
  readonly section?: {
    readonly content: string;
    readonly markers?: SectionMarkers;
  };
}

/**
 * Writes a file to disk, updating generated sections if configured.
 *
 * @param filePath - Destination path.
 * @param content - Full file contents to write when creating a new file.
 * @param options - Write options.
 * @returns Write result with status and file path.
 */
export function writeFile(filePath: string, content: string, options: FileWriteOptions = {}): FileWriteResult {
  const dryRun = options.dryRun ?? false;
  const io = options.io ?? nodeIoAdapter;
  const exists = io.exists(filePath);

  if (!exists) {
    if (!dryRun) {
      io.writeFile(filePath, content);
    }

    return { filePath, status: WriteStatus.Created };
  }

  const existingContent = io.readFile(filePath);
  let updatedContent = content;

  if (options.section) {
    const markers = options.section.markers ?? DEFAULT_SECTION_MARKERS;
    const result = replaceGeneratedSection(existingContent, options.section.content, markers);
    updatedContent = result.content;
  }

  if (existingContent === updatedContent) {
    return { filePath, status: WriteStatus.Unchanged };
  }

  if (!dryRun) {
    io.writeFile(filePath, updatedContent);
  }

  return { filePath, status: WriteStatus.Updated };
}
// End AI-Assisted
