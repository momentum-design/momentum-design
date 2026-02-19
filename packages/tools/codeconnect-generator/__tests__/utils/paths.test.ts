// AI-Assisted
/**
 * @fileoverview Tests for path utilities.
 */

import path from 'node:path';

import { normalizePath } from '../../src/utils/paths';

describe('normalizePath', () => {
  it('should return empty string for empty input', () => {
    expect(normalizePath('')).toBe('');
  });

  it('should normalize to absolute POSIX path', () => {
    const input = path.join('some', 'dir', 'file.ts');
    const normalized = normalizePath(input);

    expect(normalized).toContain('/');
    expect(normalized).not.toContain('\\');
    expect(normalized).toContain('some/dir/file.ts');
  });
});
// End AI-Assisted
