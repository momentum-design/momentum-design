// AI-Assisted
/**
 * @fileoverview Tests for emitter utilities.
 */

import { GeneratedSectionName } from '../../src/core/types';
import {
  buildFilePayload,
  buildGeneratedSectionMarkers,
  buildPropsSection,
  createFilePayload,
  formatPropAccessor,
  GENERATED_SECTION_MARKERS,
  getComponentBaseName,
  withExample,
  withImports,
  withProps,
  withSections,
  withWarnings,
  wrapGeneratedSection,
} from '../../src/emitters/utils';
import { createMockComponentModel } from '../helpers/fixtures';

describe('getComponentBaseName', () => {
  it('should return file-based component name when pattern matches', () => {
    const model = createMockComponentModel({
      filePath: '/tmp/button.component.ts',
      componentDir: '/tmp/button',
    });

    expect(getComponentBaseName(model)).toBe('button');
  });

  it('should fall back to directory name when pattern does not match', () => {
    const model = createMockComponentModel({
      filePath: '/tmp/button.ts',
      componentDir: '/tmp/button',
    });

    expect(getComponentBaseName(model)).toBe('button');
  });
});

describe('formatPropAccessor', () => {
  it('should use dot access for valid identifiers', () => {
    expect(formatPropAccessor('disabled')).toBe('props.disabled');
  });

  it('should use bracket access for invalid identifiers', () => {
    expect(formatPropAccessor('data-value')).toBe('props[\'data-value\']');
  });
});

describe('buildPropsSection', () => {
  it('should return an empty props block when no props are provided', () => {
    const result = buildPropsSection([]);

    expect(result.lines).toContain('  props: {},');
    expect(result.warnings).toHaveLength(0);
  });
});

describe('wrapGeneratedSection', () => {
  it('should wrap content with default generated section markers', () => {
    const wrapped = wrapGeneratedSection('props: {}');

    expect(wrapped[0]).toContain(GENERATED_SECTION_MARKERS.start);
    expect(wrapped[wrapped.length - 1]).toContain(GENERATED_SECTION_MARKERS.end);
  });
});

describe('file payload builders', () => {
  it('should build payloads without sections metadata when no sections are added', () => {
    const draft = createFilePayload('/tmp/output.ts');
    const result = buildFilePayload(draft, withImports(['import figma from "@figma/code-connect";']));

    expect(result.filePath).toBe('/tmp/output.ts');
    expect(result.sections).toBeUndefined();
    expect(result.content).toContain('import figma from "@figma/code-connect";');
  });

  it('should add props and example sections with defaults and preserve metadata', () => {
    const draft = createFilePayload('/tmp/output.ts');
    const markers = buildGeneratedSectionMarkers(GeneratedSectionName.Props);
    const result = buildFilePayload(
      draft,
      withProps({ content: 'props: {},', markers }),
      withExample({ content: 'example: () => html`<x-el></x-el>`,', markers: GENERATED_SECTION_MARKERS }),
      withWarnings(['warn-1']),
    );

    expect(result.sections).toEqual([
      { name: 'props', content: 'props: {},', markers },
      { name: 'example', content: 'example: () => html`<x-el></x-el>`,', markers: GENERATED_SECTION_MARKERS },
    ]);
    expect(result.warnings).toEqual(['warn-1']);
    expect(result.content).toContain('// BEGIN GENERATED: props');
    expect(result.content).toContain('// BEGIN GENERATED');
  });

  it('should support withSections and default empty warnings', () => {
    const draft = createFilePayload('/tmp/output.ts');
    const result = buildFilePayload(
      draft,
      withSections({ lines: ['const value = 1;'] }),
      withWarnings(),
    );

    expect(result.content).toContain('const value = 1;');
    expect(result.warnings).toEqual([]);
  });
});
// End AI-Assisted
