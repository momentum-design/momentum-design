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
 * IO Adapter Module
 *
 * Provides a minimal abstraction for file IO to simplify testing.
 *
 * @module io/adapter
 */

import fs from 'node:fs';
import path from 'node:path';

/**
 * Minimal IO adapter for file operations.
 */
export interface IoAdapter {
  /** Checks whether a file exists. */
  readonly exists: (filePath: string) => boolean;
  /** Reads file contents as UTF-8. */
  readonly readFile: (filePath: string) => string;
  /** Writes file contents as UTF-8, creating directories as needed. */
  readonly writeFile: (filePath: string, content: string) => void;
}

/**
 * Default IO adapter backed by the Node.js filesystem.
 */
export const nodeIoAdapter: IoAdapter = {
  /**
   * Checks whether a file exists.
   *
   * @param filePath - File path to check.
   * @returns True when the file exists.
   */
  exists: fs.existsSync,
  /**
   * Reads file contents as UTF-8.
   *
   * @param filePath - File path to read.
   * @returns File contents.
   */
  readFile: (filePath: string) => fs.readFileSync(filePath, 'utf8'),
  /**
   * Writes file contents as UTF-8, creating directories as needed.
   *
   * @param filePath - File path to write.
   * @param content - File contents to write.
   * @returns Nothing.
   */
  writeFile: (filePath: string, content: string) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
  },
};

/**
 * In-memory IO adapter for tests.
 */
export class MemoryIoAdapter implements IoAdapter {
  private readonly files = new Map<string, string>();

  /**
   * Creates an in-memory IO adapter.
   *
   * @param initialFiles - Optional initial file contents.
   */
  constructor(initialFiles: Record<string, string> | Map<string, string> = {}) {
    if (initialFiles instanceof Map) {
      for (const [filePath, content] of initialFiles) {
        this.files.set(filePath, content);
      }
    } else {
      for (const [filePath, content] of Object.entries(initialFiles)) {
        this.files.set(filePath, content);
      }
    }
  }

  /**
   * Checks whether a file exists in memory.
   *
   * @param filePath - File path to check.
   * @returns True when the file exists.
   */
  exists = (filePath: string): boolean => this.files.has(filePath);

  /**
   * Reads file contents from memory.
   *
   * @param filePath - File path to read.
   * @returns File contents.
   */
  readFile(filePath: string): string {
    const content = this.files.get(filePath);
    if (content === undefined) {
      throw new Error(`File not found: ${filePath}`);
    }
    return content;
  }

  /**
   * Writes file contents to memory.
   *
   * @param filePath - File path to write.
   * @param content - File contents to write.
   */
  writeFile(filePath: string, content: string): void {
    this.files.set(filePath, content);
  }

  /**
   * Exposes stored files for assertions in tests.
   *
   * @returns Map of stored files.
   */
  getFiles(): ReadonlyMap<string, string> {
    return this.files;
  }
}

/**
 * Creates a new in-memory IO adapter.
 *
 * @param initialFiles - Optional initial file contents.
 * @returns In-memory IO adapter instance.
 */
export const createMemoryIoAdapter = (initialFiles?: Record<string, string> | Map<string, string>): MemoryIoAdapter =>
  new MemoryIoAdapter(initialFiles);
// End AI-Assisted
