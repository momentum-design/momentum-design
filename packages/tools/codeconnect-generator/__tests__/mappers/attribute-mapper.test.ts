// AI-Assisted
/**
 * @fileoverview Tests for attribute mapper utilities.
 */

import { FigmaPropertyType, type PropertyDescriptor, PropertyVisibility } from '../../src/core/types';
import { mapPropertiesToAttributes, mapPropertyToAttribute } from '../../src/mappers/attribute-mapper';

describe('mapPropertyToAttribute', () => {
  const baseProperty: PropertyDescriptor = {
    name: 'expanded',
    attribute: 'expanded',
    type: FigmaPropertyType.Boolean,
    tsType: 'boolean',
    reflect: true,
    defaultValue: false,
    doc: 'Expands the accordion.',
    visibility: PropertyVisibility.Public,
  };

  describe('positive cases', () => {
    it('should map property metadata to attribute descriptor', () => {
      const result = mapPropertyToAttribute(baseProperty);

      expect(result).toMatchObject({
        name: 'expanded',
        propertyName: 'expanded',
        type: FigmaPropertyType.Boolean,
        reflect: true,
        defaultValue: false,
        doc: 'Expands the accordion.',
      });
    });
  });

  describe('negative cases', () => {
    it('should return null when attribute is null', () => {
      const result = mapPropertyToAttribute({
        ...baseProperty,
        attribute: null,
      });

      expect(result).toBeNull();
    });

    it('should return null when attribute is an empty string', () => {
      const result = mapPropertyToAttribute({
        ...baseProperty,
        attribute: '',
      });

      expect(result).toBeNull();
    });
  });
});

describe('mapPropertiesToAttributes', () => {
  const baseProperty: PropertyDescriptor = {
    name: 'expanded',
    attribute: 'expanded',
    type: FigmaPropertyType.Boolean,
    tsType: 'boolean',
    reflect: false,
    defaultValue: null,
    doc: null,
    visibility: PropertyVisibility.Public,
  };

  describe('positive cases', () => {
    it('should merge duplicate attribute names with last-in-wins', () => {
      const attributes = mapPropertiesToAttributes([
        baseProperty,
        {
          ...baseProperty,
          name: 'expandedAlias',
          attribute: 'expanded',
          reflect: true,
          defaultValue: true,
          doc: 'Overrides expanded.',
        },
      ]);

      expect(attributes).toEqual([
        {
          name: 'expanded',
          propertyName: 'expandedAlias',
          type: FigmaPropertyType.Boolean,
          reflect: true,
          defaultValue: true,
          doc: 'Overrides expanded.',
        },
      ]);
    });
  });

  describe('edge cases', () => {
    it('should skip properties without attributes', () => {
      const attributes = mapPropertiesToAttributes([
        baseProperty,
        {
          ...baseProperty,
          name: 'internalOnly',
          attribute: null,
        },
      ]);

      expect(attributes).toHaveLength(1);
      expect(attributes[0]).toMatchObject({
        name: 'expanded',
        propertyName: 'expanded',
      });
    });

    it('should return empty array for empty input', () => {
      const attributes = mapPropertiesToAttributes([]);

      expect(attributes).toEqual([]);
    });
  });
});
// End AI-Assisted
