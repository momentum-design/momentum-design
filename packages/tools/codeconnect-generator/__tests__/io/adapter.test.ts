/**
 * @fileoverview Tests for io/adapter helpers.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { createMemoryIoAdapter, MemoryIoAdapter, nodeIoAdapter } from '../../src/io/adapter';

describe('nodeIoAdapter', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codeconnect-io-adapter-'));
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should write and read files using UTF-8', () => {
    const filePath = path.join(tempDir, 'nested', 'file.ts');
    nodeIoAdapter.writeFile(filePath, 'export const value = 1;');

    expect(nodeIoAdapter.exists(filePath)).toBe(true);
    expect(nodeIoAdapter.readFile(filePath)).toBe('export const value = 1;');
  });

  it('should return false for missing files', () => {
    const missingPath = path.join(tempDir, 'missing.ts');
    expect(nodeIoAdapter.exists(missingPath)).toBe(false);
  });
});

describe('MemoryIoAdapter', () => {
  it('should initialize from a plain object', () => {
    const io = new MemoryIoAdapter({
      '/tmp/a.ts': 'a',
      '/tmp/b.ts': 'b',
    });

    expect(io.exists('/tmp/a.ts')).toBe(true);
    expect(io.readFile('/tmp/b.ts')).toBe('b');
  });

  it('should initialize from a map', () => {
    const io = new MemoryIoAdapter(
      new Map([
        ['/tmp/a.ts', 'a'],
        ['/tmp/b.ts', 'b'],
      ]),
    );

    expect(io.readFile('/tmp/a.ts')).toBe('a');
    expect(io.readFile('/tmp/b.ts')).toBe('b');
  });

  it('should throw when reading a missing file', () => {
    const io = new MemoryIoAdapter();
    expect(() => io.readFile('/tmp/missing.ts')).toThrow('File not found: /tmp/missing.ts');
  });

  it('should expose file map for assertions', () => {
    const io = new MemoryIoAdapter();
    io.writeFile('/tmp/file.ts', 'content');

    const files = io.getFiles();
    expect(files).toBeInstanceOf(Map);
    expect(files.get('/tmp/file.ts')).toBe('content');
  });
});

describe('createMemoryIoAdapter', () => {
  it('should create a memory adapter with optional initial files', () => {
    const io = createMemoryIoAdapter({ '/tmp/file.ts': 'content' });

    expect(io).toBeInstanceOf(MemoryIoAdapter);
    expect(io.readFile('/tmp/file.ts')).toBe('content');
  });
});
