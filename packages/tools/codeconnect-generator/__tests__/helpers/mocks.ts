// AI-Assisted
/**
 * @fileoverview Shared mock utilities for codeconnect-generator tests.
 * Provides helper functions for setting up and tearing down mocks.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

import type { Logger } from '../../src/core/logger';

/**
 * Mock configuration for file system operations.
 */
export interface FileSystemMockConfig {
  existsSync?: jest.SpiedFunction<typeof fs.existsSync>;
  readFileSync?: jest.SpiedFunction<typeof fs.readFileSync>;
  writeFileSync?: jest.SpiedFunction<typeof fs.writeFileSync>;
  mkdirSync?: jest.SpiedFunction<typeof fs.mkdirSync>;
  readdirSync?: jest.SpiedFunction<typeof fs.readdirSync>;
  statSync?: jest.SpiedFunction<typeof fs.statSync>;
}

/**
 * Sets up file system mocks for testing.
 * @returns Object containing all mocked functions.
 */
export function setupFileSystemMocks(): FileSystemMockConfig {
  return {
    existsSync: jest.spyOn(fs, 'existsSync'),
    readFileSync: jest.spyOn(fs, 'readFileSync'),
    writeFileSync: jest.spyOn(fs, 'writeFileSync').mockImplementation(() => undefined),
    mkdirSync: jest.spyOn(fs, 'mkdirSync').mockImplementation(() => undefined),
    readdirSync: jest.spyOn(fs, 'readdirSync'),
    statSync: jest.spyOn(fs, 'statSync'),
  };
}

/**
 * Restores all file system mocks.
 */
export function restoreFileSystemMocks(): void {
  jest.restoreAllMocks();
}

/**
 * Creates a mock Logger for testing.
 * @returns Mocked Logger instance.
 */
export function createMockLogger(): jest.Mocked<Logger> {
  return {
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
    setLevel: jest.fn(),
    getLevel: jest.fn(),
  } as unknown as jest.Mocked<Logger>;
}

/**
 * Creates a mock fs.Stats object.
 * @param isDirectory - Whether the stat represents a directory.
 */
export function createMockStats(isDirectory: boolean): fs.Stats {
  return {
    isDirectory: () => isDirectory,
    isFile: () => !isDirectory,
    isBlockDevice: () => false,
    isCharacterDevice: () => false,
    isSymbolicLink: () => false,
    isFIFO: () => false,
    isSocket: () => false,
    dev: 0,
    ino: 0,
    mode: 0,
    nlink: 0,
    uid: 0,
    gid: 0,
    rdev: 0,
    size: 0,
    blksize: 0,
    blocks: 0,
    atimeMs: 0,
    mtimeMs: 0,
    ctimeMs: 0,
    birthtimeMs: 0,
    atime: new Date(),
    mtime: new Date(),
    ctime: new Date(),
    birthtime: new Date(),
  } as fs.Stats;
}

/**
 * Creates a mock fs.Dirent object.
 * @param name - Name of the directory entry.
 * @param isDirectory - Whether the entry is a directory.
 */
export function createMockDirent(name: string, isDirectory: boolean): fs.Dirent {
  return {
    name,
    isDirectory: () => isDirectory,
    isFile: () => !isDirectory,
    isBlockDevice: () => false,
    isCharacterDevice: () => false,
    isSymbolicLink: () => false,
    isFIFO: () => false,
    isSocket: () => false,
    path: '',
    parentPath: '',
  } as fs.Dirent;
}

/**
 * Sets up a mock directory structure.
 * @param mocks - File system mock config.
 * @param structure - Map of paths to their contents (files) or nested structures (directories).
 */
export function setupMockDirectoryStructure(
  mocks: FileSystemMockConfig,
  structure: Record<string, string | Record<string, unknown>>,
): void {
  const paths = Object.keys(structure);

  mocks.existsSync?.mockImplementation((p: fs.PathLike) => {
    const pathStr = p.toString();
    return paths.some((structPath) => pathStr === structPath || pathStr.startsWith(structPath + path.sep));
  });

  mocks.statSync?.mockImplementation((p: fs.PathLike) => {
    const pathStr = p.toString();
    const value = structure[pathStr];
    if (value === undefined) {
      throw new Error(`ENOENT: no such file or directory, stat '${pathStr}'`);
    }
    return createMockStats(typeof value === 'object');
  });

  mocks.readFileSync?.mockImplementation((p: fs.PathOrFileDescriptor) => {
    const pathStr = p.toString();
    const value = structure[pathStr];
    if (typeof value === 'string') {
      return value;
    }
    throw new Error(`EISDIR: illegal operation on a directory, read '${pathStr}'`);
  });

  mocks.readdirSync?.mockImplementation((p: fs.PathLike) => {
    const pathStr = p.toString();
    const value = structure[pathStr];
    if (typeof value !== 'object') {
      throw new TypeError(`ENOTDIR: not a directory, scandir '${pathStr}'`);
    }
    return Object.keys(value).map((name) => {
      const entry = (value as Record<string, unknown>)[name];
      return createMockDirent(name, typeof entry === 'object');
    });
  });
}

/**
 * Verifies that a mock function was called exactly once with specific arguments.
 * @param mock - The mocked function.
 * @param args - Expected arguments.
 */
export function expectCalledOnceWith<T extends jest.Mock>(mock: T, ...args: Parameters<T>): void {
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(...args);
}

/**
 * Verifies that a mock function was never called.
 * @param mock - The mocked function.
 */
export function expectNotCalled<T extends jest.Mock>(mock: T): void {
  expect(mock).toHaveBeenCalledTimes(0);
}
// End AI-Assisted
