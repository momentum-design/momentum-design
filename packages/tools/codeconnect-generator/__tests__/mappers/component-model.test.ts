// AI-Assisted
/**
 * @fileoverview Tests for component model normalization.
 */

import { FigmaPropertyType } from '../../src/core/types';
import { deriveImportPath, mapComponentModel } from '../../src/mappers/component-model';
import { createMockEvent, createMockProperty } from '../helpers/fixtures';

describe('deriveImportPath', () => {
  it('should derive import paths relative to the components marker', () => {
    const componentDir = '/repo/packages/components/src/components/accordion';

    expect(deriveImportPath(componentDir)).toBe('components/accordion');
  });

  it('should fall back to the component directory basename when marker is missing', () => {
    const componentDir = '/tmp/components/standalone';

    expect(deriveImportPath(componentDir)).toBe('standalone');
  });
});

describe('mapComponentModel', () => {
  it('should normalize model fields and map attributes', () => {
    const props = [
      createMockProperty({ name: 'label', attribute: 'label', type: FigmaPropertyType.String }),
      createMockProperty({ name: 'disabled', attribute: 'disabled', type: FigmaPropertyType.Boolean }),
    ];
    const events = [createMockEvent({ name: 'ready' })];

    const model = mapComponentModel({
      className: 'Accordion',
      tagName: 'mdc-accordion',
      filePath: '/repo/packages/components/src/components/accordion/accordion.component.ts',
      componentDir: '/repo/packages/components/src/components/accordion',
      props,
      events,
    });

    expect(model.className).toBe('Accordion');
    expect(model.tagName).toBe('mdc-accordion');
    expect(model.importPath).toBe('components/accordion');
    expect(model.attributes.map((attr) => attr.name)).toEqual(['label', 'disabled']);
    expect(model.events).toEqual(events);
  });

  it('should default missing class names to UnknownComponent', () => {
    const model = mapComponentModel({
      className: '   ',
      tagName: 'mdc-unknown',
      filePath: '/tmp/unknown.component.ts',
      componentDir: '/tmp',
      props: [],
      events: [],
    });

    expect(model.className).toBe('UnknownComponent');
  });

  it('should default undefined class names to UnknownComponent', () => {
    const model = mapComponentModel({
      className: undefined,
      tagName: 'mdc-unknown',
      filePath: '/tmp/unknown.component.ts',
      componentDir: '/tmp',
      props: [],
      events: [],
    });

    expect(model.className).toBe('UnknownComponent');
  });

  it('should normalize missing props and events to empty arrays', () => {
    const model = mapComponentModel({
      className: 'TestComponent',
      tagName: 'mdc-test',
      filePath: '/tmp/test.component.ts',
      componentDir: '/tmp/test',
      props: undefined,
      events: undefined,
    } as unknown as Parameters<typeof mapComponentModel>[0]);

    expect(model.props).toEqual([]);
    expect(model.events).toEqual([]);
    expect(model.attributes).toEqual([]);
  });
});
// End AI-Assisted
