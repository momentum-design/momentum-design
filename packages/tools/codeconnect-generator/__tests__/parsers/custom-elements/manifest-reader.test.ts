/**
 * @fileoverview Tests for custom-elements manifest discovery.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { findManifest, normalizeTypeString, parseManifest } from '../../../src/parsers/custom-elements/manifest-reader';

describe('manifest reader', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codeconnect-manifest-reader-'));
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should return the explicit manifest path when provided', () => {
    const manifestPath = path.join(tempDir, 'custom-elements.json');
    fs.writeFileSync(manifestPath, '{"modules":[]}', 'utf8');

    expect(findManifest(manifestPath)).toBe(manifestPath);
  });

  it('should discover the nearest local custom-elements.json while walking up', () => {
    const packageRoot = path.join(tempDir, 'workspace', 'packages', 'components');
    const manifestPath = path.join(packageRoot, 'custom-elements.json');
    fs.mkdirSync(packageRoot, { recursive: true });
    fs.writeFileSync(manifestPath, '{"modules":[]}', 'utf8');

    const componentDir = path.join(packageRoot, 'src', 'components', 'button');
    const componentFile = path.join(componentDir, 'button.component.ts');
    fs.mkdirSync(componentDir, { recursive: true });
    fs.writeFileSync(componentFile, 'export class Button {}', 'utf8');

    expect(findManifest(componentFile)).toBe(manifestPath);
  });

  it('should fall back to node_modules custom-elements.json while walking up', () => {
    const workspaceRoot = path.join(tempDir, 'workspace');
    const deepDir = path.join(workspaceRoot, 'project', 'src', 'components', 'button');
    fs.mkdirSync(deepDir, { recursive: true });

    const dependencyManifest = path.join(
      workspaceRoot,
      'node_modules',
      '@momentum-design',
      'components',
      'custom-elements.json',
    );
    fs.mkdirSync(path.dirname(dependencyManifest), { recursive: true });
    fs.writeFileSync(dependencyManifest, '{"modules":[]}', 'utf8');

    expect(findManifest(deepDir)).toBe(dependencyManifest);
  });

  it('should discover dist/custom-elements.json while walking up', () => {
    const packageRoot = path.join(tempDir, 'workspace', 'packages', 'components');
    const manifestPath = path.join(packageRoot, 'dist', 'custom-elements.json');
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(manifestPath, '{"modules":[]}', 'utf8');

    const componentDir = path.join(packageRoot, 'src', 'components', 'button');
    fs.mkdirSync(componentDir, { recursive: true });

    expect(findManifest(componentDir)).toBe(manifestPath);
  });

  it('should return null when no manifest can be found', () => {
    const unresolvedPath = path.join(tempDir, 'workspace', 'project', 'src', 'components');
    fs.mkdirSync(unresolvedPath, { recursive: true });

    expect(findManifest(unresolvedPath)).toBeNull();
  });

  it('should search from the parent directory when provided a non-json file path', () => {
    const packageRoot = path.join(tempDir, 'workspace', 'packages', 'components');
    const manifestPath = path.join(packageRoot, 'custom-elements.json');
    fs.mkdirSync(packageRoot, { recursive: true });
    fs.writeFileSync(manifestPath, '{"modules":[]}', 'utf8');

    const sourcePath = path.join(packageRoot, 'src', 'components', 'button', 'button.component.ts');
    fs.mkdirSync(path.dirname(sourcePath), { recursive: true });
    fs.writeFileSync(sourcePath, 'export class Button {}', 'utf8');

    expect(findManifest(sourcePath)).toBe(manifestPath);
  });
});

describe('normalizeTypeString', () => {
  it('should normalize empty values to unknown', () => {
    expect(normalizeTypeString(undefined)).toBe('unknown');
  });

  it('should normalize aliased union types', () => {
    expect(normalizeTypeString(' String | Boolean | CustomType ')).toBe('string | boolean | CustomType');
  });

  it('should preserve non-aliased scalar types', () => {
    expect(normalizeTypeString('CustomEventDetail')).toBe('CustomEventDetail');
  });
});

describe('parseManifest', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codeconnect-manifest-parse-'));
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should parse custom element classes and normalize nested metadata', () => {
    const manifestPath = path.join(tempDir, 'custom-elements.json');
    fs.writeFileSync(
      manifestPath,
      JSON.stringify({
        schemaVersion: '1.0.0',
        modules: [
          {
            kind: 'javascript-module',
            path: 'src/components/button/button.component.ts',
            declarations: [
              {
                kind: 'class',
                name: 'Button',
                tagName: 'mdc-button',
                description: 'A button.',
                attributes: [
                  {
                    name: 'disabled',
                    type: { text: 'Boolean' },
                    default: 'false',
                    description: 'Disabled state',
                  },
                ],
                events: [
                  {
                    name: 'value-change',
                    type: { text: 'String | undefined' },
                    description: 'Value changed',
                  },
                ],
                slots: [{ name: 'default', description: 'Default slot' }],
                cssProperties: [{ name: '--mdc-color', default: 'red', description: 'Color token' }],
              },
              {
                kind: 'class',
                name: 'NoTagName',
              },
              {
                kind: 'variable',
                name: 'ignored',
              },
            ],
          },
          {
            kind: 'javascript-module',
            path: 'src/empty.ts',
          },
        ],
      }),
      'utf8',
    );

    const result = parseManifest(manifestPath);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(
      expect.objectContaining({
        className: 'Button',
        tagName: 'mdc-button',
        modulePath: 'src/components/button/button.component.ts',
        description: 'A button.',
      }),
    );
    expect(result[0].attributes).toEqual([
      expect.objectContaining({
        name: 'disabled',
        type: 'boolean',
        required: false,
      }),
    ]);
    expect(result[0].events).toEqual([
      expect.objectContaining({
        name: 'value-change',
        type: 'string | undefined',
      }),
    ]);
    expect(result[0].slots).toEqual([{ name: 'default', description: 'Default slot' }]);
    expect(result[0].cssProperties).toEqual([{ name: '--mdc-color', default: 'red', description: 'Color token' }]);
  });

  it('should default optional declaration arrays and unknown event types', () => {
    const manifestPath = path.join(tempDir, 'custom-elements.json');
    fs.writeFileSync(
      manifestPath,
      JSON.stringify({
        schemaVersion: '1.0.0',
        modules: [
          {
            kind: 'javascript-module',
            path: 'src/components/minimal/minimal.component.ts',
            declarations: [
              {
                kind: 'class',
                name: 'MinimalComponent',
                tagName: 'mdc-minimal',
                events: [{ name: 'ready' }],
              },
            ],
          },
        ],
      }),
      'utf8',
    );

    const result = parseManifest(manifestPath);

    expect(result).toHaveLength(1);
    expect(result[0].attributes).toEqual([]);
    expect(result[0].slots).toEqual([]);
    expect(result[0].cssProperties).toEqual([]);
    expect(result[0].events).toEqual([{ name: 'ready', type: 'unknown', description: undefined }]);
  });
});
