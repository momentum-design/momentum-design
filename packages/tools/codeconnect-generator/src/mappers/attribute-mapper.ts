// AI-Assisted
/**
 * Copyright (c) 2022 Momentum Design
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Attribute Mapper Module
 *
 * Maps property metadata into attribute descriptors.
 *
 * @module mappers/attribute-mapper
 */

import type { AttributeDescriptor, PropertyDescriptor } from '../core/types';
import { mergeByKey } from '../utils/merge-by-key';

/**
 * Maps a property descriptor into an attribute descriptor when possible.
 *
 * @param property - Property descriptor to map.
 * @returns Attribute descriptor or null if no attribute is configured.
 */
export const mapPropertyToAttribute = (property: PropertyDescriptor): AttributeDescriptor | null => {
  if (!property.attribute) {
    return null;
  }

  return {
    name: property.attribute,
    propertyName: property.name,
    type: property.type,
    reflect: property.reflect,
    defaultValue: property.defaultValue,
    doc: property.doc,
  };
};

/**
 * Maps property descriptors into unique attribute descriptors.
 *
 * @param properties - Property descriptors to map.
 * @returns Attribute descriptors keyed by attribute name.
 */
export const mapPropertiesToAttributes = (properties: readonly PropertyDescriptor[]): AttributeDescriptor[] => {
  const mapped = properties
    .map(mapPropertyToAttribute)
    .filter((attribute): attribute is AttributeDescriptor => Boolean(attribute));

  const merged = mergeByKey(mapped, {
    /**
     * Provides the merge key for an attribute descriptor.
     *
     * @param attribute - Attribute descriptor to key.
     * @returns Attribute name for deduplication.
     */
    getKey: (attribute) => attribute.name,
  });

  return Array.from(merged.values());
};
// End AI-Assisted
