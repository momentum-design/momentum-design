// AI-Assisted
/**
 * @fileoverview Tests for file-writer module.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { createMemoryIoAdapter } from '../../src/io/adapter';
import { writeFile } from '../../src/io/file-writer';

describe('writeFile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('positive cases - creating files', () => {
    it('should create new file when it does not exist', () => {
      const io = createMemoryIoAdapter();

      const result = writeFile('/path/to/new/file.ts', 'content', { io });

      expect(result.status).toBe('created');
      expect(result.filePath).toBe('/path/to/new/file.ts');
      expect(io.readFile('/path/to/new/file.ts')).toBe('content');
    });

    it('should do not write file in dry-run mode when creating', () => {
      const io = createMemoryIoAdapter();

      const result = writeFile('/path/to/new/file.ts', 'content', { dryRun: true, io });

      expect(result.status).toBe('created');
      expect(io.exists('/path/to/new/file.ts')).toBe(false);
    });
  });

  describe('positive cases - updating files', () => {
    it('should update existing file when content differs', () => {
      const io = createMemoryIoAdapter({ '/path/to/file.ts': 'old content' });

      const result = writeFile('/path/to/file.ts', 'new content', { io });

      expect(result.status).toBe('updated');
      expect(result.filePath).toBe('/path/to/file.ts');
      expect(io.readFile('/path/to/file.ts')).toBe('new content');
    });

    it('should do not write file in dry-run mode when updating', () => {
      const io = createMemoryIoAdapter({ '/path/to/file.ts': 'old content' });

      const result = writeFile('/path/to/file.ts', 'new content', { dryRun: true, io });

      expect(result.status).toBe('updated');
      expect(io.readFile('/path/to/file.ts')).toBe('old content');
    });

    it('should return unchanged when content is identical', () => {
      const io = createMemoryIoAdapter({ '/path/to/file.ts': 'same content' });

      const result = writeFile('/path/to/file.ts', 'same content', { io });

      expect(result.status).toBe('unchanged');
      expect(io.readFile('/path/to/file.ts')).toBe('same content');
    });
  });

  describe('positive cases - section updates', () => {
    it('should update generated section in existing file', () => {
      const existingContent = `// Header
// BEGIN GENERATED
old generated
// END GENERATED
// Footer`;
      const io = createMemoryIoAdapter({ '/path/to/file.ts': existingContent });

      const result = writeFile('/path/to/file.ts', 'full content', {
        section: { content: 'new generated' },
        io,
      });

      expect(result.status).toBe('updated');
      const writtenContent = io.readFile('/path/to/file.ts');
      expect(writtenContent).toContain('// Header');
      expect(writtenContent).toContain('new generated');
      expect(writtenContent).toContain('// Footer');
      expect(writtenContent).not.toContain('old generated');
    });

    it('should insert section when markers do not exist', () => {
      const existingContent = '// Existing content';
      const io = createMemoryIoAdapter({ '/path/to/file.ts': existingContent });

      const result = writeFile('/path/to/file.ts', 'full content', {
        section: { content: 'new generated' },
        io,
      });

      expect(result.status).toBe('updated');
      const writtenContent = io.readFile('/path/to/file.ts');
      expect(writtenContent).toContain('// Existing content');
      expect(writtenContent).toContain('// BEGIN GENERATED');
      expect(writtenContent).toContain('new generated');
      expect(writtenContent).toContain('// END GENERATED');
    });

    it('should support custom section markers', () => {
      const existingContent = `<!-- START -->
old content
<!-- STOP -->`;
      const io = createMemoryIoAdapter({ '/path/to/file.ts': existingContent });

      const result = writeFile('/path/to/file.ts', 'full content', {
        section: {
          content: 'new content',
          markers: { start: '<!-- START -->', end: '<!-- STOP -->' },
        },
        io,
      });

      expect(result.status).toBe('updated');
      const writtenContent = io.readFile('/path/to/file.ts');
      expect(writtenContent).toContain('new content');
      expect(writtenContent).not.toContain('old content');
    });
  });

  describe('negative cases', () => {
    it('should return unchanged when section content matches', () => {
      const existingContent = `// BEGIN GENERATED
same content
// END GENERATED
`;
      const io = createMemoryIoAdapter({ '/path/to/file.ts': existingContent });

      const result = writeFile('/path/to/file.ts', 'full content', {
        section: { content: 'same content' },
        io,
      });

      expect(result.status).toBe('unchanged');
      expect(io.readFile('/path/to/file.ts')).toBe(existingContent);
    });
  });

  describe('edge cases', () => {
    it('should handle empty content for new file', () => {
      const io = createMemoryIoAdapter();

      const result = writeFile('/path/to/file.ts', '', { io });

      expect(result.status).toBe('created');
      expect(io.readFile('/path/to/file.ts')).toBe('');
    });

    it('should handle file path with no parent directory', () => {
      const io = createMemoryIoAdapter();

      const result = writeFile('file.ts', 'content', { io });

      expect(result.status).toBe('created');
      expect(io.readFile('file.ts')).toBe('content');
    });

    it('should use default options and node io adapter when options are omitted', () => {
      const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codeconnect-file-writer-'));
      const filePath = path.join(tempDir, 'file.ts');

      try {
        const result = writeFile(filePath, 'content');

        expect(result.status).toBe('created');
        expect(fs.readFileSync(filePath, 'utf8')).toBe('content');
      } finally {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
    });
  });
});
// End AI-Assisted
