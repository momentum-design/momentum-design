// AI-Assisted
/**
 * @fileoverview Tests for CLI validators.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { validateGlobalOptions, validatePathOption } from '../../src/cli/validators';

describe('cli validators', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codeconnect-generator-'));
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  describe('validateGlobalOptions', () => {
    it('should throw when verbose and quiet are both enabled', () => {
      expect(() => validateGlobalOptions({ verbose: true, quiet: true })).toThrow(
        'Cannot use --verbose and --quiet together.',
      );
    });

    it('should do not throw for compatible options', () => {
      expect(() => validateGlobalOptions({ verbose: true, quiet: false })).not.toThrow();
    });
  });

  describe('validatePathOption', () => {
    it('should throw when path is empty', () => {
      expect(() => validatePathOption('')).toThrow('Missing required value for --path.');
    });

    it('should throw when path is whitespace', () => {
      expect(() => validatePathOption('   ')).toThrow('Missing required value for --path.');
    });

    it('should include custom option names in error messages', () => {
      expect(() => validatePathOption('', '--config')).toThrow('Missing required value for --config.');
    });

    it('should throw when path does not exist', () => {
      expect(() => validatePathOption(path.join(tempDir, 'missing.ts'))).toThrow('Path not found');
    });

    it('should allow directory paths', () => {
      const dirPath = path.join(tempDir, 'components');
      fs.mkdirSync(dirPath);

      const resolved = validatePathOption(dirPath);
      expect(resolved).toBe(path.resolve(dirPath));
    });

    it('should return an absolute path when the file exists', () => {
      const filePath = path.join(tempDir, 'component.component.ts');
      fs.writeFileSync(filePath, 'export const foo = 1;', 'utf8');

      const resolved = validatePathOption(filePath);
      expect(resolved).toBe(path.resolve(filePath));
    });
  });
});
// End AI-Assisted
