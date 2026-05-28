/**
 * @fileoverview Tests for manifest mapper type normalization.
 */

import { FigmaPropertyType } from '../../../src/core/types';
import { mapParsedComponent, mapParsedComponents } from '../../../src/parsers/custom-elements/manifest-mapper';
import type { ParsedComponent } from '../../../src/parsers/custom-elements/types';

const createParsedComponent = (type: string, overrides: Partial<ParsedComponent> = {}): ParsedComponent => ({
  className: 'TestComponent',
  tagName: 'mdc-test',
  modulePath: 'src/components/test/test.component.ts',
  description: '',
  attributes: [
    {
      name: 'variant',
      type,
      default: undefined,
      description: undefined,
      fieldName: undefined,
      required: false,
    },
  ],
  events: [],
  slots: [],
  cssProperties: [],
  ...overrides,
});

describe('manifest mapper', () => {
  it('should map literal unions to enum properties', () => {
    const parsed = createParsedComponent('\'primary\' | \'secondary\' | undefined');

    const result = mapParsedComponent(parsed, { packageRoot: '/repo/packages/components' });

    expect(result.props[0].type).toBe(FigmaPropertyType.Enum);
    expect(result.props[0].enumValues).toEqual(['primary', 'secondary']);
  });

  it('should map primitive unions with undefined to primitive types', () => {
    const parsed = createParsedComponent('string | undefined');

    const result = mapParsedComponent(parsed, { packageRoot: '/repo/packages/components' });

    expect(result.props[0].type).toBe(FigmaPropertyType.String);
    expect(result.props[0].enumValues).toBeUndefined();
  });

  it('should map mixed primitive unions to unknown', () => {
    const parsed = createParsedComponent('string | number');

    const result = mapParsedComponent(parsed, { packageRoot: '/repo/packages/components' });

    expect(result.props[0].type).toBe(FigmaPropertyType.Unknown);
  });

  it('should map primitive scalar types directly', () => {
    const parsed = createParsedComponent('boolean');
    const result = mapParsedComponent(parsed, { packageRoot: '/repo/packages/components' });

    expect(result.props[0].type).toBe(FigmaPropertyType.Boolean);
  });

  it('should map single-type unions to primitive targets', () => {
    const parsedBoolean = createParsedComponent('boolean | undefined');
    const parsedNumber = createParsedComponent('number | null');

    const booleanResult = mapParsedComponent(parsedBoolean, { packageRoot: '/repo/packages/components' });
    const numberResult = mapParsedComponent(parsedNumber, { packageRoot: '/repo/packages/components' });

    expect(booleanResult.props[0].type).toBe(FigmaPropertyType.Boolean);
    expect(numberResult.props[0].type).toBe(FigmaPropertyType.Number);
  });

  it('should parse defaults and resolve property names from fieldName/kebab-case', () => {
    const parsed = createParsedComponent('number', {
      attributes: [
        {
          name: 'max-count',
          type: 'number',
          default: '10',
          description: undefined,
          fieldName: undefined,
          required: false,
        },
        {
          name: 'enabled',
          type: 'boolean',
          default: 'true',
          description: undefined,
          fieldName: 'isEnabled',
          required: false,
        },
        {
          name: 'label',
          type: 'string',
          default: '"Primary"',
          description: undefined,
          fieldName: undefined,
          required: false,
        },
        {
          name: 'missing-number',
          type: 'number',
          default: 'not-a-number',
          description: undefined,
          fieldName: undefined,
          required: false,
        },
        {
          name: 'empty-label',
          type: 'string',
          default: '""',
          description: undefined,
          fieldName: undefined,
          required: false,
        },
      ],
    });

    const result = mapParsedComponent(parsed, { packageRoot: '/repo/packages/components' });

    expect(result.props.map((prop) => prop.name)).toEqual([
      'maxCount',
      'isEnabled',
      'label',
      'missingNumber',
      'emptyLabel',
    ]);
    expect(result.props.map((prop) => prop.defaultValue)).toEqual([10, true, 'Primary', null, null]);
  });

  it('should map events with react handlers and unknown detail fallback', () => {
    const parsed = createParsedComponent('string', {
      events: [
        { name: 'value-change', type: 'unknown', description: undefined },
        { name: 'ready', type: 'CustomDetail', description: undefined },
      ],
    });

    const result = mapParsedComponent(parsed, { packageRoot: '/repo/packages/components' });

    expect(result.events).toEqual([
      { name: 'value-change', reactHandler: 'onValueChange', detailType: null },
      { name: 'ready', reactHandler: 'onReady', detailType: 'CustomDetail' },
    ]);
  });

  it('should map arrays of parsed components', () => {
    const first = createParsedComponent('string', { tagName: 'mdc-first' });
    const second = createParsedComponent('boolean', { tagName: 'mdc-second' });

    const result = mapParsedComponents([first, second], { packageRoot: '/repo/packages/components' });

    expect(result).toHaveLength(2);
    expect(result.map((component) => component.tagName)).toEqual(['mdc-first', 'mdc-second']);
  });
});
