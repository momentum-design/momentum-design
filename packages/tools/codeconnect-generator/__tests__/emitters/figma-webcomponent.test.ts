// AI-Assisted
/**
 * @fileoverview Tests for FigmaWebComponentEmitter.
 */

import { EmitterTarget, FigmaPropertyType } from '../../src/core/types';
import { FigmaWebComponentEmitter } from '../../src/emitters/figma-webcomponent';
import { expectContainsAll, expectContainsInOrder, expectGeneratedSectionMarkers } from '../helpers/assertions';
import {
  createMockAttribute,
  createMockComponentModel,
  createMockEmitterOptions,
  createMockProperty,
} from '../helpers/fixtures';

describe('FigmaWebComponentEmitter', () => {
  let emitter: FigmaWebComponentEmitter;

  beforeEach(() => {
    emitter = new FigmaWebComponentEmitter();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('target', () => {
    it('should return WebComponent target', () => {
      expect(emitter.target).toBe(EmitterTarget.WebComponent);
    });
  });

  describe('emit', () => {
    describe('positive cases', () => {
      it('should generate code connect file for minimal component', () => {
        const model = createMockComponentModel({
          className: 'ButtonComponent',
          tagName: 'mdc-button',
          filePath: '/src/components/button/button.component.ts',
          componentDir: '/src/components/button',
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.filePath).toBe('/src/components/button/code-connect/button.webcomponent.figma.ts');
        expect(result.content).toContain('import figma, { html } from \'@figma/code-connect/html\';');
        expect(result.content).toContain('figma.connect(');
        expect(result.content).toContain('<FIGMA_BUTTON_URL>');
        expect(result.content).toContain('props: {},');
        expect(result.content).toContain('<mdc-button></mdc-button>');
      });

      it('should generate props section for component with properties', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-button',
          filePath: '/src/button.component.ts',
          componentDir: '/src',
          props: [
            createMockProperty({ name: 'disabled', type: FigmaPropertyType.Boolean }),
            createMockProperty({ name: 'label', type: FigmaPropertyType.String }),
            createMockProperty({ name: 'size', type: FigmaPropertyType.Number }),
          ],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.content).toContain('props: {');
        expect(result.content).toContain('disabled: figma.boolean(\'Disabled\')');
        expect(result.content).toContain('label: figma.string(\'Label\')');
        expect(result.content).toContain('size: figma.string(\'Size\')');
      });

      it('should generate enum mapping for enum properties', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-button',
          filePath: '/src/button.component.ts',
          componentDir: '/src',
          props: [
            createMockProperty({
              name: 'variant',
              type: FigmaPropertyType.Enum,
              enumValues: ['primary', 'secondary', 'ghost'],
            }),
          ],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.content).toContain('variant: figma.enum(\'Variant\', {');
        expect(result.content).toContain('\'Primary\': "primary"');
        expect(result.content).toContain('\'Secondary\': "secondary"');
        expect(result.content).toContain('\'Ghost\': "ghost"');
      });

      it('should generate example template with attribute bindings', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-button',
          filePath: '/src/button.component.ts',
          componentDir: '/src',
          attributes: [
            createMockAttribute({ name: 'disabled', propertyName: 'disabled', type: FigmaPropertyType.Boolean }),
            createMockAttribute({ name: 'label', propertyName: 'label', type: FigmaPropertyType.String }),
          ],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.content).toContain('example: props => html`');
        // eslint-disable-next-line no-template-curly-in-string
        expect(result.content).toContain('disabled=${props.disabled}');
        // eslint-disable-next-line no-template-curly-in-string
        expect(result.content).toContain('label=${props.label}');
      });

      it('should generate imports line with default base path', () => {
        const model = createMockComponentModel({
          filePath: '/src/button.component.ts',
          componentDir: '/src',
          importPath: 'button',
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.content).toContain('imports: ["import \'@momentum-design/components/button\';"]');
      });

      it('should use custom base import path when specified', () => {
        const model = createMockComponentModel({
          filePath: '/src/button.component.ts',
          componentDir: '/src',
          importPath: 'button',
        });

        const result = emitter.emit({
          model,
          options: createMockEmitterOptions({ baseImportPath: '@custom/components' }),
        });

        expect(result.content).toContain('imports: ["import \'@custom/components/button\';"]');
      });

      it('should include core sections for full output', () => {
        const model = createMockComponentModel({
          className: 'Button',
          tagName: 'mdc-button',
          filePath: '/src/components/button/button.component.ts',
          componentDir: '/src/components/button',
          importPath: 'components/button',
          props: [
            createMockProperty({ name: 'disabled', type: FigmaPropertyType.Boolean }),
            createMockProperty({ name: 'label', type: FigmaPropertyType.String }),
          ],
          attributes: [
            createMockAttribute({ name: 'disabled', propertyName: 'disabled', type: FigmaPropertyType.Boolean }),
            createMockAttribute({ name: 'label', propertyName: 'label', type: FigmaPropertyType.String }),
          ],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expectContainsInOrder(result.content, [
          'import figma, { html } from \'@figma/code-connect/html\';',
          'figma.connect(\'<FIGMA_BUTTON_URL>\', {',
        ]);
        expectGeneratedSectionMarkers(result.content);
        expectContainsAll(result.content, [
          'disabled: figma.boolean(\'Disabled\')',
          'label: figma.string(\'Label\')',
          'example: props => html`',
        ]);
        // eslint-disable-next-line no-template-curly-in-string
        expect(result.content).toContain('disabled=${props.disabled}');
        // eslint-disable-next-line no-template-curly-in-string
        expect(result.content).toContain('label=${props.label}');
      });
    });

    describe('edge cases', () => {
      it('should handle property names with special characters', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-test',
          filePath: '/src/test.component.ts',
          componentDir: '/src',
          props: [createMockProperty({ name: 'data-value', type: FigmaPropertyType.String })],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.content).toContain('\'data-value\': figma.string(\'Data Value\')');
      });

      it('should handle empty enum values', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-test',
          filePath: '/src/test.component.ts',
          componentDir: '/src',
          props: [createMockProperty({ name: 'status', type: FigmaPropertyType.Enum, enumValues: [] })],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        // Should fallback to string when no enum values
        expect(result.content).toContain('status: figma.string(\'Status\')');
      });

      it('should handle unknown property type', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-test',
          filePath: '/src/test.component.ts',
          componentDir: '/src',
          props: [createMockProperty({ name: 'custom', type: FigmaPropertyType.Unknown })],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        // Should fallback to string
        expect(result.content).toContain('custom: figma.string(\'Custom\')');
        // Should include a warning
        expect(result.warnings).toBeDefined();
        expect(result.warnings).toHaveLength(1);
        expect(result.warnings![0]).toContain('\'custom\'');
        expect(result.warnings![0]).toContain('unknown');
      });

      it('should sort properties alphabetically', () => {
        const model = createMockComponentModel({
          tagName: 'mdc-test',
          filePath: '/src/test.component.ts',
          componentDir: '/src',
          props: [
            createMockProperty({ name: 'zebra', type: FigmaPropertyType.String }),
            createMockProperty({ name: 'alpha', type: FigmaPropertyType.String }),
            createMockProperty({ name: 'middle', type: FigmaPropertyType.String }),
          ],
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });
        const alphaIndex = result.content.indexOf('alpha:');
        const middleIndex = result.content.indexOf('middle:');
        const zebraIndex = result.content.indexOf('zebra:');

        expect(alphaIndex).toBeLessThan(middleIndex);
        expect(middleIndex).toBeLessThan(zebraIndex);
      });

      it('should use default import path when baseImportPath is not provided', () => {
        const model = createMockComponentModel({
          className: 'Button',
          tagName: 'mdc-button',
          importPath: 'components/button',
          filePath: '/src/button.component.ts',
          componentDir: '/src',
        });

        const result = emitter.emit({ model, options: createMockEmitterOptions() });

        expect(result.content).toContain('imports: ["import \'@momentum-design/components/components/button\';"],');
      });

      it('should use custom import path when baseImportPath is provided', () => {
        const model = createMockComponentModel({
          className: 'Button',
          tagName: 'mdc-button',
          importPath: 'components/button',
          filePath: '/src/button.component.ts',
          componentDir: '/src',
        });

        const result = emitter.emit({
          model,
          options: createMockEmitterOptions({ baseImportPath: '../../src' }),
        });

        expect(result.content).toContain('imports: ["import \'../../src/components/button\';"],');
      });
    });
  });
});
// End AI-Assisted
