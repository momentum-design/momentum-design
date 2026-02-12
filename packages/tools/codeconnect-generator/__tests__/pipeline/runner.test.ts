/**
 * @fileoverview Tests for pipeline runner orchestration and diagnostics.
 */

import { createEmptyComponentResult } from '../../src/core/report';
import { aggregateResults, createResult } from '../../src/core/result';
import { type ConnectOptions, EmitterTarget } from '../../src/core/types';
import { runConnectPipeline } from '../../src/pipeline/runner';
import { createMockComponentModel } from '../helpers/fixtures';
import { createMockLogger } from '../helpers/mocks';

const mockFindManifest = jest.fn();
const mockParseManifest = jest.fn();
const mockMapParsedComponents = jest.fn();
const mockCreateEmitters = jest.fn();
const mockProcessManifestBatch = jest.fn();

jest.mock('../../src/parsers/custom-elements', () => ({
  findManifest: (...args: unknown[]) => mockFindManifest(...args),
  parseManifest: (...args: unknown[]) => mockParseManifest(...args),
  mapParsedComponents: (...args: unknown[]) => mockMapParsedComponents(...args),
}));

jest.mock('../../src/emitters/factory', () => ({
  createEmitters: (...args: unknown[]) => mockCreateEmitters(...args),
}));

jest.mock('../../src/pipeline/manifest-batch', () => ({
  processManifestBatch: (...args: unknown[]) => mockProcessManifestBatch(...args),
}));

describe('runConnectPipeline', () => {
  const baseOptions: ConnectOptions = {
    inputPath: '/repo/components',
    dryRun: false,
    force: false,
    emitTargets: [EmitterTarget.WebComponent],
    continueOnError: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an error report when manifest cannot be found', async () => {
    const logger = createMockLogger();
    mockFindManifest.mockReturnValue(null);

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.status).toBe('error');
    expect(report.errors).toEqual([
      'custom-elements.json manifest not found. Searched from: /repo/components',
    ]);
    expect(report.componentResults).toBeUndefined();
    expect(mockParseManifest).not.toHaveBeenCalled();
  });

  it('should warn and stop early when manifest has no custom elements', async () => {
    const logger = createMockLogger();
    mockFindManifest.mockReturnValue('/repo/components/custom-elements.json');
    mockParseManifest.mockReturnValue([]);

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.status).toBe('warning');
    expect(report.warnings).toEqual(['No custom element declarations found in manifest.']);
    expect(report.componentResults).toBeUndefined();
    expect(mockMapParsedComponents).not.toHaveBeenCalled();
  });

  it('should surface parse failures as errors', async () => {
    const logger = createMockLogger();
    mockFindManifest.mockReturnValue('/repo/components/custom-elements.json');
    mockParseManifest.mockImplementation(() => {
      throw new Error('invalid manifest');
    });

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.status).toBe('error');
    expect(report.errors).toEqual(['Failed to parse manifest: invalid manifest']);
  });

  it('should stringify non-Error parse failures', async () => {
    const logger = createMockLogger();
    const thrownValue: unknown = 'invalid manifest payload';
    mockFindManifest.mockReturnValue('/repo/components/custom-elements.json');
    mockParseManifest.mockImplementation(() => {
      throw thrownValue;
    });

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.status).toBe('error');
    expect(report.errors).toEqual(['Failed to parse manifest: invalid manifest payload']);
  });

  it('should warn when no emitters are selected', async () => {
    const logger = createMockLogger();
    const model = createMockComponentModel({
      className: 'Button',
      tagName: 'mdc-button',
      componentDir: '/repo/components/src/components/button',
      filePath: '/repo/components/src/components/button/button.component.ts',
    });

    mockFindManifest.mockReturnValue('/repo/components/custom-elements.json');
    mockParseManifest.mockReturnValue([
      {
        className: 'Button',
        tagName: 'mdc-button',
        modulePath: 'src/components/button/button.component.ts',
        description: '',
        attributes: [],
        events: [],
        slots: [],
        cssProperties: [],
      },
    ]);
    mockMapParsedComponents.mockReturnValue([model]);
    mockCreateEmitters.mockReturnValue([]);
    mockProcessManifestBatch.mockReturnValue({
      items: [],
      warnings: [],
      errors: [],
      ok: true,
    });

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.status).toBe('warning');
    expect(report.warnings).toContain('No emitters selected. Use --emit to specify targets.');
    expect(report.componentResults).toEqual([]);
    expect(mockProcessManifestBatch).toHaveBeenCalledWith(
      [model],
      expect.objectContaining({
        emitters: [],
      }),
    );
  });

  it('should include aggregate component diagnostics in the final report', async () => {
    const logger = createMockLogger();
    const model = createMockComponentModel({
      className: 'Button',
      tagName: 'mdc-button',
      componentDir: '/repo/components/src/components/button',
      filePath: '/repo/components/src/components/button/button.component.ts',
    });
    const component = {
      ...createEmptyComponentResult(),
      model,
      componentName: 'mdc-button',
      created: ['/tmp/button.webcomponent.figma.ts'],
    };

    mockFindManifest.mockReturnValue('/repo/components/custom-elements.json');
    mockParseManifest.mockReturnValue([
      {
        className: 'Button',
        tagName: 'mdc-button',
        modulePath: 'src/components/button/button.component.ts',
        description: '',
        attributes: [],
        events: [],
        slots: [],
        cssProperties: [],
      },
    ]);
    mockMapParsedComponents.mockReturnValue([model]);
    mockCreateEmitters.mockReturnValue([{ target: EmitterTarget.WebComponent, emit: jest.fn() }]);
    mockProcessManifestBatch.mockReturnValue(
      aggregateResults([createResult(component, ['component warning'], [])]),
    );

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.status).toBe('warning');
    expect(report.created).toContain('/tmp/button.webcomponent.figma.ts');
    expect(report.componentResults).toHaveLength(1);
    expect(report.componentResults?.[0].warnings).toContain('component warning');
  });

  it('should use explicit manifestPath when provided', async () => {
    const logger = createMockLogger();
    const model = createMockComponentModel();
    const options: ConnectOptions = {
      ...baseOptions,
      manifestPath: '/repo/custom/custom-elements.json',
    };

    mockFindManifest.mockReturnValue('/repo/custom/custom-elements.json');
    mockParseManifest.mockReturnValue([
      {
        className: 'Test',
        tagName: 'mdc-test',
        modulePath: 'src/components/test/test.component.ts',
        description: '',
        attributes: [],
        events: [],
        slots: [],
        cssProperties: [],
      },
    ]);
    mockMapParsedComponents.mockReturnValue([model]);
    mockCreateEmitters.mockReturnValue([]);
    mockProcessManifestBatch.mockReturnValue({ items: [], warnings: [], errors: [], ok: true });

    await runConnectPipeline(options, logger);

    expect(mockFindManifest).toHaveBeenCalledWith('/repo/custom/custom-elements.json');
  });

  it('should omit componentResults when mapped models are empty', async () => {
    const logger = createMockLogger();

    mockFindManifest.mockReturnValue('/repo/components/custom-elements.json');
    mockParseManifest.mockReturnValue([
      {
        className: 'Button',
        tagName: 'mdc-button',
        modulePath: 'src/components/button/button.component.ts',
        description: '',
        attributes: [],
        events: [],
        slots: [],
        cssProperties: [],
      },
    ]);
    mockMapParsedComponents.mockReturnValue([]);
    mockCreateEmitters.mockReturnValue([]);
    mockProcessManifestBatch.mockReturnValue({ items: [], warnings: [], errors: [], ok: true });

    const report = await runConnectPipeline(baseOptions, logger);

    expect(report.componentResults).toBeUndefined();
  });
});
