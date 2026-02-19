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
 * Section Updater Module
 *
 * Updates generated sections inside existing files using markers.
 *
 * @module io/section-updater
 */

import { buildGeneratedSectionMarkers, GENERATED_SECTION_MARKERS } from '../core/constants';
import type { GeneratedSectionName, GeneratedSectionPayload } from '../core/types';

// ============================================================================
// Types
// ============================================================================

/** Section markers for generated content. */
export interface SectionMarkers {
  readonly start: string;
  readonly end: string;
}

/** Result of a section update operation. */
export interface SectionUpdateResult {
  readonly content: string;
  readonly status: 'replaced' | 'inserted' | 'unchanged';
}

interface SectionRange {
  readonly endLineEnd: number;
  readonly indent: string;
  readonly innerEnd: number;
  readonly innerStart: number;
  readonly startLineStart: number;
}

// ============================================================================
// Constants
// ============================================================================

/** Default markers for generated sections. */
export const DEFAULT_SECTION_MARKERS: SectionMarkers = {
  end: GENERATED_SECTION_MARKERS.end,
  start: GENERATED_SECTION_MARKERS.start,
};

// ============================================================================
// Private Helper Functions
// ============================================================================

/**
 * Detects the line ending used in a file's content.
 *
 * @param content - File contents to inspect.
 * @returns The detected line ending string.
 */
const detectLineEnding = (content: string): string => (content.includes('\r\n') ? '\r\n' : '\n');

/**
 * Normalizes all line endings to the specified line ending.
 *
 * @param content - File contents to normalize.
 * @param lineEnding - Line ending to apply.
 * @returns Normalized content with consistent line endings.
 */
// eslint-disable-next-line max-len
const normalizeLineEndings = (content: string, lineEnding: string): string =>
  content.replace(/\r\n|\r|\n/g, lineEnding);

/**
 * Finds the previous line break before a given index.
 *
 * @param content - File contents to search.
 * @param fromIndex - Index to search backward from.
 * @returns Index of the previous line break or -1.
 */
const lastLineBreak = (content: string, fromIndex: number): number => content.lastIndexOf('\n', fromIndex);

/**
 * Finds the next line break after a given index.
 *
 * @param content - File contents to search.
 * @param fromIndex - Index to search forward from.
 * @param includeLineBreak - Whether to include the line break in the returned index.
 * @returns Index of the next line break or -1.
 */
const nextLineBreak = (content: string, fromIndex: number, includeLineBreak = false): number => {
  const index = content.indexOf('\n', fromIndex);
  if (index === -1) {
    return -1;
  }
  return includeLineBreak ? index + 1 : index;
};

/**
 * Locates a generated section in the content and returns its indices.
 *
 * @param content - File contents to search.
 * @param markers - Section markers to locate.
 * @returns The section range if found, otherwise null.
 */
const findSectionRange = (content: string, markers: SectionMarkers): SectionRange | null => {
  const startIndex = content.indexOf(markers.start);
  if (startIndex === -1) {
    return null;
  }

  const endIndex = content.indexOf(markers.end, startIndex + markers.start.length);
  if (endIndex === -1 || endIndex < startIndex) {
    return null;
  }

  const startLineStart = lastLineBreak(content, startIndex) + 1;
  const startLineEnd = nextLineBreak(content, startIndex);
  const endLineStart = lastLineBreak(content, endIndex) + 1;
  const endLineEnd = nextLineBreak(content, endIndex, true);

  const indent = content.slice(startLineStart, startIndex);
  const innerStart = startLineEnd === -1 ? content.length : startLineEnd + 1;
  const innerEnd = endLineStart;

  return {
    endLineEnd: endLineEnd === -1 ? content.length : endLineEnd,
    indent,
    innerEnd,
    innerStart,
    startLineStart,
  };
};

/**
 * Appends a generated section to the end of the content.
 *
 * @param content - Existing file contents.
 * @param section - Generated section block to append.
 * @param lineEnding - Line ending to use for appended content.
 * @returns Updated content with the section appended.
 */
const appendSection = (content: string, section: string, lineEnding: string): string => {
  if (!content) {
    return section;
  }

  const needsLineEnding = !content.endsWith(lineEnding);
  const separator = needsLineEnding ? lineEnding : '';

  return `${content}${separator}${section}${lineEnding}`;
};

interface ResolvedSection {
  readonly name?: GeneratedSectionName;
  readonly content: string;
  readonly markers: SectionMarkers;
}

/**
 * Resolves section markers for a payload, defaulting when absent.
 *
 * @param section - Generated section payload.
 * @returns Resolved marker pair for the section.
 */
const resolveSectionMarkers = (section: GeneratedSectionPayload): SectionMarkers => {
  if (section.markers) {
    return section.markers;
  }
  if (section.name) {
    return buildGeneratedSectionMarkers(section.name);
  }
  return DEFAULT_SECTION_MARKERS;
};

/**
 * Normalizes section payloads into resolved sections with markers.
 *
 * @param sections - Payloads to normalize.
 * @returns Resolved section metadata.
 */
// eslint-disable-next-line max-len
const resolveSections = (sections: readonly GeneratedSectionPayload[]): ResolvedSection[] =>
  sections.map((section) => ({
    content: section.content,
    markers: resolveSectionMarkers(section),
    name: section.name,
  }));

// ============================================================================
// Public API
// ============================================================================

/**
 * Determines whether a file contains a generated section.
 *
 * @param content - File contents to inspect.
 * @param markers - Section markers to search for.
 * @returns True when both start and end markers are present.
 */
export function hasGeneratedSection(content: string, markers: SectionMarkers = DEFAULT_SECTION_MARKERS): boolean {
  return content.includes(markers.start) && content.includes(markers.end);
}

/**
 * Extracts the generated section contents from a file.
 * Returns null if markers are missing.
 *
 * @param content - File contents to inspect.
 * @param markers - Section markers to locate.
 * @returns The section content or null when missing.
 */
export function extractGeneratedSection(
  content: string,
  markers: SectionMarkers = DEFAULT_SECTION_MARKERS,
): string | null {
  const range = findSectionRange(content, markers);
  if (!range) {
    return null;
  }

  return content.slice(range.innerStart, range.innerEnd).trimEnd();
}

/**
 * Builds a generated section block with markers and indentation.
 *
 * @param generatedSection - Raw content for the generated section.
 * @param markers - Section markers to use.
 * @param indent - Indentation to apply to each line.
 * @param lineEnding - Line ending to use for joins.
 * @returns Generated section block with markers.
 */
export function buildGeneratedSection(
  generatedSection: string,
  markers: SectionMarkers = DEFAULT_SECTION_MARKERS,
  indent = '',
  lineEnding = '\n',
): string {
  const normalized = normalizeLineEndings(generatedSection, lineEnding).trimEnd();
  const lines = normalized ? normalized.split(lineEnding) : [];
  const indentedLines = lines.map((line) => `${indent}${line}`);

  return [`${indent}${markers.start}`, ...indentedLines, `${indent}${markers.end}`].join(lineEnding) + lineEnding;
}

/**
 * Replaces or inserts the generated section within a file.
 *
 * @param content - File contents to update.
 * @param generatedSection - Raw section content to insert.
 * @param markers - Section markers to use.
 * @returns Updated content and update status.
 */
export function replaceGeneratedSection(
  content: string,
  generatedSection: string,
  markers: SectionMarkers = DEFAULT_SECTION_MARKERS,
): SectionUpdateResult {
  const lineEnding = detectLineEnding(content);
  const normalizedGenerated = normalizeLineEndings(generatedSection, lineEnding).trimEnd();
  const range = findSectionRange(content, markers);

  if (!range) {
    const appended = appendSection(
      content,
      buildGeneratedSection(normalizedGenerated, markers, '', lineEnding),
      lineEnding,
    );

    return {
      content: appended,
      status: 'inserted',
    };
  }

  const section = buildGeneratedSection(normalizedGenerated, markers, range.indent, lineEnding);
  const updated = `${content.slice(0, range.startLineStart)}${section}${content.slice(range.endLineEnd)}`;

  return {
    content: updated,
    status: updated === content ? 'unchanged' : 'replaced',
  };
}

/**
 * Applies multiple generated section updates within a file.
 * Returns null if markers are not present.
 *
 * @param content - File contents to update.
 * @param sections - Generated sections to apply.
 * @returns Updated content or null when markers are not found.
 */
export function applyGeneratedSectionUpdates(
  content: string,
  sections: readonly GeneratedSectionPayload[],
): string | null {
  if (sections.length === 0) {
    return null;
  }

  const resolved = resolveSections(sections);
  const allMarkersPresent = resolved.every((section) => hasGeneratedSection(content, section.markers));

  if (!allMarkersPresent) {
    return null;
  }

  let updated = content;
  for (const section of resolved) {
    updated = replaceGeneratedSection(updated, section.content, section.markers).content;
  }
  return updated;
}
// End AI-Assisted
